// establishes a connection with the game server
const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "127.0.0.1", // IP addre
    port: 50541 // PORT number here,
  });

  conn.on("connect", () => {
    conn.write( "Name: A.A");
  });

  conn.on("connect", () => {
    conn.write( "Move: up");
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");
  return conn;
};

module.exports = connect;