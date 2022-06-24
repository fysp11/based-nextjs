import { ReactNode } from 'react';
import {
    Box,
    Flex,
    Link,
    useColorModeValue,
    Stack,
    HStack,
    IconButton,
    useDisclosure,
    Text,
} from '@chakra-ui/react';
import ProfileMenu from './profile-menu';
import ThemeToggleButton from './theme-toggle-button';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';

const Links = ['Dashboard', 'Explore', 'About'];

const NavLink = ({ children }: { children: ReactNode }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={'#'}>
        {children}
    </Link>
);

export default function Nav() {
    const { isOpen, onToggle } = useDisclosure();
    return (
        <>
            <Box bg={useColorModeValue('green.200', 'green.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={onToggle}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Box>Logo</Box>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => (
                                <NavLink key={link}>
                                    <Text fontWeight={600}>{link}</Text>
                                </NavLink>
                            ))}
                        </HStack>
                    </HStack>

                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <ThemeToggleButton />
                            <ProfileMenu />
                        </Stack>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}



