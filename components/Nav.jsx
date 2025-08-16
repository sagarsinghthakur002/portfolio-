'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Links = [
  { path: '/', label: 'Home' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
];

const Nav = ({
  containerStyles = 'flex gap-8 items-center hidden xl:flex mx-[20px] my-[20px]',
  linkStyles = 'relative hover:text-primary transition-all',
  underlineStyles = 'absolute left-0 top-full h-[2px] bg-orange w-full',
}) => {
  const path = usePathname();

  return (
    <nav className={containerStyles} >
      {Links.map((link, index) => {
        const isActive = path === link.path;

        return (
          <Link
            href={link.path}
            key={index}
            className={`${linkStyles} ${isActive ? underlineStyles : ''}  `}
            aria-current={isActive ? 'page' : undefined}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
