import Home from "@/components/Home/Home";
// import { Metadata } from "next";

//@to-do generate metadata dynamic
// export const generateMetadata = async({searchparams}:{searchparams:Metadata})=>{

// }
export default async function HomePage() {
  return (
    <>
    <div className="flex items-start justify-start min-h-screen ">
    <Home />
    </div>
    </>
  );
}
