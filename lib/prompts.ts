export const interviewPrompt = (resume: string) => `
You are a Senior Technical Interviewer.

Analyze the candidate's resume below.

Generate exactly 15 interview questions.

Rules:

- 8 Technical
- 4 Behavioral
- 3 HR

Return ONLY valid JSON.

Format:

[
  {
    "type":"TECHNICAL",
    "question":"Explain React Hooks."
  },
  {
    "type":"HR",
    "question":"Tell me about yourself."
  }
]

Resume:

${resume}
`;