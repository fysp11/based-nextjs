import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    Stack,
    Button,
    Heading,
    useColorModeValue,
    Textarea,
    VStack,
    InputLeftAddon,
} from '@chakra-ui/react';
import { ChangeEvent, useEffect, useState } from 'react';
import { PositionData, Project } from '../../types';
import { filterEmpties, handleNewItem } from '../../lib/helpers';

type ProjectValidation = Record<keyof Omit<Project, 'ownerId' | 'tasks'>, boolean>;

export default function SignupCard() {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [location, setLocation] = useState<string>('');
    const [image, setImage] = useState<string>('/images/cardbg.webp');
    const [features, setFeatures] = useState<string[]>(['']);
    const [positions, setPositions] = useState<PositionData[]>(['']);

    const [validation, setValidation] = useState<ProjectValidation>({
        title: false,
        description: false,
        location: false,
        features: false,
        positions: false,
        image: false,
    })

    const handleChange = (element: ChangeEvent<unknown>, prop: keyof ProjectValidation, index?: number) => {
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
                handleNewItem(index!, value, setFeatures)
                break;
            case 'positions':
                handleNewItem(index!, value, setPositions)
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
            features: filterEmpties(features).length > 0,
            positions: filterEmpties(positions).length > 0,
        }
        console.log(Array.from(new Set(Object.values(newValidation))));
        setValidation(newValidation);
    }, [title, description, location, image, features, positions])

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            // maxW={'5xl'}
            minW={'4xl'}>
            <Stack spacing={8} mx={'auto'} maxW={'5xl'}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'} textAlign={'center'}>
                        Add a new Project
                    </Heading>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    minW={{ md: '2xl', sm: 'md' }}
                    p={8}>
                    <Stack spacing={4} >
                        <FormControl id="title" isRequired>
                            <FormLabel>Title</FormLabel>
                            <Input type="text" max={100} value={title} onChange={(e) => handleChange(e, 'title')} />
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
                                size="lg"
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}>
                                Submit
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack >
        </Flex >
    );
}