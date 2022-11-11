import Image from "next/image";
import Link from "next/link";

export default function PostList({ posts }) {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {posts.length > 0 &&
          posts.map((post) => (
            <div key={post.id} className="col-12 col-md-6 col-lg-4 col-xl-3">
              <div className="card h-100 shadow-sm">
                <div
                  style={{
                    width: "100%",
                    height: "180px",
                    position: "relative",
                  }}
                >
                  <Image
                    className="rounded-top"
                    src="https://loremflickr.com/320/240"
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="card-body">
                  <Link
                    href={`/posts/${post.id}`}
                    className="stretched-link text-dark text-decoration-none"
                  >
                    <h6>{post.title}</h6>
                  </Link>
                  <p className="card-text">{post.body}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
