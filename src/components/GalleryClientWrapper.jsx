"use client";

import dynamic from "next/dynamic";

const GalleryComponent = dynamic(
  () => import("@/src/sections/Gallery/GalleryComponent"),
  { ssr: false }
);

export default function GalleryClientWrapper({ images }) {
  return <GalleryComponent images={images} />;
}
