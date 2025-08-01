import SectionName from "@/utils/SectionName";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import brands from "@/utils/Get_All_Brands";

export default function BrandCarousel() {
  return (
    <section  className="py-1  ">
          {/**Page Title */}
          <SectionName text="أفضل الماركات" btn={true} btnText="المزيد..." href="/brands"/>
          {/**Swiber Container */}
          <div dir="ltr" className="py-1 bg-accent ">
            {/* Left To Right */}
            <Marquee autoFill={true} pauseOnHover >
            {brands.map((brand) => (
                <Image key={brand?.id} src={brand?.image} alt={brand?.title} width={100} height={60} className="object-contain" loading="lazy"
                  />
            ))}
            </Marquee>
            {/* Right to Left */}
            <Marquee speed={30} autoFill={true} direction="right">
            {brands.map((brand) => (
                <Image key={brand?.id} src={brand?.image} alt={brand?.title} width={100} height={60} className="object-contain" loading="lazy"
                  />
            ))}
            </Marquee>
          </div>
    </section>
  );
}