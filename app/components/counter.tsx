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
    <div>
      <h2>Houses demolished since 01.01.2026</h2>
      <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
      <CountUp
          start={0}
          end={count}
          duration={2}
          separator=","
          preserveValue={true}
        ></CountUp>
        </h1>
    </div>
  );
}
