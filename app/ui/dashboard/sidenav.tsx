'use client';

import Link from 'next/link';
import NavLinks from '@/app/ui/nav-links';
import Logo from '@/app/ui/logo';
import { PowerIcon, Bars3Icon, ChevronDoubleRightIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { patrick_hand } from '../fonts';

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleSideNav() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="flex flex-col grow">
        {/* button to toggle */}
        <button onClick={toggleSideNav}
          className='flex w-20 h-20 items-center justify-center relative'>
            <Bars3Icon className='w-8 p-1'/>
        </button>

      {/* toggle sidenav */}
      {isOpen && (
      <div className='flex flex-col gap-2 p-4 bg-orange-500 absolute top-20 left-0'>
        <NavLinks />
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
      )}
    </div>
  );
}
