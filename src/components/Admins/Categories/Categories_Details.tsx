'use client';
import { GET_ALL_CATEGORIES } from '@/Graphql/Schemas/CategoryQuery';
import { CreateCategory } from '@/types/types';
import { useQuery } from '@apollo/client';
import Category from './Category';

export default function Categories_Details() {
  const {data} = useQuery(GET_ALL_CATEGORIES,{
  fetchPolicy:'network-only'
})


  return (
    <div className="py-6 w-full">
      <h1 className="text-2xl font-bold mb-6">إدارة التصنيفات</h1>

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
            {data?.AllCategories?.category?.map((cat:CreateCategory) => (
              <Category key={cat?.id} cat={cat}/>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
