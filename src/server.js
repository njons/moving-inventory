const http = require("http");
const routes = require("./router");
const port = process.env.PORT || 3000;
const hostname = process.env.HOSTNAME || "localhost";

const server = http.createServer(routes);
server.listen(port, () => {
  console.log(`Server is up and running on http://${hostname}:${port}`);
});
