import Link from 'next/link';
import NavLinks from '@/app/ui/nav-links';
import Logo from '@/app/ui/logo';
import { PowerIcon, Bars3Icon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <div className="flex bg-orange-500 h-full flex-col px-3 py-4 md:px-2">
      <div className='flex items-center justify-center mb-4 md:hidden'>
        <Bars3Icon 
          className='w-8'
        />
      </div>
      <Link
        className="hidden md:block mb-2 flex h-20 items-end justify-start rounded-md md:h-40"
        href="/"
      >
        <div className="md:block text-white md:w-40">
          <Logo />
        </div>
      </Link>
      <div className="flex flex-col items-center gap-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
