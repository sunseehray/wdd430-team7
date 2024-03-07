import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-30 shrink-0 items-end rounded-lg bg-yellow-500 p-4 md:h-40">
        <Image 
          src="/images/logoplaceholder.png"
          width={75}
          height={75}
          alt="Handcraft Haven Logo"
        /><p className={`${lusitana.className} hidden md:block text-xl text-black-800 md:text-5xl md:leading-normal`}>
        <strong>Handicraft Haven</strong>
      </p>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/8 md:px-10">
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-yellow-500 px-6 py-3 text-sm font-medium text-gray transition-colors hover:bg-green-400 md:text-base"
          >
            <span>Discover</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
          <Link
            href="/catalog"
            className="flex items-center gap-5 self-start rounded-lg bg-yellow-500 px-6 py-3 text-sm font-medium text-gray transition-colors hover:bg-green-400 md:text-base"
          >
            <span>Catalog</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
          <Link
            href="/categories"
            className="flex items-center gap-5 self-start rounded-lg bg-yellow-500 px-6 py-3 text-sm font-medium text-gray transition-colors hover:bg-green-400 md:text-base"
          >
            <span>Categories</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-yellow-500 px-6 py-3 text-sm font-medium text-gray transition-colors hover:bg-green-400 md:text-base"
          >
            <span>Account</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          Discover Page
        </div>
      </div>
    </main>
  );
}
