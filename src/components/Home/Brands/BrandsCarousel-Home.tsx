import SectionName from "@/utils/SectionName";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const brands = [
  "https://www.logo.wine/a/logo/Adidas/Adidas-Logo.wine.svg",
  "https://www.logo.wine/a/logo/Nike,_Inc./Nike,_Inc.-Logo.wine.svg",
  "https://www.logo.wine/a/logo/Louis_Vuitton/Louis_Vuitton-Logo.wine.svg",
  "https://www.logo.wine/a/logo/Gucci/Gucci-Logo.wine.svg",
  "https://www.logo.wine/a/logo/Chanel/Chanel-Logo.wine.svg",
  "https://www.logo.wine/a/logo/Under_Armour/Under_Armour-Logo.wine.svg",
  "https://www.logo.wine/a/logo/Dolce_%26_Gabbana/Dolce_%26_Gabbana-Logo.wine.svg",
  "https://www.logo.wine/a/logo/L%C3%ADder/L%C3%ADder-Logo.wine.svg",
  "https://www.logo.wine/a/logo/Hugo_Boss/Hugo_Boss-Logo.wine.svg",
  "https://www.logo.wine/a/logo/Gul_(watersports)/Gul_(watersports)-Logo.wine.svg",
  "https://www.logo.wine/a/logo/Puma_(brand)/Puma_(brand)-Logo.wine.svg",
  "https://www.logo.wine/a/logo/Slazenger/Slazenger-Logo.wine.svg",
  "https://www.logo.wine/a/logo/The_Trump_Organization/The_Trump_Organization-Logo.wine.svg",
  "https://www.logo.wine/a/logo/Ralph_Lauren_Corporation/Ralph_Lauren_Corporation-Logo.wine.svg",
  "https://www.logo.wine/a/logo/Luxottica/Luxottica-Logo.wine.svg",
  "https://www.logo.wine/a/logo/New_Balance/New_Balance-Logo.wine.svg",
  "https://www.logo.wine/a/logo/Reebok/Reebok-Logo.wine.svg",
  "https://www.logo.wine/a/logo/Christian_Dior_(fashion_house)/Christian_Dior_(fashion_house)-Logo.wine.svg",
  "https://www.logo.wine/a/logo/Converse_(shoe_company)/Converse_(shoe_company)-Logo.wine.svg",
  "https://www.logo.wine/a/logo/Armani/Armani-Logo.wine.svg",
  "https://www.logo.wine/a/logo/Fendi/Fendi-Logo.wine.svg",
  "https://www.logo.wine/a/logo/Columbia_Sportswear/Columbia_Sportswear-Logo.wine.svg",
  "https://www.logo.wine/a/logo/Boots_(company)/Boots_(company)-Logo.wine.svg",
  "https://www.logo.wine/a/logo/Canterbury_of_New_Zealand/Canterbury_of_New_Zealand-Logo.wine.svg",
  "https://www.logo.wine/a/logo/Samsung_C%26T_Corporation/Samsung_C%26T_Corporation-Logo.wine.svg",
  "https://www.logo.wine/a/logo/Joma/Joma-Logo.wine.svg",
  "https://www.logo.wine/a/logo/Lyle_%26_Scott/Lyle_%26_Scott-Logo.wine.svg",
  "https://www.logo.wine/a/logo/Toyobo/Toyobo-Logo.wine.svg",
  "https://www.logo.wine/a/logo/Fenchurch_(clothing)/Fenchurch_(clothing)-Logo.wine.svg",
];

export default function BrandCarousel() {
  return (
    <section  className="py-1  ">
          <SectionName text="أفضل الماركات" btn={true} btnText="المزيد..." href="/brands"/>
          <div dir="ltr" className="py-1 bg-accent ">
            {/* Left To Right */}
            <Marquee autoFill={true} pauseOnHover >
            {brands.map((src, i) => (
                <Image
                key={i}
                  src={src}
                  alt={`Brand ${i + 1}`}
                  width={100}
                  height={60}
                  className="object-contain"
                  loading="lazy"
                  />
            ))}
            </Marquee>
            {/* Right to Left */}
            <Marquee speed={30} autoFill={true} direction="right">
            {brands.map((src, i) => (
                <Image
                key={i}
                  src={src}
                  alt={`Brand ${i + 1}`}
                  width={100}
                  height={60}
                  className="object-contain"
                  loading="lazy"
                  />
            ))}
            </Marquee>
          </div>
    </section>
  );
}