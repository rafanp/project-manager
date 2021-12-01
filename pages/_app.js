import Page from "@/components/UI/Layout/Page";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "styles/theme";

export default function MyApp({ Component, pageProps }) {
  const getLayout =
    Component.getLayout ||
    ((page) => (
      <ChakraProvider theme={theme}>
        <Page>{page}</Page>
      </ChakraProvider>
    ));

  return getLayout(
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
