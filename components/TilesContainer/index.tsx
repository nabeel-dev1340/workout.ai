import React from "react";
import { Flex } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};

const TilesContainer = ({ children }: Props) => {
  return (
    <Flex
      justify="center"
      align="center"
      width="100%"
      flexDirection={["column", "column", "row"]}
      gap={5}
      wrap="wrap"
    >
      {children}
    </Flex>
  );
};

export default TilesContainer;
