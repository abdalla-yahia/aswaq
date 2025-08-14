'use client'
import { useQuery } from "@apollo/client";
import Add_New_Addresses from "./Add_New_Addresses/Add_New_Addresses";
import Addresses_Details from "./Addresses_Details/Addresses_Details";
import { GET_ME } from "@/Graphql/Schemas/UserQuery";

export default function AddressPage() {
  const {data,loading} = useQuery(GET_ME,{
    fetchPolicy: 'network-only',
  })
  console.log(data?.me)
  return (
    <section className="flex justify-start items-start flex-col w-full gap-4">
      {/*Adrees Found*/}
      <div className="flex flex-wrap card justify-start items-center w-full gap-2">
        {/********************** @To-DO Map Address *************************/}
        {/**Card Address */}
        <Addresses_Details />
        <Addresses_Details />
        <Addresses_Details />
      </div>
      {/**Add A new Addresses*/}
      <Add_New_Addresses />
    </section>
  )
}
