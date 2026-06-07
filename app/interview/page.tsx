"use client";

import { useState } from "react";

export default function InterviewPage() {
  const [major, setMajor] = useState("");
  const [questions, setQuestions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const generateQuestions = async () => {
    if (!major.trim()) return;

    setLoading(true);
    setQuestions([]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: `请为${major}生成5个面试问题，每个一行，不要编号，不要解释`,
        }),
      });

      const data = await res.json();

      const list = (data.answer || "")
        .split("\n")
        .filter((q: string) => q.trim() !== "");

      setQuestions(list);
    } catch (err) {
      setQuestions(["Error generating questions"]);
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">
        Interview Generator
      </h1>

      <input
        className="w-full border p-3 rounded-lg"
        placeholder="Enter major"
        value={major}
        onChange={(e) => setMajor(e.target.value)}
      />

      <button
        onClick={generateQuestions}
        className="mt-4 px-6 py-3 bg-green-600 text-white rounded-lg"
      >
        {loading ? "Generating..." : "Generate Questions"}
      </button>

      {questions.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-2">
            Interview Questions
          </h2>

          <ul className="list-disc pl-6">
            {questions.map((q, i) => (
              <li key={i}>{q}</li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}