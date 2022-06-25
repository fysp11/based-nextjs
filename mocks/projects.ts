import { WithId, Project } from "../types";


export const PROJECTS_MOCK: WithId<Project>[] = [
    {
        id: '1',
        title: 'Raïm de cor',
        description: 'Little paradise in the shape of a grape farm, surrounded by a green meadow. The challenge is to find the perfect place to relax and enjoy the nature along with learning about permaculture.',
        location: '',
        image: '/images/cardbg.webp',
        ownerId: '1',
        features: [],
        tasks: [],
        positions: ['Developer', 'Soil scientist']
    },
    {
        id: '2',
        title: 'Raïm de cor',
        description: 'Little paradise in the shape of a grape farm, surrounded by a green meadow. The challenge is to find the perfect place to relax and enjoy the nature along with learning about permaculture.',
        location: '',
        image: '/images/cardbg.webp',
        ownerId: '3',
        features: [],
        tasks: [],
        positions: ['Farm manager', 'Machinery Driver']
    },
]
