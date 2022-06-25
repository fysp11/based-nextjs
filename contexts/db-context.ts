import { createContext } from "react";
import { Project, ProjectCommitment, WithId } from "../types";

interface DBProviderProps {
    commitments: ProjectCommitment[]
    projects: WithId<Project>[]
    addCommitment: (commitment: ProjectCommitment) => void
    addProject: (project: WithId<Project>) => void
}

export const DBContext = createContext<DBProviderProps>({
    commitments: [],
    projects: [],
    addCommitment: (commitment) => { },
    addProject(project) { },
})