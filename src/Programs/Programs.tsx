import { ProgramCard } from "./ProgramCard";

const PROGRAMS = [
  {
    title: "Environmental Conservation and Restoration",
    img: "restoration.png",
    url: "/environmental-conservation",
  },
  {
    title: "Mom Program",
    img: "mom_program.png",
    url: "/mom-program",
  },

  {
    title: "Youth Education",
    img: "youth_education.png",
    url: "/youth-education",
  },
];

export const Programs = () => {
  return (
    <div className="w-full flex flex-col items-center py-10">
      <h2 className="text-4xl font-bold mb-8">Our Programs</h2>
      <div className="w-full flex justify-center">
        <div className="w-full md:w-3/4 px-4 md:px-0 grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-start py-">
          {PROGRAMS.map((program, index) => (
            <ProgramCard
              key={index}
              title={program.title}
              img={program.img}
              url={program.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
