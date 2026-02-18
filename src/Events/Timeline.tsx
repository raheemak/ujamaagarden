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
  <div className="relative w-full max-w-full md:max-w-4xl mx-auto py-16 px-4 md:px-0 overflow-x-hidden">
    {/* Vertical line: left on mobile, centered on desktop */}
    <div
      className="
        absolute top-0 h-full w-1 bg-[#4b2b1b]
        left-4
        md:left-1/2 md:-translate-x-1/2
      "
    />

    <div className="space-y-12">
      {items.map((item, index) => {
        const isLeft = index % 2 === 0;
        const date = new Date(item.published).toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        });

        return (
          <div key={index} className="relative">
            {/* Dot */}
            <div
              className="
                absolute left-4 top-6
                w-3 h-3 rounded-full bg-[#4b2b1a] shadow-sm
                md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2
              "
            />

            {/* ================= MOBILE ================= */}
            <div className="md:hidden pl-8 min-w-0">
              <div className="mb-3">
                <h3 className="text-md font-semibold mt-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{date}</p>
              </div>

              <TimelineCard
                title={item.title}
                content={item.content}
                date={date}
              />

              {/* Tap affordance */}
              <div className="mt-2 flex items-center gap-2 text-xs text-gray-600">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-black/5">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 5h10v10M19 5l-8 8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span>Tap image to view details</span>
              </div>
            </div>

            {/* ================= DESKTOP ================= */}
            <div className="hidden md:grid grid-cols-2 items-center gap-x-12">
              {/* LEFT COLUMN */}
              <div className="flex justify-end">
                {isLeft ? (
                  <div className="w-full max-w-md">
                    <TimelineCard
                      title={item.title}
                      content={item.content}
                      date={date}
                    />
                  </div>
                ) : (
                  <div className="w-full max-w-md text-right pr-2">
                    <h3 className="text-md font-semibold mt-1">{item.title}</h3>
                    <p className="text-sm">{date}</p>
                  </div>
                )}
              </div>

              {/* RIGHT COLUMN */}
              <div className="flex justify-start">
                {!isLeft ? (
                  <div className="w-full max-w-md">
                    <TimelineCard
                      title={item.title}
                      content={item.content}
                      date={date}
                    />
                  </div>
                ) : (
                  <div className="w-full max-w-md text-left pl-2">
                    <h3 className="text-md font-semibold mt-1">{item.title}</h3>
                    <p className="text-sm">{date}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);
