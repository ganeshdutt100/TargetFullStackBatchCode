console.log("first class of node js ");
const fs = require("fs");
fs.writeFile("output.text", "Writing File ", (err) => {
  if (err) console.log("Error occurred");
  else console.log("File Written Successfully");
});
