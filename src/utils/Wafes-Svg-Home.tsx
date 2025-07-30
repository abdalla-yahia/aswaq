import Image from "next/image";

export default function WafesSvgHome() {
    const src = 'https://static.vecteezy.com/system/resources/previews/004/299/835/non_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg'
  return (
    <div className="w-full h-fit">
        {/* <Image className="w-full hue-rotate-[290deg]" src={'https://static.vecteezy.com/system/homepage_banner/wide_image/1787/large_2x_3840x720-go3.jpg'} alt="natural-img" width={850} height={200} /> */}
        <Image className="w-full h-52 object-cover hue-rotate-[182deg] opacity-45" src={src} alt="natural-img" width={650} height={50} />
    </div>
  )
}
