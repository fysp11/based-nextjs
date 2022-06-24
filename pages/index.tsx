import { Box, Center, chakra, Flex, SimpleGrid } from '@chakra-ui/react';
import { BsPerson } from 'react-icons/bs';
import { FiServer } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';

import StatsCard from '../components/stats-card';

export default function Dashboard() {
  return (
    <Center>

      <Flex direction="column" maxW={'4xl'}>

        <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
          <chakra.h1
            textAlign={'center'}
            fontSize={'4xl'}
            py={10}
            fontWeight={'bold'}>
            What is our company doing?
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
            Our company is expanding, you could be too.
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
