export interface CreateUser {
    id:string
    name: string;
    email?: string|null;
    phone?: string|null;
    password: string;
    address?: string
    role:string
}

export interface TokenInterFace {
  id: string,
  role: string,
  name: string,
}