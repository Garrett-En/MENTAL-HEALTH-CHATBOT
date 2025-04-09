export const getDepressionPrompts = () => {
    return [
        "What are some negative thoughts you have been experiencing lately?",
        "Can you identify any triggers that lead to feelings of sadness?",
        "What activities have you enjoyed in the past that you might consider doing again?",
        "How do you typically cope with feelings of depression?",
        "What small steps can you take today to improve your mood?",
        "Can you list three things you are grateful for right now?",
        "How would you advise a friend who is feeling the way you do?",
        "What positive affirmations can you remind yourself of during tough times?"
    ];
};

export const analyzeDepressionThoughts = (thoughts: string[]) => {
    // This function analyzes negative thoughts and helps reframe them
    return thoughts.map(thought => {
        if (thought.includes("I can't")) {
            return thought.replace("I can't", "I can try to");
        }
        if (thought.includes("I'm worthless")) {
            return "I have value and worth, regardless of my current feelings.";
        }
        return thought;
    });
};

export const suggestActivities = () => {
    return [
        "Take a short walk outside.",
        "Listen to your favorite music.",
        "Try a new hobby or revisit an old one.",
        "Reach out to a friend or family member.",
        "Practice mindfulness or meditation.",
        "Engage in a creative activity like drawing or writing."
    ];
};

// Export the DepressionModule class or function
export class DepressionModule {
    // Add implementation details here
}