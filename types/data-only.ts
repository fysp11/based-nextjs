// Data Only interfaces
export interface RewardData {
    amount: number,
    resource: string,
}

export type PositionData = string;

export enum AreaUnit {
    Meter,
    Hectare
}

export interface LandArea {
    amount: number,
    unit: AreaUnit
}
