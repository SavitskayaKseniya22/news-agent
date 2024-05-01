import type { Metadata } from 'next';
import { Mulish } from 'next/font/google';
import './globals.css';

import Footer from './lib/footer/Footer';
import Providers from './store/provider';

const mulish = Mulish({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'News agent',
  description: 'Website for viewing news',
  icons: {
    icon: './favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth text-[14px] sm:text-base">
      <body
        className={`${mulish.className} bg-pattern flex min-h-screen flex-col items-center justify-between gap-4`}
      >
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
