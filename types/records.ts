import { LandArea, PositionData, RewardData } from "./data-only"

export interface ProjectCard {
    title: string,
    description: string,
    location: string,
    image: string,
    logo: string,
    ownerId: string,
    landArea: LandArea
}
export interface Project extends ProjectCard {
    features: string[],
    tasks: Task[],
    positions: PositionData[]
}
export interface NFTLayer {
    projectId: string,
    landArea: LandArea,
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

