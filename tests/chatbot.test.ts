import { MentalHealthChatbot } from '../src/chatbot/index';
import { LLMIntegration } from '../src/chatbot/llm-integration';

// Mock the LLM response for testing
jest.mock('../src/chatbot/llm-integration', () => {
  return {
    LLMIntegration: jest.fn().mockImplementation(() => {
      return {
        getResponse: jest.fn().mockResolvedValue("This is a mocked response for testing purposes."),
        setMockResponse: jest.fn()
      };
    })
  };
});

describe('MentalHealthChatbot', () => {
    let chatbot: MentalHealthChatbot;

    beforeEach(() => {
        chatbot = new MentalHealthChatbot();
    });

    test('should respond to user input', async () => {
        const response = await chatbot.handleUserInput('I am feeling anxious');
        expect(response).toBeDefined();
        expect(typeof response).toBe('string');
    });

    test('should provide CBT techniques for anxiety', async () => {
        const module = await chatbot.getCBTModule('anxiety');
        expect(module).toBeDefined();
        expect(module.suggestCopingStrategies).toBeDefined();
        expect(Array.isArray(module.suggestCopingStrategies())).toBe(true);
    });

    test('should load depression module', async () => {
        const module = await chatbot.getCBTModule('depression');
        expect(module).toBeDefined();
    });

    test('should load stress module', async () => {
        const module = await chatbot.getCBTModule('stress');
        expect(module).toBeDefined();
    });

    test('should reject invalid module type', async () => {
        await expect(chatbot.getCBTModule('invalid')).rejects.toThrow('Invalid CBT module type');
    });
});
