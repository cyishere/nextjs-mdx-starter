'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ExternalLink } from './Icons';

const navLinks = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Blog',
    path: '/posts/1'
  },
  {
    label: 'About',
    path: '/about'
  }
];

const Header = () => {
  const pathname = usePathname();

  const isActive = (navPath: string) => {
    const navSlug = navPath.split('/')[1];
    const pathSlug = pathname.split('/')[1].replace('blog', 'posts');

    return navSlug === pathSlug;
  };

  return (
    <header>
      <Link href="/">NM Starter</Link>
      <nav>
        {navLinks.map(({ label, path }) => (
          <Link
            key={path}
            href={path}
            aria-current={isActive(path) ? 'page' : 'false'}
          >
            {label}
          </Link>
        ))}
        <Link href="https://github.com/cyishere/nextjs-mdx-starter/">
          GitHub
          <ExternalLink width={16} height={16} />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
