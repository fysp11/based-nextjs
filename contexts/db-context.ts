import { createContext } from "react";
import { NFTLayer, Project, ProjectCommitment, WithId } from "../types";

interface DBProviderProps {
    commitments: ProjectCommitment[]
    projects: WithId<Project>[]
    nftLayers: NFTLayer[]
    addCommitment: (commitment: ProjectCommitment) => void
    addProject: (project: WithId<Project>) => void
    addNFTLayer: (nftLayer: NFTLayer) => void
}

export const DBContext = createContext<DBProviderProps>({
    commitments: [],
    projects: [],
    nftLayers: [],
    addCommitment() { },
    addProject() { },
    addNFTLayer() { }
})