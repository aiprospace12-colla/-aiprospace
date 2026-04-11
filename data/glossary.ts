export type GlossaryTerm = {
  id: string
  term: string
  definition: string
  letter: string
}

export const GLOSSARY: GlossaryTerm[] = [
  { id: 'ai', term: 'Artificial Intelligence (AI)', letter: 'A', definition: 'The simulation of human intelligence processes by machines, especially computer systems, including learning, reasoning, and self-correction.' },
  { id: 'agent', term: 'AI Agent', letter: 'A', definition: 'An autonomous AI system that can perceive its environment, make decisions, and take actions to achieve specific goals without constant human input.' },
  { id: 'api', term: 'API (Application Programming Interface)', letter: 'A', definition: 'A set of rules and protocols that allows different software applications to communicate with each other. AI APIs let developers integrate AI capabilities into their own apps.' },
  { id: 'automation', term: 'Automation', letter: 'A', definition: 'The use of software to perform tasks with minimal human intervention. AI automation uses machine learning to handle complex, variable workflows.' },
  { id: 'benchmark', term: 'Benchmark', letter: 'B', definition: 'A standardized test used to measure and compare the performance of AI models on specific tasks such as reasoning, coding, or language understanding.' },
  { id: 'context-window', term: 'Context Window', letter: 'C', definition: 'The maximum amount of text (measured in tokens) that an AI model can process at once. Larger context windows allow longer conversations and documents.' },
  { id: 'chain-of-thought', term: 'Chain of Thought (CoT)', letter: 'C', definition: 'A prompting technique that encourages AI models to show their reasoning step-by-step before giving a final answer, improving accuracy on complex problems.' },
  { id: 'diffusion-model', term: 'Diffusion Model', letter: 'D', definition: 'A type of generative AI model that creates images by learning to reverse a process of adding noise. Used by tools like Stable Diffusion and DALL-E.' },
  { id: 'embedding', term: 'Embedding', letter: 'E', definition: 'A numerical representation of text, images, or other data as a vector of numbers. Embeddings allow AI to understand semantic similarity between concepts.' },
  { id: 'fine-tuning', term: 'Fine-Tuning', letter: 'F', definition: 'The process of further training a pre-trained AI model on a specific dataset to specialize it for a particular task or domain.' },
  { id: 'foundation-model', term: 'Foundation Model', letter: 'F', definition: 'A large AI model trained on broad data that can be adapted to many downstream tasks. Examples include GPT-4, Claude, and Gemini.' },
  { id: 'generative-ai', term: 'Generative AI', letter: 'G', definition: 'AI systems that can create new content — text, images, audio, video, or code — rather than just classifying or predicting from existing data.' },
  { id: 'hallucination', term: 'Hallucination', letter: 'H', definition: 'When an AI model generates information that sounds plausible but is factually incorrect or completely fabricated. A key challenge in deploying LLMs.' },
  { id: 'llm', term: 'Large Language Model (LLM)', letter: 'L', definition: 'A type of AI model trained on massive amounts of text data to understand and generate human language. Examples: GPT-4, Claude 3, Llama 3.' },
  { id: 'multimodal', term: 'Multimodal AI', letter: 'M', definition: 'AI systems that can process and generate multiple types of data — such as text, images, audio, and video — within a single model.' },
  { id: 'prompt', term: 'Prompt', letter: 'P', definition: 'The input or instruction given to an AI model to guide its output. Crafting effective prompts (prompt engineering) is key to getting good results.' },
  { id: 'rag', term: 'RAG (Retrieval-Augmented Generation)', letter: 'R', definition: 'A technique that enhances LLM responses by retrieving relevant documents from a knowledge base and including them in the context before generating an answer.' },
  { id: 'token', term: 'Token', letter: 'T', definition: 'The basic unit of text that AI models process. A token is roughly 4 characters or 0.75 words. Model pricing and context limits are measured in tokens.' },
  { id: 'transformer', term: 'Transformer', letter: 'T', definition: 'The neural network architecture that underpins most modern LLMs. Introduced in the 2017 paper "Attention Is All You Need" by Google researchers.' },
  { id: 'vector-database', term: 'Vector Database', letter: 'V', definition: 'A database optimized for storing and searching embeddings (vector representations). Used in RAG systems to find semantically similar content quickly.' },
]
