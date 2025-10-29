import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-01-01",
  useCdn: true,
  token: process.env.SANITY_API_TOKEN,
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

// Helper function to fetch all blog posts
export async function getAllBlogPosts() {
  const query = `*[_type == "blogPost" && 
"e628db7e-f70b-476f-8669-7fd8ea4d80ad" in 
targetProjects[]._ref] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    author,
    coverImage {
      asset-> {
        _id,
        url
      },
      alt
    },
    categories
  }`;

  const posts = await client.fetch(query);
  console.log("Raw posts from Sanity:", JSON.stringify(posts, null, 2));

  const postsWithImages = posts.map((post) => {
    const imageUrl = post.coverImage?.asset
      ? urlFor(post.coverImage.asset).width(800).height(450).url()
      : null;
    console.log(
      `Post: ${post.title}, Image:`,
      post.coverImage,
      "URL:",
      imageUrl
    );
    return {
      ...post,
      imageUrl,
    };
  });

  return postsWithImages;
}

// Helper function to fetch a single blog post by slug
export async function getBlogPostBySlug(slug) {
  const query = `*[_type == "blogPost" && slug.current == 
$slug && "e628db7e-f70b-476f-8669-7fd8ea4d80ad" in 
targetProjects[]._ref][0] {
    _id,
    title,
    slug,
    excerpt,
    content,
    publishedAt,
    author,
    coverImage {
      asset-> {
        _id,
        url
      },
      alt
    },
    categories,
    tags
  }`;

  const post = await client.fetch(query, { slug });

  if (!post) return null;

  return {
    ...post,
    imageUrl: post.coverImage?.asset
      ? urlFor(post.coverImage.asset).width(1200).height(630).url()
      : null,
  };
}

// Helper function to fetch all blog slugs (for static generation)
export async function getAllBlogSlugs() {
  const query = `*[_type == "blogPost" && 
"e628db7e-f70b-476f-8669-7fd8ea4d80ad" in 
targetProjects[]._ref] {
    "slug": slug.current
  }`;

  return client.fetch(query);
}
