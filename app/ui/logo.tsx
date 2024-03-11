import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana, patrick_hand } from '@/app/ui/fonts';
import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <div>
      <Image 
        src="/images/handicraft_haven_logo.png"
        width={50}
        height={50}
        alt='Handcrafted Haven Logo'
        className='rounded-full'
      />
      <p className={`${patrick_hand.className} text-2xl hidden md:block`}>Hancrafted Haven</p>
    </div>
  );
}
