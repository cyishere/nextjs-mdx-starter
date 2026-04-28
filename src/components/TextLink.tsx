import Link from 'next/link';

import { ExternalLink } from './Icons';

const TextLink: React.FC<React.ComponentProps<'a'>> = ({
  href,
  children,
  ...props
}) => {
  if (!href) {
    return <span {...props}>{children}</span>;
  }

  if (href.startsWith('http')) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
        <ExternalLink width={16} height={16} />
      </a>
    );
  }

  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
};

export default TextLink;
