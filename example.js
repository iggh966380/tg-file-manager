const { Client } = require('tdl');
const { TDLib } = require('tdl-tdlib-addon');

const client = new Client(new TDLib('/home/jay/td/tdlib/lib/libtdjson.so'), {
  apiId: 9508233,
  apiHash: '15eccb1b76f61d1f13f24daa08198659'
})

// client.on('error', console.error);
// client.on('update', update => {
//   console.log('Received update:', update);
// })

async function main() {
  // console.log('e');
  // await client.connect();
  // await client.login();

  await client.connectAndLogin();
  // console.log(await client.invoke({ _: 'getMe' }));
  const result = await client.invoke({
    _: 'getChats',
    chat_list: { _: 'chatListMain' },
    limit: 4000
  })

  console.log('result =>', result);
  try {
    await client.invoke({
      _: 'sendMessage',
      chat_id: '-1001773382168',
      input_message_content: {
        _: 'inputMessageText',
        text: {
          _: 'formattedText',
          text: 'Hi'
        }
      }
    })
  } catch(err) {
    console.log(err);
  }
}

main();
