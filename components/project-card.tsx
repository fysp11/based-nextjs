import { Image } from '@chakra-ui/react';
import { Box, Center, Heading, Text, Stack, Avatar, useColorModeValue } from '@chakra-ui/react';
import { Owner, ProjectCard } from '../types';
import { useEffect, useState } from 'react';
import { OWNERS_MOCK } from '../mocks';
import Loading from './loading';


export default function ListingCard({ image, title, description, location, ownerId }: ProjectCard) {
    const [owner, setOwner] = useState<Owner>()

    useEffect(() => {
        const ownerData = OWNERS_MOCK.find(owner => owner.id === ownerId)
        setOwner(ownerData)
    }, [ownerId])

    return (
        <Center pb={6}>
            <Box
                maxW={'450px'}
                minW={'400px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'md'}
                p={6}
                overflow={'hidden'}>
                <Box
                    h={'210px'}
                    bg={'gray.100'}
                    mt={-6}
                    mx={-6}
                    mb={6}
                    pos={'relative'}>
                    <Image
                        alt={title}
                        src={image}
                    // layout={'fill'}
                    // priority
                    />
                </Box>
                <Stack>
                    <Text
                        color={'green.500'}
                        textTransform={'uppercase'}
                        fontWeight={800}
                        fontSize={'sm'}
                        letterSpacing={1.1}>
                        {location}
                    </Text>
                    <Heading
                        color={useColorModeValue('gray.700', 'white')}
                        fontSize={'2xl'}
                        fontFamily={'body'}>
                        {title}
                    </Heading>
                    <Text color={'gray.500'}>{description}</Text>
                </Stack>
                <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                    {!owner
                        ? <Loading />
                        : <>
                            <Avatar src={owner.image} />
                            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                                <Text fontWeight={600}>{owner.displayName}</Text>
                                <Text color={'gray.500'}>Since {owner.since}</Text>
                            </Stack>
                        </>}
                </Stack>
            </Box>
        </Center>
    );
}