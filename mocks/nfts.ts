import { AreaUnit, NFTLayer } from "../types";

export const NFT_LAYER_OBJECTS: NFTLayer[] = [
    {
        projectId: '1',
        available: 10,
        supply: 100,
        landArea: {
            amount: 12,
            unit: AreaUnit.Meter
        }
    },
    {
        projectId: '2',
        available: 34,
        supply: 1000,
        landArea: {
            amount: 1,
            unit: AreaUnit.Hectare
        }
    },
]

export const NEW_NFT_LAYER_OBJECT: NFTLayer = {
    projectId: '5',
    available: 300,
    supply: 10000,
    landArea: {
        amount: 4,
        unit: AreaUnit.Hectare
    }
}
