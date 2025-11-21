import classNames from "classnames";
import { useState } from "react";

export const ImageGallery = () => {
  const images = import.meta.glob<{ default: string }>(
    "/src/assets/gallery/*",
    { eager: true },
  );

  // extract URLs
  const imageUrls: string[] = Object.values(images).map((img) => img.default);

  // Track loaded state per image
  const [loadedMap, setLoadedMap] = useState<Record<number, boolean>>({});

  const handleLoad = (index: number) => {
    setLoadedMap((prev) => ({
      ...prev,
      [index]: true,
    }));
  };

  return (
    <div
      className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 2xl:columns-6 p-2"
      style={{ columnGap: "10px" }}
    >
      {imageUrls.map((url, i) => (
        <img
          key={i}
          src={url}
          alt={`img-${i}`}
          className={classNames(
            "opacity-0 transition-opacity duration-300 ease-in mb-2 w-full object-cover",
            loadedMap[i] && "opacity-100",
          )}
          onLoad={() => handleLoad(i)}
        />
      ))}
    </div>
  );
};
