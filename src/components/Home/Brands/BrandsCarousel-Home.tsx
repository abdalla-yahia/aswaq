'use client'
import SectionName from "@/utils/SectionName";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useQuery } from "@apollo/client";
import { GET_ALL_BRANDS } from "@/Graphql/Schemas/BrandQuery";
import { CreateBrand } from "@/types/types";

export default function BrandCarousel() {
  const {data} = useQuery(GET_ALL_BRANDS,{
    fetchPolicy:'cache-and-network'
  })
  const brands = data?.AllBrands?.brand

  return (
    <section  className="py-1  ">
          {/**Page Title */}
          <SectionName text="أفضل الماركات" btn={true} btnText="المزيد..." href="/brands"/>
          {/**Swiber Container */}
          <div dir="ltr" className="py-1 bg-accent ">
            {/* Left To Right */}
            <Marquee autoFill={true} pauseOnHover >
            {brands?.map((brand:CreateBrand) => (
                <Image key={brand?.id} src={brand?.logo as string} alt={brand?.name} width={100} height={60} className="object-contain" loading="lazy"
                  />
            ))}
            </Marquee>
            {/* Right to Left */}
            <Marquee speed={30} autoFill={true} direction="right">
            {brands?.map((brand:CreateBrand) => (
                <Image key={brand?.id} src={brand?.logo as string} alt={brand?.name} width={100} height={60} className="object-contain" loading="lazy"
                  />
            ))}
            </Marquee>
          </div>
    </section>
  );
}