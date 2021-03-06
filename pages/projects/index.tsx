import { Box, Button, Center, Heading, SimpleGrid, Stack } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useContext } from 'react'

import ListingCard from '../../components/project-card'
import { DBContext } from '../../contexts'


export default function ProjectsPage() {
    const { push } = useRouter()
    const { projects } = useContext(DBContext)

    return (
        <Box mb={50}>
            <Stack spacing={5}>
                <Heading fontSize={'4xl'} textAlign={'center'}>
                    Projects
                </Heading>
                <Center>
                    <Button
                        rounded={'none'}
                        w={['100%', 650]}
                        mt={8}
                        size={'lg'}
                        py={'7'}
                        bg='green.100'
                        color='gray.800'
                        textTransform={'uppercase'}
                        onClick={() => push(`/projects/add`)}
                        _hover={{
                            transform: 'translateY(2px)',
                            boxShadow: 'lg',
                        }}>
                        Add a Project
                    </Button>
                </Center>
                <SimpleGrid minChildWidth={400} spacing={10}>
                    {projects.map(project => {
                        const { id, ...projectData } = project;
                        return <Box key={id}>
                            <Link href={`/projects/${id}`}>
                                <a className="chakra-reset">
                                    <ListingCard {...projectData} />
                                </a>
                            </Link>
                        </Box>
                    })}
                </SimpleGrid>
            </Stack>
        </Box >
    )
}
