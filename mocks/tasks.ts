import { WithId, Task } from "../types";


export const OWNERS_MOCK: WithId<Task>[] = [
    {
        id: '1',
        title: 'Do that',
        projectId: '1',
        instructions: {
            0: 'Go to the land',
            1: 'Spread love',
            2: 'Get your hands dirty',
            3: 'Rest your body',
        },
        reward: {
            amount: 10,
            resource: 'USD'
        },
        deadline: 121872398127389
    },

]
