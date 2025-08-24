'use client';

import { createProduct } from "@/Features/Actions/productActions";
import { GET_ALL_BRANDS } from "@/Graphql/Schemas/BrandQuery";
import { GET_ALL_CATEGORIES } from "@/Graphql/Schemas/CategoryQuery";
import { useAppDispatch } from "@/libs/Store/Store";
import { CreateBrand, CreateCategory, CreateProductType } from "@/types/types";
import InputButton from "@/utils/Bottons/Input-button";
import SubmitButton from "@/utils/Bottons/Submit-button";
import UploadImage from "@/utils/UploadImage";
import { CreateProductValidation } from "@/validations/ProductValidation";
import { useQuery } from "@apollo/client";
import { DiscountType, ProductStatus } from "@prisma/client";
import { SetStateAction, useActionState, useState } from "react";
import { toast } from "react-toastify";


export default function Create_Product_Form() {
  const { data: AllCategories } = useQuery(GET_ALL_CATEGORIES, {
    fetchPolicy: 'cache-and-network',
  })
  const { data: AllBrands } = useQuery(GET_ALL_BRANDS, {
    fetchPolicy: 'cache-and-network',
  });
  const [CategoryId, setCategoryId] = useState<undefined | string>(undefined);
  const [BrandId, setBrandId] = useState<undefined | string>(undefined);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const dispatch = useAppDispatch()
  //Create Product Action
  const CreateProduct = (prevState: CreateProductType, formData: FormData): CreateProductType => {
    const newProduct = {
      ...prevState,
      title: formData.get('ProductName') as string,
      description: formData.get('ProductDescription') as string,
      price: parseFloat(formData.get('ProductPrice') as string),
      oldPrice: parseFloat(formData.get('ProductOldPrice') as string) || 0,
      discountType: formData.get('ProductDiscountType') ? formData.get('ProductDiscountType') as DiscountType : DiscountType.FIXED,
      discountValue: parseFloat(formData.get('ProductDiscountValue') as string) || 0,
      quantity: parseInt(formData.get('ProductQuantity') as string, 10) || 0,
      image: imageUrl || formData.get('ProductImageUrl') as string,
      categoryId: CategoryId || null,
      brandId: BrandId || null,
      isFeatured: formData.get('ProductIsFeatured') === 'true',
      status: formData.get('ProductStatus') as ProductStatus || ProductStatus.ACTIVE,
      metaTitle: formData.get('ProductMetaTitle') as string,
      metaDesc: formData.get('ProductMetaDesc') as string,
    }
    //Check Validation
    const Validation = CreateProductValidation.safeParse(newProduct);
    if (!Validation.success) {
      toast.error(Validation.error.issues.map(issue => issue.message).join(', '));
      console.error(Validation.error.issues.map(issue => issue.message))
      return prevState; // Return previous state if validation fails
    }
    //Dispatch Action
    dispatch(createProduct(newProduct));
    return newProduct;
  }
  //Initial State for Create Product
  const InitialState = {
    title: '',
    description: '',
    price: 0,
    oldPrice: 0,
    discountType: DiscountType.FIXED,
    discountValue: 0,
    quantity: 0,
    image: '',
    categoryId: '',
    brandId: '',
    isFeatured: false,
    status: ProductStatus.ACTIVE,
    metaTitle: '',
    metaDesc: '',
  }
  const [, actionState, loading] = useActionState(CreateProduct, InitialState)
  return (
    <form action={actionState} className="flex flex-col gap-4 w-full max-w-md mx-auto p-4 border rounded shadow-lg ">
      {/*Product Image*/}
      <UploadImage imageUrl={imageUrl as unknown as string} setImageUrl={setImageUrl as (arg0: string) => SetStateAction<string>} />
      {/*Product Image URL*/}
      <InputButton type="text" onchange={(e) => setImageUrl(e.target.value)} placeholder="رابط الصورة" name="ProductImageUrl" />
      {/*Product Name*/}
      <InputButton type="text" placeholder="اسم المنتج" name="ProductName" requird />
      {/*Product Description*/}
      <InputButton type="text" placeholder="وصف المنتج" name="ProductDescription" />
      {/*Product Price*/}
      <InputButton type="number" placeholder="سعر المنتج" name="ProductPrice" requird />
      {/*Product Old Price*/}
      <InputButton type="number" placeholder="السعر القديم" name="ProductOldPrice" />
      {/*Product Discount Type*/}
      {/* <InputButton type="text" placeholder="نوع الخصم" name="ProductDiscountType" /> */}
      <select name="ProductDiscountType" className="w-full text-blue-500 border rounded p-2 mb-4">
        <option value="">اختر نوع الخصم</option>
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
        <option value="">اختر حالة المنتج</option>
        <option value={ProductStatus.ACTIVE}>منتج نشط</option>
        <option value={ProductStatus.INACTIVE}>منتج غير نشط</option>
        <option value={ProductStatus.ARCHIVED}>منتج تم تخزينه</option>
      </select>
      {/*Product Discount Value*/}
      <InputButton type="number" placeholder="نسبة الخصم" name="ProductDiscountValue" />
      {/*Product Quantity*/}
      <InputButton type="number" placeholder=" كمية المنتج" name="ProductQuantity" requird />
      {/*Product Meta Title*/}
      <InputButton type="text" placeholder="ميتا تايتل المنتج" name="ProductMetaTitle" />
      {/*Product Meta Description*/}
      <InputButton type="text" placeholder="ميتا وصف المنتج" name="ProductMetaDesc" />
      {/*Product Categories*/}
      <select onChange={(e) => setCategoryId(e.target.value)} className="w-full text-blue-500 border rounded p-2 mb-4" >
        <option value={'null'}>اختر التصنيف</option>
        {
          AllCategories?.AllCategories?.category?.map((category: CreateCategory) =>
            <option key={category?.id} value={category?.id}>{category?.name}</option>
          )
        }
      </select>
      {/*Product BrandId*/}
      <select onChange={(e) => setBrandId(e.target.value)} className="w-full text-blue-500 border rounded p-2 mb-4">
        <option value={'null'}>اختر البراند</option>
        {
          AllBrands?.AllBrands?.brand?.map((brand: CreateBrand) =>
            <option key={brand?.id} value={brand?.id}>{brand?.name}</option>
          )
        }
      </select>
      {/*Submit*/}
      <SubmitButton text={loading ? "جارٍ الحفظ ...." : "حفظ"} bgcolor="bg-blue-500" textcolor="white" />
    </form>
  );
}
