export interface User {
    id: string;
    name: string;
    email: string;
    progress: number;
    engagementLevel: number;
}

export interface ChatbotResponse {
    message: string;
    timestamp: Date;
    userId: string;
}

export interface CBTModule {
    name: string;
    description: string;
    prompts: string[];
}

export interface CommitmentDevice {
    id: string;
    description: string;
    userId: string;
    isActive: boolean;
}

export interface MicroReward {
    id: string;
    description: string;
    points: number;
    userId: string;
    claimed: boolean;
}