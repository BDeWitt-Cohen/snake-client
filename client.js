const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    IP: IP,
    host: 'localhost',
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on("connect", () => {
    console.log('Successfully connected to game server');
  });



  conn.on('connect', () => {
    conn.write('Name: TJT');
  });

  // conn.on('connect', () => {
  //   conn.write('Move: left');
  //   conn.write('Move: up');
  //   conn.write('Move: left');
  //   conn.write('Move: up');
  //   setInterval(() => {
  //     conn.write('Move: left')
  //   }, 50)
    
  // }); Automatically moving snek upon connection to server


  return conn;
};

module.exports = { connect };