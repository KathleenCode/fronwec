import EquityCanvas from "@/components/EquityScene";

export default function Home() {
  return (
    /* Changed to a fixed height with a max-limit to keep it compact */
    <main className="flex h-screen max-h-[750px] min-h-[600px] flex-col bg-[#020205] text-white overflow-hidden selection:bg-cyan-500/30">
      <style dangerouslySetInnerHTML={{ __html: `
        .text-shimmer {
          background: linear-gradient(90deg, #22d3ee, #fff, #22d3ee);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 5s linear infinite;
        }
        @keyframes shimmer { to { background-position: 200% center; } }
        .compact-glass {
          background: rgba(255, 255, 255, 0.02);
          backdrop-blur: 8px;
          border-left: 2px solid #ec4899;
        }
      `}} />

      <div className="flex-grow flex relative">
        {/* COMPACT OVERLAY */}
        <div className="absolute top-0 left-0 h-full w-full md:w-[35%] lg:w-[30%] z-20 p-8 md:p-12 flex flex-col justify-center pointer-events-none">
          <div className="mb-6 pointer-events-auto"> 
            <h1 className="text-3xl md:text-4xl font-black tracking-tight uppercase leading-tight">
              <span className="text-shimmer block">REDEFINING</span>
              <span className="text-zinc-500 tracking-[-0.02em]">ACCESS</span>
            </h1>
          </div>
          
          <div className="transform -rotate-[8deg] origin-left pointer-events-auto max-w-[260px]">
            <div className="compact-glass p-5 shadow-2xl">
              <p className="font-serif text-sm leading-relaxed text-zinc-400 italic">
                "To build a gate is human, but to build a stair is divine. 
                Height is not a gift of birth, but a song sung by the supports we lend."
              </p>
            </div>
          </div>
        </div>

        {/* THE ART (Matched to container height) */}
        <div className="w-full h-full">
           <EquityCanvas />
           <div className="absolute inset-0 bg-gradient-to-r from-[#020205] via-[#020205]/20 to-transparent z-10 pointer-events-none" />
        </div>
      </div>

      <footer className="relative z-30 p-4 border-t border-white/5 bg-black/40 backdrop-blur-md flex justify-between items-center px-10">
        <p className="text-[9px] font-mono tracking-[0.3em] text-zinc-600 uppercase">Logic: Support &gt; Equality</p>
        <div className="h-1 w-12 bg-zinc-800 rounded-full overflow-hidden">
          <div className="h-full w-1/2 bg-cyan-500 animate-pulse" />
        </div>
      </footer>
    </main>
  );
}