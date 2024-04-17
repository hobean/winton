import { useColorMode } from "@chakra-ui/react";

type Intensity = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

const useAlpha = () => {
  const { colorMode } = useColorMode();

  return {
    alpha: (intensity: Intensity) => {
      return colorMode === "light"
        ? `blackAlpha.${intensity}`
        : `whiteAlpha.${intensity}`;
    },
    reverse: (intensity: Intensity) => {
      return colorMode === "light"
        ? `whiteAlpha.${intensity}`
        : `blackAlpha.${intensity}`;
    },
  };
};

export default useAlpha;
