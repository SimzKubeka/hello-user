import template from "./template.marko";

export default (req, res) => {
  // Get name from query param or default to "World"
  const name = req.query.name || "World";  
  console.log("Name received:", name);      
  res.marko(template, { name });
};
