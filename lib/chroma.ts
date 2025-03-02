// lib/chroma.ts
import { ChromaClient } from 'chromadb';

export const chromaClient = new ChromaClient({
  path: process.env.CHROMA_DB_URL || 'http://localhost:8000',
});

export async function getOrCreateCollection(name: string) {
  return await chromaClient.getOrCreateCollection({
    name,
    metadata: { description: 'RAG Document Storage' },
  });
}
