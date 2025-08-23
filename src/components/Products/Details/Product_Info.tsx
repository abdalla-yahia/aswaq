'use client'
import SubmitButton from "@/utils/Bottons/Submit-button";
import Image from "next/image";
import Link from "next/link";
import * as icon from '@/utils/Icons/Icons';
import { CreateProductType } from "@/types/types";

export default function Product_Info({ product }: { product: CreateProductType }) {
    
    return (
        <>
            <h1 className="mb-5 text-3xl">تفاصيل {product?.title}</h1>
            <div className="flex flex-col md:flex-row justify-center items-center md:justif-start md:items-start w-full gap-3">
                {/*Product Images */}
                <Image loading="lazy" className="shadow-accent" src={product?.image as string} alt={`منتج ${product?.title}`} width={350} height={250} />
                <div className="flex flex-col jusify-start items-start gap-3">
                    {/**Product Name */}
                    <div className="flex justify-between items-center gap-2">
                        <h3 className="text-xl text-foreground">الاسم : </h3>
                        <p className="text-lg text-muted">{product?.title}</p>
                    </div>
                    {/**Product Description */}
                    <div className="flex justify-between items-center gap-2">
                        <h3 className="text-xl text-foreground">الوصف : </h3>
                        <p className="text-lg text-muted">{product?.description}</p>
                    </div>
                    {/*Product Category*/}
                    <div className="flex justify-between items-center gap-2">
                        <h3 className="text-xl text-foreground">التصنيف : </h3>
                        <p className="text-lg text-muted cursor-pointer">
                            <Link href={`/categories/${product?.category?.name}`}>
                            {product?.category?.name}
                            </Link>
                            </p>
                    </div>
                    {/*Products Brand*/}
                    <div className="flex justify-between items-center gap-2">
                        <h3 className="text-xl text-foreground">البراند : </h3>
                        <p className="text-lg text-muted cursor-pointer"> 
                            <Link href={`/brands/${product?.brand?.name}`}>
                            {product?.brand?.name}
                            </Link></p>
                    </div>
                    {/**Product Price */}
                    <div className="flex justify-between items-center gap-2">
                        <h3 className="text-xl text-foreground">السعر : </h3>
                        <span className="line-through text-gray-600">{product?.oldPrice}</span>
                        <p className="text-lg text-muted">{product?.price} ج.م</p>
                    </div>
                    {/**Product Colors */}
                    <div className="flex justify-between items-center gap-2">
                        <h3 className="text-xl text-foreground">الألوان : </h3>
                        <p className="text-lg text-muted flex ">
                            {/* {
                                product?.colors.map((color, index) =>
                                    <p key={index} style={{ background: color }} className={`w-5 h-5 rounded-full mx-2 cursor-pointer  `}></p>
                                )
                            } */}
                        </p>
                    </div>
                    {/**Product Price */}
                    <div className="flex justify-between items-center gap-2">
                        <h3 className="text-xl text-foreground">المتاح : </h3>
                        <p className="text-lg text-muted">{product?.quantity} قطعه</p>
                    </div>
                    {/**Product Rate */}
                    <div className="flex justify-between items-center gap-2">
                        <h3 className="text-xl text-foreground">التقييم : </h3>
                        <p className="text-xl text-muted text-center">{product?.rating}</p>
                        <p className="text-2xl text-yellow-400 text-center">*****</p>
                    </div>
                    {/**Product Reviews */}
                    <div className="flex justify-between items-center gap-2">
                        <h3 className="text-xl text-foreground">عدد المقيمين : </h3>
                        <p className="text-lg text-muted">{0} شخص</p>
                    </div>
                    {/**Add To Cart */}
                    <div className="flex justify-between items-center gap-2">
                        <Link href="/cart" className="flex gap-1 justify-center items-center px-2 bg-muted/50 rounded-2xl cursor-pointer">
                            <SubmitButton onclick={() => ''} text="أضف للعربة" bgcolor="" textcolor="" />
                            <icon.FaCartPlus className="text-green-500" />
                        </Link>
                        <Link href="/products" className="flex gap-1 justify-center items-center px-2 bg-red-200 rounded-2xl cursor-pointer">
                            <SubmitButton onclick={() => ''} text="أضف للمفضله" bgcolor="" textcolor="text-gray-500" />
                            <icon.CiHeart className="text-white font-bold" />
                        </Link>
                        <Link href="/products" className="flex gap-1 justify-center items-center px-2 bg-accent rounded-2xl cursor-pointer">
                            <SubmitButton onclick={() => ''} text="متابعة التسوق" bgcolor="" textcolor="text-gray-500" />
                            <icon.FaShoppingCart className="text-blue-500" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
