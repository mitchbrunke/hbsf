export default {
  name: "stalls",
  title: "Festival Stalls",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Stall Name",
      type: "string",
    },
    {
      name: "link",
      title: "Stall Website Link",
      type: "string",
    },
    {
      name: "description",
      title: "Stall Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "image",
      title: "Stall Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
