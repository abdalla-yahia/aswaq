'use client'
import Image from "next/image";
import BrandCard from "@/components/Brands/Brand-Card/Brand-Card";
import { CreateCategory, CreateProductType } from "@/types/types";
import { useQuery } from "@apollo/client";
import { GET_ALL_PRODUCTS } from "@/Graphql/Schemas/ProducrQuery";

export default function DropDown({category}:{category:CreateCategory}) {
    const {data: AllProducts} = useQuery(GET_ALL_PRODUCTS,{
        fetchPolicy: "cache-and-network"
    })
    const Products = AllProducts?.AllProducts?.products as CreateProductType[] | undefined;
    const brands:{id:number,title:string,brnadImage:string}[] = [];
    const productsOfCategory = Products?.filter((product:CreateProductType) => product?.category?.name === category?.name);
    
    productsOfCategory?.forEach((product:CreateProductType)=>{
        const brandExist = brands?.find(brand=>brand.title === product?.brand?.name)
        if(!brandExist){
            brands.push({
                id:brands.length + 1,
                title:product?.brand?.name as string,
                brnadImage:product?.brand?.logo as string
            })
        }
    }
    )

    return (
    <>
    {/**Category Title*/}
    <h2 className="text-2xl font-bold mx-2 text-accent">{category?.name}</h2>
    <div className="w-full px-5 flex justify-between items-start">
        
    {/**Category Content*/}
    <div className="flex flex-col justify-between items-start w-3/4 gap-2">
        
        {/**Sub Category Lists */}
        <div className="flex justify-between items-start gap-1 my-2 text-muted">
            {/**List One */}
            <div className="flex flex-col justify-start items-center">
                <h3 className="text-xl text-black font-bold mx-2">Category Content One</h3>
                <ul className="flex flex-col justify-center items-start">
                    <li>one</li>
                    <li>one</li>
                    <li>one</li>
                    <li>one</li>
                    <li>one</li>
                </ul>
            </div>
            {/**List Two */}
            <div className="flex flex-col justify-start items-center">
                <h3 className="text-xl text-muted font-bold mx-2">Category Content Two</h3>
                <ul className="flex flex-col justify-center items-start">
                    <li>Tow</li>
                    <li>Tow</li>
                    <li>Tow</li>
                    <li>Tow</li>
                    <li>Tow</li>
                </ul>
            </div>
            {/**List Three */}
            <div className="flex flex-col justify-start items-center">
                <h3 className="text-xl text-muted font-bold mx-2">Category Content Three</h3>
                <ul className="flex flex-col justify-center items-start">
                    <li>Three</li>
                    <li>Three</li>
                    <li>Three</li>
                    <li>Three</li>
                    <li>Three</li>
                </ul>
            </div>
        </div>
        {/**Brand Of This Category*/}
            <div className="flex flex-col justify-start items-start w-full">
                <h3 className="text-xl text-muted font-bold py-2">أفضل الماركات</h3>
                <ul className="flex justify-start items-center w-full gap-1 mb-1 overflow-x-scroll scrollbar-none">
                        {brands?.slice(0,8)?.map(brand=>
                    <li key={brand?.id} className="bg-[#ddd] rounded-xl text-muted">
                        <BrandCard key={brand?.id} img={brand?.brnadImage} title={brand?.title} brand= {brand?.title}   className="w-full text-center  cursor-pointer hover:-translate-y-2 transition-transform" />
                    </li>
                        )
                    }
                </ul>
            </div>
        
    </div>
    {/**Category Image*/}
    <div className="flex flex-col items-start w-1/4">
            <Image src={category?.image as string} alt={category?.name} width={350} height={350} />
        </div>
    </div>
    </>
  )
}
