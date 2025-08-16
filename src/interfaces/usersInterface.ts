import { Gender } from "@prisma/client";

export interface CreateUser {
    name: string;
    email: string|null;
    phone: string;
    password: string;
    address: string
    gender?: Gender;
    birthDate?:Date
}


export interface UpdateUser {
  id: string;
  data:{
  name?: string;
  email?: string;
  phone?: string;
  image?:string
  gender?: Gender;
  birthDate?:Date | null
  }
  }

export interface TokenInterFace {
  id: string,
  role: string,
}
