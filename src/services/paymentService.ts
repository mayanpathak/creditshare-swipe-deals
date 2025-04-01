
import api from './api';
import { PaymentTransaction } from '../types/api';

export const paymentService = {
  initiatePayment: async (amount: number, orderId: string): Promise<any> => {
    return api.post('/payments/initiate', { amount, orderId });
  },

  requestRefund: async (transactionId: string, reason: string): Promise<void> => {
    return api.post('/payments/refund', { transactionId, reason });
  },

  getTransactions: async (): Promise<PaymentTransaction[]> => {
    return api.get('/payments/transactions');
  },

  withdrawEarnings: async (amount: number, accountDetails: any): Promise<void> => {
    return api.post('/payments/withdraw', { amount, accountDetails });
  },
};
