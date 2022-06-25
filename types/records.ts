import { LandArea, PositionData, RewardData } from "./data-only"

export interface ProjectCard {
    title: string,
    description: string,
    location: string,
    image: string,
    ownerId: string,
    landArea: LandArea
}
export interface Project extends ProjectCard {
    features: string[],
    tasks: Task[],
    positions: PositionData[]
}
export interface NFTLayer {
    landUnitArea: LandArea,
    supply: number,
    available: number,
}
export interface Owner {
    displayName: string,
    since: string,
    image: string
}
export interface Task {
    projectId: string,
    title: string,
    reward: RewardData,
    instructions: Record<number, string>,
    deadline: number,
}

