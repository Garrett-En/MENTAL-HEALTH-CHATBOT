import { applyCommitmentDevice, getMicroReward } from '../src/engagement/commitment-devices';
import { trackUserProgress } from '../src/engagement/micro-rewards';

describe('Engagement Features', () => {
    describe('Commitment Devices', () => {
        it('should apply a commitment device successfully', () => {
            const userId = 'user123';
            const commitment = 'Complete 5 CBT sessions this week';
            const result = applyCommitmentDevice(userId, commitment);
            expect(result).toBe(true);
        });

        it('should not apply a commitment device if user is invalid', () => {
            const userId = 'invalidUser';
            const commitment = 'Complete 5 CBT sessions this week';
            const result = applyCommitmentDevice(userId, commitment);
            expect(result).toBe(false);
        });
    });

    describe('Micro Rewards', () => {
        it('should track user progress and provide a micro reward', () => {
            const userId = 'user123';
            const progress = 3; // Assume user completed 3 tasks
            const reward = getMicroReward(userId, progress);
            expect(reward).toEqual({ points: 30, message: 'Great job! You earned 30 points!' });
        });

        it('should not provide a reward if progress is insufficient', () => {
            const userId = 'user123';
            const progress = 1; // Assume user completed 1 task
            const reward = getMicroReward(userId, progress);
            expect(reward).toEqual({ points: 0, message: 'Keep going! You need to complete more tasks for a reward.' });
        });
    });
});