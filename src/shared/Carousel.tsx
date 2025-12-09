import { useEffect, useState } from "react";

interface ImageCarouselProps {
  images: string[]; // full image URLs or paths from public/
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 3000);

    return () => clearInterval(id);
  }, [images.length]);

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-xl">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            className="w-full h-80 object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Left Button */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full"
      >
        ❮
      </button>

      {/* Right Button */}
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full transition ${
              index === i ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
