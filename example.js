const { Client } = require('tdl');
const { TDLib } = require('tdl-tdlib-addon');

const client = new Client(new TDLib(), {
  apiId: 1111,
  apiHash: '00000'
})

console.log(123);
