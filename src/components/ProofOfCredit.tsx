import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Share2, Lock, Copy, CheckCircle, FileText, QrCode } from 'lucide-react';

export const ProofOfCredit: React.FC<{ score: number }> = ({ score }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const proofHash = "0x" + Math.random().toString(16).slice(2, 40).toUpperCase();

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="w-full mt-6 py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl font-bold text-sm tracking-wide transition-all shadow-[0_0_20px_rgba(8,145,178,0.3)] flex items-center justify-center gap-2 group"
      >
        <Share2 size={18} className="group-hover:rotate-12 transition-transform" />
        XUẤT CHỨNG CHỈ TÍN NHIỆM
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <QrCode size={200} />
              </div>

              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                  <Lock size={20} className="text-cyan-400" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white tracking-tight">Bằng Chứng Không Tiết Lộ (ZKP)</h2>
                  <p className="text-xs text-zinc-500 font-mono tracking-tighter uppercase">Chứng chỉ có thể xác thực đã tạo</p>
                </div>
              </div>

              <div className="bg-zinc-950 rounded-2xl p-6 border border-zinc-800 mb-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-1">Chủ sở hữu chứng chỉ</p>
                    <p className="text-zinc-200 font-mono truncate max-w-[200px]">0x71C765...d8976F</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-1">Trạng thái</p>
                    <div className="flex items-center gap-1 text-emerald-400 font-bold text-xs">
                      <CheckCircle size={12} />
                      ĐÃ XÁC THỰC
                    </div>
                  </div>
                </div>

                <div className="py-6 border-y border-zinc-800/50 flex items-center justify-center gap-12">
                  <div className="text-center">
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-2">Điểm xác minh</p>
                    <p className="text-4xl font-bold text-zinc-100 font-mono">{score}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-2">Phân loại</p>
                    <p className="text-4xl font-bold text-cyan-400 font-mono">A+</p>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-2">Mã băm chứng minh (Proof Hash)</p>
                  <div 
                    onClick={handleCopy}
                    className="flex items-center justify-between p-3 bg-zinc-900 border border-zinc-800 rounded-lg cursor-pointer hover:border-zinc-700 transition-all active:scale-[0.98]"
                  >
                    <span className="text-[11px] text-zinc-400 font-mono truncate mr-2">{proofHash}</span>
                    {copied ? <CheckCircle size={14} className="text-emerald-500" /> : <Copy size={14} className="text-zinc-500" />}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-xl font-bold text-xs uppercase tracking-widest transition-all"
                >
                  Đóng
                </button>
                <button className="py-3 bg-white hover:bg-zinc-200 text-black rounded-xl font-bold text-xs uppercase tracking-widest transition-all shadow-[0_10px_20px_rgba(255,255,255,0.1)] flex items-center justify-center gap-2">
                  <FileText size={14} />
                  Tải PDF
                </button>
              </div>

              <p className="mt-6 text-[10px] text-zinc-600 text-center leading-relaxed italic">
                Bằng chứng này xác nhận uy tín tín dụng của bạn mà không tiết lộ lịch sử giao dịch chi tiết.
                Tiêu chuẩn hóa để sử dụng với hầu hết các tổ chức tài chính toàn cầu.
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
