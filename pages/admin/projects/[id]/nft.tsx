import {
    Flex, Box, FormControl, FormLabel, Input, Stack, Button,
    Heading, useColorModeValue, HStack, Select,
} from '@chakra-ui/react';
import { ChangeEvent, useEffect, useState } from 'react';
import { AreaUnit, LandArea, NFTLayer } from '../../../../types';

type NFTLayerValidation = Record<keyof Omit<NFTLayer, 'projectId'>, boolean>;

export default function SignupCard() {
    const [supply, setSupply] = useState<number>(0);
    const [available, setAvailable] = useState<number>(0);
    const [landArea, setLandArea] = useState<Partial<LandArea>>({ amount: 0, unit: AreaUnit.Meter });

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

    useEffect(() => {
        const newValidation: NFTLayerValidation = {
            supply: supply > 0,
            available: available > 0,
            landArea: +(landArea?.amount!) > 0 && Object(AreaUnit).hasOwnProperty(landArea?.unit!)
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
                        Fractionalize Land as NFTs
                    </Heading>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="supply" isRequired>
                            <FormLabel>NFTs Supply</FormLabel>
                            <Input type="number" min={3} value={landArea?.amount} onChange={(e) => handleChange(e, 'supply')} />
                        </FormControl>
                        <FormControl id="landArea" isRequired>
                            <HStack>
                                <Box w={'100%'}>
                                    <FormLabel>NFT Unit Area (Amount)</FormLabel>
                                    <Input type="number" min={1} value={landArea?.amount} onChange={(e) => handleChange(e, 'landArea', 'amount')} />
                                </Box>
                                <Box w={'100%'}>
                                    <FormControl id="lastName">
                                        <FormLabel>Land Area (Unit)</FormLabel>
                                        <Select placeholder='Select option' value={landArea?.unit} onChange={(e) => handleChange(e, 'landArea', 'unit')}>
                                            <option value={AreaUnit.Meter}>Meter</option>
                                            <option value={AreaUnit.Hectare}>Hectare</option>
                                        </Select>
                                    </FormControl>
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