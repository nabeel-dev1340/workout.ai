import dotenv from "dotenv";
import axios from "axios";
dotenv.config();

const API_KEY = process.env.OPENAI_API_KEY;
const MODEL = "text-davinci-003";

interface QueryParams {
  time: string;
  location: string;
  equipment: string;
  muscle: string;
}

const handler = async (
  req: { query: QueryParams },
  res: { send: (arg0: any) => void }
): Promise<void> => {
  const { time, location, equipment, muscle } = req.query as QueryParams;

  try {
    const Prompt = `
  Give me a ${time} minute workout plan for ${muscle} at ${location} with ${equipment}. Please include a warmup and cooldown. Also specify the time period for each exercise. Give the results in json format with keys Warm up:  Exercises:  and Cool down. All these keys have array entry`;
    const response = await axios.post(
      "https://api.openai.com/v1/completions",
      {
        model: MODEL,
        prompt: Prompt,
        temperature: 0,
        max_tokens: 400,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    res.send(response.data.choices[0].text);
  } catch (error) {
    throw error;
  }
};

export default handler;
