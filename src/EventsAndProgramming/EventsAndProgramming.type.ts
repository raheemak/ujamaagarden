export type BloggerEntry = {
  id: string;
  title: string;
  content: string;
  published: string;
  url: string;
};

export type BloggerApiItem = {
  id: string;
  title: string;
  content: string;
  published: string;
  url: string;
  eventType: EventType;
};

export type BloggerApiResponse = {
  items: BloggerApiItem[];
};

export type EventType = "Event" | "Program";
