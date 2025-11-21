import { useEffect, useState } from "react";
import { FlowerLoader } from "../shared/FlowerLoader";
import classNames from "classnames";

export const ImageGallery = () => {
  const images = import.meta.glob<{ default: string }>(
    "/src/assets/gallery/*",
    { eager: true },
  );

  const imageUrls: string[] = Object.values(images).map((img) => img.default);

  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-2">
      {showLoader && (
        <div
          className={classNames("flex justify-center items-center h-96", {
            // hidden: !showLoader
          })}
        >
          <FlowerLoader loadingText="Loading Images" />
        </div>
      )}

      <div
        className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 2xl:columns-6"
        style={{ columnGap: "10px" }}
      >
        {imageUrls.map((url, i) => (
          <img
            key={i}
            src={url}
            alt={`img-${i}`}
            className={classNames(
              "transition-opacity duration-300 ease-in mb-2 w-full object-cover",
              { "opacity-0": showLoader, "opacity-100": !showLoader },
            )}
          />
        ))}
      </div>
    </div>
  );
};
