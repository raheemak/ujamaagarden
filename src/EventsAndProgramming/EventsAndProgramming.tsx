import { FlowerLoader } from "../shared/FlowerLoader";
import { EventProgrammingCard } from "./EventProgrammingCard";
import { usePostsByTag } from "./usePostsByTag";

export type EventType = "EVENT" | "PROGRAM";

type EventsAndProgrammingProps = {
  eventType: EventType;
};

export const EventsAndProgramming = ({
  eventType,
}: EventsAndProgrammingProps) => {
  const {
    data: eventsAndPrograms,
    isLoading,
    isError,
  } = usePostsByTag(eventType);

  if (isLoading) return <FlowerLoader loadingText="Loading events" />;

  if (isError || !eventsAndPrograms) return <p>Failed to load posts.</p>;

  return (
    <div className="gap-6 mt-8 px-4 py-2">
      <h2 className="text-2xl font-bold mb-4">Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {eventsAndPrograms.map((event) => (
          <EventProgrammingCard
            key={event.id}
            id={event.id}
            title={event.title}
            published={event.published}
            content={event.content}
            eventType={eventType}
          />
        ))}
      </div>
    </div>
  );
};
