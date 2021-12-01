import { Flex, Spacer, Text } from "@chakra-ui/layout";
import { Icon, IconButton } from "@chakra-ui/react";
import { FiTrash } from "react-icons/fi";

import { Checkbox } from "@chakra-ui/checkbox";

const TodoItem = () => {
  return (
    <Flex p={2} borderRadius={4}>
      <Flex align="center">
        <Checkbox size="lg" mr={4} />
        <Text> Todo </Text>
      </Flex>
      <Spacer />
      <IconButton colorScheme="gray" size="sm" icon={<Icon as={FiTrash} />} />
    </Flex>
  );
};

export default TodoItem;
