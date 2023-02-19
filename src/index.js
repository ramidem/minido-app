const http = require("http");

const ENVIRONMENT = "development";
const HOSTNAME = "127.0.0.1";
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify({
      message: "Hello, World!",
    })
  );
});

server
  .listen(PORT, HOSTNAME, () => {
    console.log(`env: ${ENVIRONMENT}`);
    console.log(`Server running at http://${HOSTNAME}:${PORT}`);
  })
  .on("error", (e) => console.log(e));
