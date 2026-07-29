"use client";

import { useState } from "react";

export default function CreatePage() {
  const [idea, setIdea] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [model, setModel] = useState("");

  const handleGenerate = async () => {
    if (!idea.trim()) {
      alert("Please enter your startup idea first.");
      return;
    }

    try {
      setLoading(true);
      setResult("");
      setModel("");

      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idea,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.details
            ? data.details.join("\n")
            : (data.error || "Failed to generate business plan")
        );
      }

      setResult(data.result);
      setModel(data.model || "");

    } catch (error: any) {
      console.error(error);

      setResult(
        `❌ Error:\n\n${error.message}`
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-6 py-10 text-white">
      <div className="w-full max-w-4xl rounded-2xl border border-white/10 bg-slate-900 p-8 shadow-xl">

        <h1 className="mb-2 text-4xl font-bold">
          Describe your Startup
        </h1>

        <p className="mb-6 text-gray-400">
          Enter your startup idea and LaunchPilot AI will generate a complete business plan using AI.
        </p>

        <textarea
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          className="
            h-56
            w-full
            rounded-xl
            border
            border-slate-700
            bg-slate-800
            p-4
            text-white
            outline-none
            transition
            focus:border-cyan-500
          "
          placeholder="Example: An AI platform that helps farmers detect crop diseases using drone images..."
        />

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="
            mt-6
            w-full
            rounded-xl
            bg-cyan-500
            py-4
            font-semibold
            text-black
            transition
            hover:bg-cyan-400
            disabled:opacity-50
          "
        >
          {loading ? "Generating..." : "🚀 Generate with AI"}
        </button>

        {model && (
          <p className="mt-4 text-sm text-green-400">
            ✅ Generated using: {model}
          </p>
        )}

        {result && (
          <div
            className="
              mt-8
              rounded-xl
              border
              border-slate-700
              bg-slate-800
              p-6
              whitespace-pre-wrap
              leading-7
              overflow-auto
            "
          >
            <h2 className="mb-4 text-2xl font-bold">
              Your Business Plan
            </h2>

            <div className="text-gray-100">
              {result}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
