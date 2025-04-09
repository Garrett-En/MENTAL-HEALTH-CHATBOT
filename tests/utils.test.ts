import { formatDate, validateInput } from '../src/utils/helpers';

describe('Utility Functions', () => {
    describe('formatDate', () => {
        it('should format date correctly', () => {
            const date = new Date('2023-10-01T12:00:00Z');
            const formattedDate = formatDate(date);
            expect(formattedDate).toBe('October 1, 2023');
        });

        it('should return an empty string for invalid date', () => {
            const invalidDate = new Date('invalid-date');
            const formattedDate = formatDate(invalidDate);
            expect(formattedDate).toBe('');
        });
    });

    describe('validateInput', () => {
        it('should return true for valid input', () => {
            const validInput = 'This is a valid input.';
            const isValid = validateInput(validInput);
            expect(isValid).toBe(true);
        });

        it('should return false for empty input', () => {
            const emptyInput = '';
            const isValid = validateInput(emptyInput);
            expect(isValid).toBe(false);
        });

        it('should return false for input exceeding max length', () => {
            const longInput = 'a'.repeat(256);
            const isValid = validateInput(longInput);
            expect(isValid).toBe(false);
        });
    });
});