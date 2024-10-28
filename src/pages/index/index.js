import template from "./template.marko";

export default (req, res) => {
  const name = req.query.name || "World";  // Get name from query param or default to "World"
  console.log("Name received:", name);      
  res.marko(template, { name });
};
