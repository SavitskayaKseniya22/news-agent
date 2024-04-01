import { NewspaperIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center justify-center gap-1 text-xl text-white"
    >
      <NewspaperIcon className="h-8 w-8" />
      <span className="font-black">news</span>
      <span>agent</span>
    </Link>
  );
}
