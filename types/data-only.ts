// Data Only interfaces
export interface RewardData {
    amount: number,
    resource: string,
}

export type PositionData = string;

export enum AreaUnit {
    MilliMeter = 'mm2',
    Centimeter = 'cm2',
    Meter = 'm2',
    Hectare = 'ha2',
}

export interface LandArea {
    amount: number,
    unit: AreaUnit
}
