import axios from 'axios';
import { LLMConfig } from '../config/llm-config';

export class LLMIntegration {
    private mockResponse: string | null = null;
    private defaultResponses = [
        "I understand that you're going through a difficult time. How can I help support you today?",
        "It sounds like you're experiencing some challenges. Have you tried any relaxation techniques that have worked for you in the past?",
        "I'm here to listen. Sometimes talking about our feelings can help us understand them better.",
        "That must be difficult to deal with. Let's explore some CBT techniques that might help in this situation.",
        "Remember that it's okay to take things one step at a time. Small progress is still progress.",
        "Deep breathing exercises can be helpful in moments of stress. Would you like to try one together?",
        "Have you considered writing down your thoughts in a journal? It can help identify patterns in your thinking.",
        "Remember to be kind to yourself during this process. Self-compassion is an important part of mental health.",
        "Let's try to identify some specific thoughts that might be contributing to how you're feeling.",
        "What's one small thing you could do today that might make you feel a little better?"
    ];

    // Add a method to set a mock response for testing
    public setMockResponse(response: string): void {
        this.mockResponse = response;
    }

    public async getResponse(message: string): Promise<string> {
        // If mockResponse is set, return it instead of making an API call
        if (this.mockResponse !== null) {
            return this.mockResponse;
        }

        // If API key is empty or placeholder, use fallback responses
        if (!LLMConfig.apiKey || LLMConfig.apiKey === 'your_openai_api_key_here') {
            console.log('No valid API key found, using fallback responses');
            // Choose a response based on the input message to simulate some intelligence
            const index = Math.floor(message.length % this.defaultResponses.length);
            return this.defaultResponses[index];
        }

        try {
            const response = await axios.post(
                LLMConfig.apiUrl,
                {
                    model: LLMConfig.model,
                    messages: [
                        {
                            role: "system",
                            content: "You are a helpful mental health chatbot specializing in cognitive behavioral therapy techniques. Keep your responses supportive, empathetic, and focused on evidence-based approaches. Avoid giving medical advice and clarify that you're not a replacement for professional mental health care."
                        },
                        {
                            role: "user",
                            content: message
                        }
                    ],
                    max_tokens: LLMConfig.maxTokens,
                    temperature: LLMConfig.temperature,
                    top_p: LLMConfig.topP,
                },
                {
                    headers: {
                        'Authorization': `Bearer ${LLMConfig.apiKey}`,
                        'Content-Type': 'application/json',
                    },
                    timeout: LLMConfig.timeout
                }
            );
            
            // Parse OpenAI API response format
            return response.data.choices[0].message.content.trim();
        } catch (error) {
            console.error('Error communicating with LLM:', error);
            // If API call fails, use fallback responses
            const index = Math.floor(message.length % this.defaultResponses.length);
            return `I'm having trouble connecting to my knowledge base right now. ${this.defaultResponses[index]}`;
        }
    }
}
