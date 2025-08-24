'use client'
import Admins_Dashboard from '@/components/Admins/Admins_Dashboard';
import { GET_ME } from '@/Graphql/Schemas/UserQuery';
import MainTitle from '@/utils/Main-Title';
import { useQuery } from '@apollo/client';

export default function AdminsLayout({ children }: { children: React.ReactNode }) {
  const { data } = useQuery(GET_ME, {
    fetchPolicy: 'cache-and-network',
  })
  return (
    <div className="mt-[180px] mx-5 flex flex-col justify-start items-start">
      {/**Title Page */}
      <MainTitle title={`لوحة تحكم المسؤول  ${data?.me?.name}`} />
      <div className='w-full flex justify-start items-start gap-1'>
        {/**Aside Menu */}
        <div className="w-1/8 md:w-1/6 lg:w-1/6 flex justify-start items-start gap-3 my-3">
          <Admins_Dashboard />
        </div>
        {/**Page Content */}
        <main className="w-7/8 md:w-5/6 flex justify-start items-start my-3 p-3">
          {children}
        </main>
      </div>
    </div>
  );
}
