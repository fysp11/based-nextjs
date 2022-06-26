import { Box, BoxProps, CloseButton, Flex, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";

import NavItem from "../nav/nav-item";
import { LinkItemProps } from "../types";


interface SidebarContentProps extends BoxProps {
    onClose: () => void;
    linkItems: LinkItemProps[]
}

const SidebarContent = ({ onClose, linkItems, ...rest }: SidebarContentProps) => {
    const router = useRouter();

    const onSelect = (href: string) => {
        onClose();
        router.push(href);
    }

    return (
        <Box
            transition="3s ease"
            bg='green.900'
            borderRight="1px"
            borderRightColor='gray.700'
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h="full"
            {...rest}>
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Box bg={'gray.300'} p={1} rounded='md'>
                    <Image
                        maxW={'20'}
                        maxH={'20'}
                        src="/logo.png"
                        alt="logo"
                    />
                </Box>
                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>
            {linkItems.map((link) => (
                <NavItem key={link.name} icon={link.icon} onClick={() => onSelect(link.href)}>
                    {link.name}
                </NavItem>
            ))}
        </Box>
    );
};

export default SidebarContent;
