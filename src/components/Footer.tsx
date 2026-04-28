import { getTheme } from '@/actions/theme';

import ThemeSwitcher from './ThemeSwitcher';

const Footer = async () => {
  const theme = await getTheme();

  return (
    <footer>
      <p>
        <em>
          Made by{' '}
          <a
            href="https://cyishere.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            CY
          </a>
        </em>
      </p>

      <ThemeSwitcher initialTheme={theme} />
    </footer>
  );
};

export default Footer;
