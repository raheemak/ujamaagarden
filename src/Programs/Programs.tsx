import { ProgramCard } from "./ProgramCard";
import { MomProgram } from "./ProgramDialogs/MomProgram";
import { Restoration } from "./ProgramDialogs/Restoration";
import { YouthEducation } from "./ProgramDialogs/YouthEducation";

const PROGRAMS = [
  {
    title: "Environmental Conservation and Restoration",
    img: "restoration.png",
    content: <Restoration />,
  },
  {
    title: "Mom Program",
    img: "mom_program.png",
    content: <MomProgram />,
  },

  {
    title: "Youth Education",
    img: "youth_education.png",
    content: <YouthEducation />,
  },
];

export const Programs = () => {
  return (
    <div className="w-full flex flex-col items-center py-10">
      <h2 className="text-4xl font-bold mb-8">Our Programs</h2>
      <div className="w-full flex justify-center">
        <div className="w-full md:w-3/4 flex flex-row md:grid md:grid-cols-3 gap-8 justify-center items-start overflow-x-auto md:overflow-y-auto md:h-[520px] flex-nowrap py-2">
          {PROGRAMS.map((program, index) => (
            <ProgramCard
              key={index}
              title={program.title}
              img={program.img}
              content={program.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
