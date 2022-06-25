import {
    Flex, Box, FormControl, FormLabel, Input, InputGroup, Stack, Button,
    Heading, useColorModeValue, Textarea, VStack, InputLeftAddon, HStack, Select,
} from '@chakra-ui/react';
import { ChangeEvent, useEffect, useState } from 'react';
import { AreaUnit, LandArea, PositionData, Project } from '../../types';
import { filterEmpties, handleNewItem } from '../../lib/helpers';

type ProjectValidation = Record<keyof Omit<Project, 'ownerId' | 'tasks'>, boolean>;

export default function SignupCard() {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [location, setLocation] = useState<string>('');
    const [image, setImage] = useState<string>('/images/projects/5.jpg');
    const [logo, setLogo] = useState<string>('/images/logos/5.jpg');
    const [features, setFeatures] = useState<string[]>(['']);
    const [positions, setPositions] = useState<PositionData[]>(['']);
    const [canSubmit, setCanSubmit] = useState<boolean>(false);
    const [landArea, setLandArea] = useState<Partial<LandArea>>({ amount: 0, unit: AreaUnit.Meter });

    const [validation, setValidation] = useState<ProjectValidation>({
        title: false,
        description: false,
        location: false,
        features: false,
        positions: false,
        image: false,
        logo: false,
        landArea: false
    })

    const handleChange = (element: ChangeEvent<unknown>, prop: keyof ProjectValidation, indexOrProp?: number | string) => {
        const value = (element as ChangeEvent<HTMLInputElement>).target.value;
        switch (prop) {
            case 'title':
                setTitle(value);
                break;
            case 'description':
                setDescription(value);
                break;
            case 'location':
                setLocation(value);
                break;
            case 'image':
                setImage(value);
                break;
            case 'features':
                handleNewItem((indexOrProp! as number), value, setFeatures)
                break;
            case 'positions':
                handleNewItem((indexOrProp! as number), value, setPositions)
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
        const newValidation: ProjectValidation = {
            title: !!title?.trim(),
            description: !!description?.trim(),
            location: !!location?.trim(),
            image: !!image?.trim(),
            logo: !!logo?.trim(),
            features: filterEmpties(features).length > 0,
            positions: filterEmpties(positions).length > 0,
            landArea: +(landArea?.amount!) > 0 && Object(AreaUnit).hasOwnProperty(landArea?.unit!)
        }
        setValidation(newValidation);
    }, [title, description, location, image, logo, features, positions, landArea])

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
                        Add a new Project
                    </Heading>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="title" isRequired>
                            <FormLabel>Title</FormLabel>
                            <Input type="text" max={100} value={title} onChange={(e) => handleChange(e, 'title')} />
                        </FormControl>
                        <FormControl id="landArea" isRequired>
                            <HStack>
                                <Box w={'100%'}>
                                    <FormLabel>Land Area (Amount)</FormLabel>
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
                        <FormControl id="location" isRequired>
                            <FormLabel>Location</FormLabel>
                            <Input type="text" max={100} value={location} onChange={(e) => handleChange(e, 'location')} />
                        </FormControl>
                        <FormControl id="description" isRequired>
                            <FormLabel>Description</FormLabel>
                            <Textarea value={description} onChange={(e) => handleChange(e, 'description')} />
                        </FormControl>
                        <FormControl id="image" isRequired>
                            <FormLabel>Image (URL)</FormLabel>
                            <Input type="text" value={image} onChange={(e) => handleChange(e, 'image')} />
                        </FormControl>
                        <FormControl id="logo" isRequired>
                            <FormLabel>Logo (URL)</FormLabel>
                            <Input type="text" value={image} onChange={(e) => handleChange(e, 'logo')} />
                        </FormControl>
                        <VStack spacing={10} pt={2}>
                            <FormControl id="features" isRequired>
                                <FormLabel>Features</FormLabel>
                                {features.map((feature, index) => (
                                    <InputGroup key={index} pb={1}>
                                        <InputLeftAddon minW={50}>{index + 1}.</InputLeftAddon>
                                        <Input
                                            type="text"
                                            max={100}
                                            value={feature}
                                            onChange={(e) => handleChange(e, 'features', index)}
                                        />
                                    </InputGroup>
                                ))}
                            </FormControl>
                        </VStack>
                        <VStack spacing={10} pt={2}>
                            <FormControl id="positions" isRequired>
                                <FormLabel>Positions</FormLabel>
                                {positions.map((feature, index) => (
                                    <InputGroup key={index} pb={1}>
                                        <InputLeftAddon minW={50}>{index + 1}.</InputLeftAddon>
                                        <Input
                                            type="text"
                                            max={100}
                                            value={feature}
                                            onChange={(e) => handleChange(e, 'positions', index)}
                                        />
                                    </InputGroup>
                                ))}
                            </FormControl>
                        </VStack>
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