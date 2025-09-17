import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white flex flex-col items-center justify-center">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-5xl font-extrabold tracking-wide">Xyntra Portfolio</h1>
        <p className="mt-3 text-lg text-gray-300">
          Innovación | Desarrollo | Inteligencia Artificial
        </p>
      </header>

      {/* Card de ejemplo */}
      <div className="bg-gray-800 rounded-2xl shadow-lg p-6 w-80 text-center">
        <h2 className="text-2xl font-bold mb-4">Proyecto Demo</h2>
        <p className="mb-4 text-gray-400">
          Este es un ejemplo con TailwindCSS en React + Vite.
        </p>
        <button
          onClick={() => setCount((c) => c + 1)}
          className="px-6 py-2 bg-purple-600 rounded-xl hover:bg-purple-700 transition"
        >
          Clicks: {count}
        </button>
      </div>

      {/* Footer */}
      <footer className="mt-10 text-gray-400">
        © {new Date().getFullYear()} Xyntra. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
