import { TitleText } from "./TitleText";

export const Home = () => {
  return (
    <div
      className="
        w-full h-screen flex flex-col items-center
        bg-[url('/ujamaa-bg-mobile.png')]
        bg-cover bg-center
        md:bg-[url('/ujamaa-bg.png')]
      "
    >
      <TitleText />
    </div>
  );
};
