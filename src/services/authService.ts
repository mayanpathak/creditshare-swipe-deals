
import api from './api';
import { 
  AuthResponse, 
  LoginRequest, 
  RegisterRequest, 
  OtpVerificationRequest,
  PasswordResetRequest,
  PasswordChangeRequest,
  ProfileUpdateRequest,
  User
} from '../types/api';

export const authService = {
  register: async (data: RegisterRequest): Promise<AuthResponse> => {
    return api.post('/auth/register', data);
  },

  login: async (data: LoginRequest): Promise<AuthResponse> => {
    return api.post('/auth/login', data);
  },

  logout: async (): Promise<void> => {
    return api.post('/auth/logout');
  },

  verifyOtp: async (data: OtpVerificationRequest): Promise<void> => {
    return api.post('/auth/verify-otp', data);
  },

  resetPassword: async (data: PasswordResetRequest): Promise<void> => {
    return api.post('/auth/reset-password', data);
  },

  changePassword: async (data: PasswordChangeRequest): Promise<void> => {
    return api.post('/auth/change-password', data);
  },

  me: async (): Promise<User> => {
    return api.get('/auth/me');
  },

  updateProfile: async (data: ProfileUpdateRequest): Promise<User> => {
    return api.put('/auth/update-profile', data);
  },
};
