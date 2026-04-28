import type { PostMetadata } from '@/utils/types';

import Link from 'next/link';

import { getFormattedDate } from '@/utils/format';

type PostCardProps = {
  post: PostMetadata;
};

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const { title, createdAt, description, slug } = post;

  return (
    <article>
      <h3>
        <Link href={`/blog/${slug}`}>{title}</Link>
      </h3>
      <time dateTime={createdAt.toString()}>{getFormattedDate(createdAt)}</time>
      {description && <p>{description}</p>}
    </article>
  );
};

export default PostCard;
