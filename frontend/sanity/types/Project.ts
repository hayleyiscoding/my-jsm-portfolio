import { PortableTextBlock } from "sanity";

export type Project = {
  _id: string;
  createdAt: Date;
  name: string;
  slug: string;
  image: string;
  url: string;
  tech: string[];
  description: PortableTextBlock[];
};
