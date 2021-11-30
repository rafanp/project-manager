import Page from "@/components/UI/Layout/Page";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "styles/theme";

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <Page>{page}</Page>);

  return getLayout(
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
