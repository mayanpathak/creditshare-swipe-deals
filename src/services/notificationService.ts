
import api from './api';
import { Notification } from '../types/api';

export const notificationService = {
  sendNotification: async (userId: string, message: string, type: string): Promise<void> => {
    return api.post('/notifications/send', { userId, message, type });
  },

  getMyNotifications: async (): Promise<Notification[]> => {
    return api.get('/notifications/my-notifications');
  },
};
