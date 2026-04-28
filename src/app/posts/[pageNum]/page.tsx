import type { Metadata } from 'next';

import Link from 'next/link';
import { notFound } from 'next/navigation';

import PostCard from '@/components/PostCard';
import { SITE_TITLE } from '@/utils/constants';
import { getBlogPostsByPage } from '@/utils/file-helpers';

const PAGE_TITLE = 'Blog Posts';

export const metadata: Metadata = {
  title: `${PAGE_TITLE} | ${SITE_TITLE}`
};

type BlogPostsListProps = {
  params: Promise<{
    pageNum: string;
  }>;
};

const BlogPostsList = async ({ params }: BlogPostsListProps) => {
  const { pageNum } = await params;
  const page = Number(pageNum);
  const { posts, totalPageNumber } = await getBlogPostsByPage(page);

  if (page > totalPageNumber) {
    return notFound();
  }

  return (
    <div>
      <h1>{PAGE_TITLE}</h1>
      <div>
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
      <footer>
        {page === 1 ? (
          <span>Prev</span>
        ) : (
          <Link href={`/posts/${page - 1}`}>Prev</Link>
        )}
        <span>
          {pageNum} / {totalPageNumber}
        </span>
        {page === totalPageNumber ? (
          <span className="text-light">Next</span>
        ) : (
          <Link href={`/posts/${page + 1}`}>Next</Link>
        )}
      </footer>
    </div>
  );
};

export default BlogPostsList;
