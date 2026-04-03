import type { Metadata } from 'next';
import './globals.css';
import Footer from './lib/footer/Footer';
import Providers from './store/provider';

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
    <html lang="en" className="scroll-smooth text-sm sm:text-base">
      <body className={`bg-pattern flex min-h-screen flex-col items-center justify-between gap-4`}>
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
