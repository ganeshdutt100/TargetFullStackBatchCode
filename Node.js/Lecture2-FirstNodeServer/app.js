const http = require("http");
// function requestListener(req, res) {
//   console.log(req);
// }
const server = http.createServer((req, res) => {
  console.log(req);
  console.log("Server running on port 3000 / Server");
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
