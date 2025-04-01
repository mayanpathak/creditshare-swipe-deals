
// User related types
export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: 'buyer' | 'card_holder' | 'admin';
  createdAt: Date;
  trustScore?: number;
  kycVerified?: boolean;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  phone?: string;
  role: 'buyer' | 'card_holder';
}

export interface OtpVerificationRequest {
  email?: string;
  phone?: string;
  otp: string;
}

export interface PasswordResetRequest {
  email: string;
}

export interface PasswordChangeRequest {
  currentPassword: string;
  newPassword: string;
}

export interface ProfileUpdateRequest {
  name?: string;
  phone?: string;
  address?: string;
  profilePicture?: string;
}

export interface KycDocument {
  type: 'pan' | 'aadhar' | 'drivingLicense' | 'passport';
  fileUrl: string;
  verified: boolean;
  uploadedAt: Date;
}

// Order related types
export interface Order {
  id: string;
  buyerId: string;
  cardHolderId?: string;
  itemDetails: string;
  price: number;
  discount: number;
  status: 'created' | 'accepted' | 'paid' | 'delivered' | 'completed' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
  paymentProof?: string;
}

export interface OrderCreateRequest {
  itemDetails: string;
  price: number;
  discount: number;
}

export interface PaymentTransaction {
  id: string;
  userId: string;
  amount: number;
  type: 'payment' | 'refund' | 'withdrawal';
  status: 'pending' | 'completed' | 'failed';
  createdAt: Date;
}

export interface Dispute {
  id: string;
  orderId: string;
  raisedBy: string;
  issue: string;
  status: 'open' | 'under_review' | 'resolved';
  createdAt: Date;
  resolvedAt?: Date;
}

export interface Notification {
  id: string;
  userId: string;
  message: string;
  type: 'order' | 'payment' | 'dispute' | 'system';
  read: boolean;
  createdAt: Date;
}
