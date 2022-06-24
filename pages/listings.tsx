import { useEffect, useState } from 'react'

import { ListingData } from '../types/listing'
import { LISTINGS_MOCK } from '../mocks/listings'
import { Loading } from '../components'
import ListingCard from '../components/listing-card'
import { Box, SimpleGrid } from '@chakra-ui/react'


const ListingsPage = () => {
    const [listings, setListings] = useState<ListingData[]>([])
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
            {listings.map(listing => (

                <Box key={listing.id}>
                    <ListingCard />
                </Box>
            ))}
        </SimpleGrid>
}

export default ListingsPage;
