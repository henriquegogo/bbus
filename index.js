class Main {
  
  constructor() {
    if (Main.instance) {
      return Main.instance;
    }
    this.subscriptions = {};
    Main.instance = this;
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
  new Main().subscribe(action, func);
}

export function unsubscribe(action, func) {
  new Main().unsubscribe(action, func);
}

export function dispatch() {
  new Main().dispatch(...arguments);
}
