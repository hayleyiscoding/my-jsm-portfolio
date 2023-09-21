import { createClient, groq } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "../env";
// import { PortableTextBlock } from "sanity";
// import { url } from "inspector";
// import image from "next/image";

// type Project = {
//   _id: string;
//   _createdAt: string;
//   name: string;
//   slug: {
//     current: string;
//   };
// };

type Project = {
  _createdAt: string;
  _id: string;
  name: string;
  type: string;
  superscript: string;
  // image: {
  //   asset: {
  //     _ref: string;
  //   };
  // };
  slug: {
    current: string;
  };
};

export async function getProjects() {
  const client = createClient({
    apiVersion,
    dataset,
    projectId,
    useCdn,
  });
  // return client.fetch<Project[]>(groq`*[_type == "projects"]{
  //   _createdAt,
  //   _id,
  //   name,
  //   type,
  // superscript,
  // tech,
  //   "slug": slug.current,
  //   "image": image.asset > url,

  // }`);
  return client.fetch<Project[]>(groq`*[_type == "projects"]
  `);
}
