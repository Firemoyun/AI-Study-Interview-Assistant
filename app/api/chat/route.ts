export async function POST(req: Request) {
  try {
    const { question } = await req.json();

    if (!question) {
      return Response.json({ answer: "No question provided" });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return Response.json({ answer: "Missing API Key" });
    }

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [
                {
                  text: `请用2-3行简洁回答:${question}`,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await res.json();


    const text =
      data?.candidates?.[0]?.content?.parts?.[0]?.text;

    return Response.json({
      answer: text || "No response from AI",
    });

  } catch (err) {
    console.error("API ERROR:", err);

    return Response.json({
      answer: "Server Error",
    });
  }
}