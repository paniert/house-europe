"use client";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

export default function Counter(): React.ReactNode {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const calculateTime = () => {
      let dif: number = (new Date().getTime() - new Date("2026-01-01").getTime());
      dif = Math.round((dif / 1000) / 60);
      setCount(dif);
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <svg className="absolute w-0 h-0">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" result="turbulence" />
          <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" in="turbulence" result="dark" />
        </filter>
      </svg>
      <div className="absolute -inset-69 -z-10">
        <div
          className="absolute inset-0 opacity-80"
          style={{ background: "radial-gradient(circle at center, black 0%, black 20%, transparent 60%)" }}
        />
        <div
          className="absolute inset-0 opacity-60"
          style={{
            filter: "url(#noise)",
            maskImage: "radial-gradient(circle at center, black 0%, black 30%, transparent 50%)",
            WebkitMaskImage: "radial-gradient(circle at center, black 0%, black 30%, transparent 50%)"
          }}
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-0 text-center sm:items-start sm:text-left p-6">
        <h1 className="text-8xl sm:text-9xl font-semibold leading-none tracking-tight text-white tabular-nums">
          <CountUp
            start={count}
            end={count}
            duration={2}
            separator="."
            preserveValue={true}
          ></CountUp>
        </h1>
      <h2 className="whitespace-nowrap text-s  sm:text-base leading-none tracking-tight text-white/80 sm:pl-1.75">houses demolished in europe since 01.01.2026</h2>

      </div>
    </div>
  );
}
