import React from "react";
import { Flex, Image, Link, Box, Text } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Flex
      as="nav"
      justify="center"
      align="center"
      p={5}
      mb={8}
      bg="whiteAlpha.800"
      color="black"
      boxShadow={"md"}
    >
      <Box
        width={{ base: "50px", md: "70px", lg: "100px" }}
        height={{ base: "50px", md: "70px", lg: "100px" }}
        marginTop={"5px"}
        marginRight={"15px"}
      >
        <lottie-player
          src="https://assets3.lottiefiles.com/packages/lf20_o2zkdsfj.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </Box>
      <Box>
        <Text
          fontSize={{ base: "24px", md: "40px", lg: "50px" }}
          textAlign="center"
          backgroundImage="linear-gradient(to right, #5ee7df, #b490ca)"
          backgroundClip="text"
          fontWeight="extrabold"
        >
          AI Workout Planner
        </Text>
      </Box>
      <Box
        width={{ base: "50px", md: "70px", lg: "100px" }}
        height={{ base: "50px", md: "70px", lg: "100px" }}
        marginTop={"5px"}
        marginLeft={"15px"}
      >
        <lottie-player
          src="https://assets3.lottiefiles.com/packages/lf20_o2zkdsfj.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </Box>
    </Flex>
  );
};

export default NavBar;
