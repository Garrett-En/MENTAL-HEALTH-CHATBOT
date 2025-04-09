export const stressManagementPrompts = {
    identifyStressors: "What are the main sources of stress in your life right now?",
    copingStrategies: "What coping strategies have you tried in the past? Which ones worked for you?",
    relaxationTechniques: "Have you considered any relaxation techniques, such as deep breathing or mindfulness? Would you like to try one?",
    positiveAffirmations: "Can you think of a positive affirmation that resonates with you? How can you incorporate it into your daily routine?",
    goalSetting: "What small, achievable goals can you set to help manage your stress levels?",
};

export function assessStressLevel(stressLevel: number): string {
    if (stressLevel < 3) {
        return "Your stress level seems manageable. Keep up the good work!";
    } else if (stressLevel < 7) {
        return "You might be experiencing moderate stress. Consider implementing some coping strategies.";
    } else {
        return "Your stress level is high. It's important to seek support and explore effective stress management techniques.";
    }
}

export function suggestCopingStrategy(): string {
    const strategies = [
        "Take a short walk outside to clear your mind.",
        "Practice deep breathing exercises for a few minutes.",
        "Write down your thoughts and feelings in a journal.",
        "Engage in a hobby or activity that you enjoy.",
        "Reach out to a friend or family member to talk about your feelings."
    ];
    const randomIndex = Math.floor(Math.random() * strategies.length);
    return strategies[randomIndex];
}

// filepath: ./cbt-modules/stress.ts
export class StressModule {
    handleStress() {
        console.log("Handling stress...");
    }
}
