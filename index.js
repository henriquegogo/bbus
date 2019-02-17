export default class Bbus {
  
  constructor() {
    if (Bbus.instance) {
      return Bbus.instance;
    }
    this.subscriptions = {};
    Bbus.instance = this;
  }

  on(action, func) {
    if (!Array.isArray(this.subscriptions[action])) {
      this.subscriptions[action] = [];
    }
    this.subscriptions[action].push(func);
  }

  off(action, func) {
    if (Array.isArray(this.subscriptions[action])) {
      this.subscriptions[action] = this.subscriptions[action].filter(item => {
        return item !== func;
      });
    }
  }

  emit(action) {
    Array.prototype.shift.apply(arguments);
    for (let i in this.subscriptions[action]) {
      let func = this.subscriptions[action][i];
      if (typeof func === 'function') {
        try {
          func(...arguments);
        } catch (err) { }
      }
    }
  }
}

export function on(action, func) {
  new Bbus().on(action, func);
}

export function off(action, func) {
  new Bbus().off(action, func);
}

export function emit() {
  new Bbus().emit(...arguments);
}
