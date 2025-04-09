import { Chatbot } from '../src/chatbot/index';
import { CommitmentDevices } from '../src/engagement/commitment-devices';
import { MicroRewards } from '../src/engagement/micro-rewards';

describe('Chatbot', () => {
    let chatbot: Chatbot;

    beforeEach(() => {
        chatbot = new Chatbot();
    });

    test('should respond to user input', async () => {
        const response = await chatbot.getResponse('I am feeling anxious');
        expect(response).toBeDefined();
        expect(response).toContain('anxiety');
    });

    test('should provide CBT techniques for anxiety', async () => {
        const response = await chatbot.getResponse('What can I do about my anxiety?');
        expect(response).toMatch(/breathing exercises|cognitive restructuring/i);
    });

    test('should track user engagement with commitment devices', () => {
        const userId = 'user123';
        CommitmentDevices.addCommitment(userId, 'daily check-in');
        const commitments = CommitmentDevices.getCommitments(userId);
        expect(commitments).toContain('daily check-in');
    });

    test('should reward users for completing tasks', () => {
        const userId = 'user123';
        MicroRewards.addReward(userId, 10);
        const rewards = MicroRewards.getRewards(userId);
        expect(rewards).toBe(10);
    });
});