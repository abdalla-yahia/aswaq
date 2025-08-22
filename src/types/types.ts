import { UpdateProduct } from "@/interfaces/productInterfaces";
import { DiscountType, Gender, ProductStatus } from "@prisma/client";

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

export type CreateCategory = {
  id?:string
  name:string
  description?:string
  image?:string
  parentId?:string|null
  products?:[CreateProductType]
  parent?:{
    id:string
    name:string
  } | null
}

export type UpdateCategory = {
  id:string
  name?:string
  description?:string
  image?:string
  parentId?:string|null
}

export type CreateBrand = {
  id?:string
  name:string
  description?:string
  logo?:string
  products?:string[]
}

export type UpdateBrand = {
  id:string
  name?:string
  description?:string
  logo?:string
}

export type CreateProductType = {
  id?: string
  slug?: string
  title: string
  description?: string
  price:number
  oldPrice?: number
  discountType?: DiscountType
  discountValue?: number
  quantity: number
  image?: string
  category?: {
    id: string
    name: string
    image: string
  }
  brand?: {
    id: string
    name: string
    logo: string
  }
  categoryId?: string |null
  brandId?: string |null
  isFeatured?: boolean
  status?: ProductStatus
  metaTitle?: string
  metaDesc?: string
  rating?:number
  // reviews?:number
}