import CustomMDXRemote from '@/components/CustomMDXRemote';
import PostCard from '@/components/PostCard';
import { CONTENT_ROOT } from '@/utils/constants';
import { getBlogPostList, getSingleFile } from '@/utils/file-helpers';

const Home = async () => {
  const heroContent = await getSingleFile(`${CONTENT_ROOT}/home-hero.mdx`);
  const statementContent = await getSingleFile(
    `${CONTENT_ROOT}/home-statement.mdx`
  );
  const posts = await getBlogPostList(3);

  return (
    <>
      <section>
        <h1>{heroContent?.frontmatter.title}</h1>
        <CustomMDXRemote content={heroContent?.content || ''} />
      </section>

      <aside>
        <CustomMDXRemote content={statementContent?.content || ''} />
      </aside>

      <div>
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </>
  );
};

export default Home;
