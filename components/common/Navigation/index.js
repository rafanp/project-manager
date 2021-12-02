import React from "react";
import Link from "next/link";
import { Container, Flex, Text, VStack } from "@chakra-ui/layout";
import { Icon } from "@chakra-ui/react";
import { FiGrid, FiAlignJustify, FiBriefcase, FiCoffee } from "react-icons/fi";

const Navigation = () => {
  return (
    <Container
      bg={"white"}
      h={"100%"}
      borderRadius={24}
      centerContent
      minW={240}
      padding={0}
    >
      <Icon as={FiCoffee} w={12} h={12} color={"gray.600"} mb={12} mt={12} />
      <NavigationOptions />
    </Container>
  );
};
export default Navigation;

const NavigationOptions = () => {
  const options = [
    {
      to: "/",
      name: "DASHBOARD",
      icon: FiGrid,
      active: false,
    },
    {
      to: "/tasks",
      name: "TASKS",
      icon: FiBriefcase,
      active: true,
    },
    {
      to: "/about",
      name: "ABOUT",
      icon: FiAlignJustify,
      active: false,
    },
  ];

  return (
    <VStack spacing={0} align="stretch" w={"100%"}>
      {options.map((option, index) => {
        return (
          <NavigationButton
            key={index}
            to={option.to}
            name={option.name}
            icon={option.icon}
            active={option.active}
          />
        );
      })}
    </VStack>
  );
};

const NavigationButton = ({ to, name, icon, active }) => {
  const styles = {
    borderRight: active && "solid 4px tomato",
    bgGradient: active && "linear(to-r, white, beige.200)",
    color: active ? "primary.900" : "gray.600",
  };
  return (
    <Link href={to} passHref>
      <Flex as="a" h={12} align={"center"} {...styles}>
        <Icon as={icon} mr={8} ml={8} w={6} h={6} />
        <Text as={"span"} fontWeight={"bold"} fontSize={14}>
          {name}
        </Text>
      </Flex>
    </Link>
  );
};
