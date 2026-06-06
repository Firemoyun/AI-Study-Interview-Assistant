"use client";

import { useState } from "react";

export default function InterviewPage() {
  const [job, setJob] = useState("");
  const [questions, setQuestions] = useState<string[]>([]);

  const generateQuestions = () => {
    if (job.trim() === "") {
      alert("Please enter a job position.");
      return;
    }

    setQuestions([
      "What is the difference between TCP and UDP?",
      "What is SQL Injection and how can it be prevented?",
      "Explain the OSI 7-Layer Model.",
      "What is the difference between HTTP and HTTPS?",
      "What is the purpose of a database index?"
    ]);
  };

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">
        Interview Generator
      </h1>

      <input
        type="text"
        value={job}
        onChange={(e) => setJob(e.target.value)}
        placeholder="Enter job position..."
        className="w-full border p-3 rounded-lg"
      />

      <button
        onClick={generateQuestions}
        className="mt-4 px-6 py-3 bg-green-600 text-white rounded-lg"
      >
        Generate Questions
      </button>

      {questions.length > 0 && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">
            Interview Questions for {job}
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            {questions.map((question, index) => (
              <li key={index}>{question}</li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}