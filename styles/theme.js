import { extendTheme } from "@chakra-ui/react";

// const colors = {
//   brand: {
//     900: "#1a365d",
//     800: "#153e75",
//     700: "#2a69ac",
//   },
// };

// const theme = extendTheme({ colors });
export const theme = extendTheme({
  colors: {
    beige: {
      50: "#F7F6F4",
      200: "#FFF4EE",
    },
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
  styles: {
    global: {
      body: {
        bg: "beige.50",
        // bg: "gray.900",
        color: "gray.900",
      },
    },
  },
});
