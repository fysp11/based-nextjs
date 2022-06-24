import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode } from "@chakra-ui/react";

const ThemeToggleButton = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return <IconButton
        aria-label="toggle theme"
        variant="ghost"
        onClick={toggleColorMode}
        size="lg"
        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
    />
}

export default ThemeToggleButton
