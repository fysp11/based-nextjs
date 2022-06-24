import { FlexProps } from "@chakra-ui/react";
import { IconType } from "react-icons";

export interface LinkItemProps {
    name: string;
    icon: IconType;
}

export interface NavItemProps extends FlexProps {
    icon: IconType;
}
