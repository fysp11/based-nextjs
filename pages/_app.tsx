import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import Layout from '../components/layout'
import { DBContext } from '../contexts';
import { useState } from 'react'
import { NFTLayer, Project, ProjectCommitment, WithId } from '../types'
import { NFT_LAYER_OBJECTS, PROJECTS_MOCK } from '../mocks';

function MyApp({ Component, pageProps }: AppProps) {
  const [commitments, setCommitments] = useState<ProjectCommitment[]>([])
  const [projects, setProjects] = useState<WithId<Project>[]>(PROJECTS_MOCK)
  const [nftLayers, setNftLayers] = useState<NFTLayer[]>(NFT_LAYER_OBJECTS)

  const addCommitment = (commitment: ProjectCommitment) => {
    setCommitments(currentCommitments => [...currentCommitments, commitment])
  }

  const addProject = (project: WithId<Project>) => {
    setProjects(currentProjects => [...currentProjects, project])
  }

  const addNFTLayer = (nftLayer: NFTLayer) => {
    setNftLayers(currentNftLayers => [...currentNftLayers, nftLayer])
  }

  return (
    <ChakraProvider>
      <DBContext.Provider value={{
        projects, addProject,
        nftLayers, addNFTLayer,
        commitments, addCommitment
      }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DBContext.Provider >
    </ChakraProvider >
  )
}

export default MyApp
