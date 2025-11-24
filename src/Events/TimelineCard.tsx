import { useState } from "react";
import { DialogModal } from "../shared/DialogModal";
import { EventDialog } from "./EventDialog";

type TimelineCardProps = {
  content: string;
  title: string;
};

export const TimelineCard = ({ title, content }: TimelineCardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`
                  w-[45%] bg-white p-6 rounded-xl shadow-md text-center
                `}
      >
        <h3 className="text-m font-semibold mt-1">{title}</h3>
        <button
          className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          onClick={() => setOpen(true)}
        >
          Read More
        </button>
      </div>
      <DialogModal open={open} onOpenChange={setOpen}>
        <EventDialog content={content} open={open} setOpen={setOpen} />
      </DialogModal>
    </>
  );
};
