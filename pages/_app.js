import Page from "@/components/Layout/Page";
import { ChakraProvider } from "@chakra-ui/react";
import { CounterProvider } from "contexts/Tasks";
import { theme } from "styles/theme";

export default function MyApp({ Component, pageProps }) {
  const getLayout =
    Component.getLayout ||
    ((page) => (
      <CounterProvider>
        <ChakraProvider theme={theme}>
          <Page>{page}</Page>
        </ChakraProvider>
      </CounterProvider>
    ));

  return getLayout(
    <CounterProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </CounterProvider>
  );
}
