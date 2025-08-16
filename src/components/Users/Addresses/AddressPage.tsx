'use client'
import { useQuery } from "@apollo/client";
import Add_New_Addresses from "./Add_New_Addresses/Add_New_Addresses";
import Addresses_Details from "./Addresses_Details/Addresses_Details";
import { GET_ME } from "@/Graphql/Schemas/UserQuery";
import { CreateAddress } from "@/interfaces/addressInterface";
import { useSelector } from 'react-redux';
import { RootState } from "@/libs/Store/Store";

export default function AddressPage() {
  const {status,error,loading} = useSelector((state:RootState)=>state.address)
  const {data} = useQuery(GET_ME,{
    fetchPolicy: 'network-only',
  })

  if(status?.success){
    window.location.reload()
  }
  return (
    <section className="flex justify-start items-start flex-col w-full gap-4">
      {/*Adrees Found*/}
      <div className="flex flex-wrap card justify-start items-center w-full gap-2">
        {/**Card Address */}
        {
          data?.me?.alladdresses?.map((address:CreateAddress) => (
            <Addresses_Details key={address?.id} id={address?.id as string} name={address?.name} Address={address?.address} phone={address?.phone}/>
          ))
        }
          {
            loading && <p className='text-yellow-500'>جارٍ حذف العنوان</p>
          }
      </div>
      {/**Add A new Addresses*/}
      <Add_New_Addresses />
    </section>
  )
}
