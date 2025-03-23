"use client";

import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";

interface Photo {
  src: string;
  alt: string;
}

const photos: Photo[] = [
  { src: "/photos/000023160009.jpg", alt: "Film photo from February 2" },
  { src: "/photos/000023160013.jpg", alt: "Film photo from February 2" },
  { src: "/photos/000023160014.jpg", alt: "Film photo from February 2" },
  { src: "/photos/000023160015.jpg", alt: "Film photo from February 2" },
  { src: "/photos/000010740007.JPG", alt: "Film photo from December 8" },
  { src: "/photos/000010740026.jpg", alt: "Film photo from December 8" },
  { src: "/photos/000010740030.JPG", alt: "Film photo from December 8" },
  { src: "/photos/000010740032.jpg", alt: "Film photo from December 8" },
  { src: "/photos/000020750031.jpg", alt: "Film photo from October 13" },
  { src: "/photos/000020750033.jpg", alt: "Film photo from October 13" },
  { src: "/photos/000020760011.jpg", alt: "Film photo from October 13" },
  { src: "/photos/000020760016.jpg", alt: "Film photo from October 13" },
  { src: "/photos/2268-12.JPG", alt: "Film photo from August 23" },
  { src: "/photos/2268-29.jpg", alt: "Film photo from August 23" },
  { src: "/photos/0441-10.jpg", alt: "Film photo from July 13" },
  { src: "/photos/0441-14.jpg", alt: "Film photo from July 13" },
  { src: "/photos/0441-17.jpg", alt: "Film photo from July 13" },
  { src: "/photos/0441-25.jpg", alt: "Film photo from July 13" },
  { src: "/photos/000046710011.jpg", alt: "Film photo from July 5" },
  { src: "/photos/000046710013.JPG", alt: "Film photo from July 5" },
  { src: "/photos/000046710014.jpg", alt: "Film photo from July 5" },
  { src: "/photos/000046710016.jpg", alt: "Film photo from July 5" },
  { src: "/photos/1849-07.JPG", alt: "Film photo from June 27" },
  { src: "/photos/1677-06.JPG", alt: "Film photo from June 13" },
  { src: "/photos/1677-18.jpg", alt: "Film photo from June 13" },
  { src: "/photos/1677-21.JPG", alt: "Film photo from June 13" },
  { src: "/photos/2488-25.jpg", alt: "Film photo from June 9" },
  { src: "/photos/2488-26.JPG", alt: "Film photo from June 9" },
  { src: "/photos/2488-36.jpg", alt: "Film photo from June 9" },
  { src: "/photos/2488-37.JPG", alt: "Film photo from June 9" },
];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <div className="min-h-screen p-4 sm:p-8 bg-white">
      <header className="max-w-7xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">MY MEMORIES</h1>
        <p className="text-gray-700">🍋</p>
      </header>

      <main className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="relative aspect-square group overflow-hidden rounded-lg bg-gray-50 cursor-pointer"
              onClick={() => {
                setPhotoIndex(index);
                setIsOpen(true);
              }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </main>

      <style jsx global>{`
        .yarl__container {
          background-color: white !important;
        }
        .yarl__slide_image {
          background-color: white !important;
        }
        .yarl__toolbar {
          background-color: transparent !important;
          box-shadow: none !important;
        }
        .yarl__navigation_prev,
        .yarl__navigation_next {
          background-color: transparent !important;
          box-shadow: none !important;
          color: black !important;
          filter: none !important;
        }
        .yarl__navigation_prev:hover,
        .yarl__navigation_next:hover {
          background-color: transparent !important;
          color: #666 !important;
          filter: none !important;
        }
        .yarl__toolbar_button {
          color: black !important;
          filter: none !important;
        }
        .yarl__toolbar_button:hover {
          color: #666 !important;
          filter: none !important;
        }
        .yarl__toolbar_button svg {
          fill: black !important;
        }
        .yarl__toolbar_button:hover svg {
          fill: #666 !important;
        }
      `}</style>

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={photoIndex}
        slides={photos.map((photo) => ({ src: photo.src }))}
      />
    </div>
  );
}
