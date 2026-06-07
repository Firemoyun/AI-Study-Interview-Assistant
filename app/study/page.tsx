"use client";

import { useState } from "react";

export default function StudyPage() {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!input.trim()) return;

    setLoading(true);
    setAnswer("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: input }),
      });

      const data = await res.json();
      setAnswer(data.answer || "");
    } catch (err) {
      setAnswer("Error");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">
        Study Assistant
      </h1>

      <input
        className="w-full border p-3 rounded-lg"
        placeholder="Ask your question..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        onClick={askAI}
        className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg"
      >
        {loading ? "Thinking..." : "Ask AI"}
      </button>

      {answer && (
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-2">AI Response</h2>
          <div className="p-4 bg-gray-100 rounded-lg whitespace-pre-wrap">
            {answer}
          </div>
        </div>
      )}
    </main>
  );
}