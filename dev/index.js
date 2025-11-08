import utils from "xrg-utils/utils";

const x = withSearch({
   array: [
      "apple", // primitive
      { name: "banana" }, // object with top-level key
      { data: { id: "strawberry" } }, // object with deep key
      "grapes",
      { name: "orange" },
      { data: { id: "mango" } },
   ],
   searchTerm: "st",
   key: "data.id", // try "name" or "" for primitives
});

console.log(x);
