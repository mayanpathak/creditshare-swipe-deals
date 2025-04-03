
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Order, OrderCreateRequest } from '../types/api';
import { orderService } from '../services/orderService';

interface OrderContextProps {
  orders: Order[];
  myOrders: Order[];
  myAcceptedOrders: Order[];
  loading: boolean;
  error: string | null;
  createOrder: (orderData: OrderCreateRequest) => Promise<Order | null>;
  getOrders: () => Promise<void>;
  getMyOrders: () => Promise<void>;
  getMyAcceptedOrders: () => Promise<void>;
  acceptOrder: (orderId: string) => Promise<boolean>;
  cancelOrder: (orderId: string) => Promise<boolean>;
  cancelAcceptance: (orderId: string) => Promise<boolean>;
  confirmPayment: (orderId: string) => Promise<boolean>;
  uploadProof: (orderId: string, proofUrl: string) => Promise<boolean>;
  confirmDelivery: (orderId: string) => Promise<boolean>;
}

const OrderContext = createContext<OrderContextProps | undefined>(undefined);

export const useOrders = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrders must be used within an OrderProvider');
  }
  return context;
};

interface OrderProviderProps {
  children: ReactNode;
}

export const OrderProvider = ({ children }: OrderProviderProps) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [myOrders, setMyOrders] = useState<Order[]>([]);
  const [myAcceptedOrders, setMyAcceptedOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getOrders = async () => {
    try {
      setLoading(true);
      const fetchedOrders = await orderService.getOrders();
      setOrders(fetchedOrders);
    } catch (err) {
      setError('Failed to fetch orders');
      console.error('Error fetching orders:', err);
    } finally {
      setLoading(false);
    }
  };

  const getMyOrders = async () => {
    try {
      setLoading(true);
      const fetchedOrders = await orderService.getMyOrders();
      setMyOrders(fetchedOrders);
    } catch (err) {
      setError('Failed to fetch your orders');
      console.error('Error fetching my orders:', err);
    } finally {
      setLoading(false);
    }
  };

  const getMyAcceptedOrders = async () => {
    try {
      setLoading(true);
      const fetchedOrders = await orderService.getMyAcceptedOrders();
      setMyAcceptedOrders(fetchedOrders);
    } catch (err) {
      setError('Failed to fetch accepted orders');
      console.error('Error fetching accepted orders:', err);
    } finally {
      setLoading(false);
    }
  };

  const createOrder = async (orderData: OrderCreateRequest): Promise<Order | null> => {
    try {
      setLoading(true);
      const newOrder = await orderService.createOrder(orderData);

      // Update the orders list with the new order
      setOrders((prevOrders) => [...prevOrders, newOrder]);
      
      // Also update myOrders since the current user created this order
      setMyOrders((prevOrders) => [...prevOrders, newOrder]);
      
      return newOrder;
    } catch (err) {
      setError('Failed to create order');
      console.error('Error creating order:', err);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const acceptOrder = async (orderId: string): Promise<boolean> => {
    try {
      setLoading(true);
      const success = await orderService.acceptOrder(orderId);
      
      if (success) {
        // Update the order status in all relevant lists
        const updatedOrders = orders.map(order => 
          order.id === orderId ? { ...order, status: 'accepted' as const, cardHolderId: 'current-user-id' } : order
        );
        setOrders(updatedOrders);
        
        const updatedMyAcceptedOrders = [...myAcceptedOrders, 
          ...orders.filter(order => order.id === orderId).map(order => ({ 
            ...order, 
            status: 'accepted' as const, 
            cardHolderId: 'current-user-id' 
          }))
        ];
        setMyAcceptedOrders(updatedMyAcceptedOrders);
      }
      
      return success;
    } catch (err) {
      setError('Failed to accept order');
      console.error('Error accepting order:', err);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const cancelOrder = async (orderId: string): Promise<boolean> => {
    try {
      setLoading(true);
      const success = await orderService.cancelOrder(orderId);
      
      if (success) {
        // Update the order status in all relevant lists
        const updatedOrders = orders.map(order => 
          order.id === orderId ? { ...order, status: 'cancelled' as const } : order
        );
        setOrders(updatedOrders);
        
        const updatedMyOrders = myOrders.map(order => 
          order.id === orderId ? { ...order, status: 'cancelled' as const } : order
        );
        setMyOrders(updatedMyOrders);
      }
      
      return success;
    } catch (err) {
      setError('Failed to cancel order');
      console.error('Error cancelling order:', err);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const cancelAcceptance = async (orderId: string): Promise<boolean> => {
    try {
      setLoading(true);
      const success = await orderService.cancelAcceptance(orderId);
      
      if (success) {
        // Update the order status in all relevant lists
        const updatedOrders = orders.map(order => 
          order.id === orderId ? { ...order, status: 'created' as const, cardHolderId: undefined } : order
        );
        setOrders(updatedOrders);
        
        // Remove from accepted orders
        const updatedMyAcceptedOrders = myAcceptedOrders.filter(order => order.id !== orderId);
        setMyAcceptedOrders(updatedMyAcceptedOrders);
        
        // Update in myOrders if present
        const updatedMyOrders = myOrders.map(order => 
          order.id === orderId ? { ...order, status: 'created' as const, cardHolderId: undefined } : order
        );
        setMyOrders(updatedMyOrders);
      }
      
      return success;
    } catch (err) {
      setError('Failed to cancel acceptance');
      console.error('Error cancelling acceptance:', err);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const confirmPayment = async (orderId: string): Promise<boolean> => {
    try {
      setLoading(true);
      const success = await orderService.confirmPayment(orderId);
      
      if (success) {
        // Update the order status in all relevant lists
        const updatedOrders = orders.map(order => 
          order.id === orderId ? { ...order, status: 'paid' as const } : order
        );
        setOrders(updatedOrders);
        
        const updatedMyOrders = myOrders.map(order => 
          order.id === orderId ? { ...order, status: 'paid' as const } : order
        );
        setMyOrders(updatedMyOrders);
        
        const updatedMyAcceptedOrders = myAcceptedOrders.map(order => 
          order.id === orderId ? { ...order, status: 'paid' as const } : order
        );
        setMyAcceptedOrders(updatedMyAcceptedOrders);
      }
      
      return success;
    } catch (err) {
      setError('Failed to confirm payment');
      console.error('Error confirming payment:', err);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const uploadProof = async (orderId: string, proofUrl: string): Promise<boolean> => {
    try {
      setLoading(true);
      const success = await orderService.uploadProof(orderId, proofUrl);
      
      if (success) {
        // Update the proof URL in all relevant lists
        const updatedOrders = orders.map(order => 
          order.id === orderId ? { ...order, paymentProof: proofUrl } : order
        );
        setOrders(updatedOrders);
        
        const updatedMyOrders = myOrders.map(order => 
          order.id === orderId ? { ...order, paymentProof: proofUrl } : order
        );
        setMyOrders(updatedMyOrders);
        
        const updatedMyAcceptedOrders = myAcceptedOrders.map(order => 
          order.id === orderId ? { ...order, paymentProof: proofUrl } : order
        );
        setMyAcceptedOrders(updatedMyAcceptedOrders);
      }
      
      return success;
    } catch (err) {
      setError('Failed to upload proof');
      console.error('Error uploading proof:', err);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const confirmDelivery = async (orderId: string): Promise<boolean> => {
    try {
      setLoading(true);
      const success = await orderService.confirmDelivery(orderId);
      
      if (success) {
        // Update the order status in all relevant lists
        const updatedOrders = orders.map(order => 
          order.id === orderId ? { ...order, status: 'completed' as const } : order
        );
        setOrders(updatedOrders);
        
        const updatedMyOrders = myOrders.map(order => 
          order.id === orderId ? { ...order, status: 'completed' as const } : order
        );
        setMyOrders(updatedMyOrders);
        
        const updatedMyAcceptedOrders = myAcceptedOrders.map(order => 
          order.id === orderId ? { ...order, status: 'completed' as const } : order
        );
        setMyAcceptedOrders(updatedMyAcceptedOrders);
      }
      
      return success;
    } catch (err) {
      setError('Failed to confirm delivery');
      console.error('Error confirming delivery:', err);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return (
    <OrderContext.Provider value={{
      orders,
      myOrders,
      myAcceptedOrders,
      loading,
      error,
      createOrder,
      getOrders,
      getMyOrders,
      getMyAcceptedOrders,
      acceptOrder,
      cancelOrder,
      cancelAcceptance,
      confirmPayment,
      uploadProof,
      confirmDelivery
    }}>
      {children}
    </OrderContext.Provider>
  );
};
