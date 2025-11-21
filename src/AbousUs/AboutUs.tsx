import { ABOUT_US_CONSTANTS } from "./AboutUs.constants";
import { AboutUsCard, AboutUsImg, AboutUsText } from "./AboutUsCard";

export const AboutUs = () => {
  return (
    <div className="w-full flex-1 relative flex overflow-visible flex-col items-center justify-center bg-cover bg-center px-0 py-0 md:px-12 md:py-4">
      <div className="absolute inset-10 top-50 left-0 right-0  bg-[#8b9b3c] opacity-10 blur-2xl z-0 [clip-path:polygon(10%_85%,90%_45%,95%_60%,50%_80%,5%_60%)]"></div>
      <h1 className="text-3xl">About Us</h1>

      {Object.values(ABOUT_US_CONSTANTS).map((section, _index) => (
        <AboutUsCard>
          <div
            className={`flex flex-col gap-x-8 md:flex-row ${_index % 2 !== 0 ? "md:flex-row-reverse" : ""} items-center`}
          >
            <AboutUsImg img={section.img} />
            <AboutUsText title={section.title} content={section.content} />
          </div>
        </AboutUsCard>
      ))}
    </div>
  );
};
