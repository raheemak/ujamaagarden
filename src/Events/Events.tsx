import { FlowerLoader } from "../shared/FlowerLoader";
import { Timeline } from "./Timeline";
import { usePostsByTag } from "./usePostsByTag";

const EVENTS_TAG = "EVENT";

export const Events = () => {
  const { data: events, isLoading, isError } = usePostsByTag(EVENTS_TAG);

  if (isLoading) return <FlowerLoader loadingText="Loading events" />;

  if (isError || !events) return <p>Failed to load events.</p>;

  return (
    <div className="w-full flex flex-col items-center py-10 px-4 overflow-x-hidden">
      <h2 className="text-4xl font-bold mb-8 text-center">Events</h2>
      <div className="w-full md:w-1/3 max-w-2xl">
        {" "}
        <h3 className="text-lg text-gray-600 mb-12 text-center">
          Ujamaa Garden will be hosting <br />
          Volunteer Days with Bronx Green-Up on the first Saturday of every
          month starting in March, from 10:00am - 1:00pm. All are welcome to
          attend.
          <a
            href="https://ujamaagarden.com/contact-us"
            className="text-amber-600 hover:underline"
          >
            {" "}
            Please reach out with any questions.
          </a>
        </h3>
      </div>
      <Timeline items={events} />
    </div>
  );
};
