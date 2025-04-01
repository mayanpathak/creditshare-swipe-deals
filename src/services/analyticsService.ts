
import api from './api';
import { User } from '../types/api';

export const analyticsService = {
  getTopUsers: async (): Promise<User[]> => {
    return api.get('/analytics/top-users');
  },

  getOrderTrends: async (): Promise<any> => {
    return api.get('/analytics/order-trends');
  },
};
