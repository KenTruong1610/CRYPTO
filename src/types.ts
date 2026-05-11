
export interface CreditEvent {
  id: string;
  source: string;
  timestamp: string;
  type: 'THANH_TOAN' | 'KHOAN_VAY' | 'NO_XAU' | 'TRA_CUU';
  amount?: number;
  impact: 'TICH_CUC' | 'TIU_CUC' | 'TRUNG_LAP';
  hash: string;
  previousHash: string;
}

export interface Institution {
  id: string;
  name: string;
  type: 'NGAN_HANG' | 'FINTECH' | 'TMDT' | 'CONG_ICH';
  status: 'DA_XAC_THUC' | 'CHO_DUYET';
  contributionWeight: number; // 0 to 1
}

export interface CreditScore {
  total: number;
  breakdown: {
    history: number; // Lịch sử thanh toán
    limit: number;   // Tỷ lệ sử dụng hạn mức
    age: number;     // Độ tuổi tín dụng
    type: number;    // Loại hình tín dụng
  };
  lastUpdated: string;
}
