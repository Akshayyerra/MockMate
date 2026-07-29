import { ai } from "@/lib/gemini";

interface AIResponse {
    score: number;
    feedback: string;
    nextQuestion: string;
}

export async function interviewAI(
    company: string,
    role: string,
    question: string,
    answer: string
): Promise<AIResponse> {
    const prompt = `
You are an expert technical interviewer.

Company:
${company}

Role:
${role}

Current Question:
${question}

Candidate Answer:
${answer}

Evaluate the answer and generate ONE follow-up interview question.

Return ONLY valid JSON.

{
  "score": 8,
  "feedback": "Good explanation with clear technical understanding.",
  "nextQuestion": "Explain the difference between REST and GraphQL."
}

Do NOT wrap the JSON in markdown.
`;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-flash-latest",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
            },
        });

        return JSON.parse(response.text!);
    } catch (error) {
        console.error("Gemini Error:", error);

        return {
            score: 0,
            feedback: "AI evaluation unavailable.",
            nextQuestion:
                "Can you describe another project you've worked on?",
        };
    }
}