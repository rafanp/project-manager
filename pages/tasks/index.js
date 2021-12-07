import { Grid, GridItem } from "@chakra-ui/layout";

import TodoList from "@/components/screens/tasks/toDos/todoList";
import ActionBar from "@/components/screens/tasks/toDos/actionBar";
import { TaskProvider, useTasks } from "app/contexts/tasks/provider";
import { fauna, getAllTasks } from "app/services/fauna";
import { query as q } from "faunadb";
import { api } from "app/services/api";
import useSWR from "swr";
import axios from "axios";
import { useCallback, useEffect } from "react";
// const fetcher = (url) => fetch(url).then((res) => res.json());

const Tasks = (props) => {
  const { todoList, setTodoList, refreshData } = useTasks();

  const loadAllTasks = useCallback(async () => {
    if (!todoList.length) {
      refreshData();
    }
  }, []);

  useEffect(() => {
    loadAllTasks();
    // setTodoList(props.tasks);
  }, [loadAllTasks]);

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

// Tasks.getInitialProps = async (ctx) => {
//   try {
//     // const res = await api.get("/tasks");
//     const res = await axios.get("http://localhost:3000/api/tasks");

//     console.log("res :", res);
//     const tasks = res.data;
//     return { tasks };
//   } catch (error) {
//     return { error };
//   }
// };

export default Tasks;

// export const getServerSideProps = async () => {
//   return {
//     props: {
//       tasks: await getAllTasks(),
//     },
//   };
// };

// export const getStaticProps = async () => {
//   return {
//     props: {
//       tasks: await getAllTasks(),
//     },
//   };
// };
