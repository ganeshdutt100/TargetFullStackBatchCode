const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-Tye": "text/plain" });
  //   res.end("Hello from Node.js Server!");
  //   process.exit();
  res.end("Hello from Ganesh Dutt");
  console.log(req.url, req.method, req.headers);
});

server.listen(3002, () => {
  console.log("Server is running at http://localhost:3002");
});
