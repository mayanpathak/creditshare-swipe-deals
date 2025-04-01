
import api from './api';
import { Dispute } from '../types/api';

export const disputeService = {
  raiseDispute: async (orderId: string, issue: string): Promise<Dispute> => {
    return api.post('/disputes/raise', { orderId, issue });
  },

  getDispute: async (disputeId: string): Promise<Dispute> => {
    return api.get(`/disputes/${disputeId}`);
  },

  resolveDispute: async (disputeId: string, resolution: string): Promise<void> => {
    return api.post('/disputes/resolve', { disputeId, resolution });
  },
};
