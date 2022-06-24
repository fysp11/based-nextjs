import { WithId, Project } from "../types";


export const PROJECTS_MOCK: WithId<Project>[] = [
    {
        id: '1',
        title: 'Raïm de cor',
        description: 'Little paradise in the shape of a grape farm, surrounded by a green meadow. The challenge is to find the perfect place to relax and enjoy the nature along with learning about permaculture.',
        location: '',
        image: '/images/cardbg.webp',
        ownerId: '1',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur euismod, nisl nisi consectetur nisi, euismod consectetur nisi nisi euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisl nisi consectetur nisi, euismod consectetur nisi nisi euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisl nisi consectetur nisi, euismod consectetur nisi nisi euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisl nisi consectetur nisi, euismod consectetur nisi nisi euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisl nisi consectetur nisi, euismod consectetur nisi nisi euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisl nisi consectetur nisi, euismod consectetur nisi nisi euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisl nisi consectetur nisi, euismod consectetur nisi nisi euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisl nisi consectetur nisi, euismod consectetur nisi nisi euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisl nisi consectetur nisi, euismod consectetur nisi nisi euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisl nisi consectetur nisi, euismod consectetur nisi',
        features: [],
        tasks: [],
        positions: [
            {
                title: 'Developer',
                description: 'Do stuff in the computr'
            },
            {
                title: 'Soil scientist',
                description: 'Find out the best soil for your plants'
            }
        ]
    },
    {
        id: '2',
        title: 'Raïm de cor',
        description: 'Little paradise in the shape of a grape farm, surrounded by a green meadow. The challenge is to find the perfect place to relax and enjoy the nature along with learning about permaculture.',
        location: '',
        image: '/images/cardbg.webp',
        ownerId: '3',
        longDescription: '',
        features: [],
        tasks: [],
        positions: [
            {
                title: 'Farm manager',
                description: 'Take care of the farm'
            },
            {
                title: 'Machinery Driver',
                description: 'Drive the machinery for facilitating the farm'
            }
        ]
    },
]
