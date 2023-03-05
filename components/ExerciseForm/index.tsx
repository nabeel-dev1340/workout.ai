import React, { useState } from 'react'
import {
  FormControl,
  FormLabel,
  Select,
  Checkbox,
  Stack,
  Text,
  HStack,
  RadioGroup,
  Radio,
  Input,
  Button,
} from '@chakra-ui/react'
import Capsule from 'components/Capsule'

const muscles: string[] = [
  'Abdominals',
  'Abductors',
  'Adductors',
  'Biceps',
  'Calves',
  'Chest',
  'Forearms',
  'Glutes',
  'Hamstrings',
  'Lats',
  'Lower Back',
  'Middle Back',
  'Neck',
  'Quadriceps',
  'Traps',
  'Triceps'
]

const equipments: string[] = [
  'Dumbbells',
  'Barbells',
  'Kettlebells',
  'Resistance Bands',
  'Smith Machine',
  'Pull Up Bar'
]
interface EquipmentCheckboxes {
  [key: string]: boolean;
}

const equipmentCheckboxes: EquipmentCheckboxes = {
  Dumbbells: false,
  Barbells: false,
  Kettlebells: false,
  'Resistance Bands': false,
  'Smith Machine': false,
  'Pull Up Bar': false
}

const ExerciseForm = ({setData, setLoading, setForm}:{setData: any, setLoading: any, setForm: any}) => {
  const [selectedMuscle, setSelectedMuscle] = useState('')
  const [time, setTime] = useState<number>()
  const [equipment, setEquipment] = useState(equipmentCheckboxes)
  const [location, setLocation] = useState('gym')

  const handleMuscleSelection = (event: any) => {
    setSelectedMuscle(event.target.value)
  }

  const handleCheckboxChange = (e: any) => {
    e.preventDefault()
    const { name, checked } = e.target
    setEquipment({
      ...equipment,
      [name]: checked
    })
  }

  const fetchData = async ({time, equipment, muscle, location}:{ time: string | undefined, equipment: string, muscle: string, location: string }) => {
    if (!time || !muscle || !equipment || !location) {
        return;
      }

      const response = await fetch(
        `https://wild-gray-goshawk-wrap.cyclic.app/?time=${time}&muscle=${muscle}&location=${location}&equipment=${equipment}`
      );
    const data = await response.json();
    setLoading(false)
    setData(data);
    };

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    setForm(false)
    const equipmentInput = Object.keys(equipment).filter(key => equipment[key]).toString();
    await fetchData({ time: time?.toString(), muscle: selectedMuscle, location, equipment: equipmentInput })
  }

  return (
    <main>
    <form>
      <Stack alignItems={'center'} justifyContent={'center'} spacing={10}>
        <Input
          focusBorderColor="purple.200"
          placeholder="session time in minutes"
          width={['90%', '70%', '50%']}
          type="number"
          value={time}
          onChange={e => setTime(parseInt(e.target.value))}
        />
        <Stack spacing={[0, 4, 8]} ml={[0, 4]} mt={[4, 0]}>
          <FormControl>
            <Select
              id="muscle-select"
              value={selectedMuscle}
              onChange={handleMuscleSelection}
              width={['100%', '80%', '300px']}
              placeholder="Select a muscle group"
              focusBorderColor="purple.200"
            >
              {muscles.map(muscle => (
                <option key={muscle} value={muscle}>
                  {muscle}
                </option>
              ))}
            </Select>
          </FormControl>
          <HStack ml={4}>
            <FormLabel mt={7}>
              <Text as="strong">
                <Capsule text="Location" />{' '}
              </Text>
            </FormLabel>
            <Stack spacing={10} direction="row">
              <RadioGroup mt={5} value={location} onChange={setLocation}>
                <Stack direction="row">
                  <Radio value="gym" colorScheme="purple">
                    <Text fontWeight={'light'}> Gym </Text>
                  </Radio>
                  <Radio value="home" colorScheme="purple">
                    <Text fontWeight={'light'}> Home </Text>
                  </Radio>
                </Stack>
              </RadioGroup>
            </Stack>
          </HStack>
        </Stack>
        <Stack>
          <FormLabel>
            <Text as="strong">
              <Capsule text="Equipment" />
            </Text>
          </FormLabel>
            {equipments.map((name: string) => (
              <Checkbox
                key={name}
                name={name}
                colorScheme="purple"
                isChecked={equipment[name]}
                onChange={(e) => handleCheckboxChange (e) }
              >
                <Text fontWeight={'light'}> {name} </Text>
              </Checkbox>
            ))}
        </Stack>
        <Stack width={['90%', '70%', '200px']}>
          <Button
            variant={'lg'}
            bg="linear-gradient(to right, #5ee7df, #b490ca)"
            onClick={e => handleSubmit(e)}
          >
            Generate
          </Button>
        </Stack>
      </Stack>
      </form>
    </main>
  
  )
}
export default ExerciseForm
