import React from "react";
import Link from "next/link";
import { Flex, Box, Text } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Flex
      as="nav"
      justify="center"
      align="center"
      p={3}
      bg="linear-gradient(to right, #5ee7df, #b490ca)"
      boxShadow={"md"}
    >
      <Flex justify="center" align="center" bg="white" rounded="full" p={1}>
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
          <Link href={"/"}>
            <Text
              fontSize={{ base: "24px", md: "35px", lg: "40px" }}
              textAlign="center"
              backgroundImage="linear-gradient(to right, #5ee7df, #b490ca)"
              backgroundClip="text"
              fontWeight="extrabold"
            >
              AI Workout Planner
            </Text>
          </Link>
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
    </Flex>
  );
};

export default NavBar;
