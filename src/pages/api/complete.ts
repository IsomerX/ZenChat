import type { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";
import { z } from "zod";
import type { ChatCompletionRequestMessage } from "openai/dist/api";
import prompt from "utils/prompt";

// choose random key
const randomKey = () => {
  const keys = [process.env.OPENAI_API_KEY_1 || " "];
  return (
    keys[Math.floor(Math.random() * keys.length)] ||
    process.env.OPENAI_API_KEY_1 ||
    " "
  );
};

const OPENAI_API_KEY = randomKey();

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const messageBody = z.array(
  z.object({
    role: z.string(),
    content: z.string(),
  })
);

type Persona = keyof typeof prompt;

const requestBody = z.object({
  messages: messageBody,
  persona: z.string(),
});

// create a next js api handler
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // check if the request method is a POST
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed, please use POST" });
    return;
  }
  const { messages, persona } = requestBody.parse(req.body);
  const systemMessage = prompt[persona as Persona];

  if (!messages) {
    res.status(400).json({ error: "Missing messages" });
    return;
  }

  if (!messages.length) {
    res.status(400).json({ error: "Empty messages" });
    return;
  }
  try {
    const data = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: systemMessage },
        ...messages,
      ] as ChatCompletionRequestMessage[],
      temperature: 0.9,
      n: 1,
    });
    res.send(data.data.choices[0]?.message);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e });
  }
}
