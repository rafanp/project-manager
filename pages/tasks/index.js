import { Grid, GridItem } from "@chakra-ui/layout";

import TodoList from "@/components/Tasks/components/TodoList";
import ActionBar from "@/components/Tasks/components/actionBar";

const Tasks = () => {
  return (
    <Grid templateRows="60px 1fr" h={"100%"}>
      <GridItem rowSpan={1} p={"1px"}>
        <ActionBar />
      </GridItem>
      <GridItem rowSpan={1} overflow="auto" bg="white" borderRadius={8} p={14}>
        <TodoList />
      </GridItem>
    </Grid>
  );
};

export default Tasks;
