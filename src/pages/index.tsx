import React, { useState, useEffect } from "react";
import Head from "next/head";
import NavBar from "components/NavBar";
import Headline from "components/Headline";
import WorkoutPlan from "components/WorkoutPlan";
import UserInput from "components/UserInput";

export default function Home() {
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
        <UserInput />
      </main>
    </>
  );
}
