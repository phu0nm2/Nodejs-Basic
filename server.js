require("dotenv").config();

const app = require("./app");
const configViewEngine = require("./src/config.js/viewEngine");

const http = require("http");

const server = http.createServer(app);

const port = process.env.PORT || 8000;

configViewEngine(app);

server.listen(port, () => {
  console.log(`server running on port ${port}`);
});
