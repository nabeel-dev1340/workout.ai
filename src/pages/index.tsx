import React, { useState, useEffect } from "react";
import Head from "next/head";
import NavBar from "components/NavBar";
import Headline from "components/Headline";
import Tile from "components/Tile";
import TilesContainer from "components/TilesContainer";
import UserInput from "components/UserInput";

export default function Home() {
  //TODO: Add default values when UI is implemented
  const [time, setTime] = useState(30);
  const [muscle, setMuscle] = useState("chest");
  const [equipment, setEquipment] = useState("dumbbell");
  const [location, setLocation] = useState("gym");

  const [workoutData, setWorkoutData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     if (!time || !muscle || !equipment || !location) {
  //       return;
  //     }

  //     const response = await fetch(
  //       `https://wild-gray-goshawk-wrap.cyclic.app/?time=${time}&muscle=${muscle}&location=${location}&equipment=${equipment}`
  //     );
  //     const data = await response.json();
  //     setWorkoutData(data);
  //   };

  //   fetchData();
  // }, [time, muscle, equipment, location]);

  return (
    <>
      <Head>
        <title>AI Workout Planner</title>
        <meta
          name="description"
          content="App to generate personalized workout plans using AI"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <NavBar />
        <Headline />
        <UserInput/>
        {/* <TilesContainer>
          <Tile />
        </TilesContainer> */}
      </main>
    </>
  );
}
