import { Flex, Box } from '@chakra-ui/react'
import React from 'react'

const Loading = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="flex-start"
      width={'100%'}
      height="100vh"
      marginTop={'-150px'}
    >
      <Box height={'70%'}>
        {' '}
        <lottie-player
          src="https://assets9.lottiefiles.com/packages/lf20_zdjUpn36hX.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        />
      </Box>
    </Flex>
  )
}

export default Loading
