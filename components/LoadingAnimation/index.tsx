import React from "react";
import { Box, Flex } from "@chakra-ui/react";

const LoadingAnimation = () => {
  return (
    <Flex justify="center" align="center" height={'100vh'}>
      <Box>
        <lottie-player
          src="https://assets3.lottiefiles.com/packages/lf20_McIaL4.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </Box>
    </Flex>
  );
};

export default LoadingAnimation;
