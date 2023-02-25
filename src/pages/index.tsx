import React, { useState, useEffect } from "react";
import Head from "next/head";
import NavBar from "components/NavBar";
import Headline from "components/Headline";
import WorkoutPlan from "components/WorkoutPlan";

export default function Home() {
  //TODO: Add default values when UI is implemented
  const [time, setTime] = useState(45);
  const [muscle, setMuscle] = useState("biceps");
  const [equipment, setEquipment] = useState("dumbbell");
  const [location, setLocation] = useState("gym");

  const [workoutData, setWorkoutData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!time || !muscle || !equipment || !location) {
        return;
      }

      const response = await fetch(
        `https://wild-gray-goshawk-wrap.cyclic.app/?time=${time}&muscle=${muscle}&location=${location}&equipment=${equipment}`
      );
      const data = await response.json();
      setWorkoutData(data);
    };

    fetchData();
  }, [time, muscle, equipment, location]);

  return (
    <>
      <Head>
        <title>Your Workout Planner</title>
        <meta
          name="description"
          content="Are you looking to get in shape but not sure where to start? Our AI-powered workout planner is here to help! We understand that everyone has different fitness goals and preferences, which is why we offer personalized workout plans designed to help you achieve your goals."
        />
         <meta property="og:locale" content="en_US" />
         <meta property="og:title" content="Get AI-powered workout plans for free" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <NavBar />
        <Headline />
        <UserInput/>
        {/* {workoutData && <WorkoutPlan data={workoutData} />} */}
      </main>
    </>
  );
}
