import { AreaUnit, NFTLayer } from "../types";

export const NFT_LAYER_OBJECTS: NFTLayer[] = [
    {
        projectId: '1',
        available: 175000,
        supply: 325000,
        landUnit: AreaUnit.Meter
    },
    {
        projectId: '2',
        available: 34,
        supply: 1000,
        landUnit: AreaUnit.Hectare
    },
]

export const NEW_NFT_LAYER_OBJECT: NFTLayer = {
    projectId: '5',
    available: 14000000,
    supply: 30000000,
    landUnit: AreaUnit.MilliMeter
}
