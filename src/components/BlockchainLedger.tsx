import React from 'react';
import { CreditEvent } from '../types';
import { Hash, Clock, Building2, CheckCircle2, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

interface BlockchainLedgerProps {
  events: CreditEvent[];
}

export const BlockchainLedger: React.FC<BlockchainLedgerProps> = ({ events }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 font-mono">Nhật Ký Giao Dịch Bất Biến</h3>
        <span className="text-[10px] px-2 py-1 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded font-mono">MẠNG: CHÍNH THỨC</span>
      </div>
      
      <div className="relative">
        <div className="absolute left-6 top-4 bottom-4 w-px bg-zinc-800" />
        
        <div className="space-y-6">
          {events.map((event, index) => (
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              key={event.id} 
              className="relative pl-14 group"
            >
              <div className="absolute left-4 top-2 w-4 h-4 rounded-full bg-zinc-900 border-2 border-zinc-700 z-10 group-hover:border-cyan-500 transition-colors" />
              
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 hover:border-zinc-700 transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-zinc-800">
                      <Building2 size={16} className="text-zinc-400" />
                    </div>
                    <div>
                      <p className="text-zinc-200 font-medium text-sm">{event.source}</p>
                      <div className="flex items-center gap-2 text-zinc-500 text-[11px] font-mono mt-1">
                        <Clock size={10} />
                        {new Date(event.timestamp).toLocaleString()}
                      </div>
                    </div>
                  </div>
                  <div className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                    event.impact === 'TICH_CUC' ? 'bg-emerald-500/10 text-emerald-400' : 
                    event.impact === 'TIU_CUC' ? 'bg-rose-500/10 text-rose-400' : 
                    'bg-zinc-500/10 text-zinc-400'
                  }`}>
                    {event.impact.replace('_', ' ')}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4 py-3 border-y border-zinc-800/50">
                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-tighter">Loại sự kiện</p>
                    <p className="text-xs text-zinc-300 font-mono mt-0.5">{event.type.replace('_', ' ')}</p>
                  </div>
                  {event.amount && (
                    <div>
                      <p className="text-[10px] text-zinc-500 uppercase tracking-tighter">Giá trị</p>
                      <p className="text-xs text-zinc-300 font-mono mt-0.5">${event.amount.toLocaleString()}</p>
                    </div>
                  )}
                </div>

                <div className="mt-4 flex items-center gap-4 text-[10px] font-mono">
                  <div className="flex-1 min-w-0">
                    <p className="text-zinc-600 mb-1">MÃ GIAO DỊCH (HASH)</p>
                    <div className="flex items-center gap-1 text-zinc-400 truncate">
                      <Hash size={10} />
                      {event.hash}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-zinc-600 mb-1">KHỐI TRƯỚC ĐÓ</p>
                    <div className="flex items-center gap-1 text-zinc-400 truncate">
                      <Hash size={10} />
                      {event.previousHash}
                    </div>
                  </div>
                  <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
