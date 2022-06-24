export interface ListingNFTData {
    total: number,
    available: number,
}

export interface ListingData {
    id: string,
    title: string,
    nftData: ListingNFTData,
}