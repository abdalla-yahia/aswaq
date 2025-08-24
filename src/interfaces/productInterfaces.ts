import { DiscountType, ProductStatus } from "@prisma/client"

export interface UpdateProductInterface {
      id:string
          title?: string
          description?: string
          price?: number
          oldPrice?: number
          discountType?:DiscountType
          discountValue?: number
          quantity?: number
          image?: string
        categoryId?: string | null
        brandId?: string | null
        isFeatured?: boolean
        status?:ProductStatus
        metaTitle?: string
        metaDesc?: string
    
}