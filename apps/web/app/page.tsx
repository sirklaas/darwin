export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FF6B6B] via-[#F15BB5] to-[#9B5DE5] flex flex-col items-center justify-center p-8">
      <main className="max-w-2xl text-center">
        <h1 className="text-6xl md:text-8xl font-light text-white mb-6 tracking-tight">
          The Darwin Principle
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-12 font-light">
          Evolve. Compete. Survive.
        </p>
        
        <div className="bg-white/95 backdrop-blur rounded-3xl p-8 md:p-12 shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Coming Soon
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            The ultimate survival game is in development. Get ready to test your instincts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="px-8 py-4 bg-gradient-to-r from-[#FFD93D] to-[#FFB347] text-gray-800 font-bold rounded-xl hover:opacity-90 transition-opacity text-lg"
            >
              Join Waitlist
            </a>
            <a
              href="#"
              className="px-8 py-4 border-2 border-[#9B5DE5] text-[#9B5DE5] font-semibold rounded-xl hover:bg-[#9B5DE5] hover:text-white transition-colors text-lg"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 text-white/80">
          <div>
            <div className="text-4xl font-bold text-white">🧬</div>
            <p className="mt-2 text-sm">Collect Genes</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-white">⚔️</div>
            <p className="mt-2 text-sm">Compete Daily</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-white">🏆</div>
            <p className="mt-2 text-sm">Rise to the Top</p>
          </div>
        </div>
      </main>
    </div>
  );
}
