# Bbus
Event Message Bus

## How to use

```javascript
// main.js
import { on } from './Bbus'

on('SAY_SOMETHING', (message) => { console.log(message) })
```

```javascript
// calls.js
import { emit } from './Bbus'

emit('SAY_SOMETHING', 'Hello, world!')
```

## Unsubscribe
```javascript
// main.js
import { off } from './Bbus'

off('SAY_SOMETHING', *reference_for_function*)
```
