export function interviewPrompt(
  resume: string,
  company: string,
  role: string
) {
  return `
You are an expert technical interviewer.

Generate a realistic interview for the following candidate.

Company:
${company}

Role:
${role}

Resume:
${resume}

Rules:
- Generate exactly 10 questions.
- Mix technical, behavioral, and HR questions.
- Questions should match the candidate's resume and target role.
- Return ONLY valid JSON.
- Do not use markdown.
- Do not wrap in \`\`\`.

Return this format:

{
  "questions": [
    {
      "type": "TECHNICAL",
      "question": "..."
    }
  ]
}
`;
}