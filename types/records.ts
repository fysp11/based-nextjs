import { PositionData, RewardData } from "./data-only"

// Record interfaces
export interface ProjectCard {
    title: string,
    description: string,
    location: string,
    image: string,
    ownerId: string
}
export interface Project extends ProjectCard {
    features: string[],
    tasks: Task[],
    positions: PositionData[]
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

