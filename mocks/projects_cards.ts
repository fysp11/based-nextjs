import { WithId, ProjectCard } from "../types";
import { PROJECTS_MOCK } from "./projects";


export const PROJECTS_CARDS_MOCK: WithId<ProjectCard>[] = PROJECTS_MOCK.map(project => {
    const newprojectCard: WithId<ProjectCard> = {
        id: project.id,
        title: project.title,
        description: project.description,
        location: project.location,
        image: project.image,
        ownerId: project.ownerId,
        landArea: project.landArea,
    }
    return newprojectCard
})
