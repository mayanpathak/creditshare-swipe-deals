
import api from './api';
import { Order, OrderCreateRequest } from '../types/api';

export const orderService = {
  createOrder: async (data: OrderCreateRequest): Promise<Order> => {
    return api.post('/orders/create', data);
  },

  exploreOrders: async (): Promise<Order[]> => {
    return api.get('/orders/explore');
  },

  acceptOrder: async (orderId: string): Promise<void> => {
    return api.post('/orders/accept', { orderId });
  },

  cancelOrder: async (orderId: string): Promise<void> => {
    return api.post('/orders/cancel', { orderId });
  },

  cancelAcceptance: async (orderId: string): Promise<void> => {
    return api.post('/orders/cancel-acceptance', { orderId });
  },

  confirmPayment: async (orderId: string): Promise<void> => {
    return api.post('/orders/confirm-payment', { orderId });
  },

  uploadProof: async (orderId: string, proofUrl: string): Promise<void> => {
    return api.post('/orders/upload-proof', { orderId, proofUrl });
  },

  confirmDelivery: async (orderId: string): Promise<void> => {
    return api.post('/orders/confirm-delivery', { orderId });
  },

  getMyOrders: async (): Promise<Order[]> => {
    return api.get('/orders/my-orders');
  },

  getMyAcceptedOrders: async (): Promise<Order[]> => {
    return api.get('/orders/my-accepted-orders');
  },
};
