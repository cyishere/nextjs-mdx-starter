import type { Metadata } from 'next';

import { Geist_Mono, Poppins } from 'next/font/google';

import './globals.css';

import { getTheme } from '@/actions/theme';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { SITE_DESCRIPTION, SITE_TITLE } from '@/utils/constants';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--ff-primary',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--ff-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = await getTheme();

  return (
    <html lang="en" className={theme === 'light' ? '' : theme}>
      <body className={`${poppins.variable} ${geistMono.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
