import React from "react";
import { Box } from "@chakra-ui/react";

type CapsuleProps = {
  text: string;
};

const Capsule = ({ text }: CapsuleProps) => {
  return (
    <Box
      rounded={10}
      bg="linear-gradient(to right, #5ee7df, #b490ca)"
      p={3}
      color="white"
      fontWeight="bold"
      fontSize="sm"
      textAlign="center"
    >
      {text}
    </Box>
  );
};

export default Capsule;
