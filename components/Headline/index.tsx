import React from "react";
import { Heading, Box, Text } from "@chakra-ui/react";

const Headline = () => {
  return (
    <Box
      mt={[50, 50, 100]}
      mb={5}
      textAlign="center"
      bg={"linear-gradient(to right, #5ee7df, #b490ca)"}
      p={10}
      color="whiteAlpha.900"
    >
      <Box fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }} fontWeight="900">
        Get fit with ease using our AI-powered workout planner.
      </Box>
      <Text fontSize="2xl">
        Start your fitness journey today with our AI workout planner and get
        ready to achieve your fitness goals.
      </Text>
    </Box>
  );
};

export default Headline;
