import dotenv from 'dotenv';
dotenv.config();

export const LLMConfig = {
    apiUrl: process.env.LLM_API_URL || "https://api.openai.com/v1/chat/completions",
    apiKey: process.env.LLM_API_KEY || '', // Should be set in .env file
    model: 'gpt-3.5-turbo',
    timeout: 5000,
    maxTokens: 150,
    temperature: 0.7,
    topP: 1.0,
};