const fs = require("fs");
const path = require("path");

const getEnv = () => {
  const envFilePath = path.join(__dirname, ".env");
  const envBuffer = fs.readFileSync(envFilePath);
  envBuffer
    .toString()
    .split(/\r?\n/)
    .forEach((line) => {
      const lineItem = line.split("=");
      const [key, value] = lineItem;
      process.env[key] = value;
    });
};

module.exports = {
  getEnv,
};
