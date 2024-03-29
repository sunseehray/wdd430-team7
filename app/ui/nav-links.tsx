import {
    HomeIcon,
    BookOpenIcon,
    QueueListIcon,
    UserCircleIcon
  } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lato } from '@/app/ui/fonts';
  
  // Map of links to display in the side navigation.
  // Depending on the size of the application, this would be stored in a database.
  const links = [
    { 
      name: 'Home', 
      href: '/', 
      icon: HomeIcon 
    },
    {
      name: 'Apparel',
      href: '/apparel',
      icon: BookOpenIcon
    },
    { 
      name: 'Decor', 
      href: '/decor', 
      icon: QueueListIcon 
    },
    { 
      name: 'Art', 
      href: '/art', 
      icon: UserCircleIcon
    },
  ];
  
  export default function NavLinks() {
    return (
      <>
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`${lato.className} flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-amber-300 md:flex-none md:justify-start md:p-2 md:px-3`}
            >
              <LinkIcon className="w-6" />
              <p className="hidden md:block">{link.name}</p>
            </Link>
          );
        })}
      </>
    );
  }
  