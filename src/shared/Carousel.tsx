import { useState, useEffect } from "react";
import { Carousel } from "@material-tailwind/react";

type ImgCarouselProps = {
  imgFolder: string;
};

export const ImgCarousel = ({ imgFolder }: ImgCarouselProps) => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    // Fetch images from the folder
    const loadImages = async () => {
      try {
        const response = await fetch(`/api/images?folder=${imgFolder}`);
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error("Failed to load images:", error);
      }
    };
    loadImages();
  }, [imgFolder]);

  return (
    <Carousel
      className="rounded-xl"
      placeholder={undefined}
      onResize={undefined}
      onResizeCapture={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={`${imgFolder}/${image}`}
          alt={`Carousel slide ${index}`}
          className="h-full w-full object-cover"
        />
      ))}
    </Carousel>
  );
};
