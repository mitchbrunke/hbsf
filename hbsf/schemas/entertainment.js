export default {
  name: "entertainment",
  title: "Festival Entertainment",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Entertainer Name",
      type: "string",
    },
    {
      name: "location",
      title: "Location of Performance",
      type: "string",
    },
    {
      name: "time",
      title: "Time of Performance",
      type: "string",
    },
    {
      name: "description",
      title: "Entertainer Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "image",
      title: "Entertainer Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
