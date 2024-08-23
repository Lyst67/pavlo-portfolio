import type { Metadata } from 'next';
import { Inter, Raleway } from 'next/font/google';
import './globals.css';
import { Header } from './components/header';
import { Suspense } from 'react';
import Footer from './components/footer';
import Loading from './loading';

const inter = Inter({ subsets: ['latin'] });
const font = Raleway({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pavlo Portfolio',
  description: 'Pavlo Lystopad portfolio site',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header />
        <Suspense fallback={<Loading />}>
          <section className="bg-base-bg">{children}</section>
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
