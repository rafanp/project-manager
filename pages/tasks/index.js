import { Grid, GridItem } from "@chakra-ui/layout";

import TodoList from "@/components/screens/tasks/toDos/todoList";
import ActionBar from "@/components/screens/tasks/toDos/actionBar";
import { TaskProvider } from "app/contexts/tasks/provider";

const Tasks = () => {
  return (
    <TaskProvider>
      <Grid templateRows="60px 1fr" h={"100%"}>
        <GridItem rowSpan={1} p={"1px"}>
          <ActionBar />
        </GridItem>
        <GridItem
          rowSpan={1}
          overflow="auto"
          bg="white"
          borderRadius={8}
          p={14}
        >
          <TodoList />
        </GridItem>
      </Grid>
    </TaskProvider>
  );
};

export default Tasks;
