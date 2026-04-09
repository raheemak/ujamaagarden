import { DialogModal } from "../shared/DialogModal";
import { stripInlineStyles } from "./EventsProgramming.utils";

type EventDialogProps = {
  content: string;
  open: boolean;
  setOpen: (open: boolean) => void;
};
export const EventDialog = ({ content, open, setOpen }: EventDialogProps) => {
  return (
    <DialogModal open={open} onOpenChange={setOpen}>
      <p
        className="mt-2 text-gray-700  text-lg font-normal [&_a]:text-amber-600"
        dangerouslySetInnerHTML={{
          __html: stripInlineStyles(content),
        }}
      />
    </DialogModal>
  );
};
