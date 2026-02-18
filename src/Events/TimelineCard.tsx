import { useState } from "react";
import { DialogModal } from "../shared/DialogModal";
import { EventDialog } from "./EventDialog";

type TimelineCardProps = {
  content: string;
  title: string;
  date: string;
};

export const TimelineCard = ({ title, content, date }: TimelineCardProps) => {
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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
        className={`mt-4 p-1 rounded transition-colors ${isHovered || open ? "bg-[#3a312a]" : ""}`}
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setOpen(true)}
      >
        <div className="w-full max-w-[375px] mx-auto bg-white rounded-xl shadow-md text-center overflow-hidden">
          {firstImgSrc ? (
            <img
              src={firstImgSrc}
              alt={title}
              className="w-full block object-cover rounded-md"
            />
          ) : (
            <>
              <h3 className="text-md font-semibold mt-1">{title}</h3>
              <p className="text-sm text-gray-500 mt-1">{date}</p>
            </>
          )}
        </div>
      </button>
      <DialogModal open={open} onOpenChange={setOpen}>
        <EventDialog content={dialogContent} open={open} setOpen={setOpen} />
      </DialogModal>
    </>
  );
};
