export interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export interface ChatOptions {
  maxTokens?: number;
  temperature?: number;
}

export interface AIClient {
  chat(messages: ChatMessage[], options?: ChatOptions): Promise<string>;
  stream(
    messages: ChatMessage[],
    options?: ChatOptions
  ): AsyncGenerator<string>;
}

export function createAIClient(): AIClient {
  throw new Error("AI client not implemented yet.");
}
