import { Box, BoxProps, CloseButton, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import NavItem from "../nav/nav-item";
import { LinkItemProps } from "../types";


interface SidebarContentProps extends BoxProps {
    onClose: () => void;
    linkItems: LinkItemProps[]
}

const SidebarContent = ({ onClose, linkItems, ...rest }: SidebarContentProps) => {
    return (
        <Box
            transition="3s ease"
            bg={useColorModeValue('green.100', 'green.900')}
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h="full"
            {...rest}>
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                    Logo
                </Text>
                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>
            {linkItems.map((link) => (
                <NavItem key={link.name} icon={link.icon}>
                    {link.name}
                </NavItem>
            ))}
        </Box>
    );
};

export default SidebarContent;
