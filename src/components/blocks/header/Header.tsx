'use client';

import { usePathname } from 'next/dist/client/components/navigation';
import Logo from '@/components/elements/logo/logo';
import { CustomButtonAnchorLink, CustomButtonLink } from '@/components/elements/button/button';
import clsx from 'clsx';
import { CustomLink } from '@/components/elements/link/link';

export default function Header() {
  const pathname = usePathname();
  const paths = ['/best-stories', '/new-stories', '/questions', '/shows', '/jobs'];

  return (
    <header className="flex w-full items-center justify-center border-b">
      <div className="container flex flex-wrap items-center justify-between gap-4 p-4 lg:flex-nowrap">
        <Logo />

        <ul className="order-3 flex w-full flex-wrap items-center justify-center gap-2 lg:order-2">
          {paths.map((path) => (
            <li className="w-28 text-center xl:w-32" key={path}>
              <CustomLink
                href={path}
                className={`font-title font-bold ${clsx({
                  'text-palette-blue-dark': pathname === path,
                })}`}
              >
                {path.slice(1).replace('-', ' ')}
              </CustomLink>
            </li>
          ))}
        </ul>

        <div className="order-2 flex items-center gap-4 lg:order-3">
          <CustomButtonLink view="primary" size={'medium'} href={'https://news.ycombinator.com/'} target="_blank">
            Add Story
          </CustomButtonLink>

          {pathname === '/' && (
            <CustomButtonAnchorLink view={'secondary'} size={'medium'} href={'#subscription'}>
              Subscribe
            </CustomButtonAnchorLink>
          )}
        </div>
      </div>
    </header>
  );
}
