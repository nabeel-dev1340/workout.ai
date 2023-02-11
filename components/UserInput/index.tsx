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
        bg="whiteAlpha.800"
        marginTop={'50px'}
        marginRight={'15px'}
        boxShadow={'md'}
        color="black"
      >
        <ExerciseForm />
      </Box>
    </Flex>
  )
}
export default UserInput
