export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">

        <h1 className="text-6xl font-extrabold">
          LaunchPilot <span className="text-cyan-400">AI</span>
        </h1>

        <p className="mt-6 max-w-2xl text-xl text-gray-300">
          Turn your startup idea into a launch-ready business using Artificial Intelligence.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold hover:bg-cyan-600">
            Get Started
          </button>

          <button className="rounded-xl border border-gray-600 px-8 py-4 hover:bg-white/10">
            Learn More
          </button>
        </div>

      </div>
    </main>
  );
}