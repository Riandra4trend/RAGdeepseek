import axios from 'axios';

const OLLAMA_API_URL = process.env.OLLAMA_API_URL || 'http://localhost:11434';

// Query Ollama for text generation
export async function queryOllama(prompt: string) {
  const response = await axios.post(`${OLLAMA_API_URL}/api/generate`, {
    model: 'deepseek',
    prompt,
    stream: false,
  });
  return response.data.response;
}

// Generate embeddings using Ollama
export async function getEmbeddings(text: string): Promise<number[]> {
  const response = await axios.post(`${OLLAMA_API_URL}/api/embeddings`, {
    model: 'deepseek',
    prompt: text,
  });
  return response.data.embedding; // Ensure the API returns number[]
}
