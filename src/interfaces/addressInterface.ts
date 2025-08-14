import { User } from "@prisma/client"

export interface CreateAddress {
  name:string
  address:string
  phone?:string
  user:User
}