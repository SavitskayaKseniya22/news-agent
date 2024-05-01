'use client';

import { usePathname } from 'next/dist/client/components/navigation';
import Link from 'next/link';
import Logo from '@/app/lib/logo/Logo';

export default function Header() {
  const pathname = usePathname();
  const paths = [
    '/best-stories',
    '/new-stories',
    '/questions',
    '/shows',
    '/jobs',
  ];
  return (
    <header className="flex w-full items-center justify-center border-b border-white bg-palette-gray-dark">
      <div className="container flex flex-wrap items-center justify-between gap-4 p-4 lg:flex-nowrap">
        <Logo />

        <ul className="order-3 flex w-full flex-wrap items-center justify-center gap-2 text-white lg:order-2">
          {paths.map((path) => (
            <li className="w-28 text-center xl:w-32" key={path}>
              <Link
                href={path}
                className={`hover:text-slate-900 ${pathname === path ? 'text-palette-blue-light' : ''}`}
              >
                {path.slice(1).replace('-', ' ')}
              </Link>
            </li>
          ))}
        </ul>

        <div className="order-2 flex items-center gap-4 lg:order-3">
          <button className="btn btn_orange text-nowrap" type="button">
            Add Story
          </button>

          {pathname === '/' && (
            <Link href="/#subscription" className="btn btn_orange">
              Subscribe
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
