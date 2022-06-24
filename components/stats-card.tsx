
import { Box, Stat, StatLabel, StatNumber, useColorModeValue } from '@chakra-ui/react';
import { ReactNode } from 'react';


interface StatsCardProps {
    title: string;
    stat: string;
    icon?: ReactNode;
}
export default function StatsCard({ title, stat, icon }: StatsCardProps) {
    const color = useColorModeValue('gray.800', 'gray.200')
    return (
        <Stat
            px={{ base: 4, md: 8 }}
            py={'5'}
            shadow={'xl'}
            border={'1px solid'}
            borderColor={useColorModeValue('gray.800', 'gray.500')}
            rounded={'lg'}>
            <StatLabel fontWeight={'medium'}>
                {title}
            </StatLabel>
            <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                {stat}
            </StatNumber>
            {icon && <Box
                my={'auto'}
                color={color}
                alignContent={'center'}>
                {icon}
            </Box>}
        </Stat>
    );
}
