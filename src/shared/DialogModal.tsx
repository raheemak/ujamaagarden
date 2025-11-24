import * as Dialog from "@radix-ui/react-dialog";

export const DialogModal = ({
  open,
  onOpenChange,
  children,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children?: React.ReactNode;
}) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40" />
        <Dialog.Content
          className="
            fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
            bg-white p-6 rounded-xl shadow-lg 
          "
        >
          {children}

          <div className="mt-4 flex justify-end">
            <Dialog.Close className="px-4 py-2 bg-gray-200 rounded">
              Close
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
