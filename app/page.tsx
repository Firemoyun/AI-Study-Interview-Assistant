export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-5xl font-bold mb-4">
        AI Study & Interview Assistant
      </h1>

      <p className="text-lg text-gray-600 mb-8">
        Learning and Interview Preparation Platform
      </p>

      <div className="flex gap-4">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg">
          Study Mode
        </button>

        <button className="px-6 py-3 bg-green-600 text-white rounded-lg">
          Interview Mode
        </button>
      </div>
    </main>
  );
}