import type { Metadata } from 'next';
import { Mulish } from 'next/font/google';
import './globals.css';

import Footer from './lib/footer/Footer';
import Providers from './store/provider';

const mulish = Mulish({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'News agent',
  description: 'Website for viewing news',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${mulish.className} bg-pattern flex min-h-screen flex-col items-center gap-8`}
      >
        <Providers>{children}</Providers>

        <Footer />
      </body>
    </html>
  );
}
