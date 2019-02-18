# Bbus
Event Message Bus

## How to use

```javascript
// main.js
import { default as bbus } from 'bbus'

bbus.on('SAY_SOMETHING', (message) => { console.log(message) })
```

```javascript
// calls.js
import { default as bbus } from 'bbus'

bbus.emit('SAY_SOMETHING', 'Hello, world!')
```

## Unsubscribe
```javascript
// main.js
import { default as bbus } from 'bbus'

bbus.off('SAY_SOMETHING', *reference_for_function*)
```

## ES5
You can use require() syntax too:
```javascript
// main.js
const bbus = require('./bbus.js');

bbus.on('SAY_SOMETHING', (message) => { console.log(message) })
```
