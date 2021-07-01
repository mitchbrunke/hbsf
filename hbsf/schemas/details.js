export default {
  name: "details",
  title: "Festival Details",
  type: "document",
  fields: [
    {
      name: "heading",
      title: "Details Heading",
      type: "string",
    },

    {
      name: "description",
      title: "Details",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
