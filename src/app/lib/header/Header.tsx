'use client';

import { usePathname } from 'next/dist/client/components/navigation';
import Link from 'next/link';
import Logo from '@/app/lib/logo/Logo';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import Button from '../button/Button';

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
      <div className="flex w-320 items-center justify-between gap-4 p-4">
        <Logo />

        <ul className="flex gap-4 text-white">
          {paths.map((path) => (
            <li className="w-32 text-center" key={path}>
              <Link
                href={path}
                className={`hover:text-slate-900 ${pathname === path ? 'text-palette-blue-light' : ''}`}
              >
                {path.slice(1).replace('-', ' ')}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex gap-4">
          <Button>
            <ArrowPathIcon className="h-6 w-6" />
          </Button>
          <Link href="/#subscription" className="btn">
            Subscribe
          </Link>
        </div>
      </div>
    </header>
  );
}
