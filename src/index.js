require("../config").getEnv();

const http = require("http");

const PORT = process.env.PORT;
const HOSTNAME = process.env.HOSTNAME;

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
    console.log(`Server running at http://${HOSTNAME}:${PORT}`);
  })
  .on("error", (e) => console.log(e));
