import React from "react";
import { Box, Flex, Link, Button } from "@chakra-ui/react";
import Capsule from "components/Capsule";

interface TileProps {
  exercise?: string;
  reps?: number;
  sets?: number;
  time?: number;
  link?: string | "#";
}

const Tile = ({
  exercise = "Concentration Curl",
  reps = 10,
  sets = 3,
  time,
  link,
}: TileProps) => {
  return (
    <>
      <Flex
        alignItems="center"
        justifyContent={["space-around", "center", "space-around"]}
        bg="white"
        width={["100%", "100%", "1200px"]}
        flexDirection={["column", "column", "row"]}
        height="180px"
        color="#3e234b"
        fontWeight={600}
        boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        rounded={10}
      >
        <Flex
          justify="space-around"
          alignItems="center"
          flex={[1, 1, 2]}
          width="100%"
          p={5}
        >
          <Flex flexDirection="column" gap={5}>
            <Box>
              <Capsule text="Exercise" />
            </Box>
            <Box fontSize={["1xl", "2xl", "3xl"]}>1. {exercise}</Box>
          </Flex>
          <Flex flexDirection="column" gap={5} align="center">
            <Box>
              <Capsule text="Sets" />
            </Box>
            <Box fontSize={["1xl", "2xl", "3xl"]}>{sets}</Box>
          </Flex>
          <Flex flexDirection="column" gap={5} align="center">
            <Box>
              <Capsule text="Reps" />
            </Box>
            <Box fontSize={["1xl", "2xl", "3xl"]}>{reps}</Box>
          </Flex>
        </Flex>
        <Button
          color="#3e234b"
          padding={[3, 3, 8]}
          marginRight={[0, 0, 20]}
          mb={[5, 5, 0]}
        >
          <Link>Watch Tutorial</Link>
        </Button>
      </Flex>
    </>
  );
};

export default Tile;
