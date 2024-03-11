import '@/app/ui/global.css';
import { patrick_hand, lato } from '@/app/ui/fonts';
import SideNav from '@/app/ui/dashboard/sidenav';
import Image from 'next/image';
import Link from 'next/link';
import NavLinks from '@/app/ui/nav-links';
import { UserCircleIcon, MagnifyingGlassIcon, BellIcon, ShoppingCartIcon, Bars3Icon, ChevronDoubleRightIcon, ChevronDoubleLeftIcon } from '@heroicons/react/24/outline';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lato.className} antialiased bg-blue-100 flex flex-col`}>
        {/* SIDE NAVIGATION and HEADER */}
        <div className="flex flex-row md:w-1/6">
          <SideNav />
          <header className=" h-20 flex flex-row items-center justify-end md:justify-between rounded-1g p-4 gap-4 priority">
            <h1 className={`${patrick_hand.className} hidden text-orange-500 text-4xl text-left md:inline`}>Handcrafted Haven</h1>
            {/* search form */}
            <form className='flex flex-row items-end'>
              <label htmlFor="search-bar" className='hidden'></label>
              <input 
                type="text"
                className='rounded-full hidden md:block'
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
          </header>
        </div>
        {/* MAIN */}
        <div className='flex flex-col grow'>
          
          <main className="flex min-h-screen bg-blue-300 p-4">
              {children}
          </main>
        </div>
      </body>
    </html>
  );
}
