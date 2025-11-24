import { FlowerLoader } from "../shared/FlowerLoader";
import { Timeline } from "./Timeline";
import { usePostsByTag } from "./usePostsByTag";

const EVENTS_TAG = "EVENT";

export const Events = () => {
  const { data: events, isLoading, isError } = usePostsByTag(EVENTS_TAG);

  if (isLoading) return <FlowerLoader loadingText="Loading events" />;

  if (isError || !events) return <p>Failed to load events.</p>;

  return (
    <div className="gap-6 mt-8 px-4 py-2">
      <h2 className="text-2xl font-bold mb-4">Events</h2>

      <Timeline items={events} />
    </div>
  );
};
