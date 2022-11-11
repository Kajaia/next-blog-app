import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout";
import { getPostById, getPosts } from "../../services/ApiService";

export async function getStaticPaths() {
  const res = await getPosts();
  const posts = res.data;

  const paths = posts.map((post) => ({
    params: {
      id: post.id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await getPostById(params.id);

  return {
    props: {
      post: res.data,
    },
  };
}

export default function post({ post }) {
  return (
    <Layout>
      <Head>
        <title>{post.title} - Blog App</title>
      </Head>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">{post.title}</h1>
            <div
              style={{
                width: "100%",
                height: "100%",
                position: "relative",
              }}
            >
              <Image
                className="rounded shadow-sm mt-2"
                src="https://loremflickr.com/320/240"
                alt={post.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p className="lead text-muted mt-4 text-start px-3">{post.body}</p>
            <div className="col-12 text-start">
              <Link href="/" className="btn btn-link">
                Back to homepage
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
