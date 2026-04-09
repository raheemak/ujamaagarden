import { useQuery } from "@tanstack/react-query";

const BLOGGER_API_KEY = import.meta.env.VITE_BLOGGER_KEY;

export type BloggerEntry = {
  id: string;
  title: string;
  content: string;
  published: string;
  url: string;
};

interface BloggerApiResponse {
  items: BloggerEntry[];
}

const fetchPostsByTag = async (tag: string): Promise<BloggerEntry[]> => {
  const res = await fetch(
    `https://www.googleapis.com/blogger/v3/blogs/378810748578023305/posts?labels=${tag}&maxResults=50&key=${BLOGGER_API_KEY}`,
  );

  if (!res.ok) throw new Error("Failed to fetch posts");

  const data: BloggerApiResponse = await res.json();

  return (data.items || []).map((item) => ({
    id: item.id,
    title: item.title,
    content: item.content || "",
    published: item.published,
    url: item.url,
  }));
};

export const usePostsByTag = (tag: string) =>
  useQuery<BloggerEntry[], Error>({
    queryKey: ["blogger-posts", tag],
    queryFn: () => fetchPostsByTag(tag),
    staleTime: 1000 * 60 * 5,
  });
