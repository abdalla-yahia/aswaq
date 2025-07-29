import Image from "next/image";
import Marquee from "react-fast-marquee";

const brands = [
  "/brands/brand1.png",
  "/brands/brand2.png",
  "/brands/brand3.png",
  "/brands/brand4.png",
  "/brands/brand5.png",
  "/brands/brand6.png",
  "/brands/brand1.png",
  "/brands/brand2.png",
  "/brands/brand3.png",
  "/brands/brand4.png",
  "/brands/brand5.png",
  "/brands/brand6.png",
  "/brands/brand1.png",
  "/brands/brand2.png",
  "/brands/brand3.png",
  "/brands/brand4.png",
  "/brands/brand5.png",
  "/brands/brand6.png",
];

export default function BrandCarousel() {
  return (
    // <div className="w-full overflow-hidden py-6 bg-white border-y border-gray-200">
          <Marquee autoFill={true} >

          {brands.map((src, i) => (
            <>
              <Image
                src={src}
                alt={`Brand ${i + 1}`}
                width={100}
                height={60}
                className="object-contain"
                />
                </>
          ))}
          </Marquee>

            // </div>
  );
}