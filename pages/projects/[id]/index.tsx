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
    HStack,
    Wrap,
    WrapItem,
    Center,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Loading from '../../../components/loading';
import { NFT_LAYER_OBJECTS, OWNED_PROJECTS, PROJECTS_MOCK } from '../../../mocks';

import { NFTLayer, Project } from '../../../types';

export default function ProjectPage() {
    const { query, push } = useRouter()
    const [data, setData] = useState<Project>();
    const [isLoading, setisLoading] = useState(true);
    const [canAdmin, setCanAdmin] = useState(false);
    const [nftInfo, setNftInfo] = useState<NFTLayer>();

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
        setCanAdmin(OWNED_PROJECTS.includes((query.id as string)));
        setNftInfo(NFT_LAYER_OBJECTS.find(nft => nft.projectId === query.id));
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
                        <HStack>
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
                                    {data?.location} - Area: {data?.landArea.amount} {data?.landArea.unit}
                                </Text>
                            </Box>
                            {canAdmin && <Box w={'auto'}>
                                <Button
                                    ml={'100%'}
                                    rounded={'none'}
                                    w={'full'}
                                    mt={8}
                                    size={'lg'}
                                    py={'7'}
                                    bg={color5}
                                    color={color6}
                                    textTransform={'uppercase'}
                                    onClick={() => push(`/admin/projects/${query.id}/nft`)}
                                    _hover={{
                                        transform: 'translateY(2px)',
                                        boxShadow: 'lg',
                                    }}>
                                    Admin NFT
                                </Button>
                            </Box>}
                        </HStack>

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
                                <Wrap spacing={10}>
                                    {data?.features.map((feature, index) => (
                                        <WrapItem key={index}>
                                            <Center w='280px' h='120px' bg='gray.500' pl={5} pt={3} fontSize={20} noOfLines={3}>
                                                <Text as='em'>{feature}</Text>
                                            </Center>
                                        </WrapItem>
                                    ))}
                                </Wrap>
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
                                            Total Supply:
                                        </Text>{' '}
                                        {nftInfo?.supply}
                                    </ListItem>
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>
                                            Available now:
                                        </Text>{' '}
                                        {nftInfo?.available}
                                    </ListItem>
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>
                                            Unit Area:
                                        </Text>{' '}
                                        {nftInfo?.landArea.amount} {nftInfo?.landArea.unit}
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
                            onClick={() => push(`/projects/${query.id}/nf   t`)}
                            _hover={{
                                transform: 'translateY(2px)',
                                boxShadow: 'lg',
                            }}>
                            Commit & Support
                        </Button>
                    </Stack>
                </SimpleGrid>
            </Container>
    );
}