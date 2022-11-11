import Head from "next/head";
import Layout from "../components/layout";
import PostList from "../components/posts/PostList";
import { getPosts } from "../services/ApiService";

export async function getStaticProps() {
  const res = await getPosts();

  return {
    props: {
      posts: res.data.slice(0, 12),
    },
  };
}

export default function Home({ posts }) {
  return (
    <Layout>
      <Head>
        <title>Homepage - Blog App</title>
      </Head>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Nextjs Blog App</h1>
            <p className="lead text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem fuga
              excepturi ab dignissimos quia voluptas? Molestiae, provident quod?
              Provident ipsum ipsa inventore sunt debitis incidunt maiores
              consectetur tempore sit quod!
            </p>
          </div>
        </div>
      </section>
      <div className="album py-5 bg-light">
        <PostList posts={posts} />
      </div>
    </Layout>
  );
}
