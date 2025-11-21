import { useQuery } from "@tanstack/react-query";
import type {
  BloggerEntry,
  BloggerApiResponse,
} from "./EventsAndProgramming.type";

const BLOGGER_API_KEY = import.meta.env.VITE_BLOGGER_KEY;

const fetchPostsByTag = async (tag: string): Promise<BloggerEntry[]> => {
  const res = await fetch(
    `https://www.googleapis.com/blogger/v3/blogs/378810748578023305/posts?labels=${tag}&key=${BLOGGER_API_KEY}`,
  );

  if (!res.ok) throw new Error("Failed to fetch posts");

  const data: BloggerApiResponse = await res.json();

  // Map API items to BloggerEntry with proper URL
  return (data.items || []).map((item) => ({
    id: item.id,
    title: item.title,
    content: item.content || "",
    published: item.published,
    url: item.url,
    eventType: tag === "EVENT" ? "Event" : "Program",
  }));
};

const usePostsByTag = (tag: string) =>
  useQuery<BloggerEntry[], Error>({
    queryKey: ["blogger-posts", tag],
    queryFn: () => fetchPostsByTag(tag),
    staleTime: 1000 * 60 * 5, // 5 minutes cache
  });

export const useGetEventsPrograms = () => {
  const {
    data: events,
    isLoading: eventsLoading,
    error: eventsError,
  } = usePostsByTag("EVENT");
  const {
    data: programs,
    isLoading: programsLoading,
    error: programsError,
  } = usePostsByTag("PROGRAM");

  const isLoading = eventsLoading || programsLoading;
  const isError = eventsError || programsError;

  if (isLoading || isError || !events || !programs) {
    return {
      eventsAndPrograms: [],
      isLoading,
      isError,
    };
  }

  const typedEvents = events.map((event) => ({
    ...event,
    type: "Event" as const,
  }));
  const typedPrograms = programs.map((program) => ({
    ...program,
    type: "Program" as const,
  }));

  const combinedPosts = [...typedEvents, ...typedPrograms];

  // Example: Sort combined posts by published date descending
  combinedPosts.sort(
    (a, b) => new Date(b.published).getTime() - new Date(a.published).getTime(),
  );

  return {
    eventsAndPrograms: combinedPosts,
    isLoading,
    isError,
  };
};
