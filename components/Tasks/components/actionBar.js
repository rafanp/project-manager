import Input from "@/components/UI/Input/Input";
import { Flex } from "@chakra-ui/layout";

import IconButton from "@/components/UI/Buttons";

const ActionBar = () => {
  const saveLocalStorage = () => {
    localStorage.setItem("key", "value");
  };

  return (
    <Flex>
      <Input
        placeholder={"Add new item"}
        bg={"white"}
        mr={4}
        borderRadius={8}
      />

      <IconButton onClick={() => saveLocalStorage()} />
    </Flex>
  );
};

export default ActionBar;
