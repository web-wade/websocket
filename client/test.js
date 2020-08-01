const Websocket = require('ws');

const ws = new Websocket('ws://127.0.0.1:3000');

ws.on('open', function () {
  console.log('on cline is connection');
});
