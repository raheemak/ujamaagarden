import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

type Status = "idle" | "sending" | "sent" | "error";

export const ContactUs = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;

    // Honeypot spam trap
    const fd = new FormData(formRef.current);
    if ((fd.get("website") ?? "").toString().trim()) return;

    try {
      setStatus("sending");

      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
      );

      formRef.current.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="w-full flex items-center py-4">
      <div className="mx-auto w-1/2 rounded-xl border border-gray-200 p-6 shadow-sm">
        <h2 className="mb-6 text-xl font-semibold text-gray-900">Contact Us</h2>

        <form ref={formRef} onSubmit={onSubmit} className="space-y-5">
          <input
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
          />

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              name="name"
              required
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm bg-[#f5f1ed]
                       focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              name="email"
              type="email"
              required
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm bg-[#f5f1ed]
                       focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={5}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm bg-[#f5f1ed]
                       focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="flex w-full items-center justify-center rounded-md bg-indigo-600 px-4 py-2
                     text-sm font-medium text-white transition
                     hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : "Send Email"}
          </button>

          {status === "sent" && (
            <p className="text-sm text-green-600">
              Thanks! Your message has been sent.
            </p>
          )}

          {status === "error" && (
            <p className="text-sm text-red-600">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};
