"use strict";

const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });
const autocannon = require("autocannon");
console.log(process.env.URL);
autocannon(
  {
    url: process.env.URL,

    connections: 10, //default
    pipelining: 1, // default
    duration: 10, // default
  },
  console.log
);

// async/await
async function foo() {
  const result = await autocannon({
    url: process.env.URL,
    requests: [
      {
        method: "POST",
        path: process.env.PATH,
        headers: process.env.HEADER,
      },
    ],
    connections: 10, //default
    pipelining: 1, // default
    duration: 10, // default
  });
  console.log(result);
}
