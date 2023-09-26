import { createClient, groq } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "../env";

import { Project } from "../types/Project";
import { ProjectDetails } from "../types/ProjectDetails";

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    apiVersion,
    dataset,
    projectId,
    useCdn,
  });
  return client.fetch(groq`*[_type == 'projects']{
    _id,
    _createdAt,
    name,
    type,
    superscript,
    slug,
    image,
   }`);
}

export async function getProjectDetails(): Promise<ProjectDetails[]> {
  const client = createClient({
    apiVersion,
    dataset,
    projectId,
    useCdn,
  });
  return client.fetch(groq`*[_type == 'projectDetails']{
    _id,
    _createdAt,
    name,
    slug,
    phrase1,
    phrase2,
    phrase3,
    type,
    url,
    github,
    headerImage,
    secondImage,
    figmaDesign,
    cardImage,
    myRole,
    startDate,
    endDate,
    techStack,
    longDescription,
    problemStatement,
    color,
    challenges,
    learnings,
  }
`);
}
