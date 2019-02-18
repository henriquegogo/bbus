const test = (description, execution) => { console.log("\x1b[37mTest:", description); execution() }
const assert = (sentence) => { console.log(sentence ? "\x1b[32m" : "\x1b[31m", sentence ? "PASS" : "FAIL", "\x1b[37m\n") }

const bbus = require('./bbus.js');

test('Event assign', () => {
  let expected;

  bbus.on('message', () => { expected = 'ok' });
  bbus.emit('message');

  assert(expected == 'ok');
});

test('Event receive parameters', () => {
  let expected;

  bbus.on('message', (message) => { expected = message });
  bbus.emit('message', 'Hello, world!');

  assert(expected == 'Hello, world!');
});

test('Remove event', () => {
  let expected;

  function showMessage() {
    expected = 'ok';
  }

  bbus.on('message', showMessage);
  bbus.off('message', showMessage);
  bbus.emit('message');

  assert(expected != 'ok');
});
