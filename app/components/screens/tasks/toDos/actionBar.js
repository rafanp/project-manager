import Input from "@/components/ui/Input/Input";
import { Flex } from "@chakra-ui/layout";

import IconButton from "@/components/ui/Buttons";
import { useCount, useDispatchCount } from "app/contexts/toDos/provider";

const ActionBar = () => {
  const saveLocalStorage = () => {
    localStorage.setItem("key", "value");
  };

  const count = useCount();
  const dispatch = useDispatchCount();

  const handleIncrease = (event) =>
    dispatch({
      type: "INCREASE",
    });
  const handleDecrease = (event) =>
    dispatch({
      type: "DECREASE",
    });

  return (
    <Flex>
      <Input
        placeholder={"Add new item"}
        bg={"white"}
        mr={4}
        borderRadius={8}
      />
      {count}
      <IconButton onClick={() => handleIncrease()} />
    </Flex>
  );
};

export default ActionBar;
