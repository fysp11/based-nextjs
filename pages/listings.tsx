import { useEffect, useState } from 'react'

import { LISTINGS_MOCK } from '../mocks'
import Loading from '../components/loading'
import ListingCard from '../components/listing-card'
import { Box, SimpleGrid } from '@chakra-ui/react'
import { ListingCardData } from '../types'


const ListingsPage = () => {
    const [listings, setListings] = useState<ListingCardData[]>([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            setListings(_ => [...LISTINGS_MOCK])
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
                    <ListingCard {...listingData} />
                </Box>
            })}
        </SimpleGrid>
}

export default ListingsPage;
