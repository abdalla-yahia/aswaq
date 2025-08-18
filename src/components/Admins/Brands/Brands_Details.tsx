'use client';
import { CreateBrand } from '@/types/types';
import { useQuery } from '@apollo/client';
import Brand from './Brand';
import { GET_ALL_BRANDS } from '@/Graphql/Schemas/BrandQuery';

export default function Brands_Details() {
  const {data} = useQuery(GET_ALL_BRANDS,{
  fetchPolicy:'network-only'
})

console.log(data)
  return (
    <div className="py-6 w-full">
      <h1 className="text-2xl font-bold mb-6">إدارة البراندات ( {data?.AllBrands?.brand?.length} ) تصنيف</h1>

      <div className="overflow-auto rounded shadow">
        <table className="min-w-full bg-white dark:bg-gray-900 table justify-center items-center text-center">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="p-3">الصورة</th>
              <th className="p-3">الاسم</th>
              <th className="p-3">عدد المنتجات</th>
              <th className="p-3">الوصف</th>
              <th className="p-3">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {data?.AllBrands?.brand?.map((brand:CreateBrand) => (
              <Brand key={brand?.id} brand={brand}/>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
