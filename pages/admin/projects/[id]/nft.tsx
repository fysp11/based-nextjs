import { Flex, Box, FormControl, FormLabel, Input, Stack, Button, Heading, HStack, Select } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { ChangeEvent, useContext, useEffect, useState } from 'react';

import { DBContext } from '../../../../contexts';
import { NEW_NFT_LAYER_OBJECT } from '../../../../mocks';
import { AreaUnit, LandArea, NFTLayer, Project, WithId } from '../../../../types';

type NFTLayerValidation = Record<keyof Omit<NFTLayer, 'projectId'>, boolean>;

export default function SignupCard() {
    const { query, push } = useRouter()
    const { projects, addNFTLayer } = useContext(DBContext)

    const [project, setProject] = useState<WithId<Project>>()

    const [supply, setSupply] = useState<number>(NEW_NFT_LAYER_OBJECT.supply);
    const [available, setAvailable] = useState<number>(NEW_NFT_LAYER_OBJECT.available);
    const [landArea, setLandArea] = useState<LandArea>(NEW_NFT_LAYER_OBJECT.landArea);

    const [canSubmit, setCanSubmit] = useState<boolean>(false);
    const [validation, setValidation] = useState<NFTLayerValidation>({ supply: false, available: false, landArea: false })

    const handleChange = (element: ChangeEvent<unknown>, prop: keyof NFTLayerValidation, indexOrProp?: number | string) => {
        const value = (element as ChangeEvent<HTMLInputElement>).target.value;
        switch (prop) {
            case 'supply':
                setSupply(parseInt(value));
                break;
            case 'available':
                setAvailable(parseInt(value));
                break;
            case 'landArea':
                setLandArea(currentData => {
                    return {
                        ...(currentData || {}),
                        [indexOrProp as keyof LandArea]: value
                    }
                });
                break;
            default:
                break;
        }
    }

    const handleAddNFTLayer = () => {
        addNFTLayer({
            projectId: project!.id,
            available,
            supply,
            landArea
        })
        push(`/projects/${project!.id}`)
    }

    useEffect(() => {
        const foundProject = projects.find(p => p.id === query.id)
        setProject(foundProject)
    }, [projects, query.id])

    useEffect(() => {
        const newValidation: NFTLayerValidation = {
            supply: supply > 0,
            available: available > 0,
            landArea: +(landArea?.amount!) > 0 && Object.values(AreaUnit).includes(landArea?.unit!)
        }
        setValidation(newValidation);
    }, [supply, available, landArea])

    useEffect(() => {
        setCanSubmit(Object.values(validation).every(v => v))
    }, [validation])

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
        >
            <Stack spacing={8} w={['100%', 500, 500, 800]}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'} textAlign={'center'}>
                        Fractionalize Land
                    </Heading>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg='gray.700'
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="supply" isRequired>
                            <FormLabel>Land Token Supply</FormLabel>
                            <Input type="number" min={3} value={supply} onChange={(e) => handleChange(e, 'supply')} />
                        </FormControl>
                        <FormControl id="available" isRequired>
                            <FormLabel>Land Tokens Available</FormLabel>
                            <Input type="number" min={1} value={available} onChange={(e) => handleChange(e, 'available')} />
                        </FormControl>
                        <FormControl id="landArea" isRequired>
                            <HStack>
                                <Box w={'100%'}>
                                    <FormLabel>Unit Area</FormLabel>
                                    <Input type="number" min={1} value={landArea?.amount} onChange={(e) => handleChange(e, 'landArea', 'amount')} />
                                </Box>
                                <Box w={'100%'}>
                                    <FormLabel>Land Area (Unit)</FormLabel>
                                    <Select placeholder='Select option' value={landArea?.unit} onChange={(e) => handleChange(e, 'landArea', 'unit')}>
                                        <option value={AreaUnit.Meter}>Meter</option>
                                        <option value={AreaUnit.Hectare}>Hectare</option>
                                    </Select>
                                </Box>
                            </HStack>
                        </FormControl>
                        <Stack spacing={10} pt={2}>
                            <Button
                                loadingText="Submitting"
                                disabled={!canSubmit}
                                size="lg"
                                bg={'blue.400'}
                                color={'white'}
                                onClick={() => handleAddNFTLayer()}
                                _hover={{
                                    bg: 'blue.500',
                                }}>
                                {!canSubmit && 'Complete and '}Submit
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack >
        </Flex >
    );
}