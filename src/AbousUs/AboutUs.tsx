import { ABOUT_US_CONSTANTS } from "./AboutUs.constants";
import { AboutUsCard, AboutUsImg } from "./AboutUsCard";

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

            <div className="flex-1 pr-3 w-full md:w-auto text-xl ">
              <h2 className="font-bold">{section.title}</h2>
              <br />

              {section === ABOUT_US_CONSTANTS.MISSION && (
                <span>
                  <p>
                    At Ujamaa Garden, we consider access to organic, local, and
                    fresh produce as the necessary first step towards liberatory
                    world-making. In addition to the food and medicine we grow
                    at the garden, our partnerships and programs pair our urban
                    community’s needs with rural resources by bringing food from
                    upstate NY to our community members living under food
                    apartheid. By increasing capacity through food security, we
                    facilitate space for visioning and developing tools to
                    create the world we want to inhabit.
                  </p>
                  <p>
                    Ujamaa Garden is free and open to the public to serve as a
                    gathering place to play, create, rest, and seed nourishing
                    futures.
                  </p>
                </span>
              )}

              {section === ABOUT_US_CONSTANTS.VISION && (
                <p>
                  Young people learn, practice, and develop skills to co-create
                  a more caring and just society, rooted in reciprocity with the
                  earth and knowledge of ancestral wisdoms. Their work
                  reverberates throughout their communities and inspires
                  gatherings with serious intentions to make the world a better
                  place for all people.
                </p>
              )}

              {section === ABOUT_US_CONSTANTS.CORE_VALUES && (
                <ul>
                  <li className="list-disc pl-5">
                    Food sovereignty is the foundation of liberatory
                    world-making.
                  </li>
                  <li className="list-disc pl-5">
                    It is important to center our youth’s dreams, knowledge, and
                    ideas.
                  </li>
                  <li className="list-disc pl-5">
                    Awareness and care for the earth and earth systems are
                    essential components of all leadership and guiding
                    frameworks.
                  </li>
                  <li className="list-disc pl-5">
                    We prioritize building with our local community.
                  </li>
                  <li className="list-disc pl-5">
                    Acknowledging the importance and wisdom of generations,
                    species, and beings different from us is essential to create
                    strong coalitions. We build intergenerationally, across
                    cultures and languages, and beyond the human human form!
                  </li>
                </ul>
              )}
            </div>
          </div>
        </AboutUsCard>
      ))}
    </div>
  );
};
