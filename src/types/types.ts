export type FormState = {
  name: string
  email?: string|null
  phone?:string|null
  address?: string
  password: string
  ConfirmPassword?: string
};

export type LoginUser = {
  email?:string
  phone?:string
  password:string
}

export type UserToken = {
  id:string
  role:string
  name:string
}