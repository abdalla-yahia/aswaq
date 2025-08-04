'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Breadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  return (
    <nav className="text-shadow-amber-500 text-gray-600 my-2 fixed top-[150px] right-3 md:right-[50px]">
      <ol className="flex flex-wrap items-center gap-x-2 rtl:space-x-reverse">
        <li>
          <Link href="/" className="text-muted hover:text-amber-500">الرئيسية</Link>
        </li>

        {segments.map((seg, index) => {
          const href = '/' + segments.slice(0, index + 1).join('/');
          const name = decodeURIComponent(seg);

          return (
            <li key={href} className="flex items-center gap-x-2">
              <span className="text-gray-400">{'>'}</span>
              <Link href={href} className="text-muted hover:text-amber-500">{name}</Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
