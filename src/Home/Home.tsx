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
