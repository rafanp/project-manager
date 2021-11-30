import React from "react";
import Link from "next/link";
import { Box, Container, Flex, LinkBox, Text, VStack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Icon } from "@chakra-ui/react";
import { FiGrid, FiAlignJustify, FiBriefcase, FiCoffee } from "react-icons/fi";

// import { jsx, css } from '@emotion/react';
const Navigation = () => {
  return (
    <Container bg={"white"} borderRadius={24} pt={24} pb={24} centerContent>
      <Icon as={FiCoffee} w={36} h={36} color={"gray.900"} mb={24} />
      <NavigationOptions />
    </Container>
  );
};
export default Navigation;

const NavigationOptions = () => {
  const options = [
    {
      to: "/",
      name: "Home",
      icon: FiGrid,
      active: false,
    },
    {
      to: "/tasks",
      name: "Tasks",
      icon: FiBriefcase,
      active: true,
    },
    {
      to: "/about",
      name: "About",
      icon: FiAlignJustify,
      active: false,
    },
  ];

  return (
    <VStack spacing={4} align="stretch" w={"100%"}>
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
    background: active && "linear-gradient(to right, #FFF, #FFF4EE)",
  };

  // if (active) {
  //   styles.borderRight = "solid 4px tomato";
  //   styles.background = "linear-gradient(to right, #FFF, #FFF4EE)";
  // }

  return (
    <Link href={to} passHref>
      <Flex
        as="a"
        h={40}
        pl={16}
        align={"center"}
        color={"tomato"}
        {...styles}
        // borderRight={active && "solid 4px tomato"}
        // background={"linear-gradient(to right, #FFF, #FFF4EE)"}
      >
        <Icon as={icon} mr={16} />
        <Text as={"span"} fontWeight={"bold"}>
          {name}
        </Text>
      </Flex>
    </Link>
  );
};
