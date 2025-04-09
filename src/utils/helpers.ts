export const formatDate = (date: Date): string => {
    return date.toISOString().split('T')[0];
};

export const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export const generateUniqueId = (): string => {
    return 'id-' + Math.random().toString(36).substr(2, 16);
};

export const calculateProgress = (completedTasks: number, totalTasks: number): number => {
    if (totalTasks === 0) return 0;
    return Math.min((completedTasks / totalTasks) * 100, 100);
};