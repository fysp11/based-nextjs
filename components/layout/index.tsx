import { PropsWithChildren, useEffect, useState } from "react";
import {
    FiHome,
    FiTrendingUp,
    FiCompass,
    FiStar,
    FiSettings,
} from 'react-icons/fi';
import { LinkItemProps } from "./types";
import SidebarWithHeader from "./sidebar";
import Nav from "./navbar";
import { Box } from "@chakra-ui/react";


const linkItems: LinkItemProps[] = [
    { name: 'Home', icon: FiHome },
    { name: 'Trending', icon: FiTrendingUp },
    { name: 'Explore', icon: FiCompass },
    { name: 'Favourites', icon: FiStar },
    { name: 'Settings', icon: FiSettings },
];

const Layout1 = ({ children }: PropsWithChildren) => {
    return <SidebarWithHeader linkItems={linkItems}>
        {children}
    </SidebarWithHeader>
}

const Layout2 = ({ children }: PropsWithChildren) => {
    return <>
        <Nav />
        {children}
    </>
}

const Layout = ({ children }: PropsWithChildren) => {
    const [layout, setLayout] = useState(1)

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setLayout(layout == 1 ? 2 : 1)
    //     }, 4000)
    //     return () => clearInterval(interval)
    // }, [layout])

    return layout == 0
        ? <SidebarWithHeader linkItems={linkItems}>
            {children}
        </SidebarWithHeader>

        : <>
            <Nav />
            <Box p={5}>

                {children}
            </Box>
        </>
}

export default Layout;
