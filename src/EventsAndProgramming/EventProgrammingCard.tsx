import { Tag } from "../shared/Tag";
import type { EventType } from "./EventsAndProgramming";
import { stripInlineStyles } from "./EventsProgramming.utils";

type EventProgrammingCardProps = {
  id: string;
  title: string;
  published: string;
  content: string;
  eventType: EventType;
};

export const EventProgrammingCard = ({
  id,
  title,
  published,
  content,
  eventType,
}: EventProgrammingCardProps) => {
  return (
    <div key={id} className="p-4 border rounded-lg shadow-sm font-xs">
      <div className=" flex">
        <h2 className="text-l font-semibold">{title}</h2>
        <Tag
          text={eventType === "EVENT" ? "Event" : "Program"}
          color="purple"
          className="ml-4"
        />
        <Tag
          text={new Date(published).toLocaleDateString(undefined, {})}
          color="green"
          className="ml-2"
        />
      </div>
      <p
        className="mt-2 text-gray-700  text-sm font-normal"
        dangerouslySetInnerHTML={{
          __html: stripInlineStyles(content),
        }}
      />
    </div>
  );
};
