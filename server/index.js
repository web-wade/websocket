const Websocket = require('ws');

const wss = new Websocket.Server({ port: 3000 });

wss.on('connection', function connection(ws) {
  console.log('on cline is connection');
  ws.on('message', function (msg) {
    console.log('msg', msg);
  });
  ws.send('Message from server');
});
