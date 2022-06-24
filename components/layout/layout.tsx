import { PropsWithChildren } from "react";
import { FiHome, FiTrendingUp, FiCompass, FiStar, FiSettings } from 'react-icons/fi';
import { LinkItemProps } from "./types";
import SidebarWithHeader from "./sidebar/sidebar";


const linkItems: LinkItemProps[] = [
    { name: 'Home', href: '/', icon: FiHome },
    { name: 'Explore', href: '/projects', icon: FiCompass },
    // { name: 'Explore', icon: FiTrendingUp },
    // { name: 'Favourites', icon: FiStar },
    // { name: 'Settings', icon: FiSettings },
];

const Layout = ({ children }: PropsWithChildren) => {
    return <SidebarWithHeader linkItems={linkItems}>
        {children}
    </SidebarWithHeader>
}

export default Layout;
