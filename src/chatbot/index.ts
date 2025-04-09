import { LLMIntegration } from './llm-integration';
import { CommitmentDevices } from '../engagement/commitment-devices';
import { MicroReward, MicroRewardImpl } from '../engagement/micro-rewards';
import { DepressionModule } from './cbt-modules/depression';
import { StressModule } from './cbt-modules/stress';

export class MentalHealthChatbot {
    private llmIntegration: LLMIntegration;
    private commitmentDevices: CommitmentDevices;
    private microRewards: MicroReward;

    constructor() {
        this.llmIntegration = new LLMIntegration();
        this.commitmentDevices = new CommitmentDevices();
        this.microRewards = new MicroRewardImpl();
    }

    public async handleUserInput(userInput: string): Promise<string> {
        const response = await this.llmIntegration.getResponse(userInput);
        this.microRewards.trackInteraction(userInput);
        return response;
    }

    public async getCBTModule(moduleType: string): Promise<any> {
        switch (moduleType) {
            case 'anxiety':
                throw new Error('Anxiety module is not implemented');
            case 'depression':
                return DepressionModule;
            case 'stress':
                return StressModule;
            default:
                throw new Error('Invalid CBT module type');
        }
    }
}