
import api from './api';
import { Order, User } from '../types/api';

export const matchingService = {
  getSmartRecommendations: async (): Promise<Order[]> => {
    return api.get('/matching/smart-recommendations');
  },

  getTopTrustedUsers: async (): Promise<User[]> => {
    return api.get('/matching/top-trusted-users');
  },

  getInstantMatches: async (): Promise<Order[]> => {
    return api.get('/matching/instant-matches');
  },
};
