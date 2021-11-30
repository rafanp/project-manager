import Input from "@/components/UI/Input/Input";
import { Button } from "@chakra-ui/button";
import { Box, Container, Flex, Grid, GridItem } from "@chakra-ui/layout";
import { Icon } from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";

const Tasks = () => {
  return (
    <Grid templateRows="60px 1fr" h={"100%"} bg="blue">
      <GridItem rowSpan={1}>
        <Flex>
          <Input
            placeholder={"Add new item"}
            bg={"white"}
            mr={4}
            borderRadius={8}
          />

          <Button
            bg={"primary.900"}
            color="white"
            _hover={{ bg: "primary.900", opacity: "60%" }}
            w={10}
            h={10}
          >
            <Icon as={FiPlus} w={6} h={6} />
          </Button>
        </Flex>
      </GridItem>
      <GridItem rowSpan={1} overflow="auto" bg="tomato">
        <Box>
          <Box bg="white" mt={4} borderRadius={4} flex={1}>
            <h1>Conteudo</h1>
            <h1>Conteudo</h1>
            <h1>Conteudo</h1>
            <h1>Conteudo</h1>
            <h1>Conteudo</h1>
            <h1>Conteudo</h1>
            <h1>Conteudo</h1>
            <h1>Conteudo</h1>

            <h1>Conteudo</h1>
            <h1>Conteudo</h1>
            <h1>Conteudo</h1>
            <h1>Conteudo</h1>

            <h1>Conteudo</h1>
            <h1>Conteudo</h1>

            <h1>Conteudo</h1>
            <h1>Conteudo</h1>
          </Box>
          <Box bg="white" mt={4} borderRadius={4} flex={1}>
            <h1>Conteudo</h1>
          </Box>
          <Box bg="white" mt={4} borderRadius={4} flex={1}>
            <h1>Conteudo</h1>
          </Box>
          <Box bg="white" mt={4} borderRadius={4} flex={1}>
            <h1>Conteudo</h1>
          </Box>
          <Box mt={4} borderRadius={4} flex={1}>
            <h1>Conteudo</h1>
            <h1>Conteudo</h1>
            <h1>Conteudo</h1>
            <h1>Conteudo</h1>
            <h1>Conteudo</h1>
            <h1>Conteudo</h1>
            <h1>Conteudo</h1>
            <h1>Conteudo</h1>
            <h1>Conteudo</h1>
            <h1>Conteudo</h1>
            <h1>Conteudo</h1>
            <h1>Conteudo</h1>
            <h1>Conteudo</h1>
            <h1>Conteudo</h1>
            <h1>Conteudo</h1>
            <h1>Conteudo</h1>
            <h1>Conteudo</h1>
            <h1>Conteudo</h1>
            <h1>Conteudo</h1>
            <h1>Conteudo</h1>
            <h1>Conteudo</h1>
            <h1>Conteudo</h1>
            <h1>Conteudo</h1>
            <h1>Conteudo</h1>
            <h1>Conteudo</h1>
          </Box>
          <Box mt={4} borderRadius={4} flex={1}>
            <h1>Conteudo</h1>
          </Box>
          <Box mt={4} borderRadius={4} flex={1}>
            <h1>Conteudo</h1>
          </Box>
          <Box mt={4} borderRadius={4} flex={1}>
            <h1>Conteudo</h1>
          </Box>
          <Box mt={4} borderRadius={4} flex={1}>
            <h1>Conteudo</h1>
          </Box>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Tasks;
