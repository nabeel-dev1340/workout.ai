import React from "react";
import { Image, Flex, Button, HStack, chakra, Text } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <chakra.header>
      <Flex w="100%" px="6" py="6" align="center" justify="center">
        <Text fontSize={{ base: "24px", md: "40px", lg: "56px" }}>
          AI Workout Planner
        </Text>
      </Flex>
    </chakra.header>
  );
};

export default NavBar;
