import { WithId, Project, AreaUnit } from "../types";


export const PROJECTS_MOCK: WithId<Project>[] = [
    {
        id: '1',
        title: 'Food Forest Mountain',
        landArea: {
            amount: 35.2,
            unit: AreaUnit.Meter
        },
        description: 'We are creating a small settlement on our site and growing food and resources to support those living here. We have luxury campling facilities and run rock climbing activities and other events from the property.',
        location: 'Italy, Palau',
        image: '/images/projects/1.jpg',
        logo: '/images/logos/1.jpg',
        features: ['Accommodation and food provided', 'lake nearby for swimming', 'current food forest with seasonally available fresh produce'],
        tasks: [],
        positions: ['Developer', 'Soil scientist']
    },
    {
        id: '2',
        title: 'Aponia',
        landArea: {
            amount: 35.2,
            unit: AreaUnit.Meter
        },
        description: 'We experiment with annual and perennial polycultures in order to try and establish an optimal ratio of wild to cultivated land within a market garden set up wherein we grow a diversity of high yielding and healthy foods within the wild and semi wild habitats.',
        location: 'Italy, Palau',
        image: '/images/projects/2.jpg',
        logo: '/images/logos/2.jpg',
        features: [],
        tasks: [],
        positions: ['Developer', 'Soil scientist']
    },
    {
        id: '3',
        title: 'Polycultrue Orchard',
        landArea: {
            amount: 35.2,
            unit: AreaUnit.Meter
        },
        description: 'A polyculture farm with focus on producing fruit for juicing. We also have  vegetable production for a CSA (Community Supported Agriculture) scheme and research gardens experimenting with dye plants.',
        location: 'Bulgaria, Debnevo',
        image: '/images/projects/3.jpg',
        logo: '/images/logos/3.jpg',
        features: [],
        tasks: [],
        positions: ['Developer', 'Soil scientist']
    },
    {
        id: '4',
        title: 'Rooftop Haven',
        landArea: {
            amount: 35.2,
            unit: AreaUnit.Meter
        },
        description: 'Enhancing biodiversity in the city, growing a range of kitchen herbs and spices that also support native bees and butterflies.',
        location: 'New York, USA',
        image: '/images/projects/4.jpg',
        logo: '/images/logos/4.jpg',
        features: [],
        tasks: [],
        positions: ['Developer', 'Soil scientist']
    },
]

export const NEW_PROJECT_MOCK: WithId<Project> = {
    id: '5',
    title: 'Hazel Organic',
    landArea: {
        amount: 35,
        unit: AreaUnit.Meter
    },
    description: 'A regenerative commercial hazel orchard in the Pontic Mountians of Turkey . We grow hazelnuts orchards grazed by Dağlıç Sheep and integrate patches of native flora within the orchard to support the diminishing biodiversity within our region.',
    location: 'Turkey , Ordu',
    image: '/images/projects/5.jpg',
    logo: '/images/logos/5.jpg',
    features: ['Many animals to spend time with', 'Fruits available from trees'],
    tasks: [],
    positions: ['Developer', 'Soil scientist']
}
