export const appConfig = {
    environment: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:3000/api',
    sessionTimeout: process.env.SESSION_TIMEOUT || 30, // in minutes
    maxUserInteractions: process.env.MAX_USER_INTERACTIONS || 100,
    rewardThreshold: process.env.REWARD_THRESHOLD || 5, // interactions for a reward
};