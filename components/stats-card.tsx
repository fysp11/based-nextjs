
import { Box, Stat, StatLabel, StatNumber } from '@chakra-ui/react';
import { ReactNode } from 'react';


interface StatsCardProps {
    title: string;
    stat: string;
    icon?: ReactNode;
}
export default function StatsCard({ title, stat, icon }: StatsCardProps) {
    return (
        <Stat
            px={{ base: 4, md: 8 }}
            py={'5'}
            shadow={'xl'}
            border={'1px solid'}
            borderColor='gray.500'
            rounded={'lg'}>
            <StatLabel fontWeight={'medium'}>
                {title}
            </StatLabel>
            <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                {stat}
            </StatNumber>
            {icon && <Box
                my={'auto'}
                color='gray.200'
                alignContent={'center'}>
                {icon}
            </Box>}
        </Stat>
    );
}
