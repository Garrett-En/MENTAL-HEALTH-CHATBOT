import { createCommitmentDevice, checkCommitmentDeviceStatus, updateCommitmentDevice } from '../src/engagement/commitment-devices';
import { MicroRewardImpl } from '../src/engagement/micro-rewards';

describe('Engagement Features', () => {
    describe('Commitment Devices', () => {
        it('should create a commitment device successfully', () => {
            const userId = 'user123';
            const goal = 'Complete 5 CBT sessions this week';
            const deadline = new Date('2025-12-31');
            
            const device = createCommitmentDevice(userId, goal, deadline);
            
            expect(device).toEqual({
                userId,
                goal,
                deadline,
                createdAt: expect.any(Date),
                status: 'active'
            });
        });

        it('should check commitment device status', () => {
            const deviceId = 'device123';
            const status = checkCommitmentDeviceStatus(deviceId);
            
            expect(status).toEqual({
                deviceId,
                status: expect.any(String),
                updatedAt: expect.any(Date)
            });
        });

        it('should update commitment device', () => {
            const deviceId = 'device123';
            const updates = { goal: 'Updated goal', status: 'completed' };
            
            const updated = updateCommitmentDevice(deviceId, updates);
            
            expect(updated).toEqual({
                deviceId,
                ...updates,
                updatedAt: expect.any(Date)
            });
        });
    });

    describe('Micro Rewards', () => {
        let microReward: MicroRewardImpl;

        beforeEach(() => {
            microReward = new MicroRewardImpl();
        });

        it('should initialize with default values', () => {
            expect(microReward.id).toBe('reward-1');
            expect(microReward.points).toBe(0);
            expect(microReward.isClaimed).toBe(false);
        });

        it('should track interaction and increment points', () => {
            microReward.trackInteraction('completed task');
            expect(microReward.points).toBe(10);
        });
    });
});
