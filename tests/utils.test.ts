import { formatDate, validateEmail, generateUniqueId, calculateProgress } from '../src/utils/helpers';

describe('Utility Functions', () => {
    describe('formatDate', () => {
        it('should format date correctly', () => {
            const date = new Date('2023-10-01T12:00:00Z');
            const formattedDate = formatDate(date);
            expect(formattedDate).toBe('2023-10-01');
        });
    });

    describe('validateEmail', () => {
        it('should return true for valid email', () => {
            expect(validateEmail('test@example.com')).toBe(true);
        });

        it('should return false for invalid email', () => {
            expect(validateEmail('invalid-email')).toBe(false);
        });
    });

    describe('generateUniqueId', () => {
        it('should generate a string starting with id-', () => {
            const id = generateUniqueId();
            expect(id).toMatch(/^id-/);
        });

        it('should generate unique ids', () => {
            const id1 = generateUniqueId();
            const id2 = generateUniqueId();
            expect(id1).not.toBe(id2);
        });
    });

    describe('calculateProgress', () => {
        it('should calculate correct percentage', () => {
            expect(calculateProgress(5, 10)).toBe(50);
        });

        it('should handle zero total tasks', () => {
            expect(calculateProgress(0, 0)).toBe(0);
        });

        it('should cap at 100%', () => {
            expect(calculateProgress(11, 10)).toBe(100);
        });
    });
});
