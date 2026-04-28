import type { AppImageProps } from './AppImage';

import { Code } from 'bright';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeUnwrapImages from 'rehype-unwrap-images';

import AppImage from './AppImage';
import TextLink from './TextLink';
import YouTube from './YouTube';

Code.theme = 'dracula';

export const COMPONENTS_MAP = {
  a: (props: { children: React.ReactNode; href: string }) =>
    typeof props.children === 'string' ? (
      <TextLink {...props}>{props.children}</TextLink>
    ) : (
      <a {...props} />
    ),
  img: (props: AppImageProps) => <AppImage {...props} />,
  pre: Code,
  YouTube
};

type CustomMDXRemoteProps = {
  content: string;
};

const CustomMDXRemote: React.FC<CustomMDXRemoteProps> = ({ content }) => {
  return (
    <MDXRemote
      source={content}
      components={COMPONENTS_MAP}
      options={{
        mdxOptions: {
          rehypePlugins: [rehypeUnwrapImages]
        }
      }}
    />
  );
};

export default CustomMDXRemote;
