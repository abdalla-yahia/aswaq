'use client'
import { useQuery } from "@apollo/client";
import Add_New_Addresses from "./Add_New_Addresses/Add_New_Addresses";
import Addresses_Details from "./Addresses_Details/Addresses_Details";
import { GET_ME } from "@/Graphql/Schemas/UserQuery";
import { CreateAddress } from "@/interfaces/addressInterface";

export default function AddressPage() {
  
  const {data,loading} = useQuery(GET_ME,{
    fetchPolicy: 'network-only',
  })
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
      
      </div>
      {/**Add A new Addresses*/}
      <Add_New_Addresses />
    </section>
  )
}
