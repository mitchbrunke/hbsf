// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import home from "../schemas/home";
import details from "./details";
import entertainment from "./entertainment";
import stalls from "./stalls";
import bar from "./bar";
import tickets from "./tickets";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    home,
    details,
    entertainment,
    stalls,
    bar,
    tickets,
  ]),
});
