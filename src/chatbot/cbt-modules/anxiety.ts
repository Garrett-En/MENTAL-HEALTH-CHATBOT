export const anxietyPrompts = {
    identifyThoughts: "What specific thoughts are causing you anxiety right now?",
    challengeThoughts: "How can you challenge these thoughts? What evidence do you have for and against them?",
    copingStrategies: "What coping strategies have you used in the past that helped you manage anxiety?",
    relaxationTechniques: "Would you like to try a relaxation technique? I can guide you through one.",
    goalSetting: "What small, achievable goals can you set for yourself to help manage your anxiety?",
};

export function identifyAnxietyTriggers(userInput: string): string[] {
    const triggers: string[] = [];
    // Logic to identify anxiety triggers from user input
    // This could involve keyword matching or more complex NLP techniques
    return triggers;
}

export function suggestCopingStrategies(): string[] {
    return [
        "Deep breathing exercises",
        "Progressive muscle relaxation",
        "Mindfulness meditation",
        "Journaling your thoughts",
        "Physical exercise",
    ];
}