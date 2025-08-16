import { Gender } from "@prisma/client";
export type User = {
  id: string;
  name: string;
  email: string;
  role?: string;
  status?:string;
};

export type FormState = {
  id?:string
  name: string
  email: string|null
  phone:string|null
  address: string
  password: string
  gender?:Gender | undefined
  birthDate?:Date
};
export type FormEdit = {
  id:string
  data:{
  name?: string
  email?: string|null
  phone?:string
  gender?:Gender| undefined
  birthDate?:Date | null
  image?:string
  }
};

export type LoginUser = {
  email?:string
  phone?:string
  password:string
}

export type UserToken = {
  id:string
  role:string
}

export type FormAddress = {
  name:string
  address:string
  phone?:string
  userId:string
}

export type PasswordState = {
    id:string
    oldPassword:string
    newPassword:string
}