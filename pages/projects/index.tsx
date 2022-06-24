import { useEffect, useState } from 'react'

import { PROJECTS_CARDS_MOCK } from '../../mocks'
import Loading from '../../components/loading'
import ListingCard from '../../components/project-card'
import { Box, SimpleGrid } from '@chakra-ui/react'
import { ProjectCard, WithId } from '../../types'
import Link from 'next/link'


export default function ProjectsPage() {
    const [listings, setListings] = useState<WithId<ProjectCard>[]>([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            setListings(_ => [...PROJECTS_CARDS_MOCK])
            setIsLoading(false)
        }, 211)
    }, [])

    return isLoading
        ? <Loading />
        :
        <SimpleGrid minChildWidth={400} spacing={10}>
            {listings.map(listing => {
                const { id, ...listingData } = listing;
                return <Box key={id}>
                    <Link href={`/projects/${id}`}>
                        <a className="chakra-reset">
                            <ListingCard {...listingData} />
                        </a>
                    </Link>
                </Box>
            })}
        </SimpleGrid>
}
