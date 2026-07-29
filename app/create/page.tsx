"use client";

import { useState } from "react";

export default function CreatePage() {
  const [idea, setIdea] = useState("");

  const handleGenerate = () => {
    if (!idea.trim()) {
      alert("Please enter your startup idea first.");
      return;
    }

    console.log("Startup Idea:", idea);

    // هنا سنربط الذكاء الاصطناعي في الخطوة القادمة
  };

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-6 text-white">
      <div className="w-full max-w-2xl rounded-2xl border border-white/10 bg-slate-900 p-8 shadow-xl">

        <h1 className="mb-2 text-4xl font-bold">
          Describe your Startup
        </h1>

        <p className="mb-6 text-gray-400">
          Enter your startup idea and LaunchPilot AI will generate a complete business plan.
        </p>

        <textarea
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          className="h-56 w-full rounded-xl border border-slate-700 bg-slate-800 p-4 text-white outline-none transition focus:border-cyan-500"
          placeholder="Example: An AI platform that helps farmers detect crop diseases using drone images..."
        />

        <button
          onClick={handleGenerate}
          className="mt-6 w-full rounded-xl bg-cyan-500 py-4 font-semibold transition hover:bg-cyan-600"
        >
          🚀 Generate with AI
        </button>

      </div>
    </main>
  );
}
