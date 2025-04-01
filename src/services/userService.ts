
import api from './api';
import { User } from '../types/api';

export const userService = {
  getUserProfile: async (userId: string): Promise<User> => {
    return api.get(`/user/${userId}`);
  },

  updateUserProfile: async (data: any): Promise<User> => {
    return api.put('/user/update', data);
  },

  uploadKycDocuments: async (formData: FormData): Promise<any> => {
    return api.post('/user/kyc-upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },

  getTrustScore: async (): Promise<{ score: number }> => {
    return api.get('/user/trust-score');
  },

  inviteUser: async (email: string): Promise<void> => {
    return api.post('/user/invite', { email });
  },
};
