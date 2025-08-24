import { GET_ALL_BRANDS } from "@/Graphql/Schemas/BrandQuery";
import { GET_ALL_CATEGORIES } from "@/Graphql/Schemas/CategoryQuery";
import { UPDATE_PRODUCT } from "@/Graphql/Schemas/ProducrQuery";
import { UpdateProductInterface } from "@/interfaces/productInterfaces";
import InputButton from "@/utils/Bottons/Input-button";
import SubmitButton from "@/utils/Bottons/Submit-button";
import UploadImage from "@/utils/UploadImage";
import { useMutation, useQuery } from "@apollo/client";
import { SetStateAction, useActionState, useState } from "react";
import { DiscountType, ProductStatus } from "@prisma/client";
import { CreateBrand, CreateCategory, CreateProductType } from "@/types/types";
import { UpdateProductValidation } from "@/validations/ProductValidation";
import { toast } from "react-toastify";

export default function Edit_Product_Form({product}:{product:CreateProductType}) {
  const [updateproduct,{data,error,loading}] = useMutation(UPDATE_PRODUCT)
  const { data: AllCategories } = useQuery(GET_ALL_CATEGORIES, {
      fetchPolicy: 'cache-and-network',
    })
    const { data: AllBrands } = useQuery(GET_ALL_BRANDS, {
      fetchPolicy: 'cache-and-network',
    });
    const [CategoryId, setCategoryId] = useState<undefined | string>(undefined);
    const [BrandId, setBrandId] = useState<undefined | string>(undefined);
    const [imageUrl, setImageUrl] = useState<string | null>(product?.image as string);
    //Update Handlle
  const DataForUpdate = (prevState:UpdateProductInterface,formData:FormData):UpdateProductInterface=>{
    const formState = {
      ...prevState,
            id:product?.id as string,
            title: formData.get('ProductName') as string || initialState?.title,
            description: formData.get('ProductDescription') as string || initialState?.description,
            price: parseFloat(formData.get('ProductPrice') as string) || initialState?.price,
            oldPrice: parseFloat(formData.get('ProductOldPrice') as string) || initialState?.oldPrice,
            discountType: formData.get('ProductDiscountType')  as DiscountType || initialState?.discountType,
            discountValue: parseFloat(formData.get('ProductDiscountValue') as string) || initialState?.discountValue,
            quantity: parseInt(formData.get('ProductQuantity') as string, 10) || initialState?.quantity,
            image: imageUrl || formData.get('ProductImageUrl') as string || initialState?.image,
            categoryId: CategoryId || initialState?.categoryId,
            brandId: BrandId || initialState?.brandId,
            isFeatured: formData.get('ProductIsFeatured')  || initialState?.isFeatured as boolean,
            status: formData.get('ProductStatus') as ProductStatus || initialState?.status,
            metaTitle: formData.get('ProductMetaTitle') as string || initialState?.metaTitle,
            metaDesc: formData.get('ProductMetaDesc') as string || initialState?.metaDesc,
    }
    // Check Validation Of Data 
    const Validation =  UpdateProductValidation.safeParse(formState)
    if(!Validation?.success){
      toast.error(Validation?.error.issues?.map(e=>e?.message).join(', '))
    }
    updateproduct({
      variables:{
        data:{
          ...formState,
          id:product?.id
        }
      
      }
    })
    return formState as UpdateProductInterface
  }

  const initialState:UpdateProductInterface={
      id:product?.id as string,
      title: product?.title,
      description: product?.description,
      price: product?.price,
      oldPrice:product?.oldPrice,
      discountType:product?.discountType,
      discountValue: product?.discountValue,
      quantity:product?.quantity,
      image: product?.image,
      categoryId: product?.categoryId,
      brandId: product?.brandId,
      isFeatured: product?.isFeatured,
      status:product?.status,
      metaTitle: product?.metaTitle,
      metaDesc: product?.metaDesc
  }
  const [,actionState] = useActionState(DataForUpdate,initialState)
  return (
        <form action={actionState} className="flex flex-col gap-4 w-full max-w-md mx-auto p-4 border rounded shadow-lg ">
          {/*Product Image*/}
          <UploadImage imageUrl={imageUrl as unknown as string} setImageUrl={setImageUrl as (arg0: string) => SetStateAction<string>} />
          {/*Product Image URL*/}
          <InputButton type="text" onchange={(e) => setImageUrl(e.target.value)} placeholder="رابط الصورة الجديدة" name="ProductImageUrl" />
          {/*Product Name*/}
          <InputButton type="text" placeholder={product?.title} name="ProductName" />
          {/*Product Description*/}
          <InputButton type="text" placeholder={product?.description || 'وصف لمنتج'} name="ProductDescription" />
          {/*Product Price*/}
          <InputButton type="number" placeholder={product?.price as unknown as string} name="ProductPrice" />
          {/*Product Old Price*/}
          <InputButton type="number" placeholder={product?.oldPrice as unknown as string||"السعر القديم"} name="ProductOldPrice" />
          {/*Product Discount Type*/}
          {/* <InputButton type="text" placeholder="نوع الخصم" name="ProductDiscountType" /> */}
          <select name="ProductDiscountType" className="w-full text-blue-500 border rounded p-2 mb-4">
            <option value={product?.discountType}>اختر نوع الخصم</option>
            <option value={DiscountType.PERCENTAGE}>نسبة مئوية</option>
            <option value={DiscountType.FIXED}>مبلغ ثابت</option>
          </select>
          {/*Product Is Featured*/}
          <div className="w-full  flex justify-evenly gap-2 flex-nowrap text-center items-center border p-1 rounded mb-4">
            <label htmlFor="IsFeatured" className="cursor-pointer w-full text-start px-2">هل المنتج مميز؟
            </label>
            <InputButton type="checkbox" id="IsFeatured" placeholder="هل المنتج مميز؟" name="ProductIsFeatured" />
          </div>
          {/*Product Status*/}
          <select name="ProductStatus" className="w-full text-blue-500 border rounded p-2 mb-4">
            <option value={product?.status}>اختر حالة المنتج</option>
            <option value={ProductStatus.ACTIVE}>منتج نشط</option>
            <option value={ProductStatus.INACTIVE}>منتج غير نشط</option>
            <option value={ProductStatus.ARCHIVED}>منتج تم تخزينه</option>
          </select>
          {/*Product Discount Value*/}
          <InputButton type="number" placeholder={product?.discountValue as unknown as string || 'نسبة الخصم'} name="ProductDiscountValue" />
          {/*Product Quantity*/}
          <InputButton type="number" placeholder={product?.quantity as unknown as string || " كمية المنتج"} name="ProductQuantity" />
          {/*Product Meta Title*/}
          <InputButton type="text" placeholder={product?.metaTitle || "ميتا تايتل المنتج"} name="ProductMetaTitle" />
          {/*Product Meta Description*/}
          <InputButton type="text" placeholder={product?.metaDesc ||"ميتا وصف المنتج"} name="ProductMetaDesc" />
          {/*Product Categories*/}
          <select onChange={(e) => setCategoryId(e.target.value)} className="w-full text-blue-500 border rounded p-2 mb-4" >
            <option value={product?.category?.id || 'null'}>اختر التصنيف</option>
            {
              AllCategories?.AllCategories?.category?.map((category: CreateCategory) =>
                <option key={category?.id} value={category?.id}>{category?.name}</option>
              )
            }
          </select>
          {/*Product BrandId*/}
          <select onChange={(e) => setBrandId(e.target.value)} className="w-full text-blue-500 border rounded p-2 mb-4">
            <option value={product?.brand?.id || 'null'}>اختر البراند</option>
            {
              AllBrands?.AllBrands?.brand?.map((brand: CreateBrand) =>
                <option key={brand?.id} value={brand?.id}>{brand?.name}</option>
              )
            }
          </select>
          {/*Submit*/}
          
          {
            error && <p className="text-red-500">error {`${error}`}</p>
          }
          {
            data && <p className="text-green-500">تم تحديث المنتج بنجاح</p>
          }
          <SubmitButton text={loading ? "جارٍ الحفظ ...." : "حفظ"} bgcolor="bg-blue-500" textcolor="white" />
        </form>
  )
}
