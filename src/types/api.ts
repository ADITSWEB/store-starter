export interface ApiResponse {
  success: boolean;
  data?: any;
  error?: {
    code: string;
    message: string;
  };
  meta?: any
}