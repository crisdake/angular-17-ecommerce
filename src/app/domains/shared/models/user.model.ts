export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    role: 'customer' | 'admin';
    avatar?: String
  }
export interface Auth {
    access_token: string;
}
export type RequestStatus = 'init' | 'loading' | 'success'| 'failed';
