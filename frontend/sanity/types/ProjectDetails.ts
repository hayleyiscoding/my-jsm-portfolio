import { Image, PortableTextBlock } from "sanity";

export type ProjectDetails = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: {
    current: string;
  };
  phrase1: string;
  phrase2: string;
  phrase3: string;
  type: string;
  about: string;
  url: string;
  github: string;
  headerImage: Image;
  secondImage: Image;
  figmaDesign: Image;
  cardImage: Image;
  myRole: string;
  startDate: string;
  endDate: string;
  techStack: string[];
  longDescription: PortableTextBlock[];
  problemStatement: string;
  challenges: string[];
  learnings: string[];
  color: string;
};
