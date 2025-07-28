import * as icon from '@/components/Icons/Icons'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen pb-20 gap-4 sm:p-20">
        <icon.TbError404 className='text-9xl text-orange-400'/>
      <h1 className="text-4xl font-bold text-primary">الصفحة غير موجودة</h1>
      <p className="text-muted text-2xl"> الصفحة التي تبحث عنها غير موجودة تأكد من المسار الصحيح!!</p>
      <Link href='/' >
        <button className='p-2 rounded bg-orange-400 cursor-pointer text-highlight hover:bg-orange-500 transition-colors'>
        إذهب إلى الرئيسيه
        </button>
      </Link>
    </div>
  )
}
