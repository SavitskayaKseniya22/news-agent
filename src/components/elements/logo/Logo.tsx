import { NewspaperIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Logo({ size = 'medium' }: { size?: 'small' | 'medium' }) {
  return (
    <Link
      href="/"
      className={`font-title flex items-center justify-center gap-1 ${size == 'medium' ? 'text-xl' : 'text-l'} `}
    >
      <NewspaperIcon className={size == 'medium' ? 'h-8 w-8' : 'h-6 w-6'} />
      <span className="text-palette-accent-hover font-bold">news</span>
      <span>agent</span>
    </Link>
  );
}
