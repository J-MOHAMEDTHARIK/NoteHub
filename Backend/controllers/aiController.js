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
You are a study assistant.

Convert the following note into 10 flashcards.

Return ONLY valid JSON.

Format:

[
  {
    "question": "...",
    "answer": "..."
  }
]

Note:
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
