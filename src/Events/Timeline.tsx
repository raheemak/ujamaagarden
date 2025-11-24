import { TimelineCard } from "./TimelineCard";

export const Timeline = ({
  items,
}: {
  items: {
    published: string | number | Date;
    title: string;
    content: string;
  }[];
}) => (
  <div className="relative w-full max-w-4xl mx-auto py-16">
    <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gray-300"></div>

    <div className="space-y-16">
      {items.map((item, index) => {
        const isLeft = index % 2 === 0;
        const date = new Date(item.published).toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        });

        return (
          <div
            key={index}
            className={`
                relative flex items-center w-full
                ${isLeft ? "justify-start" : "justify-end"}
              `}
          >
            {!isLeft && (
              <div
                className={`
                  ${isLeft ? "text-right pl-20" : "text-left pr-20"}
                `}
              >
                <p className="text-sm text-gray-500">{date}</p>
              </div>
            )}

            <TimelineCard title={item.title} content={item.content} />

            {isLeft && (
              <div
                className={`
                  ${isLeft ? "text-right pl-20" : "text-left pr-20"}
                `}
              >
                <p className="text-sm text-gray-500">{date}</p>
              </div>
            )}

            {/* Dot */}
            <div
              className="
                  absolute left-1/2 top-[50%]
                  w-4 h-4 -translate-x-1/2 -translate-y-1/2
                 rounded-full bg-[url('/timeline_flower.png')] bg-cover bg-center w-10 h-10
                "
            />
          </div>
        );
      })}
    </div>
  </div>
);
