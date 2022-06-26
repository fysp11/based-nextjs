import {
    Box, Container, Stack, Text, Image, Flex, VStack, Button, Heading,
    SimpleGrid, StackDivider, List, ListItem, Wrap, WrapItem, Center,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';

import Loading from '../../../components/loading';
import { DBContext } from '../../../contexts';
import { OWNED_PROJECTS } from '../../../mocks';
import { NFTLayer, Project } from '../../../types';

export default function ProjectPage() {
    const { query, push } = useRouter()
    const { projects, nftLayers } = useContext(DBContext)

    const [data, setData] = useState<Project>();
    const [isLoading, setisLoading] = useState(true);
    const [canAdmin, setCanAdmin] = useState(false);
    const [nftInfo, setNftInfo] = useState<NFTLayer>();

    useEffect(() => {
        setisLoading(true);
        const projectData = projects.find(project => project.id === query.id);
        setData(projectData);
        setisLoading(false);
        setCanAdmin(OWNED_PROJECTS.includes((query.id as string)));
        setNftInfo(nftLayers.find(nft => nft.projectId === query.id));
    }, [query.id, projects, nftLayers]);

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
                                color='gray.400'
                                fontWeight={300}
                                fontSize={'2xl'}>
                                {data?.location} - Area: {data?.landArea.amount} {data?.landArea.unit}
                            </Text>
                        </Box>
                        {canAdmin && <Box w={'auto'}>
                            <Button
                                // ml={'100%'}
                                rounded={'none'}
                                w={'full'}
                                size={'lg'}
                                bg='gray.50'
                                color='gray.900'
                                textTransform={'uppercase'}
                                onClick={() => push(`/admin/projects/${query.id}/nft`)}
                                _hover={{
                                    transform: 'translateY(2px)',
                                    boxShadow: 'lg',
                                }}>
                                Manage Token Supply
                            </Button>
                        </Box>}

                        <Stack
                            spacing={{ base: 4, sm: 6 }}
                            direction={'column'}
                            divider={
                                <StackDivider
                                    borderColor='gray.600'
                                />
                            }>
                            <VStack spacing={{ base: 4, sm: 6 }}>
                                <Text
                                    color='gray.400'
                                    fontSize={'2xl'}
                                    fontWeight={'300'}>
                                    {data?.description}
                                </Text>
                            </VStack>
                            <Box>
                                <Text
                                    fontSize={{ base: '16px', lg: '18px' }}
                                    color='yellow.300'
                                    fontWeight={'500'}
                                    textTransform={'uppercase'}
                                    mb={'4'}>
                                    Features
                                </Text>
                                <Wrap spacing={10}>
                                    {data?.features.map((feature, index) => (
                                        <WrapItem key={index}>
                                            <Center
                                                w='280px'
                                                h='120px'
                                                bg='green.200'
                                                pl={5}
                                                pt={3}
                                                fontSize={20}
                                                noOfLines={3}
                                                color={'gray.900'}
                                            >
                                                <Text as='em'>{feature}</Text>
                                            </Center>
                                        </WrapItem>
                                    ))}
                                </Wrap>
                            </Box>
                            {nftInfo && <Box>
                                <Text
                                    fontSize={{ base: '16px', lg: '18px' }}
                                    color='gray.50'
                                    fontWeight={'500'}
                                    textTransform={'uppercase'}
                                    mb={'4'}>
                                    Token Info
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
                            </Box>}
                        </Stack>

                        {!canAdmin && <Button
                            rounded={'none'}
                            w={'full'}
                            mt={8}
                            size={'lg'}
                            py={'7'}
                            bg='gray.50'
                            color='gray.900'
                            textTransform={'uppercase'}
                            onClick={() => push(`/projects/${query.id}/nft`)}
                            _hover={{
                                transform: 'translateY(2px)',
                                boxShadow: 'lg',
                            }}>
                            Commit & Support
                        </Button>}
                    </Stack>
                </SimpleGrid>
            </Container>
    );
}