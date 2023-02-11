import React, { useState } from "react";
import { FormControl, FormLabel, Select, Checkbox, Stack } from "@chakra-ui/react";

const muscles = [
  "Chest",
  "Back",
  "Shoulders",
  "Arms",
  "Legs",
  "Abs"
];

const equipment: string[] = [
  "Dumbbells",
  "Barbells",
  "Kettlebells",
  "Resistance Bands",
  "Smith Machine",
  "Pull Up Bar"
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
        setSelectedEquipment(prevEquipment => {
            if (prevEquipment.includes(equipment)) {
                return prevEquipment.filter(e => e !== equipment);
            } else {
                return [...prevEquipment, equipment];
            }
        });
    };

    return (
        <form>
            <FormControl>
                <FormLabel htmlFor="muscle-select">Muscles</FormLabel>
                <Select
                    id="muscle-select"
                    value={selectedMuscle}
                    onChange={handleMuscleSelection}
                >
                    <option value="">Select a muscle group</option>
                    {muscles.map(muscle => (
                        <option key={muscle} value={muscle}>
                            {muscle}
                        </option>
                    ))}
                </Select>
            </FormControl>

            <Stack mt={4}>
                <FormLabel>Location</FormLabel>
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
                <FormLabel>Equipment</FormLabel>
                {equipment.map(e => (
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
    )
}
export default ExerciseForm