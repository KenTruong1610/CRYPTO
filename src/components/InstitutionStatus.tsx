import React from 'react';
import { Institution } from '../types';
import { ShieldCheck, Clock8 } from 'lucide-react';

interface InstitutionStatusProps {
  institutions: Institution[];
}

export const InstitutionStatus: React.FC<InstitutionStatusProps> = ({ institutions }) => {
  return (
    <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-2xl p-6">
      <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-6">Nút Đồng Thuận Trong Mạng</h3>
      
      <div className="space-y-4">
        {institutions.map((inst) => (
          <div key={inst.id} className="flex items-center justify-between group">
            <div className="flex items-center gap-3">
              <div className={`w-2 h-2 rounded-full ${inst.status === 'DA_XAC_THUC' ? 'bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.5)]' : 'bg-amber-500'}`} />
              <div>
                <p className="text-sm font-medium text-zinc-200">{inst.name}</p>
                <p className="text-[10px] text-zinc-500 font-mono italic">{inst.type.replace('_', ' ')}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-tighter">Trọng số</p>
                <p className="text-xs text-zinc-300 font-mono">{(inst.contributionWeight * 100).toFixed(0)}%</p>
              </div>
              {inst.status === 'DA_XAC_THUC' ? (
                <ShieldCheck size={16} className="text-cyan-500/50" />
              ) : (
                <Clock8 size={16} className="text-amber-500/50" />
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 pt-6 border-t border-zinc-800 mx-[-1.5rem] px-6 text-[10px] text-zinc-500 leading-relaxed italic">
        * Điểm số được tính toán qua cơ chế đồng thuận Byzantine (BFT) giữa các nút đang hoạt động.
      </div>
    </div>
  );
};
