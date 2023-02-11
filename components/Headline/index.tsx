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
      color="white"
    >
      <Box fontSize={{ base: "24px", md: "35px", lg: "50px" }} fontWeight="900">
        Achieve Your Fitness Goals with AI-Powered Workouts
      </Box>
      <Text fontSize="lg">
        Transform your fitness routine with the power of AI
      </Text>
    </Box>
  );
};

export default Headline;
