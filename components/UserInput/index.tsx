import React from 'react'
import Link from 'next/link'
import { Flex, Box, Text } from '@chakra-ui/react'
import ExerciseForm from 'components/ExerciseForm'

const UserInput = () => {
  return (
    <Flex justify="center" align="center">
      <Box
        width="50%"
        height="50%"
        bg="#FFFFFF"
        marginRight={'15px'}
        color="black"
        fontWeight={600}
        boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        rounded={10}
        padding={'25px'}
        fontSize={{ base: "2xl", md: "2xl", lg: "2xl" }}
      >
        <ExerciseForm />
      </Box>
    </Flex>
  )
}
export default UserInput
