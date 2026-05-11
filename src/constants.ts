import { CreditEvent, Institution } from './types';

export const MOCK_INSTITUTIONS: Institution[] = [
  { id: '1', name: 'Ngân hàng Alpha Toàn Cầu', type: 'NGAN_HANG', status: 'DA_XAC_THUC', contributionWeight: 0.4 },
  { id: '2', name: 'Ví Điện Tử NanoPay', type: 'FINTECH', status: 'DA_XAC_THUC', contributionWeight: 0.25 },
  { id: '3', name: 'Sàn TMĐT SwiftShop', type: 'TMDT', status: 'DA_XAC_THUC', contributionWeight: 0.15 },
  { id: '4', name: 'Tổng Công Ty Điện Lực', type: 'CONG_ICH', status: 'DA_XAC_THUC', contributionWeight: 0.2 },
];

export const MOCK_LEDGER: CreditEvent[] = [
  {
    id: 'tx-001',
    source: 'Ngân hàng Alpha Toàn Cầu',
    timestamp: '2026-05-01T10:00:00Z',
    type: 'THANH_TOAN',
    amount: 1200,
    impact: 'TICH_CUC',
    hash: '0x8a2b...f3e1',
    previousHash: '0x0000...0000'
  },
  {
    id: 'tx-002',
    source: 'Ví Điện Tử NanoPay',
    timestamp: '2026-05-05T14:30:00Z',
    type: 'KHOAN_VAY',
    amount: 5000,
    impact: 'TRUNG_LAP',
    hash: '0x4c9d...a7b2',
    previousHash: '0x8a2b...f3e1'
  },
  {
    id: 'tx-003',
    source: 'Sàn TMĐT SwiftShop',
    timestamp: '2026-05-10T09:15:00Z',
    type: 'THANH_TOAN',
    amount: 450,
    impact: 'TICH_CUC',
    hash: '0x2e8f...c9d4',
    previousHash: '0x4c9d...a7b2'
  }
];
