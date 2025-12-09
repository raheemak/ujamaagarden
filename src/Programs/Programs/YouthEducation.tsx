import ImageCarousel from "../../shared/Carousel";

const YOUTH_EDUCATION_IMAGES = [
  "youtheducation.jpg",
  "youthprog1.2.jpg",
  "youthprog2.jpg",
  "youthprog3.jpg",
  "youthprog4.jpg",
  "youthprog5.jpg",
  "youthprog6.png",
  "youthprog7.jpg",
  "youthprog8.jpg",
  "youthprog9.jpg",
  "youthprog10.png",
  "youthprog11.jpg",
];

export const YouthEducation = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Youth Education Program</h2>
        <div className="mb-2 flex flex-col gap-4">
          <span className="flex-col flex items-center">
            <span className="italic text-center">
              “In the end, we will conserve only what we love, we will love only
              what what what we understand, we will understand only what we are
              taught.”
            </span>
            - Baba Dioum
          </span>
          <span>
            Aligned with our core mission to support young people’s learning
            journeys, each growing season, we create educational opportunities
            specific to the youth in our local community. Incorporating
            extensive research about youth education in green spaces, including
            the BEETLES method, our site-based and experimental curricula foster
            a deeper connection between the youth and their communities by
            rooting in scientific environmental studies about local ecosystems
            paired with the social history of land and food struggles in the
            Bronx. Examples of past learning activities include soil and water
            testing, seed saving, zine-making, and touring the Hunts Point Food
            Distribution Center. Looking toward the future, we are excited to
            further develop learning goals by incorporating art making as a
            reflection tool with the ultimate goal of co-creating an ethic of
            care and deepening empathy for our planet and each other. Program
            partners include SYEP, YouthWRAP, One World Middle School, and Bronx
            Better Learning Charter School. For a better understanding of our
            socio-political framework, please reference the foundation text, We
            are not softening our resistance, edited by Alicia Grullon.
          </span>
        </div>
      </div>
      <div className="relative w-screen overflow-hidden">
        <ImageCarousel
          images={YOUTH_EDUCATION_IMAGES.map(
            (src) => `/youth-education/${src}`,
          )}
        />
      </div>
    </div>
  );
};
