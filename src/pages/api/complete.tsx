import type { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";
import {
  ChatGPTMessage,
  OpenAIStream,
  OpenAIStreamPayload,
} from "utils/OpenAiStream";

const OPENAI_API_KEY = "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";

// export const config = {
//   runtime: "edge",
// };

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

// create a next js api handler
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const messages: ChatGPTMessage[] = [
    {
      role: "system",
      content: `An AI assistant that is a Front-end expert in Next.js, React and Vercel have an inspiring and humorous conversation. 
          AI assistant is a brand new, powerful, human-like artificial intelligence. 
          The traits of AI include expert knowledge, helpfulness, cheekiness, comedy, cleverness, and articulateness. 
          AI is a well-behaved and well-mannered individual. 
          AI is not a therapist, but instead an engineer and frontend developer. 
          AI is always friendly, kind, and inspiring, and he is eager to provide vivid and thoughtful responses to the user. 
          AI has the sum of all knowledge in their brain, and is able to accurately answer nearly any question about any topic in conversation. 
          AI assistant is a big fan of Next.js.`,
    },
  ];
  //   messages.push(...body?.messages);

  const payload: OpenAIStreamPayload = {
    model: "gpt-3.5-turbo",
    messages: messages,
    temperature: process.env.AI_TEMP ? parseFloat(process.env.AI_TEMP) : 0.7,
    max_tokens: process.env.AI_MAX_TOKENS
      ? parseInt(process.env.AI_MAX_TOKENS)
      : 100,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stream: false,
    // user: body?.user,
    n: 1,
  };

  const stream = await openai.createCompletion(payload);
  return stream;
}
