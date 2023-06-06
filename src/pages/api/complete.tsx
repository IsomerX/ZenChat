import type { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";
import { z } from "zod";
import type { ChatCompletionRequestMessage } from "openai/dist/api";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY || "";

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const messageBody = z.object({
  messages: z.array(
    z.object({
      role: z.string(),
      content: z.string(),
    })
  ),
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
  const body = messageBody.parse(req.body);
  // check the body for a list of messages, if not found return an error
  if (!body.messages) {
    res.status(400).json({ error: "Missing messages" });
    return;
  }
  // check the body for a list of messages, if not found return an error
  if (!body.messages.length) {
    res.status(400).json({ error: "Empty messages" });
    return;
  }
  try {
    const data = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: body.messages as ChatCompletionRequestMessage[],
      temperature: 0.9,
      n: 1,
    });
    console.log(data.data.choices);
    res.send(data.data.choices[0]?.message);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e });
  }
}
