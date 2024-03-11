import '@/app/ui/global.css';
import { patrick_hand, lato } from '@/app/ui/fonts';
import SideNav from '@/app/ui/dashboard/sidenav';
import Image from 'next/image';
import Link from 'next/link';
import NavLinks from '@/app/ui/nav-links';
import { UserCircleIcon, MagnifyingGlassIcon, BellIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';

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
            <div className="flex flex-row items-end justify-between rounded-1g p-4 gap-4 priority">
              <h1 className={`${patrick_hand.className} text-orange-500 text-4xl text-left`}>Handcrafted Haven</h1>
              {/* search form */}
              <form>
                <label htmlFor="search-bar" className='hidden'></label>
                <input 
                  type="text"
                  className='rounded-full'
                />
                <button
                  type='submit'
                >
                  <MagnifyingGlassIcon className='ml-4 w-6'/>
                </button>
              </form>
              <div className='flex flex-row justify-end gap-4'>
                <BellIcon className='w-6'/>
                <ShoppingCartIcon className='w-6'/>
                <UserCircleIcon className='w-6'/>
              </div>
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
