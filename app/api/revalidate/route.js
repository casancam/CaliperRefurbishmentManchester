import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // Verify webhook secret
    const authHeader = request.headers.get("authorization");
    const secret = process.env.SANITY_WEBHOOK_SECRET;

    if (!secret) {
      console.error("SANITY_WEBHOOK_SECRET is not configured");
      return NextResponse.json(
        { error: "Webhook secret not configured" },
        { status: 500 }
      );
    }

    // Check if the request has the correct secret
    if (authHeader !== `Bearer ${secret}`) {
      console.error("Invalid webhook secret");
      return NextResponse.json(
        { error: "Invalid webhook secret" },
        { status: 401 }
      );
    }

    // Parse the request body
    const body = await request.json();

    // Extract the slug from the webhook payload
    const slug = body?.slug?.current;
    const type = body?._type;

    console.log("Webhook received:", { type, slug });

    // Revalidate the blog listing page
    revalidatePath("/blog");
    console.log("Revalidated: /blog");

    // If we have a slug, also revalidate the specific blog post
    if (slug && type === "blogPost") {
      revalidatePath(`/blog/${slug}`);
      console.log(`Revalidated: /blog/${slug}`);
    }

    return NextResponse.json({
      revalidated: true,
      message: "Cache revalidated successfully",
      paths: slug ? ["/blog", `/blog/${slug}`] : ["/blog"],
      now: Date.now(),
    });
  } catch (error) {
    console.error("Error in revalidate webhook:", error);
    return NextResponse.json(
      {
        error: "Error revalidating",
        message: error.message,
      },
      { status: 500 }
    );
  }
}

// Handle GET requests (for testing)
export async function GET() {
  return NextResponse.json({
    message: "Webhook endpoint is active. Use POST method with valid secret.",
  });
}
