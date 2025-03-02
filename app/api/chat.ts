import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { message } = req.body;

    // Call Ollama API (replace with your Ollama endpoint)
    const ollamaResponse = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'deepseek', // Replace with your model name
        prompt: message,
        stream: false,
      }),
    });

    const data = await ollamaResponse.json();
    res.status(200).json({ reply: data.response });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}