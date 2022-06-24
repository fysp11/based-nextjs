import { Box, Drawer, DrawerContent, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import MobileNav from "./mobile-nav";
import SidebarContent from "./sidebar-content";
import { LinkItemProps } from "./types";


interface SidebarWithHeaderProps {
    linkItems: LinkItemProps[]
}

export default function SidebarWithHeader({ linkItems, children }: PropsWithChildren<SidebarWithHeaderProps>) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
            <SidebarContent
                onClose={() => onClose}
                display={{ base: 'none', md: 'block' }}
                linkItems={linkItems}
            />
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full">
                <DrawerContent>
                    <SidebarContent onClose={onClose} linkItems={linkItems} />
                </DrawerContent>
            </Drawer>
            <MobileNav onOpen={onOpen} />
            <Box ml={{ base: 0, md: 60 }} p="4">
                {children}
            </Box>
        </Box>
    );
}

