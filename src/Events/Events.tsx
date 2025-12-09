import { FlowerLoader } from "../shared/FlowerLoader";
import { Timeline } from "./Timeline";
import { usePostsByTag } from "./usePostsByTag";

const EVENTS_TAG = "EVENT";

export const Events = () => {
  const { data: events, isLoading, isError } = usePostsByTag(EVENTS_TAG);

  if (isLoading) return <FlowerLoader loadingText="Loading events" />;

  if (isError || !events) return <p>Failed to load events.</p>;

  return (
    <div className="w-full flex flex-col items-center py-10">
      <h2 className="text-4xl font-bold mb-8">Events</h2>

      <Timeline items={events} />
    </div>
  );
};
