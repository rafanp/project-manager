import Page from "@/components/layouts/Page";
import { ChakraProvider } from "@chakra-ui/react";
import { CounterProvider } from "app/contexts/toDos/provider";
import { TaskProvider, useTasks } from "app/contexts/tasks/provider";

import { theme } from "app/styles/theme";

export default function MyApp({ Component, pageProps }) {
  const getLayout =
    Component.getLayout ||
    ((page) => (
      <CounterProvider>
        <TaskProvider>
          <ChakraProvider theme={theme}>
            <Page>{page}</Page>
          </ChakraProvider>
        </TaskProvider>
      </CounterProvider>
    ));

  return getLayout(
    <CounterProvider>
      <TaskProvider>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </TaskProvider>
    </CounterProvider>
  );
}
