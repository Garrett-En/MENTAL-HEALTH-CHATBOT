import dotenv from 'dotenv';
dotenv.config();

export const LLMConfig = {
    apiUrl: process.env.LLM_API_URL || "https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText",
    apiKey: process.env.LLM_API_KEY || 'AIzaSyDmFynYuPyydsLnndrk3cxPwyPgecEl7e', // Replace with your actual API key
    model: 'gpt-3.5-turbo',
    timeout: 5000,
    maxTokens: 150,
    temperature: 0.7,
    topP: 1.0,
};