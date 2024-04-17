import {
  baseTheme,
  extendTheme,
  withDefaultColorScheme,
} from "@chakra-ui/react";

const theme = extendTheme(
  {
    colors: {
      primary: baseTheme.colors.facebook,
    },
  },
  withDefaultColorScheme({
    colorScheme: "primary",
  })
);

export default theme;
