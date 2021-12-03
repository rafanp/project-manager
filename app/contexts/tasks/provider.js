import {
  useReducer,
  useContext,
  createContext,
  useState,
  useEffect,
} from "react";
import { useToast } from "@chakra-ui/react";

import { v4 as uuidv4 } from "uuid";

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const toast = useToast();

  const [todoList, setTodoList] = useState(() => {
    if (typeof window !== "undefined") {
      const storagedCart = localStorage.getItem("@ProjectManager:todoList");

      if (storagedCart) {
        return JSON.parse(storagedCart);
      }
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem("@ProjectManager:todoList", JSON.stringify(todoList));
  }, [todoList]);

  const addTodo = (todo) => {
    setTodoList([
      ...todoList,
      {
        text: todo,
        isChecked: false,
        id: uuidv4(),
      },
    ]);
  };

  const removeTodo = (todoItemId) => {
    try {
      const filteredTodos = todoList.filter((item) => item.id !== todoItemId);
      setTodoList(filteredTodos);
      toast({
        description: "Item removido da lista.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        description: "Erro ao remover o item da lista.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleCheckbox = (todoItemId) => {
    const updatedTodos = todoList.map((item) => {
      if (item.id === todoItemId) {
        return { ...item, isChecked: !item.isChecked };
      } else {
        return item;
      }
    });

    setTodoList(updatedTodos);
  };

  return (
    <TaskContext.Provider
      value={{ removeTodo, addTodo, handleCheckbox, todoList }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TaskContext);

  return context;
}
