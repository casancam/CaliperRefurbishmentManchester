import { getBlogPostBySlug, getAllBlogSlugs } from "@/src/lib/sanity";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((item) => ({
    slug: item.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | Caliper Refurb Manchester",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} | Caliper Refurb Manchester Blog`,
    description: post.excerpt || post.title,
    keywords: post.tags
      ? post.tags.join(", ")
      : "caliper painting, brake refurbishment, automotive care, Manchester",
    openGraph: {
      title: post.title,
      description: post.excerpt || post.title,
      url: `https://www.caliperrefurbmanchester.co.uk/blog/${slug}`,
      siteName: "Caliper Refurb Manchester",
      type: "article",
      publishedTime: post.publishedAt,
      authors: post.author ? [post.author] : [],
      images: post.imageUrl
        ? [
            {
              url: post.imageUrl,
              width: 1200,
              height: 630,
              alt: post.coverImage?.alt || post.title,
            },
          ]
        : [
            {
              url: "/assets/logo.png",
              width: 1200,
              height: 630,
              alt: "Caliper Refurb Manchester",
            },
          ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt || post.title,
      images: post.imageUrl ? [post.imageUrl] : ["/assets/logo.png"],
    },
    alternates: {
      canonical: `https://www.caliperrefurbmanchester.co.uk/blog/${slug}`,
    },
  };
}

// Portable Text components for custom styling
const portableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold text-gray-900 mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">{children}</h4>
    ),
    normal: ({ children }) => (
      <p className="text-gray-700 leading-relaxed mb-6">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-red-600 pl-6 py-2 my-6 italic text-gray-600 bg-gray-100 rounded-r-lg">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700 ml-4">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 mb-6 text-gray-700 ml-4">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="text-gray-700 leading-relaxed">{children}</li>
    ),
    number: ({ children }) => (
      <li className="text-gray-700 leading-relaxed">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-gray-900">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => (
      <a
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-600 hover:text-red-700 underline transition-colors"
      >
        {children}
      </a>
    ),
    code: ({ children }) => (
      <code className="bg-gray-100 px-2 py-1 rounded text-red-600 font-mono text-sm">
        {children}
      </code>
    ),
  },
  types: {
    image: ({ value }) => (
      <div className="my-8 rounded-lg overflow-hidden">
        <Image
          src={value.asset.url}
          alt={value.alt || "Blog post image"}
          width={1200}
          height={675}
          className="w-full h-auto"
        />
        {value.caption && (
          <p className="text-gray-500 text-sm mt-2 text-center italic">
            {value.caption}
          </p>
        )}
      </div>
    ),
    code: ({ value }) => (
      <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto my-6">
        <code className="text-red-400 font-mono text-sm">{value.code}</code>
      </pre>
    ),
  },
};

export const revalidate = 60; // Revalidate every 60 seconds

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-gray-50 min-h-screen pt-48 pb-20">
      {/* Breadcrumb Navigation */}
      <div className="bg-white py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-red-600 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-red-600">
              Blog
            </Link>
            <span>/</span>
            <span className="text-red-600 font-medium truncate max-w-xs">
              {post.title}
            </span>
          </div>
        </div>
      </div>

      {/* New Button - Floating */}
      <a
        href="https://autofortress.co.uk"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-24 right-4 z-40 inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
        </span>
        New
      </a>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back to Blog Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors mb-8 group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 group-hover:-translate-x-1 transition-transform"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back to Blog
        </Link>

        {/* Cover Image */}
        {post.imageUrl && (
          <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden mb-8 shadow-2xl">
            <Image
              src={post.imageUrl}
              alt={post.coverImage?.alt || post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>
        )}

        {/* Categories */}
        {post.categories && post.categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {post.categories.map((category, index) => (
              <span
                key={index}
                className="px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium"
              >
                {category}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {post.excerpt}
          </p>
        )}

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-4 pb-8 mb-8 border-b border-gray-200">
          {post.author && (
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  {post.author.charAt(0).toUpperCase()}
                </span>
              </div>
              <div>
                <p className="text-gray-900 font-medium">{post.author}</p>
              </div>
            </div>
          )}
          {post.publishedAt && (
            <time
              dateTime={post.publishedAt}
              className="text-gray-600 text-sm flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
              {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          )}
        </div>

        {/* Blog Content */}
        <div className="prose prose-invert max-w-none">
          {post.content && (
            <PortableText
              value={post.content}
              components={portableTextComponents}
            />
          )}
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-br from-red-600 to-red-800 rounded-xl p-8 text-center shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Transform Your Calipers?
          </h2>
          <p className="text-gray-100 mb-6 max-w-2xl mx-auto">
            Get a free quote for professional brake caliper painting services in
            Manchester. Expert installation with a 3-year warranty.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Get Free Quote
          </Link>
        </div>
      </article>
    </main>
  );
}
