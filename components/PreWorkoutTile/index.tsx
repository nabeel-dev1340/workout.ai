import React from "react";
import { Box, Flex, Link, Button } from "@chakra-ui/react";
import Capsule from "components/Capsule";

interface PreWorkoutTileProps {
  exercise?: string;
  reps?: string;
  sets?: string;
  time?: string;
  index?: number;
  link?: string | "#";
}

const PreWorkoutTile = ({
  exercise,
  reps,
  sets,
  time,
  link,
  index = 0,
}: PreWorkoutTileProps) => {
  return (
    <>
      <Flex
        flexDirection="column"
        justifyContent="space-around"
        bg="whiteAlpha.900"
        width={["85%", "400px", "400px", "400px", "400px"]}
        height="400px"
        color="#3e234b"
        fontWeight={600}
        boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        rounded={4}
      >
        <Flex flexDirection="column" p={3} gap={10}>
          <Flex flexDirection="column" gap={5} align="center">
            <Box width="8rem">
              <Capsule text="Exercise" />
            </Box>
            <Box fontSize={["1xl", "1xl", "2xl"]}>
              {index + 1}. {exercise}
            </Box>
          </Flex>
          <Flex flexDirection="column" gap={5} align="center">
            <Box width="4rem">
              <Capsule text="Time" />
            </Box>
            <Box fontSize={["1xl", "1xl", "2xl"]}>{time}</Box>
          </Flex>
          <Flex align="center">
            <Link href={link} target="_blank" margin="0 auto">
              <Button
                color="#3e234b"
                padding={[3, 3, 7]}
                boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px"
              >
                Watch Tutorial
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
      {/* <Flex
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
          flex={[1, 1, 2]}
          gap={30}
          p={5}
        >
          <Flex flexDirection="column" gap={5}>
            <Box width="8rem">
              <Capsule text="Exercise" />
            </Box>
            <Box fontSize={["1xl", "1xl", "2xl"]}>
              {index + 1}. {exercise}
            </Box>
          </Flex>
          <Flex flexDirection="column" gap={5} align="center" >
            <Box width="4rem">
              <Capsule text="Time" />
            </Box>
            <Box fontSize={["1xl", "1xl", "2xl"]}>{time}</Box>
          </Flex>
        </Flex>
        <Link href={link} target="_blank">
          <Button
            color="#3e234b"
            padding={[3, 3, 7]}
            marginRight={[0, 0, 20]}
            mb={[5, 5, 0]}
          >
            Watch Tutorial
          </Button>
        </Link>
      </Flex> */}
    </>
  );
};

export default PreWorkoutTile;
