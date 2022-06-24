import {
    Box,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    List,
    ListItem,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { MdLocalShipping } from 'react-icons/md';
import Loading from '../../components/loading';
import { PROJECTS_MOCK } from '../../mocks/projects';
import { Project } from '../../types';

export default function ProjectPage() {
    const { query } = useRouter()
    const [data, setData] = useState<Project>();
    const [isLoading, setisLoading] = useState(true);

    const color1 = useColorModeValue('gray.900', 'gray.400');
    const color2 = useColorModeValue('gray.200', 'gray.600');
    const color3 = useColorModeValue('gray.500', 'gray.400');
    const color4 = useColorModeValue('yellow.500', 'yellow.300');
    const color5 = useColorModeValue('gray.900', 'gray.50');
    const color6 = useColorModeValue('white', 'gray.900');

    useEffect(() => {
        setisLoading(true);
        const projectData = PROJECTS_MOCK.find(project => project.id === query.id);
        setData(projectData);
        setisLoading(false);
    }, [query.id]);

    return (
        isLoading
            ? <Loading />
            : <Container maxW={'5xl'}>
                <SimpleGrid
                    columns={{ base: 1, xl: 1 }}
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 18, md: 24 }}>
                    <Flex>
                        <Image
                            rounded={'md'}
                            alt={data?.title}
                            src={data?.image}
                            fit={'cover'}
                            align={'center'}
                            w={'100%'}
                            h={{ base: '100%', sm: '400px', lg: '500px' }}
                        />
                    </Flex>
                    <Stack spacing={{ base: 6, md: 10 }}>
                        <Box as={'header'}>
                            <Heading
                                lineHeight={1.1}
                                fontWeight={600}
                                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                                {data?.title}
                            </Heading>
                            <Text
                                color={color1}
                                fontWeight={300}
                                fontSize={'2xl'}>
                                [PRICE_CHANGE_THAT]
                            </Text>
                        </Box>

                        <Stack
                            spacing={{ base: 4, sm: 6 }}
                            direction={'column'}
                            divider={
                                <StackDivider
                                    borderColor={color2}
                                />
                            }>
                            <VStack spacing={{ base: 4, sm: 6 }}>
                                <Text
                                    color={color3}
                                    fontSize={'2xl'}
                                    fontWeight={'300'}>
                                    {data?.description}
                                </Text>
                                <Text fontSize={'lg'}>
                                    {data?.longDescription}
                                </Text>
                            </VStack>
                            <Box>
                                <Text
                                    fontSize={{ base: '16px', lg: '18px' }}
                                    color={color4}
                                    fontWeight={'500'}
                                    textTransform={'uppercase'}
                                    mb={'4'}>
                                    Features
                                </Text>

                                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                                    <List spacing={2}>
                                        <ListItem>Chronograph</ListItem>
                                        <ListItem>Master Chronometer Certified</ListItem>{' '}
                                        <ListItem>Tachymeter</ListItem>
                                    </List>
                                    <List spacing={2}>
                                        <ListItem>Anti‑magnetic</ListItem>
                                        <ListItem>Chronometer</ListItem>
                                        <ListItem>Small seconds</ListItem>
                                    </List>
                                </SimpleGrid>
                            </Box>
                            <Box>
                                <Text
                                    fontSize={{ base: '16px', lg: '18px' }}
                                    color={color5}
                                    fontWeight={'500'}
                                    textTransform={'uppercase'}
                                    mb={'4'}>
                                    Product Details
                                </Text>

                                <List spacing={2}>
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>
                                            Between lugs:
                                        </Text>{' '}
                                        20 mm
                                    </ListItem>
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>
                                            Bracelet:
                                        </Text>{' '}
                                        leather strap
                                    </ListItem>
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>
                                            Case:
                                        </Text>{' '}
                                        Steel
                                    </ListItem>
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>
                                            Case diameter:
                                        </Text>{' '}
                                        42 mm
                                    </ListItem>
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>
                                            Dial color:
                                        </Text>{' '}
                                        Black
                                    </ListItem>
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>
                                            Crystal:
                                        </Text>{' '}
                                        Domed, scratch‑resistant sapphire crystal with anti‑reflective
                                        treatment inside
                                    </ListItem>
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>
                                            Water resistance:
                                        </Text>{' '}
                                        5 bar (50 metres / 167 feet){' '}
                                    </ListItem>
                                </List>
                            </Box>
                        </Stack>

                        <Button
                            rounded={'none'}
                            w={'full'}
                            mt={8}
                            size={'lg'}
                            py={'7'}
                            bg={color5}
                            color={color6}
                            textTransform={'uppercase'}
                            _hover={{
                                transform: 'translateY(2px)',
                                boxShadow: 'lg',
                            }}>
                            Add to cart
                        </Button>

                        <Stack direction="row" alignItems="center" justifyContent={'center'}>
                            <MdLocalShipping />
                            <Text>2-3 business days delivery</Text>
                        </Stack>
                    </Stack>
                </SimpleGrid>
            </Container>
    );
}