'use client';

import { GET_ALL_CATEGORIES } from '@/Graphql/Schemas/CategoryQuery';
import { CreateCategory } from '@/types/types';
import { useQuery } from '@apollo/client';
import SubCategory from './SubCategory';

export default function Sub_Details() {
  const {data} = useQuery(GET_ALL_CATEGORIES);
  return (
    <div className="py-6 w-full">
      <h1 className="text-2xl font-bold mb-6">التصنيفات الفرعية ({data?.AllCategories?.category?.filter((items:CreateCategory)=>items.parentId)?.length}) تصنيف فرعي</h1>

      <div className="overflow-auto rounded shadow">
        <table className="min-w-full bg-white dark:bg-gray-900 text-right">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="p-3">الصورة</th>
              <th className="p-3">الاسم الفرعي</th>
              <th className="p-3">التصنيف الرئيسي</th>
              <th className="p-3">عدد المنتجات</th>
              <th className="p-3">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {data?.AllCategories?.category?.filter((items:CreateCategory)=>items.parentId)?.map((sub:CreateCategory) => (
              <SubCategory key={sub?.id} sub={sub}/>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
