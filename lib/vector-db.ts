import { ChromaClient } from 'chromadb';
import { getEmbeddings } from './ollama';

const client = new ChromaClient();

export async function addDocumentToChroma(id: string, chunks: string[]) {
  const collection = await client.getOrCreateCollection('docs');

  const embeddings = await Promise.all(chunks.map((chunk) => getEmbeddings(chunk)));

  await collection.add({
    ids: chunks.map((_, i) => `${id}-${i}`),
    embeddings: embeddings, // Now passing number[][]
    metadatas: chunks.map(() => ({ source: id })),
    documents: chunks, // Storing raw text for retrieval
  });
}

export async function searchChroma(query: string, n = 5) {
  const collection = await client.getCollection('docs');
  const queryEmbedding = await getEmbeddings(query);

  return collection.query({
    query_embeddings: [queryEmbedding],
    n_results: n,
  });
}
