import { EventCard } from "./Card/EventCard";

export const EventsBar = () => {
  //todo : get upcoming events from backend and map through them to create event cards
  // todo if no evenets, show a different css design with a message like "No upcoming events, check back later"

  const colors = ["#cc9a86", "#C4BD8B", "#e9eff9", "#abb6a0", "#d6d6c3"]; // Add more colors as needed
  const events = [
    {
      title: "Mom Program",
      date: "2024-05-15",
      description:
        "Join us for a day of planting and community bonding at UJAMAA Garden.",
    },
    {
      title: "Mom Program",
      date: "2024-05-15",
      description:
        "Join us for a day of planting and community bonding at UJAMAA Garden.",
    },
    {
      title: "Mom Program",
      date: "2024-05-15",
      description:
        "Join us for a day of planting and community bonding at UJAMAA Garden.",
    },
    {
      title: "Summer Youth",
      date: "2024-06-20",
      description:
        "Celebrate the summer harvest with food, music, and fun activities for all ages.",
    },
    {
      title: "Sound Festival",
      date: "2024-06-20",
      description:
        "Celebrate the summer harvest with food, music, and fun activities for all ages.",
    },
  ]; // Replace with actual events from backend
  return (
    <div className="w-full flex flex-wrap justify-center gap-4 md:gap-12 mt-10">
      {events.map((event, index) => (
        <div key={index} className="w-[45%] sm:w-[30%] md:w-auto">
          <EventCard event={event} color={colors[index % colors.length]} />
        </div>
      ))}
    </div>
  );
};
