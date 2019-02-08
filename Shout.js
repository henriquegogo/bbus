class Shout {
  
  constructor() {
    if (Shout.instance) {
      return Shout.instance;
    }
    this.subscriptions = {};
    Shout.instance = this;
  }

  subscribe(action, func) {
    if (!Array.isArray(this.subscriptions[action])) {
      this.subscriptions[action] = [];
    }
    this.subscriptions[action].push(func);
  }

  unsubscribe(action, func) {
    if (Array.isArray(this.subscriptions[action])) {
      this.subscriptions[action] = this.subscriptions[action].filter(item => {
        return item !== func;
      });
    }
  }

  dispatch(action) {
    Array.prototype.shift.apply(arguments);
    for (let i in this.subscriptions[action]) {
      let func = this.subscriptions[action][i];
      if (typeof func === 'function') {
        func(...arguments);
      }
    }
  }
}

export function subscribe(action, func) {
  new Shout().subscribe(action, func);
}

export function unsubscribe(action, func) {
  new Shout().unsubscribe(action, func);
}

export function dispatch() {
  new Shout().dispatch(...arguments);
}
