export interface MicroReward {
    id: string;
    description: string;
    points: number;
    isClaimed: boolean;
    trackInteraction(input: string): void;
}

export class MicroRewardImpl implements MicroReward {
    id: string;
    description: string;
    points: number;
    isClaimed: boolean;

    constructor() {
        this.id = 'reward-1';
        this.description = 'Basic engagement reward';
        this.points = 0;
        this.isClaimed = false;
    }

    trackInteraction(input: string): void {
        console.log(`Tracking interaction: ${input}`);
        this.points += 10;
    }
}