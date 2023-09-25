const projectDetails = {
  name: "projectDetails",
  title: "Project Details",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
    },
    {
      name: "phrase1",
      title: "Phrase 1 of Title",
      type: "string",
    },
    {
      name: "phrase2",
      title: "Phrase 2 of Title",
      type: "string",
    },
    {
      name: "phrase3",
      title: "Phrase 3 of Title",
      type: "string",
    },
    {
      name: "type",
      title: "Type",
      type: "string",
    },
    {
      name: "url",
      title: "Demo URL",
      type: "url",
    },
    {
      name: "github",
      title: "GitHub URL",
      type: "url",
    },
    {
      name: "headerImage",
      title: "Header Image",
      type: "image",
    },
    {
      name: "secondImage",
      title: "Second Image - Photo",
      type: "image",
    },
    {
      name: "figmaDesign",
      title: "Figma Design",
      type: "image",
    },
    {
      name: "cardImage",
      title: "Card Image",
      type: "image",
    },
    {
      name: "myRole",
      title: "My Role",
      type: "string",
    },
    {
      name: "startDate",
      title: "Start Date",
      type: "date",
    },
    {
      name: "endDate",
      title: "End Date",
      type: "date",
    },
    {
      name: "techStack",
      title: "Tech Stack",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "longDescription",
      title: "Long Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "problemStatement",
      title: "Problem Statement",
      type: "text",
      of: [{ type: "block" }],
    },
    {
      name: "challenges",
      title: "Challenges",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "learnings",
      title: "Learnings",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "color",
      title: "Color",
      type: "string",
    },
  ],
};

export default projectDetails;
