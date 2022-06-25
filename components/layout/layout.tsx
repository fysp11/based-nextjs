import { PropsWithChildren } from "react";
import { FiHome, FiCompass } from 'react-icons/fi';
import { LinkItemProps } from "./types";
import SidebarWithHeader from "./sidebar/sidebar";


const linkItems: LinkItemProps[] = [
    { name: 'Home', href: '/', icon: FiHome },
    { name: 'Explore', href: '/projects', icon: FiCompass },
];

const Layout = ({ children }: PropsWithChildren) => {
    return <SidebarWithHeader linkItems={linkItems}>
        {children}
    </SidebarWithHeader>
}

export default Layout;
