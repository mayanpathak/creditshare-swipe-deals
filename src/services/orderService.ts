
import api from './api';
import { Order, OrderCreateRequest } from '../types/api';

export const orderService = {
  createOrder: async (data: OrderCreateRequest): Promise<Order> => {
    return api.post('/orders/create', data);
  },

  getOrders: async (): Promise<Order[]> => {
    return api.get('/orders/explore');
  },

  acceptOrder: async (orderId: string): Promise<boolean> => {
    await api.post('/orders/accept', { orderId });
    return true; // Return boolean to match the context expectations
  },

  cancelOrder: async (orderId: string): Promise<boolean> => {
    await api.post('/orders/cancel', { orderId });
    return true; // Return boolean to match the context expectations
  },

  cancelAcceptance: async (orderId: string): Promise<boolean> => {
    await api.post('/orders/cancel-acceptance', { orderId });
    return true; // Return boolean to match the context expectations
  },

  confirmPayment: async (orderId: string): Promise<boolean> => {
    await api.post('/orders/confirm-payment', { orderId });
    return true; // Return boolean to match the context expectations
  },

  uploadProof: async (orderId: string, proofUrl: string): Promise<boolean> => {
    await api.post('/orders/upload-proof', { orderId, proofUrl });
    return true; // Return boolean to match the context expectations
  },

  confirmDelivery: async (orderId: string): Promise<boolean> => {
    await api.post('/orders/confirm-delivery', { orderId });
    return true; // Return boolean to match the context expectations
  },

  getMyOrders: async (): Promise<Order[]> => {
    return api.get('/orders/my-orders');
  },

  getMyAcceptedOrders: async (): Promise<Order[]> => {
    return api.get('/orders/my-accepted-orders');
  },
};
