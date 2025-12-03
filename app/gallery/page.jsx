
import { getAllGalleryImages } from "@/src/lib/sanity";
import GalleryClientWrapper from "@/src/components/GalleryClientWrapper";

export const metadata = {
  title: "Caliper Painting Gallery Manchester | Before & After Results | Professional Work Showcase",
  description: "View our stunning brake caliper painting results. Ferrari red, custom colors, and professional finishes. See why Manchester chooses us for caliper refurbishment. Call 0161 549 2993.",
  keywords: "caliper painting gallery Manchester, brake caliper before after, Ferrari red caliper photos, custom caliper colors gallery, professional automotive painting results, Manchester caliper refurbishment examples, high quality brake caliper work, automotive transformation gallery",
};

export default async function GalleryPage() {
  let sanityImages = [];

  try {
    sanityImages = await getAllGalleryImages();
  } catch (error) {
    console.error("Error fetching gallery images from Sanity:", error);
  }

  return (
    <div className='max-w-screen overflow-hidden'>
        <GalleryClientWrapper images={sanityImages} />
    </div>
  )
}
