import React from 'react';
import { motion } from 'motion/react';

interface ScoreGaugeProps {
  score: number;
}

export const ScoreGauge: React.FC<ScoreGaugeProps> = ({ score }) => {
  const percentage = (score / 850) * 100;
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const getScoreColor = (s: number) => {
    if (s >= 750) return '#22d3ee'; // Cyan
    if (s >= 650) return '#10b981'; // Emerald
    if (s >= 550) return '#f59e0b'; // Amber
    return '#ef4444'; // Red
  };

  return (
    <div className="relative flex flex-col items-center justify-center p-8 bg-zinc-900/40 rounded-3xl border border-zinc-800/50">
      <svg className="w-48 h-48 transform -rotate-90">
        {/* Background circle */}
        <circle
          cx="96"
          cy="96"
          r={radius}
          stroke="currentColor"
          strokeWidth="12"
          fill="transparent"
          className="text-zinc-800"
        />
        {/* Progress circle */}
        <motion.circle
          cx="96"
          cy="96"
          r={radius}
          stroke={getScoreColor(score)}
          strokeWidth="12"
          fill="transparent"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          strokeLinecap="round"
        />
      </svg>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-5xl font-bold text-zinc-100 font-mono tracking-tighter"
        >
          {score}
        </motion.span>
        <span className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold mt-1">Điểm Tin Cậy Tổng Hợp</span>
      </div>

      <div className="mt-8 grid grid-cols-4 w-full gap-1">
        {[...Array(4)].map((_, i) => (
          <div 
            key={i} 
            className={`h-1.5 rounded-full ${
              (i === 0 && score < 550) ? 'bg-rose-500' :
              (i === 1 && score >= 550 && score < 650) ? 'bg-amber-500' :
              (i === 2 && score >= 650 && score < 750) ? 'bg-emerald-500' :
              (i === 3 && score >= 750) ? 'bg-cyan-500' :
              'bg-zinc-800'
            }`}
          />
        ))}
      </div>
      <div className="flex justify-between w-full mt-2 text-[9px] text-zinc-500 font-bold uppercase tracking-tight">
        <span>Kém</span>
        <span>Trung bình</span>
        <span>Tốt</span>
        <span>Xuất sắc</span>
      </div>
    </div>
  );
};
