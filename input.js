const net = require('net');


let connection;


const handleUserInput = key => {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === '\u0077') {
    connection.write('Move: up');
  }
  if (key === '\u0061') {
    connection.write('Move: left');
  }
  if (key === '\u0073') {
    connection.write('Move: down');
  }
  if (key === '\u0064') {
    connection.write('Move: right');
  }

  if (key === '\u007A') {
    connection.write('Say: winning');
  }
  if (key === '\u0078') {
    connection.write('Say: mooovee');
  }
  if (key === '\u0066') {
    connection.write('Say: wall!');
  }
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on("data", handleUserInput);


  return stdin;
};




module.exports = { setupInput };