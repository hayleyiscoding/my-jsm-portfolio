import { Image } from "sanity";

export type Project = {
  _id: string;
  _createdAt: Date;
  name: string;
  superscript: string;
  type: string;
  image: Image & {
    alt: string;
  };
  slug: {
    current: string;
  };
};
