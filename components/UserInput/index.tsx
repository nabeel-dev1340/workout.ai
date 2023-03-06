import React, { useState } from 'react'
import { Box, VStack } from '@chakra-ui/react'
import ExerciseForm from 'components/ExerciseForm'
import WorkoutPlan from 'components/WorkoutPlan'
import Loading from 'Animations/Loading'

const UserInput = () => {
  const [workoutData, setWorkoutData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState(true)

  return (
    <main>
      {loading ? (
        <Loading />
      ) : workoutData ? (
            <WorkoutPlan data={workoutData} setForm={setForm} setWorkoutData={setWorkoutData} />
      ) : (
        form && (
          <VStack justify="center" align="center">
            <Box
              width={{ base: '80%', md: '80%', lg: '50%' }}
              height="50%"
              bg="#FFFFFF"
              marginRight={'15px'}
              color="black"
              fontWeight={600}
              boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              rounded={10}
              padding={'25px'}
              fontSize={{ base: '2xl', md: '2xl', lg: '2xl' }}
            >
              <ExerciseForm setData={setWorkoutData} setLoading={setLoading} setForm = {setForm} />
            </Box>
          </VStack>
        )
      )}
    </main>
  )
}
export default UserInput
