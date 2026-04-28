import type { Metadata } from 'next';

import { notFound } from 'next/navigation';

import CustomMDXRemote from '@/components/CustomMDXRemote';
import { CONTENT_ROOT, SITE_TITLE } from '@/utils/constants';
import { getSingleFile } from '@/utils/file-helpers';

const PAGE_PATH = `${CONTENT_ROOT}/about.mdx`;

export const generateMetadata = async (): Promise<Metadata> => {
  const pageInfo = await getSingleFile(PAGE_PATH);

  if (!pageInfo) {
    return {};
  }

  return {
    title: `${pageInfo.frontmatter.title} | ${SITE_TITLE}`
  };
};

const About = async () => {
  const pageInfo = await getSingleFile(PAGE_PATH);

  if (!pageInfo) {
    notFound();
  }

  const { frontmatter, content } = pageInfo;

  return (
    <div>
      <header>
        <h1>{frontmatter.title}</h1>
      </header>

      <article>
        <CustomMDXRemote content={content} />
      </article>
    </div>
  );
};

export default About;
