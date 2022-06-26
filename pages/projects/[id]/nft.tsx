import { Image, Flex, Box, FormControl, FormLabel, Input, Stack, Button, Heading, Select } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { ChangeEvent, useContext, useEffect, useState } from 'react';

import { DBContext } from '../../../contexts';
import { NFT_LAYER_OBJECTS } from '../../../mocks';
import { NFTLayer, Project, ProjectCommitment, WithId } from '../../../types';

export default function SignupCard() {
    const { query, push } = useRouter()
    const { projects, addCommitment } = useContext(DBContext);

    const [commitAmount, setCommitAmount] = useState<number>(0);
    const [commitTask, setCommitTask] = useState<string>('');
    const [project, setProject] = useState<WithId<Project>>();
    const [nftLayer, setNftLayer] = useState<NFTLayer>();

    const [isValid, setIsValid] = useState<boolean>(false)

    const handleCommitmentChange = (e: ChangeEvent<HTMLInputElement>) => {
        const rawValue = e.target.value;
        if (!rawValue) setCommitAmount(0)
        else {
            const value = parseInt(rawValue);
            setCommitAmount(value);
        }
    }

    const handleAddCommitment = () => {
        if (!isValid) return
        const commitment: ProjectCommitment = {
            projectId: project!.id,
            committedAmount: commitAmount,
            task: commitTask
        }
        addCommitment(commitment);
        push('/')
    }

    useEffect(() => {
        const validAMount = !!commitAmount && commitAmount <= nftLayer?.available!
        const validPosition = project?.positions.includes(commitTask)
        const valid = !!(validAMount && validPosition)
        setIsValid(valid);
    }, [commitAmount, commitTask, project?.positions, nftLayer?.available])

    useEffect(() => {
        setProject(() => projects.find(project => project.id === query.id));
    }, [query.id, projects])

    useEffect(() => {
        if (project) setNftLayer(NFT_LAYER_OBJECTS.find(nft => nft.projectId === project!.id));
    }, [project])


    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
        >
            <Stack spacing={8} w={['100%', 500, 500, 800]}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'} textAlign={'center'}>
                        Commit & Support Project
                    </Heading>
                </Stack>
                <Flex>
                    <Image
                        rounded={'md'}
                        alt={'fractal'}
                        src={'/images/fractal.jpg'}
                        fit={'cover'}
                        align={'center'}
                        w={'100%'}
                        h={{ base: '100%', sm: '400px', lg: '500px' }}
                    />
                </Flex>

                {nftLayer &&
                    <Box
                        rounded={'lg'}
                        bg='gray.700'
                        boxShadow={'lg'}
                        p={8}>
                        <Stack spacing={4}>
                            <FormControl id="supply" isRequired>
                                <FormLabel>Available Supply</FormLabel>
                                <Input type="number" disabled value={nftLayer?.available} />
                            </FormControl>
                            <FormControl id="supply" isRequired>
                                <FormLabel>Committing Amount</FormLabel>
                                <Input
                                    type="number"
                                    value={commitAmount}
                                    onChange={handleCommitmentChange}
                                    errorBorderColor='red.300'
                                    isInvalid={commitAmount > nftLayer.available}
                                />
                            </FormControl>
                            <FormControl id="position">
                                <FormLabel>Task</FormLabel>
                                <Select
                                    placeholder='Select option'
                                    value={commitTask}
                                    onChange={(e) => setCommitTask(e.target.value)}>
                                    {project?.positions.map(position => (
                                        <option key={position} value={position}>{position}</option>
                                    ))}
                                </Select>
                            </FormControl>

                            <Stack spacing={10} pt={2}>
                                <Button
                                    loadingText="Submitting"
                                    disabled={!isValid}
                                    size="lg"
                                    bg={'blue.400'}
                                    color={'white'}
                                    onClick={() => handleAddCommitment()}
                                    _hover={{
                                        bg: 'blue.500',
                                    }}>
                                    Submit
                                </Button>
                            </Stack>
                        </Stack>
                    </Box>
                }
            </Stack >
        </Flex >
    );
}