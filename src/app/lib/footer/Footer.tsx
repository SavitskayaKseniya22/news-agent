import Logo from '@/app/lib/logo/Logo';
import Link from 'next/dist/client/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-palette-gray-dark bg-palette-gray-dark flex w-full items-center justify-center border-t">
      <div className="w-320 flex items-center justify-between p-4">
        <Logo />
        <Link href="https://github.com/SavitskayaKseniya22" target="_blank">
          <Image
            src="/github-mark-white.png"
            alt="gitHub"
            width={32}
            height={32}
          />
        </Link>
      </div>
    </footer>
  );
}
