'use client';

import { useEffect, useState } from 'react';

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate?: Date;
  className?: string;
}

export default function CountdownTimer({ 
  targetDate,
  className = '' 
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ hours: 23, minutes: 45, seconds: 12 });

  useEffect(() => {
    // Se não há targetDate, usar valores fixos para demonstração
    if (!targetDate) {
      return;
    }

    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setTimeLeft({ hours, minutes, seconds });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className={`grid grid-cols-4 gap-4 text-center ${className}`}>
      <div className="bg-gradient-to-br from-red-500 to-red-600 p-4 rounded-xl animate-pulse-glow">
        <div className="text-3xl font-bold text-white">{timeLeft.hours.toString().padStart(2, '0')}</div>
        <div className="text-sm text-red-100">HORAS</div>
      </div>
      <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-xl animate-pulse-glow">
        <div className="text-3xl font-bold text-white">{timeLeft.minutes.toString().padStart(2, '0')}</div>
        <div className="text-sm text-orange-100">MINUTOS</div>
      </div>
      <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-4 rounded-xl animate-pulse-glow">
        <div className="text-3xl font-bold text-white">{timeLeft.seconds.toString().padStart(2, '0')}</div>
        <div className="text-sm text-yellow-100">SEGUNDOS</div>
      </div>
      <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-xl animate-pulse-glow">
        <div className="text-3xl font-bold text-white">98</div>
        <div className="text-sm text-green-100">VAGAS</div>
      </div>
    </div>
  );
}