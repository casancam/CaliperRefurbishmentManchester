import { getAllBlogPosts } from "@/src/lib/sanity";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Caliper Painting Blog | Expert Tips & Guides | Caliper Refurb Manchester",
  description:
    "Explore expert tips, guides, and insights on brake caliper painting, maintenance, and automotive care from Caliper Refurb Manchester. Stay updated with the latest trends and techniques.",
  keywords:
    "caliper painting blog, brake caliper tips, automotive blog, caliper maintenance, brake refurbishment guides, Manchester automotive blog, caliper painting techniques",
  openGraph: {
    title: "Caliper Painting Blog | Caliper Refurb Manchester",
    description:
      "Expert tips, guides, and insights on brake caliper painting and automotive care from Manchester's leading caliper refurbishment specialists.",
    url: "https://www.caliperrefurbmanchester.co.uk/blog",
    siteName: "Caliper Refurb Manchester",
    type: "website",
    images: [
      {
        url: "/assets/logo.png",
        width: 1200,
        height: 630,
        alt: "Caliper Refurb Manchester Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Caliper Painting Blog | Caliper Refurb Manchester",
    description:
      "Expert tips, guides, and insights on brake caliper painting and automotive care.",
    images: ["/assets/logo.png"],
  },
  alternates: {
    canonical: "https://www.caliperrefurbmanchester.co.uk/blog",
  },
};

export const revalidate = 60; // Revalidate every 60 seconds

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <main className="bg-gray-50 min-h-screen pt-48">
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
            <span className="text-red-600 font-medium">Blog</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 via-red-900 to-gray-900 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-2 mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-red-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
            </svg>
            <span className="text-red-400 text-sm font-medium">
              Expert Articles & Guides
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Caliper Painting
            <span className="block text-red-500 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Blog & Resources
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover expert tips, guides, and insights on brake caliper
            painting, maintenance, and automotive care from Manchester's leading
            specialists.
          </p>

          {/* New Button */}
          <a
            href="https://autofortress.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            New
          </a>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts && posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post._id}
                  href={`/blog/${post.slug.current}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-200 hover:border-red-500"
                >
                {/* Cover Image */}
                {post.imageUrl ? (
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image
                      src={post.imageUrl}
                      alt={post.coverImage?.alt || post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                ) : (
                  <div className="w-full h-48 bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center">
                    <span className="text-white text-lg font-bold">
                      No Image
                    </span>
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  {/* Title */}
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  {post.excerpt && (
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                  )}

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    {post.publishedAt && (
                      <time dateTime={post.publishedAt}>
                        {new Date(post.publishedAt).toLocaleDateString(
                          "en-GB",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </time>
                    )}
                    {post.author && (
                      <span className="font-medium">{post.author}</span>
                    )}
                  </div>

                  {/* Categories */}
                  {post.categories && post.categories.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {post.categories.slice(0, 3).map((category, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs font-medium"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
          ) : (
            <div className="text-center py-20">
              <div className="bg-white rounded-xl p-12 border border-gray-200 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  No Blog Posts Yet
                </h2>
                <p className="text-gray-600 mb-6">
                  We're working on creating amazing content for you. Check back
                  soon!
                </p>
                <Link
                  href="/"
                  className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200"
                >
                  Return Home
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready for Your Caliper Transformation?
          </h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Get a free quote for professional brake caliper painting services in
            Manchester. Expert installation with a 3-year warranty.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              href="/contact"
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l.917-3.917A6.9 6.9 0 012 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                  clipRule="evenodd"
                />
              </svg>
              Get Free Quote
            </Link>

            <Link
              href="/gallery"
              className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                  clipRule="evenodd"
                />
              </svg>
              View Gallery
            </Link>
          </div>

          <div className="flex justify-center gap-6 text-white">
            <Link href="/" className="hover:text-gray-200 transition-colors">
              Home
            </Link>
            <span>•</span>
            <Link href="/faq" className="hover:text-gray-200 transition-colors">
              FAQs
            </Link>
            <span>•</span>
            <a
              href="tel:+441615492993"
              className="hover:text-gray-200 transition-colors"
            >
              0161 549 2993
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
