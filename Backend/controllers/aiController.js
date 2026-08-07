import { GoogleGenAI } from "@google/genai";

export const generateFlashcards = async (req, res) => {
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });
  try {
    const { content } = req.body;

    if (!content) {
      return res.status(400).json({
        message: "Note content is required",
      });
    }

    const prompt = `
You are an expert technical interview coach.

Analyze the following study note and generate the 15 most important interview questions that are commonly asked in technical interviews.

Rules:
- Generate exactly 15 flashcards.
- Focus on the most frequently asked interview questions.
- Cover all important concepts from the note.
- Questions should be clear, concise, and interview-oriented.
- Answers should be short (2-5 lines), accurate, and easy to remember.
- If the note doesn't contain enough information, infer reasonable interview questions based on the provided topic.
- Return ONLY valid JSON.
- Do not include markdown, explanations, or additional text.

Output Format:

[
  {
    "question": "...",
    "answer": "..."
  }
]

Study Note:
${content}
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
    });

    let text = response.text;

    // Remove markdown if Gemini wraps the JSON
    text = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const flashcards = JSON.parse(text);

    res.json(flashcards);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Unable to generate flashcards",
    });
  }
};
