import { RewardData } from "./data-only"

// Record interfaces
export interface ProjectCard {
    title: string,
    description: string,
    location: string,
    image: string,
    ownerId: string
}
export interface Project extends ProjectCard {
    longDescription: string,
    features: string[],
    tasks: Task[],
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

