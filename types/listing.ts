interface ListingOwner {
    displayName: string,
    since: string,
    image: string
}

export interface ListingCardProps {
    title: string,
    description: string,
    location: string,
    link: string,
    image: string,
    owner: ListingOwner
}

export interface ListingCardData extends ListingCardProps {
    id: string
}