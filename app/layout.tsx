import '@/app/ui/global.css';
import { inter, habibi, patrick_hand, lato } from '@/app/ui/fonts';
import SideNav from '@/app/ui/dashboard/sidenav';
import Image from 'next/image';
import Link from 'next/link';
import NavLinks from '@/app/ui/nav-links';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lato.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
