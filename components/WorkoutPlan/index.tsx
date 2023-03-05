import React from 'react'
import { Box, Flex, Button, Stack } from '@chakra-ui/react'
import { Warmup, Exercise, CoolDown } from 'Animations'
import Tile from 'components/Tile'
import PreWorkoutTile from 'components/PreWorkoutTile'
import TilesContainer from 'components/TilesContainer'
import getTutotialLink from 'utils/getTutorialLink'

const WorkoutPlan = ({ data, setForm, setWorkoutData }: any) => {
  const WarmupExercises = data['Warm Up'].map((item: any, index: number) => (
    <PreWorkoutTile
      exercise={item['Exercise']}
      time={item['Time']}
      index={index}
      key={item['Exercise']}
      link={getTutotialLink(item['Exercise'])}
    />
  ))

  const Exercises = data['Exercises'].map((item: any, index: number) => (
    <Tile
      exercise={item['Exercise']}
      reps={item['Reps']}
      sets={item['Sets']}
      index={index}
      key={item['Exercise']}
      link={getTutotialLink(item['Exercise'])}
    />
  ))

  const CoolDownExercises = data['Cool Down'].map(
    (item: any, index: number) => (
      <PreWorkoutTile
        exercise={item['Exercise']}
        time={item['Time']}
        index={index}
        key={item['Exercise']}
        link={getTutotialLink(item['Exercise'])}
      />
    )
  )

  return (
    <Stack
      flexDirection="column"
      justifyContent="center"
      color="whiteAlpha.900"
      align={'center'}
    >
      <Button
        variant={'lg'}
        bg="#eb2121"
        height={50}
        onClick={() => {
          setForm(true)
          setWorkoutData(null)
        }}
        width={['90%', '70%', '200px']}
      >
        Generate Again
      </Button>
      <Flex
        flexDirection="column"
        justifyContent="center"
        color="whiteAlpha.900"
        align={'center'}
      >
        <Flex align="center" justify="center" gap={5}>
          <Box
            fontSize={{ base: '2xl', md: '2xl', lg: '2xl' }}
            fontWeight="900"
            mt={3}
            bg="#eb2121"
            p={3}
            rounded={10}
            width={160}
            textAlign="center"
          >
            Warm-Up
          </Box>
          <Box width={150} height={150} m={'8'}>
            <Warmup />
          </Box>
        </Flex>
        <TilesContainer>{WarmupExercises}</TilesContainer>
        <Flex alignItems="center" justify="center" gap={5} mt={5}>
          <Box
            fontSize={{ base: '2xl', md: '2xl', lg: '2xl' }}
            fontWeight="900"
            mt={3}
            bg="#eb2121"
            p={3}
            rounded={10}
            width={150}
            textAlign="center"
          >
            Workout
          </Box>
          <Box width={160} height={150}>
            <Exercise />
          </Box>
        </Flex>
        <TilesContainer>{Exercises}</TilesContainer>
        <Flex alignItems="center" justify="center" gap={5} mt={5}>
          <Box
            fontSize={{ base: '2xl', md: '2xl', lg: '2xl' }}
            fontWeight="900"
            mt={3}
            bg="#eb2121"
            p={3}
            rounded={10}
            width={160}
            textAlign="center"
          >
            Cool-Down
          </Box>
          <Box width={150} height={150}>
            <CoolDown />
          </Box>
        </Flex>
        <TilesContainer>{CoolDownExercises}</TilesContainer>
      </Flex>
    </Stack>
  )
}

export default WorkoutPlan
