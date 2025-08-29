type EventType = {
  title: string;
  date: string;
};

type EventCardProps = {
  event: EventType;
  color: string;
};

export const EventCard = ({ event, color }: EventCardProps) => {
  return (
    <div
      className={`event-blob-${Math.floor(Math.random() * 3) + 1} w-48 h-48 rounded-full flex items-center justify-center`}
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-col items-center  p-4">
        <h3 className="text-sm  ">{event.title}</h3>
        <p className="text-sm ">{event.date}</p>
      </div>
    </div>
  );
};
