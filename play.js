const connect = require("./client");

const setupInput = function () {

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
}

const handleUserInput = function () {
  // your code here
  console.log("Getting Inputs: ", data);
};


console.log("Connecting ...");

connect();

setupInput();
