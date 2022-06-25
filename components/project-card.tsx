import { AspectRatio, Image } from '@chakra-ui/react';
import { Box, Center, Heading, Text, Stack, Avatar, useColorModeValue } from '@chakra-ui/react';
import { ProjectCard } from '../types';



export default function ListingCard({ image, title, description, location, logo, landArea }: ProjectCard) {
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
                <Box h={'210px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
                    <AspectRatio maxW='500px' ratio={2 / 1}>
                        <Image alt={title} src={image} />
                    </AspectRatio>
                </Box>
                <Stack>
                    <Heading
                        color={useColorModeValue('gray.700', 'white')}
                        fontSize={'2xl'}
                        fontFamily={'body'}>
                        {title}
                    </Heading>
                    <Text color={'gray.500'} noOfLines={3}>{description}</Text>
                </Stack>
                <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                    <Avatar src={logo} />
                    <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                        <Text fontWeight={600}>{location}</Text>
                        <Text color={'gray.500'}>Area: {landArea.amount} {landArea.unit}</Text>
                    </Stack>
                </Stack>
            </Box>
        </Center>
    );
}