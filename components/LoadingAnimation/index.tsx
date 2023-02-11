import React from "react";
import { Box, Flex } from "@chakra-ui/react";

const LoadingAnimation = () => {
  return (
    <Flex justifyContent="center" alignItems="center" width={"100%"} height='100vh'>
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
