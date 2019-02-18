"use strict";

function Bbus() {
  if (Bbus.instance) {
    return Bbus.instance;
  }

  this.listeners = {};
  Bbus.instance = this;
}

Bbus.on = function on(action, func) {
  var instance = new Bbus();

  if (!Array.isArray(instance.listeners[action])) {
    instance.listeners[action] = [];
  }

  instance.listeners[action].push(func);
};

Bbus.off = function off(action, func) {
  var instance = new Bbus();

  if (Array.isArray(instance.listeners[action])) {
    instance.listeners[action] = instance.listeners[action].filter(function (item) {
      return item !== func;
    });
  }
};

Bbus.emit = function emit(action) {
  var instance = new Bbus();
  Array.prototype.shift.apply(arguments);

  for (var i in instance.listeners[action]) {
    var func = instance.listeners[action][i];

    if (typeof func === 'function') {
      try {
        func.apply(void 0, arguments);
      } catch (err) {}
    }
  }
};

exports.__esModule = true;
exports.default = Bbus;
exports.on = Bbus.on;
exports.off = Bbus.off;
exports.emit = Bbus.emit;
