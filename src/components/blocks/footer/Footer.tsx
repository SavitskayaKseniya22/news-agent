import Logo from '@/components/elements/logo/logo';
import Link from 'next/dist/client/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="flex w-full items-center justify-center border-t">
      <div className="container flex items-center justify-between p-3">
        <Logo size="small" />
        <Link href="https://github.com/SavitskayaKseniya22" target="_blank">
          <Image src="/github-black.png" alt="GitHub" width={24} height={24} />
        </Link>
      </div>
    </footer>
  );
}
