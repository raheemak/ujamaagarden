import { ProgramCard } from "./ProgramCard";

const PROGRAMS = [

  {
    title: "Mom Program",
    img: "mom_program.jpg",
    url: "/mom-program",
    text: "Launched in Spring 2024, our Mom Program supports a cohort of 11 mothers and their families with free bi-weekly...",
  },
    {
    title: "Environmental Conservation and Restoration",
    img: "restoration.jpg",
    url: "/environmental-conservation",
    text: "When we first began cleaning the lot that would become Ujamaa Garden, elders in the community shared...",
  },
  {
    title: "Youth Education",
    img: "youth_education.jpg",
    url: "/youth-education",
    text: "Aligned with our core mission to support young people’s learning journeys, each growing season, we create educational opportunities ...",
  },
];

export const Programs = () => {
  return (
    <div className="w-full flex flex-col items-center py-10">
      <h2 className="text-4xl font-bold mb-8">Our Programs</h2>
      <div className="w-full flex justify-center">
        <div className="w-full md:w-3/4  md:px-0 grid grid-cols-1 md:grid-cols-3 gap-px justify-center items-start ">
          {PROGRAMS.map((program, index) => (
            <ProgramCard
              key={index}
              title={program.title}
              img={program.img}
              url={program.url}
              text={program.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
