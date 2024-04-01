'use client';

import { usePathname } from 'next/dist/client/components/navigation';
import Link from 'next/link';
import Logo from '@/app/Logo';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Button from '../button/Button';

export default function Header() {
  const pathname = usePathname();
  const paths = [
    '/best-stories',
    '/ask-stories',
    '/show-stories',
    '/job-stories',
  ];
  return (
    <header className="bg-palette-gray flex w-full items-center justify-center border-b border-white">
      <div className="flex  min-w-60 max-w-screen-xl flex-grow items-center justify-between p-4">
        <Logo />

        <ul className="flex gap-4 text-white">
          {paths.map((path) => (
            <li className="w-40 text-center" key={path}>
              <Link
                href={path}
                className={`hover:text-slate-900 ${pathname === path ? 'text-palette-blue' : ''}`}
              >
                {path.slice(1).replace('-', ' ')}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex gap-4">
          <Button onClick={() => {}}>
            <MagnifyingGlassIcon className="h-4 w-4" />
          </Button>
          <Button onClick={() => {}}>Subscribe</Button>
        </div>
      </div>
    </header>
  );
}
