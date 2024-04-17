import { Icon, IconButton, Tooltip, useColorMode } from "@chakra-ui/react";
import { FiMoon, FiSun } from "react-icons/fi";

const ColorModeToggler = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Tooltip label={colorMode === "light" ? "어둡게" : "밝게"}>
      <IconButton aria-label={"color-mode"} onClick={toggleColorMode}>
        <Icon as={colorMode === "light" ? FiMoon : FiSun} />
      </IconButton>
    </Tooltip>
  );
};

export default ColorModeToggler;
