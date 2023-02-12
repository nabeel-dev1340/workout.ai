import React, { useState } from 'react'
import {
  FormControl,
  FormLabel,
  Select,
  Checkbox,
  Stack,
  Text,
  Flex,
  Button,
  HStack,
  RadioGroup,
  Radio
} from '@chakra-ui/react'

const muscles: string[] = ['Chest', 'Back', 'Shoulders', 'Arms', 'Legs', 'Abs']

const equipment: string[] = [
  'Dumbbells',
  'Barbells',
  'Kettlebells',
  'Resistance Bands',
  'Smith Machine',
  'Pull Up Bar'
]

const ExerciseForm = () => {
  const [selectedMuscle, setSelectedMuscle] = useState('')

  const handleMuscleSelection = (event: any) => {
    setSelectedMuscle(event.target.value)
  }

  return (
    <form>
       <Stack alignItems={'center'} justifyContent={'center'} spacing={10}>
        <HStack spacing={200}>
          <FormControl>
            <FormLabel htmlFor="muscle-select">
              <Text as="strong"> Muscles</Text>
            </FormLabel>

            <Select
              id="muscle-select"
              value={selectedMuscle}
              onChange={handleMuscleSelection}
              width="300px"
            >
              <option value="">Select a muscle group</option>
              {muscles.map(muscle => (
                <option key={muscle} value={muscle}>
                  {muscle}
                </option>
              ))}
            </Select>
          </FormControl>
          <HStack ml={4}>
            <FormLabel mt={7}>
              <Text as="strong"> Location </Text>
            </FormLabel>
            <Stack spacing={10} direction="row">
              <RadioGroup mt={5}>
                <Stack direction="row">
                  <Radio value="1">
                    <Text fontWeight={'light'}> Gym </Text>
                  </Radio>
                  <Radio value="2">
                    <Text fontWeight={'light'}> Home </Text>
                  </Radio>
                </Stack>
              </RadioGroup>
            </Stack>
          </HStack>
        </HStack>
        <Stack >
          <FormLabel>
            <Text as="strong"> Equipment</Text>
          </FormLabel>
          {equipment.map(e => <Checkbox key={e}><Text fontWeight={'light'}> {e} </Text></Checkbox>)}
      </Stack>
      </Stack>
      </form>
    
  )
}
export default ExerciseForm
