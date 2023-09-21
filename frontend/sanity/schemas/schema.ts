import { Rule, SchemaTypeDefinition } from "sanity";

export const projects: { types: SchemaTypeDefinition[] } = {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) =>
        Rule.required().custom((value: string) => {
          const capitalizedPhrase = value
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
          if (capitalizedPhrase !== value) {
            return "All words should be capitalised";
          }
          return true;
        }),
    },
    {
      name: "superscript",
      title: "Is this Web2 or Web3?",
      type: "string",
      validation: (Rule) =>
        Rule.custom((value: string) => {
          if (!/^(Web2|Web3)$/.test(value)) {
            return 'Only "Web2" or "Web3" are allowed';
          }
          return true;
        }),
    },
    {
      name: "type",
      title: "Type of Website",
      type: "string",
      validation: (Rule) =>
        Rule.required().custom((value: string) => {
          const capitalizedPhrase = value
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
          if (capitalizedPhrase !== value) {
            return "All words should be capitalised";
          }
          return true;
        }),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
          validation: (rule: Rule) => rule.required(),
        },
      ],
      validation: (rule: Rule) => rule.required(),
    },

    {
      name: "tech",
      title: "Tech",
      type: "array",
      of: [{ type: "string", validation: (rule: Rule) => rule.required() }],
      validation: (rule: Rule) => rule.required().min(1),
    },
  ],
};
