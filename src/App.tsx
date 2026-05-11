/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  PlusCircle, 
  Settings, 
  Bell, 
  User, 
  Shield, 
  Activity, 
  Wallet, 
  Search,
  ChevronDown,
  LayoutDashboard,
  Link as LinkIcon,
  ShieldCheck
} from 'lucide-react';
import { ScoreGauge } from './components/ScoreGauge';
import { BlockchainLedger } from './components/BlockchainLedger';
import { InstitutionStatus } from './components/InstitutionStatus';
import { ProofOfCredit } from './components/ProofOfCredit';
import { MOCK_INSTITUTIONS, MOCK_LEDGER } from './constants';
import { motion } from 'motion/react';

export default function App() {
  const [activeScore] = useState(784);
  const [isFrozen, setIsFrozen] = useState(false);
  const [showInsight, setShowInsight] = useState(false);
  const [inquiryCount, setInquiryCount] = useState(2);

  const handleInquiry = () => {
    const confirm = window.confirm("Tra cứu điểm tín dụng mới có thể ảnh hưởng nhẹ đến điểm số của bạn (-2 điểm). Bạn có muốn tiếp tục?");
    if (confirm) {
      setInquiryCount(prev => prev + 1);
      alert("Yêu cầu tra cứu đã được gửi đến mạng lưới đồng thuận. Kết quả sẽ được cập nhật sau vài giây.");
    }
  };

  const toggleFreeze = () => {
    setIsFrozen(!isFrozen);
    alert(isFrozen ? "Tài khoản đã được mở khóa. Các tổ chức tín dụng hiện có thể truy cập hồ sơ của bạn." : "Tài khoản đã được đóng băng thành công. Mọi yêu cầu truy cập mới sẽ bị từ chối.");
  };

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 font-sans selection:bg-cyan-500/30">
      {/* Top Navigation */}
      <nav className="h-16 border-b border-zinc-800 bg-zinc-950/50 backdrop-blur-md sticky top-0 z-40 flex items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-cyan-600 rounded-lg flex items-center justify-center font-bold text-lg shadow-[0_0_15px_rgba(8,145,178,0.3)]">
              <ShieldCheck size={20} />
            </div>
            <span className="font-bold tracking-tighter text-xl">DeCredit</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 text-cyan-400 font-medium text-sm">
              <LayoutDashboard size={16} />
              <span>Bảng Điều Khiển</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer text-sm font-medium">
              <LinkIcon size={16} />
              <span>Nút Mạng</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer text-sm font-medium" onClick={() => alert("Hệ thống đang sử dụng mã hóa AES-256 và Proof of Credit.")}>
              <Shield size={16} />
              <span>Bảo Mật</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center bg-zinc-900 border border-zinc-800 rounded-full px-4 py-1.5 gap-3">
            <Search size={14} className="text-zinc-500" />
            <input 
              type="text" 
              placeholder="Tìm mã giao dịch..." 
              className="bg-transparent border-none text-xs focus:ring-0 w-32 placeholder:text-zinc-600 font-mono"
            />
          </div>
          <button className="p-2 text-zinc-400 hover:text-white transition-colors relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-zinc-950" />
          </button>
          <div className="h-8 w-px bg-zinc-800 mx-2" />
          <div className="flex items-center gap-3 pl-2">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-bold leading-tight">Nút_Chủ_712</p>
              <p className="text-[10px] text-zinc-500 font-mono">0x71c...8976</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-zinc-800 border-2 border-zinc-700 flex items-center justify-center text-zinc-400 overflow-hidden">
              <User size={20} />
            </div>
          </div>
        </div>
      </nav>

      <main className="p-6 max-w-[1600px] mx-auto grid grid-cols-1 xl:grid-cols-12 gap-6">
        
        {/* Left Column - User Profile & Summary */}
        <div className="xl:col-span-3 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-6 border rounded-[2rem] relative overflow-hidden transition-all duration-500 ${isFrozen ? 'bg-zinc-950 border-rose-500/20' : 'bg-zinc-900/50 border-zinc-800'}`}
          >
            {isFrozen && (
              <div className="absolute inset-0 bg-rose-500/5 pointer-events-none animate-pulse" />
            )}
            
            <div className="relative z-10">
              <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest mb-4">Tổng Quan Danh Tính</p>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 flex items-center justify-center text-zinc-300">
                  <User size={32} />
                </div>
                <div>
                  <h1 className="text-xl font-bold tracking-tight">Alex Sterling</h1>
                  <p className={`text-xs font-mono mt-1 ${isFrozen ? 'text-rose-400' : 'text-emerald-400'}`}>
                    {isFrozen ? 'Trạng thái: Đang Đóng Băng' : 'Trạng thái: Đã Xác Thực'}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-zinc-950/50 rounded-2xl border border-zinc-800/50">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-tighter">Tài Sản Xác Minh</span>
                    <Wallet size={12} className="text-cyan-500" />
                  </div>
                  <p className="text-lg font-bold font-mono">$142,500.00</p>
                </div>
                
                <div className="p-4 bg-zinc-950/50 rounded-2xl border border-zinc-800/50">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-tighter">Tỷ Lệ Tín Nhiệm</span>
                    <Activity size={12} className="text-emerald-500" />
                  </div>
                  <p className="text-lg font-bold text-emerald-400">TỐI ƯU</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-zinc-800/50 space-y-2">
                <button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="text-sm text-zinc-400 group-hover:text-zinc-200">Lịch Sử Tài Khoản</span>
                  <ChevronDown size={16} className="-rotate-90 text-zinc-600" />
                </button>
                <button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="text-sm text-zinc-400 group-hover:text-zinc-200">Ví Đã Liên Kết</span>
                  <ChevronDown size={16} className="-rotate-90 text-zinc-600" />
                </button>
                <button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="text-sm text-zinc-400 group-hover:text-zinc-200">Cài Đặt</span>
                  <Settings size={16} className="text-zinc-600" />
                </button>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-1 rounded-[2rem] bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-950 border border-zinc-800"
          >
            <div className="p-6">
              <h3 className="text-[10px] text-zinc-500 uppercase font-black tracking-widest mb-4">Các Nguồn Đồng Thuận</h3>
              <InstitutionStatus institutions={MOCK_INSTITUTIONS} />
            </div>
          </motion.div>
        </div>

        {/* Center Column - Main Scoring & Interactive */}
        <div className="xl:col-span-5 space-y-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 bg-zinc-900 border border-zinc-800 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8">
              <div className="flex items-center gap-2 px-3 py-1 bg-zinc-950 border border-zinc-800 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-bold font-mono text-emerald-500 uppercase tracking-tighter">Đã Cập Nhật</span>
              </div>
            </div>

            <h2 className="text-2xl font-bold tracking-tight mb-8">Điểm Tín Dụng Phi Tập Trung</h2>
            
            <div className="flex flex-col items-center">
              <ScoreGauge score={activeScore} />
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4">
              <div className="p-4 bg-zinc-950/50 rounded-2xl border border-zinc-800">
                <p className="text-[10px] text-zinc-500 font-bold uppercase mb-2">Xu Hướng 30 Ngày</p>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold tracking-tighter">+14</span>
                  <span className="text-[10px] font-bold text-emerald-500 px-1.5 py-0.5 bg-emerald-500/10 rounded">▲ 1.8%</span>
                </div>
              </div>
              <div className="p-4 bg-zinc-950/50 rounded-2xl border border-zinc-800">
                <p className="text-[10px] text-zinc-500 font-bold uppercase mb-2">Xếp Hạng Mạng</p>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold tracking-tighter">Top 4%</span>
                  <span className="text-[10px] font-bold text-cyan-500 px-1.5 py-0.5 bg-cyan-500/10 rounded">XUẤT SẮC</span>
                </div>
              </div>
            </div>

            <ProofOfCredit score={activeScore} />
            
            <div className="mt-8 pt-8 border-t border-zinc-800 grid grid-cols-2 gap-8">
              <div>
                <p className="text-xs font-bold text-zinc-400 mb-4">Bảo Vệ Điểm Số</p>
                <p className="text-[11px] text-zinc-500 leading-relaxed italic">
                  Điểm số được mã hóa và chỉ tính toán lại khi có các khối dữ liệu mới được ký xác nhận bởi mạng lưới.
                </p>
              </div>
              <div>
                <p className="text-xs font-bold text-zinc-400 mb-4">Quản Trị Dữ Liệu</p>
                <p className="text-[11px] text-zinc-500 leading-relaxed italic">
                  Các tổ chức chỉ đóng góp dữ liệu; họ không "sở hữu" điểm của bạn. Bạn nắm quyền kiểm soát truy cập.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div 
              onClick={handleInquiry}
              className="p-6 bg-zinc-900 border border-zinc-800 rounded-[2rem] hover:border-cyan-500/50 transition-colors cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <PlusCircle className="text-cyan-400" />
              </div>
              <h4 className="text-sm font-bold">Tra Cứu</h4>
              <p className="text-[10px] text-zinc-500 mt-1">Kiểm tra tác động tới điểm số ({inquiryCount})</p>
            </div>
            <div 
              onClick={toggleFreeze}
              className={`p-6 border rounded-[2rem] transition-colors cursor-pointer group ${isFrozen ? 'bg-rose-500/10 border-rose-500' : 'bg-zinc-900 border-zinc-800 hover:border-rose-500/50'}`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${isFrozen ? 'bg-rose-500 text-white' : 'bg-orange-500/10 text-orange-400'}`}>
                <Shield />
              </div>
              <h4 className="text-sm font-bold">{isFrozen ? 'Mở Khóa' : 'Đóng Băng'}</h4>
              <p className="text-[10px] text-zinc-500 mt-1">Khóa quyền truy cập hồ sơ</p>
            </div>
            <div 
              onClick={() => setShowInsight(!showInsight)}
              className={`p-6 border rounded-[2rem] transition-colors cursor-pointer group ${showInsight ? 'bg-emerald-500/10 border-emerald-500' : 'bg-zinc-900 border-zinc-800 hover:border-emerald-500/50'}`}
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <LayoutDashboard className="text-emerald-400" />
              </div>
              <h4 className="text-sm font-bold">Phân Tích</h4>
              <p className="text-[10px] text-zinc-500 mt-1">Chi tiết các yếu tố cấu thành</p>
            </div>
          </div>

          {showInsight && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 bg-zinc-900 border border-emerald-500/30 rounded-[2rem]"
            >
              <h4 className="text-sm font-bold mb-4">Các yếu tố ảnh hưởng</h4>
              <div className="space-y-4">
                {[
                  { label: "Lịch sử thanh toán", value: 98, status: "Tốt" },
                  { label: "Sử dụng hạn mức", value: 25, status: "Tốt" },
                  { label: "Độ tuổi tín dụng", value: 5, status: "Trung bình" },
                  { label: "Loại hình vay", value: 3, status: "Tốt" }
                ].map((factor, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-[11px] mb-1">
                      <span className="text-zinc-400">{factor.label}</span>
                      <span className="text-emerald-400 uppercase font-bold">{factor.status}</span>
                    </div>
                    <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500" style={{ width: `${factor.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Right Column - Ledger */}
        <div className="xl:col-span-4">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="h-full min-h-[600px] p-6 bg-zinc-900 border border-zinc-800 rounded-[2.5rem] shadow-xl overflow-y-auto"
          >
            <BlockchainLedger events={MOCK_LEDGER} />
          </motion.div>
        </div>

      </main>

      {/* Footer / Network Stats */}
      <footer className="mt-12 border-t border-zinc-800 p-6 flex flex-wrap items-center justify-between gap-6 text-zinc-500">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-[11px] font-mono uppercase tracking-tighter">Ổn định mạng: 99.99%</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono uppercase tracking-tighter">Độ trễ: 14ms</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono uppercase tracking-tighter">Nút hoạt động: 1,402</span>
          </div>
        </div>
        <div className="text-[11px] font-mono uppercase tracking-tighter overflow-hidden whitespace-nowrap">
          © 2026 DECREDIT PROTOCOL v2.4.1_STABLE • KHỐI HIỆN TẠI: #1,842,901
        </div>
      </footer>
    </div>
  );
}
