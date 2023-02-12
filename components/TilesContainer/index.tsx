import React from "react";
import { Flex } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};

const TilesContainer = ({ children }: Props) => {
  return <Flex justify="center">{children}</Flex>;
};

export default TilesContainer;