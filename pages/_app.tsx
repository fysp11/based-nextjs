import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import Layout from '../components/layout'
import { DBContext } from '../contexts';
import { useState } from 'react'
import { Project, ProjectCommitment, WithId } from '../types'
import { PROJECTS_MOCK } from '../mocks';

function MyApp({ Component, pageProps }: AppProps) {
  const [commitments, setCommitments] = useState<ProjectCommitment[]>([])
  const [projects, setProjects] = useState<WithId<Project>[]>(PROJECTS_MOCK)

  const addCommitment = (commitment: ProjectCommitment) => {
    setCommitments(currentCommitments => [...currentCommitments, commitment])
  }

  const addProject = (project: WithId<Project>) => {
    setProjects(currentProjects => [...currentProjects, project])
  }

  return (
    <ChakraProvider>
      <DBContext.Provider value={{ projects, addProject, commitments, addCommitment }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DBContext.Provider >
    </ChakraProvider >
  )
}

export default MyApp
