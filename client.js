// establishes a connection with the game server
const net = require("net");

const { IP, PORT, Name } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP addre
    port: PORT // PORT number here,
  });

  conn.on("connect", () => {
    conn.write(Name);
  });

  conn.on("connect", () => {
    conn.write("Move: up");
  });

  conn.on("connect", () => {
    conn.write("Say: Let's go");
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");
  return conn;
};

module.exports = connect;