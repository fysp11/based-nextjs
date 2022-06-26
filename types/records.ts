import { AreaUnit, LandArea, PositionData, RewardData } from "./data-only"

export interface ProjectCard {
    title: string,
    description: string,
    location: string,
    image: string,
    logo: string,
    landArea: LandArea
}
export interface Project extends ProjectCard {
    features: string[],
    tasks: string[],
    positions: PositionData[]
}
export interface NFTLayer {
    projectId: string,
    landUnit: AreaUnit,
    supply: number,
    available: number,
}

export interface Task {
    projectId: string,
    title: string,
    reward: RewardData,
    instructions: Record<number, string>,
    deadline: number,
}

export interface ProjectCommitment {
    projectId: string,
    committedAmount: number,
    position?: string,
}

