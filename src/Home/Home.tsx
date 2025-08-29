import { EventsBar } from "./EventsBar/EventsBar";
import { TitleText } from "./TitleText";

export const Home = () => {
  return (
    <div className="w-full flex h-15/16 flex-col items-center">
      <TitleText />
      <EventsBar />
    </div>
  );
};

// <div className="relative w-full h-[400px] flex flex-col items-center  bg-[url('ujamaa-bg.png')]">
//           <div className="flex flex-col items-center min-h-screen">
//             <h1 className="pt-50 text-[280px] font-cursive font-extrabold text-transparent bg-clip-text bg-contain bg-center leading-none text-stroke bg-[url('trees-3.jpg')]">
//               UJAMA<span className="ml-3">A</span>
//             </h1>
//             <h2 className="text-6xl  text-[#395339] mt-[-20px] mb-10 ">
//               community garden.
//             </h2>
//           </div>
//         </div>
//       </div>