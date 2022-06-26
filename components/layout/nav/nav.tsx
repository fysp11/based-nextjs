import { Box, Flex, FlexProps, HStack, IconButton, Image } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import ThemeToggleButton from "../theme-toggle-button";

interface NavProps extends FlexProps {
    onOpen: () => void;
}
const Nav = ({ onOpen, ...rest }: NavProps) => {
    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 4 }}
            height="20"
            alignItems="center"
            bg='green.800'
            borderBottomWidth="1px"
            borderBottomColor='gray.700'
            justifyContent={{ base: 'space-between', md: 'flex-end' }}
            {...rest}>
            <IconButton
                display={{ base: 'flex', md: 'none' }}
                onClick={onOpen}
                variant="outline"
                aria-label="open menu"
                icon={<FiMenu />}
            />

            <Box bg={'gray.300'} p={1} rounded='md' display={{ base: 'flex', md: 'none' }}>
                <Image
                    maxW={'20'}
                    maxH={'20'}
                    src="/logo.png"
                    alt="logo"
                />
            </Box>

            <HStack spacing={{ base: '0', md: '6' }}>
                <ThemeToggleButton />
            </HStack>
        </Flex>
    );
};

export default Nav;
