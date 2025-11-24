export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-800/20 blur-3xl animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="opacity-0 translate-x-[-50px] transition-all duration-1000 ease-out delay-300 lg:delay-0 animate-fade-in-left">
          <h1 className="text-6xl lg:text-8xl font-black bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
            NEXLIFY
          </h1>
          <p className="text-2xl lg:text-3xl text-gray-300 mt-8 font-light">
            DevOps Pipeline as a Service
          </p>
          <p className="text-xl text-gray-400 mt-6 max-w-2xl">
            Fuel your development velocity with expert, done-for-you pipeline optimization. From infrastructure monitoring and automated deployments to performance analytics — we handle it all.
          </p>
          <button className="mt-12 px-12 py-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xl font-bold rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300 hover:shadow-3xl">
            Get Early Access →
          </button>
        </div>

        <div className="opacity-0 scale-90 transition-all duration-1000 ease-out delay-600 animate-fade-in-right">
          <div className="bg-black/40 backdrop-blur-2xl rounded-3xl p-10 border border-purple-500/30 shadow-2xl">
            <pre className="text-cyan-400 text-sm font-mono leading-relaxed">
{`name: "Accelerated CI/CD Pipeline"

on: [push, pull_request]

jobs:
  nexlify_optimize:
    runs-on: nexlify-runners
    steps:
      - uses: nexlify/pipeline-accelerator@v3
      - name: "AI-Powered Analytics"
        with:
          mode: "intelligent"`}
            </pre>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fade-in-left {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fade-in-right {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in-left {
          animation: fade-in-left 1s ease-out forwards;
        }
        .animate-fade-in-right {
          animation: fade-in-right 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
