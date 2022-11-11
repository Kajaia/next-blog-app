import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-muted py-5">
      <div className="container">
        <p className="float-end mb-1">
          <a href="#">Back to top</a>
        </p>
        <p className="mb-1">
          Album example is &copy; Bootstrap, but please download and customize
          it for yourself!
        </p>
        <p className="mb-0">
          New to Bootstrap? <Link href="/">Visit the homepage</Link> or read our{" "}
          <a href="/docs/5.2/getting-started/introduction/">
            getting started guide
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
