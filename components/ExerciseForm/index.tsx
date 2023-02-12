import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Select,
  Checkbox,
  Stack,
  Text,
  Flex,
} from "@chakra-ui/react";

const muscles: string[] = ["Chest", "Back", "Shoulders", "Arms", "Legs", "Abs"];

const equipment: string[] = [
  "Dumbbells",
  "Barbells",
  "Kettlebells",
  "Resistance Bands",
  "Smith Machine",
  "Pull Up Bar",
];

const ExerciseForm = () => {
  const [selectedMuscle, setSelectedMuscle] = useState("");
  const [gymLocation, setGymLocation] = useState(false);
  const [homeLocation, setHomeLocation] = useState(false);
  const [selectedEquipment, setSelectedEquipment] = useState<string[]>([]);

  const handleMuscleSelection = (event: any) => {
    setSelectedMuscle(event.target.value);
  };

  const handleLocationSelection = (location: string) => {
    if (location === "gym") {
      setGymLocation(!gymLocation);
    } else {
      setHomeLocation(!homeLocation);
    }
  };

  const handleEquipmentSelection = (equipment: string) => {
    setSelectedEquipment((prevEquipment) => {
      if (prevEquipment.includes(equipment)) {
        return prevEquipment.filter((e) => e !== equipment);
      } else {
        return [...prevEquipment, equipment];
      }
    });
  };

  return (
    <Flex justifyContent={"center"} alignItems={"center"}>
      <form>
        <FormControl>
          <FormLabel htmlFor="muscle-select">
            {" "}
            <Text as="strong"> Muscles</Text>
          </FormLabel>

          <Select
            id="muscle-select"
            value={selectedMuscle}
            onChange={handleMuscleSelection}
            width="300px"
          >
            <option value="">Select a muscle group</option>
            {muscles.map((muscle) => (
              <option key={muscle} value={muscle}>
                {muscle}
              </option>
            ))}
          </Select>
        </FormControl>

        <Stack mt={4}>
          <FormLabel>
            <Text as="strong"> Location </Text>
          </FormLabel>
          <Checkbox
            isChecked={gymLocation}
            onChange={() => handleLocationSelection("gym")}
          >
            Gym
          </Checkbox>
          <Checkbox
            isChecked={homeLocation}
            onChange={() => handleLocationSelection("home")}
          >
            Home
          </Checkbox>
        </Stack>

        <Stack mt={4}>
          <FormLabel>
            <Text as="strong"> Equipment</Text>
          </FormLabel>
          {equipment.map((e) => (
            <Checkbox
              key={e}
              isChecked={selectedEquipment.includes(e)}
              onChange={(e) => handleEquipmentSelection(e as unknown as string)}
            >
              {e}
            </Checkbox>
          ))}
        </Stack>
      </form>
    </Flex>
  );
};
export default ExerciseForm;
