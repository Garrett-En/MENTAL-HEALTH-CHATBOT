import axios from 'axios';
import { LLMConfig } from '../config/llm-config';

export class LLMIntegration {
    public async getResponse(message: string): Promise<string> {
        try {
            const response = await axios.post(
                LLMConfig.apiUrl,
                {
                    prompt: message,
                    max_tokens: LLMConfig.maxTokens,
                    temperature: LLMConfig.temperature,
                    top_p: LLMConfig.topP,
                },
                {
                    headers: {
                        Authorization: `Bearer ${LLMConfig.apiKey}`,
                        'Content-Type': 'application/json',
                    },
                }
            );
            return response.data.choices[0].text.trim();
        } catch (error) {
            console.error('Error communicating with LLM:', error);
            throw new Error('Failed to get response from the language model.');
        }
    }
}