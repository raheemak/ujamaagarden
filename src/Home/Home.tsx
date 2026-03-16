import { TitleText } from "./TitleText";

export const Home = () => {
  return (
    <div
      className="
        w-full h-screen flex flex-col items-center
        bg-[url('/ujamaa-bg-mobile.png')]
        bg-cover bg-center
        md:bg-[url('/ujamaa-bg-nomap.png')]
      "
    >
      {/* Small decorative map image */}
      <img
        src="ujamaa-map.png"
        alt="UJAMAA GARDEN MAP"
        className="  pt-15  w-3/4 sm:pt-12 md:w-1/2 lg:w-1/5 h-auto object-contain"
      />

      <TitleText />
    </div>
  );
};
