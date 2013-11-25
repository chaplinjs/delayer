(function(globals) {
  'use strict';

  // Delayer
  // -------

  var Delayer = {
    setTimeout: function(name, time, handler) {
      var handle, wrappedHandler,
        _this = this;
      if (this.timeouts == null) {
        this.timeouts = {};
      }
      this.clearTimeout(name);
      wrappedHandler = function() {
        delete _this.timeouts[name];
        return handler();
      };
      handle = setTimeout(wrappedHandler, time);
      this.timeouts[name] = handle;
      return handle;
    },

    clearTimeout: function(name) {
      if (!(this.timeouts && (this.timeouts[name] != null))) {
        return;
      }
      clearTimeout(this.timeouts[name]);
      delete this.timeouts[name];
    },

    clearAllTimeouts: function() {
      var handle, name, _ref;
      if (!this.timeouts) {
        return;
      }
      _ref = this.timeouts;
      for (name in _ref) {
        handle = _ref[name];
        this.clearTimeout(name);
      }
    },

    setInterval: function(name, time, handler) {
      var handle;
      this.clearInterval(name);
      if (this.intervals == null) {
        this.intervals = {};
      }
      handle = setInterval(handler, time);
      this.intervals[name] = handle;
      return handle;
    },

    clearInterval: function(name) {
      if (!(this.intervals && this.intervals[name])) {
        return;
      }
      clearInterval(this.intervals[name]);
      delete this.intervals[name];
    },

    clearAllIntervals: function() {
      var handle, name, _ref;
      if (!this.intervals) {
        return;
      }
      _ref = this.intervals;
      for (name in _ref) {
        handle = _ref[name];
        this.clearInterval(name);
      }
    },

    clearDelayed: function() {
      this.clearAllTimeouts();
      this.clearAllIntervals();
    }
  };

  if (typeof Object.freeze === "function") {
    Object.freeze(Delayer);
  }

  if (typeof define !== 'undefined' && define.amd) {
    define([], function () {
      return Delayer;
    }); // RequireJS
  } else if (typeof module !== 'undefined' && module.exports) {
    module.exports = Delayer; // CommonJS
  } else {
    globals.Delayer = Delayer; // <script>
  }

})(this);
