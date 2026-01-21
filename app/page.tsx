import Counter from "./components/counter";
import WreckingBall from "./components/wrecking-ball";

export default function Home() {
  return (
    <div className="relative min-h-screen font-sans bg-black overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-0">
        <WreckingBall />
      </div>
      
      <main className="relative z-10 flex min-h-screen w-full max-w-3xl mx-auto flex-col items-center justify-start pt-48 sm:pt-64 pb-32 px-16">
        <Counter />
      </main>
    </div>
  );
}
