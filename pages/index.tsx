import {
  Text, Accordion, AccordionButton, AccordionIcon, AccordionItem,
  AccordionPanel, Box, Center, chakra, Flex, Button, useColorModeValue
} from '@chakra-ui/react';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';

import { DBContext } from '../contexts';
import { OWNED_PROJECTS } from '../mocks';
import { Project, WithId } from '../types';

export default function Dashboard() {
  const { commitments, projects } = useContext(DBContext);

  const [myProjects, setMyProjects] = useState<WithId<Project>[]>([]);
  const [committedProjects, setCommittedProjects] = useState<Record<string, WithId<Project>>>({});
  const bgColor = useColorModeValue('gray.900', 'white');
  const textColor = useColorModeValue('white', 'gray.900');

  useEffect(() => {
    const filteredProjects = projects.filter((project) => OWNED_PROJECTS.includes(project.id));
    setMyProjects(() => filteredProjects);
  }, [projects])

  useEffect(() => {
    const committedProjects = projects.filter((project) => commitments.map(c => c.projectId).includes(project.id));
    setCommittedProjects(() => {
      const map: Record<string, WithId<Project>> = {};
      committedProjects.forEach((project) => {
        map[project.id] = project;
      }
      );
      return map;
    });
  }, [commitments, projects])

  return (
    <Center>
      <Flex direction="column" maxW={'4xl'}>
        <Box w={['100%', 500, 550, 700, 900]} mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
          <chakra.h1
            textAlign={'center'}
            fontSize={'4xl'}
            py={10}
            fontWeight={'bold'}>
            My Projects
          </chakra.h1>
          <Accordion defaultIndex={[0]} allowMultiple minW={'100%'}>
            {myProjects.map((project, index) => (

              <AccordionItem key={index}>
                <h2>
                  <AccordionButton>
                    <Box flex='1' textAlign='left'>
                      {project.title} - {project.location}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box mb={2}>
                    <Text fontWeight={600}>
                      Land Area: {project.landArea.amount} {project.landArea.unit}
                    </Text>
                  </Box>
                  <Box mb={2}>
                    <Text>
                      {project.description}
                    </Text>
                  </Box>
                  <Link href={`/projects/${project.id}`}>
                    <Button bg={bgColor} color={textColor}>Open</Button>
                  </Link>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Box>

        {commitments.length > 0
          && <Box w={['100%', 500, 550, 700, 900]} mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
            <chakra.h1
              textAlign={'center'}
              fontSize={'4xl'}
              py={10}
              fontWeight={'bold'}>
              My Commitments
            </chakra.h1>
            <Accordion defaultIndex={[0]} allowMultiple minW={'100%'}>
              {commitments.map((commitment, index) => {
                const comittedProject = committedProjects[commitment.projectId];
                return comittedProject && <AccordionItem key={index}>
                  <h2>
                    <AccordionButton>
                      <Box flex='1' textAlign='left'>
                        {comittedProject.title} - {comittedProject.location}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Box>
                      <Text>
                        Position: {commitment.position}
                      </Text>
                    </Box>
                    <Text>
                      Committed amount: {commitment.committedAmount}
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
              })}
            </Accordion>
          </Box>}
      </Flex>
    </Center>
  )
}
