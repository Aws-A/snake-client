let connection;
const setupInput = (conn) => {

  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  stdin.on("data", handleUserInput);

  return stdin;
}

const handleUserInput = function (data) {
  // your code here
  console.log("Getting Inputs: ", data);
  if (data === "w") {
    connection.write("Move: up");
  }
  if (data === "s") {
    connection.write("Move: down");
  } 
  if (data === "a") {
    connection.write("Move: left");
  } 
  if (data === "d") {
    connection.write("Move: right");
  }
  if (key === '\u0003') {
    process.exit();
  }
};

module.exports = setupInput;