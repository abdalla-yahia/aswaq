'use client'
import Image from "next/image";
import BrandCard from "@/components/Brands/Brand-Card/Brand-Card";
import { CreateBrand, CreateCategory, CreateProductType } from "@/types/types";
import { useQuery } from "@apollo/client";
import { GET_ALL_PRODUCTS_BY_CATEGORIES_IDS } from "@/Graphql/Schemas/ProducrQuery";
import { GET_ALL_CATEGORIES } from "@/Graphql/Schemas/CategoryQuery";
import Link from "next/link";

export default function DropDown({category}:{category:CreateCategory}) {
    const {data:AllCategories} = useQuery(GET_ALL_CATEGORIES,{
            fetchPolicy: 'cache-and-network',
        })
    const {data:ProductsOnCategories} = useQuery(GET_ALL_PRODUCTS_BY_CATEGORIES_IDS,{
        variables:{categoryId:category?.id},
        fetchPolicy:'cache-and-network'
    })
    //Products On Main Category
    const Products = ProductsOnCategories?.productsByCategoryRecursive ;
    const SubCategory = AllCategories?.AllCategories?.category?.filter((cat:CreateCategory) => cat?.parentId !== null && cat?.parentId === category?.id);
    const brands:CreateBrand[] = []
    //Get Unique Brands From Products On Main Category
    Products?.forEach((product:CreateProductType) => {
        const ExistInBrand = brands?.find(brand => brand?.id === product?.brand?.id);
        if (!ExistInBrand && product?.brand) {
            brands.push(product?.brand)
        }
    })
    
       return (
    <>
    {/**Category Title*/}
    <div className="w-full px-5 flex justify-between items-start">
        
    {/**Category Content*/}
    <div className="flex flex-col justify-between items-start w-3/4 gap-2">
        
        {/**Sub Category Lists */}
        <div className="flex justify-between items-start gap-4 my-2 text-muted">
            {/**List One */}
            {SubCategory?.map((subCategory:CreateCategory) => (
                <>
                <div key={subCategory?.id} className="flex flex-col justify-start items-start">
                    <Link href={`/categories/${subCategory?.name}`}>
                <h3 className="text-xl text-black font-bold">{subCategory?.name}</h3>
                    </Link>
                <ul className="flex flex-col justify-center items-start">
                    {
                        AllCategories?.AllCategories?.category?.filter((cat:CreateCategory) => cat?.parentId === subCategory?.id)?.map((subCat:CreateCategory) => (
                            <>
                        <li key={subCat?.id} className="hover:text-orange-900 text-blue-800 transition-all">
                            <Link href={`/categories/${subCat?.name}`}>{subCat?.name}</Link>
                        </li>
                            </>
                        ))
                    }
                
                </ul>
            </div>
            </>
            ))
            }
        </div>
        {/**Brand Of This Category*/}
            <div className="flex flex-col justify-start items-start w-full">
                <h3 className="text-xl text-gray-800 font-bold py-2">أفضل الماركات</h3>
                <ul className="flex justify-start items-center w-full gap-1 mb-1 overflow-x-scroll scrollbar-none">
                        {brands?.slice(0,8)?.map(brand=>
                    <li key={brand?.id} className="bg-[#ddd] rounded-xl text-muted w-1/8 h-[100px] flex justify-center items-center">
                        <BrandCard key={brand?.id} img={brand?.logo as string} title={brand?.name} brand= {brand?.name}   className="w-full text-center  cursor-pointer hover:-translate-y-2 transition-transform" />
                    </li>
                        )
                    }
                </ul>
            </div>
        
    </div>
    {/**Category Image*/}
    <div className="flex flex-col items-start w-1/4">
            <Image src={category?.image  as string || '/images/logo.png'} alt={category?.name} width={350} height={350} />
        </div>
    </div>
    </>
  )
}
