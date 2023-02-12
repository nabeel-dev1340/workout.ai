import React from "react";
import { Box, Flex, Link, Button } from "@chakra-ui/react";
import Capsule from "components/Capsule";

interface PreWorkoutTileProps {
  exercise?: string;
  reps?: number;
  sets?: number;
  time?: number;
  link?: string | "#";
}

const PreWorkoutTile = ({
  exercise = "Jumping Jacks",
  reps,
  sets,
  time = 2,
  link,
}: PreWorkoutTileProps) => {
  return (
    <>
      <Flex
        alignItems="center"
        justifyContent={["space-around", "center", "space-around"]}
        bg="white"
        width={["95%", "95%", "95%", "900px", "900px"]}
        flexDirection={["column", "column", "row"]}
        height="180px"
        color="#3e234b"
        fontWeight={600}
        boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        rounded={4}
      >
        <Flex
          justify="space-around"
          alignItems="center"
          gap={5}
          flex={[1, 1, 2]}
          p={5}
        >
          <Flex flexDirection="column" gap={5}>
            <Box width="8rem">
              <Capsule text="Exercise" />
            </Box>
            <Box fontSize={["1xl", "1xl", "2xl"]}>1. {exercise}</Box>
          </Flex>
          <Flex flexDirection="column" gap={5} align="center">
            <Box width="4rem">
              <Capsule text="Time" />
            </Box>
            <Box fontSize={["1xl", "1xl", "2xl"]}>{time} minutes</Box>
          </Flex>
        </Flex>
        <Button
          color="#3e234b"
          padding={[3, 3, 7]}
          marginRight={[0, 0, 20]}
          mb={[5, 5, 0]}
        >
          <Link>Watch Tutorial</Link>
        </Button>
      </Flex>
    </>
  );
};

export default PreWorkoutTile;
