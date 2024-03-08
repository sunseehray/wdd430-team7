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
        <main className="flex min-h-screen flex-col p-6">
          <div className="flex h-30 shrink-0 items-end rounded-lg bg-amber-400 p-4 md:h-40 priority">
            <Image 
              src="/images/handicraft_haven_logo.png"
              width={75}
              height={75}
              priority={true}
              className="rounded-full"
              alt="Handcraft Haven Logo"
            />
            <p className={`${patrick_hand.className} hidden mx-3 md:block text-xl text-black-800 md:text-5xl md:leading-normal`}>
              <strong>Handcrafted Haven</strong>
            </p>
          </div>
          <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
            <div className="flex grow flex-row space-x-2 md:flex-col md:space-x-0 md:space-y-2">
              <NavLinks />
            </div>
            <div className="flex items-center justify-center md:block md:w-4/5">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
