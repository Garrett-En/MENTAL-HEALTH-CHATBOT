import { MentalHealthChatbot } from '../src/chatbot/index';

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
        await expect(chatbot.getCBTModule('anxiety')).rejects.toThrow('Anxiety module is not implemented');
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
