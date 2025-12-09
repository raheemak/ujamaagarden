import { useEffect, useState } from "react";

interface CarouselProps {
  images: string[];
}

export default function Carousel({ images }: CarouselProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 4000);
    return () => clearInterval(id);
  }, [images.length]);

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <div className=" bg-[#3a312a] h-[450px] md:h-[600px]">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500 h-full"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="w-full h-full flex items-center justify-center bg-[#3a312a] flex-shrink-0"
          >
            <img src={src} className="max-h-full max-w-full object-contain" />
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full"
      >
        ❮
      </button>

      {/* Right Arrow */}
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full"
      >
        ❯
      </button>

      {/* Dots */}
      {/* <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 w-3 rounded-full transition ${
              index === i ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div> */}
    </div>
  );
}
