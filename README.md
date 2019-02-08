# Shout
Shout messages to who cares

## How to use

```javascript
// main.js
import { subscribe } from './Shout'

subscribe('SAY_SOMETHING', (message) => { console.log(message) })
```

```javascript
// calls.js
import { dispatch } from './Shout'

dispatch('SAY_SOMETHING', 'Hello, world!')
```

## Unsubscribe
```javascript
// main.js
import { unsubscribe } from './Shout'

unsubscribe('SAY_SOMETHING', *reference_for_function*)
```
