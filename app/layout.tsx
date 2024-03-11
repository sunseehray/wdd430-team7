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
      <body className={`${lato.className} antialiased bg-blue-100 flex flex-row`}>
        {/* SIDE NAVIGATION */}
        <div className="flex flex-row md:w-1/6">
          {/* side navigation */}
          <div className='flex flex-col grow p-4 gap-4 bg-orange-500 hidden md:inline'>
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
          <div className='mt-4 flex w-8 h-8 bg-orange-500 items-center justify-center rounded-tr-full rounded-br-full'>
            <ChevronDoubleRightIcon className='w-6'/>
          </div>
        </div>
        {/* HEADER AND MAIN */}
        <div className='flex flex-col grow'>
          <header className="flex flex-row items-end justify-end md:justify-between rounded-1g p-4 gap-4 priority">
            <h1 className={`${patrick_hand.className} hidden text-orange-500 text-4xl text-left md:inline`}>Handcrafted Haven</h1>
            {/* search form */}
            <form className='hidden md:inline'>
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
          </header>
          <main className="flex min-h-screen bg-blue-300 p-4">
              {children}
          </main>
        </div>
      </body>
    </html>
  );
}
