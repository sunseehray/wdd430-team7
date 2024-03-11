import '@/app/ui/global.css';
import { patrick_hand, lato } from '@/app/ui/fonts';
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
        <main className="flex min-h-screen flex-row">
          <div className="flex flex-col bg-orange-500 p-4 gap-4 md:w-1/6">
            <Link 
              href={"/"}
              className="flex h-30 items-center justify-center rounded-lg p-4 md:h-30 priority"
            >  
              <Image 
                src="/images/handicraft_haven_logo.png"
                width={75}
                height={75}
                priority={true}
                className="rounded-full"
                alt="Handcraft Haven Logo"
              />
            </Link>
            <NavLinks/>
          </div>
          <div className="flex grow flex-col">
            <div className="flex flex-row items-begin justify-between rounded-1g p-4 gap-4 priority">
              <h1 className={`${patrick_hand.className} text-orange-500 text-4xl text-left`}>Handcrafted Haven</h1>
              <p>Search bar</p>
              <p>Notifications Icon</p>
              <p>Cart icon</p>
              <p>User icon</p>
            </div>
            <div className="flex items-center justify-center bg-blue-300 p-4 md:block md:grow">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
