export default function InterviewPage() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">
        Interview Generator
      </h1>

      <input
        className="w-full border p-3 rounded-lg"
        placeholder="Enter job position..."
      />

      <button className="mt-4 px-6 py-3 bg-green-600 text-white rounded-lg">
        Generate Questions
      </button>
    </main>
  );
}