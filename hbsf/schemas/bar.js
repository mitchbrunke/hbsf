export default {
  name: "bar",
  title: "Festival Bar",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Company Name",
      type: "string",
    },
    {
      name: "link",
      title: "Bar Website Link",
      type: "string",
    },
    {
      name: "description",
      title: "Bar Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "image",
      title: "Bar Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
