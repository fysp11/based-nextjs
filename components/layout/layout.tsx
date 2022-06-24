import { PropsWithChildren } from "react";
import { FiHome, FiTrendingUp, FiCompass, FiStar, FiSettings } from 'react-icons/fi';
import { LinkItemProps } from "./types";
import SidebarWithHeader from "./sidebar/sidebar";


const linkItems: LinkItemProps[] = [
    { name: 'Home', icon: FiHome },
    { name: 'Trending', icon: FiTrendingUp },
    { name: 'Explore', icon: FiCompass },
    { name: 'Favourites', icon: FiStar },
    { name: 'Settings', icon: FiSettings },
];

const Layout = ({ children }: PropsWithChildren) => {
    return <SidebarWithHeader linkItems={linkItems}>
        {children}
    </SidebarWithHeader>
}

export default Layout;
