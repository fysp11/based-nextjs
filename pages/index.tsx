import { Text, Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Center, chakra, Flex, SimpleGrid, Button, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { FiServer } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';

import StatsCard from '../components/stats-card';
import { OWNED_PROJECTS, PROJECTS_MOCK } from '../mocks';
import { Project, WithId } from '../types';

export default function Dashboard() {
  const [myProjects, setMyProjects] = useState<WithId<Project>[]>([]);
  const bgColor = useColorModeValue('gray.900', 'white');
  const textColor = useColorModeValue('white', 'gray.900');

  useEffect(() => {
    const projects = PROJECTS_MOCK.filter((project) => OWNED_PROJECTS.includes(project.id));
    setMyProjects(() => projects);
  }, [])
  return (
    <Center>
      <Flex direction="column" maxW={'4xl'}>

        <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
          <chakra.h1
            textAlign={'center'}
            fontSize={'4xl'}
            py={10}
            fontWeight={'bold'}>
            How are my Projects going?
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
                <AccordionPanel pb={4} >
                  <Text fontWeight={600}>
                    Land Area: {project.landArea.amount} {project.landArea.unit}
                  </Text>
                  <Text>
                    {project.description}
                  </Text>
                  <Link href={`/projects/${project.id}`}>
                    <Button mt={2} size='sm' bg={bgColor} color={textColor}>Open</Button>
                  </Link>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Box>

        <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
          <chakra.h1
            textAlign={'center'}
            fontSize={'4xl'}
            py={10}
            fontWeight={'bold'}>
            How are my Projects going?
          </chakra.h1>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
            <StatsCard title={'We serve'} stat={'50,000 people'} />
            <StatsCard title={'In'} stat={'30 different countries'} />
            <StatsCard title={'Who speak'} stat={'100 different languages'} />
          </SimpleGrid>
        </Box>
        <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
          <chakra.h1
            textAlign={'center'}
            fontSize={'4xl'}
            py={10}
            fontWeight={'bold'}>
            Platform Stats
          </chakra.h1>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
            <StatsCard
              title={'Users'}
              stat={'5,000'}
              icon={<BsPerson size={'3em'} />}
            />
            <StatsCard
              title={'Servers'}
              stat={'1,000'}
              icon={<FiServer size={'3em'} />}
            />
            <StatsCard
              title={'Datacenters'}
              stat={'7'}
              icon={<GoLocation size={'3em'} />}
            />
          </SimpleGrid>
        </Box>
      </Flex>
    </Center>
  )
}
