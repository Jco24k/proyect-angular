export interface IErrorResponse {
  error: string;
  status: number;
  message: string;
}

export interface ILoginResponse {
  accessToken: string;
  tokenType: string;
  error: string;
  status: number;
  message: string;
}
