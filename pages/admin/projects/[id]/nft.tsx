import { Flex, Box, FormControl, FormLabel, Input, Stack, Button, Heading, HStack, Select, InputGroup, InputRightAddon } from '@chakra-ui/react';
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
    const [landUnit, setLandUnit] = useState<AreaUnit>(NEW_NFT_LAYER_OBJECT.landUnit);

    const [canSubmit, setCanSubmit] = useState<boolean>(false);
    const [validation, setValidation] = useState<NFTLayerValidation>({ supply: false, available: false, landUnit: false })

    const handleChange = (element: ChangeEvent<unknown>, prop: keyof NFTLayerValidation, indexOrProp?: number | string) => {
        const value = (element as ChangeEvent<HTMLInputElement>).target.value;
        switch (prop) {
            case 'supply':
                setSupply(parseInt(value));
                break;
            case 'available':
                setAvailable(parseInt(value));
                break;
            case 'landUnit':
                setLandUnit(value as AreaUnit);
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
            landUnit
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
            landUnit: !!landUnit
        }
        setValidation(newValidation);
    }, [supply, available, landUnit])

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
                                    <FormLabel>Land Area (Unit)</FormLabel>
                                    <Select placeholder='Select option' value={landUnit} onChange={(e) => handleChange(e, 'landUnit')}>
                                        {Object.values(AreaUnit).map(unit => (
                                            <option key={unit} value={unit}>{unit}</option>
                                        ))}
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