
import React, { createContext, useContext, useState } from 'react';
import { Order, OrderCreateRequest } from '../types/api';
import { orderService } from '../services/orderService';
import { toast } from '../hooks/use-toast';
import { useAuth } from './AuthContext';

interface OrderContextType {
  orders: Order[];
  acceptedOrders: Order[];
  isLoading: boolean;
  createOrder: (data: OrderCreateRequest) => Promise<Order>;
  exploreOrders: () => Promise<Order[]>;
  acceptOrder: (orderId: string) => Promise<void>;
  cancelOrder: (orderId: string) => Promise<void>;
  cancelAcceptance: (orderId: string) => Promise<void>;
  confirmPayment: (orderId: string) => Promise<void>;
  uploadProof: (orderId: string, proofUrl: string) => Promise<void>;
  confirmDelivery: (orderId: string) => Promise<void>;
  fetchMyOrders: () => Promise<void>;
  fetchMyAcceptedOrders: () => Promise<void>;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider = ({ children }: { children: React.ReactNode }) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [acceptedOrders, setAcceptedOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();

  const createOrder = async (data: OrderCreateRequest) => {
    setIsLoading(true);
    try {
      const newOrder = await orderService.createOrder(data);
      setOrders([newOrder, ...orders]);
      toast({
        title: "Order created",
        description: "Your order has been successfully created.",
      });
      return newOrder;
    } catch (error) {
      console.error('Order creation failed:', error);
      toast({
        title: "Order creation failed",
        description: "Please try again later.",
        variant: "destructive",
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const exploreOrders = async () => {
    setIsLoading(true);
    try {
      const availableOrders = await orderService.exploreOrders();
      return availableOrders;
    } catch (error) {
      console.error('Failed to fetch available orders:', error);
      toast({
        title: "Failed to load orders",
        description: "Please try again later.",
        variant: "destructive",
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const acceptOrder = async (orderId: string) => {
    setIsLoading(true);
    try {
      await orderService.acceptOrder(orderId);
      // Update the orders list
      const updatedOrders = orders.map(order => 
        order.id === orderId ? { ...order, status: 'accepted', cardHolderId: user?.id } : order
      );
      setOrders(updatedOrders);
      toast({
        title: "Order accepted",
        description: "You have successfully accepted this order.",
      });
    } catch (error) {
      console.error('Order acceptance failed:', error);
      toast({
        title: "Failed to accept order",
        description: "Please try again later.",
        variant: "destructive",
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const cancelOrder = async (orderId: string) => {
    setIsLoading(true);
    try {
      await orderService.cancelOrder(orderId);
      // Update the orders list
      const updatedOrders = orders.map(order => 
        order.id === orderId ? { ...order, status: 'cancelled' } : order
      );
      setOrders(updatedOrders);
      toast({
        title: "Order cancelled",
        description: "Your order has been cancelled.",
      });
    } catch (error) {
      console.error('Order cancellation failed:', error);
      toast({
        title: "Failed to cancel order",
        description: "Please try again later.",
        variant: "destructive",
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const cancelAcceptance = async (orderId: string) => {
    setIsLoading(true);
    try {
      await orderService.cancelAcceptance(orderId);
      // Update the orders list
      const updatedOrders = orders.map(order => 
        order.id === orderId ? { ...order, status: 'created', cardHolderId: undefined } : order
      );
      setOrders(updatedOrders);
      toast({
        title: "Acceptance cancelled",
        description: "You have cancelled your acceptance of this order.",
      });
    } catch (error) {
      console.error('Acceptance cancellation failed:', error);
      toast({
        title: "Failed to cancel acceptance",
        description: "Please try again later.",
        variant: "destructive",
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const confirmPayment = async (orderId: string) => {
    setIsLoading(true);
    try {
      await orderService.confirmPayment(orderId);
      // Update the orders list
      const updatedOrders = orders.map(order => 
        order.id === orderId ? { ...order, status: 'paid' } : order
      );
      setOrders(updatedOrders);
      toast({
        title: "Payment confirmed",
        description: "You have confirmed the payment for this order.",
      });
    } catch (error) {
      console.error('Payment confirmation failed:', error);
      toast({
        title: "Failed to confirm payment",
        description: "Please try again later.",
        variant: "destructive",
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const uploadProof = async (orderId: string, proofUrl: string) => {
    setIsLoading(true);
    try {
      await orderService.uploadProof(orderId, proofUrl);
      // Update the orders list
      const updatedOrders = orders.map(order => 
        order.id === orderId ? { ...order, paymentProof: proofUrl } : order
      );
      setOrders(updatedOrders);
      toast({
        title: "Proof uploaded",
        description: "Your payment proof has been uploaded.",
      });
    } catch (error) {
      console.error('Proof upload failed:', error);
      toast({
        title: "Failed to upload proof",
        description: "Please try again later.",
        variant: "destructive",
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const confirmDelivery = async (orderId: string) => {
    setIsLoading(true);
    try {
      await orderService.confirmDelivery(orderId);
      // Update the orders list
      const updatedOrders = orders.map(order => 
        order.id === orderId ? { ...order, status: 'completed' } : order
      );
      setOrders(updatedOrders);
      toast({
        title: "Delivery confirmed",
        description: "You have confirmed the delivery of this order.",
      });
    } catch (error) {
      console.error('Delivery confirmation failed:', error);
      toast({
        title: "Failed to confirm delivery",
        description: "Please try again later.",
        variant: "destructive",
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const fetchMyOrders = async () => {
    setIsLoading(true);
    try {
      const myOrders = await orderService.getMyOrders();
      setOrders(myOrders);
    } catch (error) {
      console.error('Failed to fetch my orders:', error);
      toast({
        title: "Failed to load orders",
        description: "Please try again later.",
        variant: "destructive",
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const fetchMyAcceptedOrders = async () => {
    setIsLoading(true);
    try {
      const myAcceptedOrders = await orderService.getMyAcceptedOrders();
      setAcceptedOrders(myAcceptedOrders);
    } catch (error) {
      console.error('Failed to fetch my accepted orders:', error);
      toast({
        title: "Failed to load accepted orders",
        description: "Please try again later.",
        variant: "destructive",
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        acceptedOrders,
        isLoading,
        createOrder,
        exploreOrders,
        acceptOrder,
        cancelOrder,
        cancelAcceptance,
        confirmPayment,
        uploadProof,
        confirmDelivery,
        fetchMyOrders,
        fetchMyAcceptedOrders,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};
