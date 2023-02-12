import React from "react";
import { Heading, Box, Flex, Text } from "@chakra-ui/react";
import { Warmup, Exercise, CoolDown } from "Animations";
import Tile from "components/Tile";
import PreWorkoutTile from "components/PreWorkoutTile";
import TilesContainer from "components/TilesContainer";

const WorkoutPlan = () => {
  return (
    <Flex flexDirection="column" justifyContent="center" color="whiteAlpha.900">
      <Flex alignItems="center" justify="center" gap={5}>
        <Box
          fontSize={{ base: "2xl", md: "2xl", lg: "2xl" }}
          fontWeight="900"
          mt={6}
          bg="#F46152"
          p={5}
          rounded="full"
        >
          Warm-Up
        </Box>
        <Box width={150} height={150}>
          <Warmup />
        </Box>
      </Flex>
      <TilesContainer>
        <PreWorkoutTile />
        <PreWorkoutTile />
        <PreWorkoutTile />
      </TilesContainer>
      <Flex alignItems="center" justify="center" gap={5} mt={5}>
        <Box
          fontSize={{ base: "2xl", md: "2xl", lg: "2xl" }}
          fontWeight="900"
          mt={3}
          bg="#F46152"
          p={5}
          rounded="full"
        >
          Workout
        </Box>
        <Box width={150} height={150}>
          <Exercise />
        </Box>
      </Flex>
      <TilesContainer>
        <Tile />
        <Tile />
        <Tile />
      </TilesContainer>
      <Flex alignItems="center" justify="center" gap={5} mt={5}>
        <Box
          fontSize={{ base: "2xl", md: "2xl", lg: "2xl" }}
          fontWeight="900"
          mt={3}
          bg="#F46152"
          p={5}
          rounded="full"
        >
          Cool-Down
        </Box>
        <Box width={150} height={150}>
          <CoolDown />
        </Box>
      </Flex>
      <TilesContainer>
        <PreWorkoutTile />
        <PreWorkoutTile />
        <PreWorkoutTile />
      </TilesContainer>
    </Flex>
  );
};

export default WorkoutPlan;
