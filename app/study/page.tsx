export default function StudyPage() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">
        Study Assistant
      </h1>

      <textarea
        className="w-full border p-3 rounded-lg"
        rows={5}
        placeholder="Ask your study question..."
      />

      <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg">
        Ask AI
      </button>
    </main>
  );
}