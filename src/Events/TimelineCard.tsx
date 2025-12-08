import { useState } from "react";
import { DialogModal } from "../shared/DialogModal";
import { EventDialog } from "./EventDialog";

type TimelineCardProps = {
  content: string;
  title: string;
};

export const TimelineCard = ({ title, content }: TimelineCardProps) => {
  const [open, setOpen] = useState(false);

  // If content HTML starts with an <img ...> tag, extract its src to display here.
  const extractFirstImageSrc = (html: string) => {
    if (!html) return null;
    const match = html.match(/<img[^>]+src=["']([^"']+)["'][^>]*>/i);
    return match ? match[1] : null;
  };

  const firstImgSrc = extractFirstImageSrc(content);

  const removeFirstImageTag = (html: string) => {
    if (!html) return html;
    return html.replace(/<img[^>]*>/i, "");
  };

  const dialogContent = removeFirstImageTag(content);
  return (
    <>
      <button
        className="mt-4 px-4 py-2 e rounded "
        onClick={() => setOpen(true)}
      >
        <div className="w-[420px] max-w-[90%] bg-white p-6 rounded-xl shadow-md text-center">
          {firstImgSrc ? (
            <img
              src={firstImgSrc}
              alt={title}
              className="w-full object-cover rounded-md my-3"
            />
          ) : null}
          <h3 className="text-md font-semibold mt-1">{title}</h3>
        </div>
      </button>
      <DialogModal open={open} onOpenChange={setOpen}>
        <EventDialog content={dialogContent} open={open} setOpen={setOpen} />
      </DialogModal>
    </>
  );
};
