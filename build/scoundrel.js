var scoundrel =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 134);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class ActionBase {
    constructor() {
        this._priority = 0;
    }
    get priority() { return this._priority; }
    set priority(value) {
        this._priority = value;
    }
    update(_emitter, _particle, _time) {
    }
    addedToEmitter(_emitter) {
    }
    removedFromEmitter(_emitter) {
    }
}
exports.ActionBase = ActionBase;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"tslib\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
tslib_1.__exportStar(__webpack_require__(6), exports);
tslib_1.__exportStar(__webpack_require__(5), exports);
tslib_1.__exportStar(__webpack_require__(7), exports);
tslib_1.__exportStar(__webpack_require__(30), exports);
tslib_1.__exportStar(__webpack_require__(26), exports);
tslib_1.__exportStar(__webpack_require__(12), exports);
tslib_1.__exportStar(__webpack_require__(13), exports);
tslib_1.__exportStar(__webpack_require__(29), exports);
tslib_1.__exportStar(__webpack_require__(31), exports);
tslib_1.__exportStar(__webpack_require__(27), exports);
tslib_1.__exportStar(__webpack_require__(28), exports);
const random_1 = __webpack_require__(7);
random_1.Random.init();
Array.prototype.remove = function (item) {
    let i;
    if ((i = this.indexOf(item)) !== -1)
        this.splice(i, 1);
};
const radToDeg = 180 / Math.PI;
const degToRad = Math.PI / 180;
Math.asDegrees = function (radians) {
    return radians * radToDeg;
};
Math.asRadians = function (degrees) {
    return degrees * degToRad;
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This is the base class for all particle initializers.
 */
class InitializerBase {
    constructor() {
        this._priority = 0;
    }
    /**
     * The priority of execution of the Behavior.
     */
    get priority() { return this._priority; }
    set priority(value) {
        this._priority = value;
    }
    /**
     * Called by the Emitter that the Behavior is attached to when it is added.
     * @param emitter The Emitter that the Behavior is being attached to.
     */
    addedToEmitter(_emitter) {
    }
    /**
     * Called by the Emitter that the Behavior is attached to when it is removed.
     * @param emitter The Emitter that the Behavior is being removed from.
     */
    removedFromEmitter(_emitter) {
    }
    /**
     * This is called by an emitter to apply the initialization to every particle.
     * @param _emitter
     * @param _particle
     */
    initialize(_emitter, _particle) {
    }
}
exports.InitializerBase = InitializerBase;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @api private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {Mixed} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @api private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @api public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @api public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Boolean} exists Only check if there are listeners.
 * @returns {Array|Boolean}
 * @api public
 */
EventEmitter.prototype.listeners = function listeners(event, exists) {
  var evt = prefix ? prefix + event : event
    , available = this._events[evt];

  if (exists) return !!available;
  if (!available) return [];
  if (available.fn) return [available.fn];

  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
    ee[i] = available[i].fn;
  }

  return ee;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @api public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn The listener function.
 * @param {Mixed} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  var listener = new EE(fn, context || this)
    , evt = prefix ? prefix + event : event;

  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
  else if (!this._events[evt].fn) this._events[evt].push(listener);
  else this._events[evt] = [this._events[evt], listener];

  return this;
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn The listener function.
 * @param {Mixed} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  var listener = new EE(fn, context || this, true)
    , evt = prefix ? prefix + event : event;

  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
  else if (!this._events[evt].fn) this._events[evt].push(listener);
  else this._events[evt] = [this._events[evt], listener];

  return this;
};

/**
 * Remove the listeners of a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {Mixed} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    if (--this._eventsCount === 0) this._events = new Events();
    else delete this._events[evt];
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
         listeners.fn === fn
      && (!once || listeners.once)
      && (!context || listeners.context === context)
    ) {
      if (--this._eventsCount === 0) this._events = new Events();
      else delete this._events[evt];
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
           listeners[i].fn !== fn
        || (once && !listeners[i].once)
        || (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else if (--this._eventsCount === 0) this._events = new Events();
    else delete this._events[evt];
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {String|Symbol} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) {
      if (--this._eventsCount === 0) this._events = new Events();
      else delete this._events[evt];
    }
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// This function doesn't apply anymore.
//
EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
  return this;
};

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(1);
const theme_1 = __webpack_require__(22);
const eventemitter3_1 = __webpack_require__(3);
var Reference;
(function (Reference) {
    Reference[Reference["Relative"] = 0] = "Relative";
    Reference[Reference["Absolute"] = 1] = "Absolute";
})(Reference = exports.Reference || (exports.Reference = {}));
var Alignment;
(function (Alignment) {
    Alignment[Alignment["None"] = 0] = "None";
    Alignment[Alignment["Left"] = 1] = "Left";
    Alignment[Alignment["Top"] = 2] = "Top";
    Alignment[Alignment["Center"] = 4] = "Center";
    Alignment[Alignment["Right"] = 8] = "Right";
    Alignment[Alignment["Bottom"] = 16] = "Bottom";
})(Alignment = exports.Alignment || (exports.Alignment = {}));
var Orientation;
(function (Orientation) {
    Orientation[Orientation["Horizontal"] = 1] = "Horizontal";
    Orientation[Orientation["Vertical"] = 2] = "Vertical";
})(Orientation = exports.Orientation || (exports.Orientation = {}));
class GuiComponent extends eventemitter3_1.EventEmitter {
    constructor(width = 0, height = 0) {
        super();
        this._x = 0;
        this._y = 0;
        this._preferredWidth = -1;
        this._preferredHeight = -1;
        this._preferredWidthReference = Reference.Absolute;
        this._preferredHeightReference = Reference.Absolute;
        this._horizontalAlignment = Alignment.None;
        this._verticalAlignment = Alignment.None;
        this.cachedWidth = -1;
        this.cachedHeight = 0;
        // padding
        this._top = 0;
        this._left = 0;
        this._right = 0;
        this._bottom = 0;
        this._theme = new theme_1.Theme();
        this.isValid = false;
        this.isLayoutValid = false;
        this.enabled = true;
        this.visible = true;
        this._children = [];
        this.hover = false;
        this._width = width;
        this._height = height;
    }
    get x() { return this._x; }
    get y() { return this._y; }
    get position() { return new core_1.Position(this._x, this._y); }
    setPosition(x, y) {
        if (this._x != x || this._y != y) {
            this._x = x;
            this._y = y;
        }
        return this;
    }
    get size() { return new core_1.Position(this._width, this._height); }
    setSize(w, h) {
        if (this._width != w || this._height != h) {
            this._width = w;
            this._height = h;
            this.isLayoutValid = false;
        }
        return this;
    }
    get horizontalAlignment() { return this._horizontalAlignment; }
    set horizontalAlignment(align) {
        this._horizontalAlignment = align;
        this.invalidateLayout();
    }
    get verticalAlignment() { return this._verticalAlignment; }
    set verticalAlignment(align) {
        this._verticalAlignment = align;
        this.invalidateLayout();
    }
    getTop() { return this._top; }
    setTop(v) {
        this._top = v;
        this.invalidate();
    }
    getLeft() { return this._left; }
    setLeft(v) {
        this._left = v;
        this.invalidate();
    }
    getBottom() { return this._bottom; }
    setBottom(v) {
        this._bottom = v;
        this.invalidate();
    }
    getRight() { return this._right; }
    setRight(v) {
        this._right = v;
        this.invalidate();
    }
    get children() { return this._children; }
    get theme() { return this._theme; }
    get foreground() { return this._theme.foreground; }
    set foreground(value) { this._theme.foreground = value; }
    get background() { return this._theme.background; }
    set background(value) { this._theme.background = value; }
    getApplication() {
        if (this.application !== undefined)
            return this.application;
        return this.parent ? this.parent.getApplication() : undefined;
    }
    /**
     * Connects this GuiComponent to the application events.
     * @param app the application that will supply the events.
     */
    connect(application) {
        this.application;
        application.on('mousemove', (_app, state) => {
            this.mouseMove(state.cellPosition);
        });
        application.on('mouseup', (_app, state, button) => {
            this.mouseUp(state.cellPosition, button);
        });
        application.on('mousedown', (_app, state, button) => {
            this.mouseDown(state.cellPosition, button);
        });
        application.on('wheel', (_app, state, button) => {
            this.mouseDown(state.cellPosition, button);
        });
    }
    getRoot() {
        if (this.parent)
            return this.parent.getRoot();
        return this;
    }
    setPreferredSize(w = -1, h = -1, wReference = Reference.Absolute, hReference = Reference.Absolute) {
        if (this._preferredWidth != w || this._preferredHeight != h ||
            this._preferredWidthReference != wReference || this._preferredHeightReference != hReference) {
            this._preferredWidth = w;
            this._preferredHeight = h;
            this._preferredWidthReference = wReference;
            this._preferredHeightReference = hReference;
            this.invalidate();
        }
        return this;
    }
    setPreferredSizeFill(orientation = Orientation.Horizontal | Orientation.Vertical) {
        if (orientation & Orientation.Horizontal) {
            this._preferredWidth = 100;
            this._preferredWidthReference = Reference.Relative;
        }
        if (orientation & Orientation.Vertical) {
            this._preferredHeight = 100;
            this._preferredHeightReference = Reference.Relative;
        }
        this.invalidate();
    }
    getPreferredSize() {
        this.validateMetrics();
        if (this.cachedWidth === -1) {
            var ps = { width: 0, height: 0 };
            var ps = this.calcPreferredSize();
            if (this._preferredWidth > 0 && this._preferredWidthReference === Reference.Absolute)
                ps.width = this._preferredWidth;
            else
                ps.width += this._left + this._right;
            if (this._preferredHeight > 0 && this._preferredHeightReference === Reference.Absolute)
                ps.height = this._preferredHeight;
            else
                ps.height += this._top + this._bottom;
            this.cachedWidth = ps.width;
            this.cachedHeight = ps.height;
            return ps;
        }
        return { width: this.cachedWidth, height: this.cachedHeight };
    }
    /**
     * Needs to be implemented by child classes to calculate needed size.
     */
    calcPreferredSize() {
        return { width: this._width, height: this._height };
    }
    setBounds(x, y, w, h) {
        this.setPosition(x, y);
        this.setSize(w, h);
        return this;
    }
    invalidate() {
        this.isValid = false;
        this.isLayoutValid = false;
        this.cachedWidth = -1;
        if (this.parent !== undefined)
            this.parent.invalidate();
    }
    invalidateLayout() {
        this.isLayoutValid = false;
        if (this.parent !== undefined)
            this.parent.invalidateLayout();
    }
    validateMetrics() {
        if (!this.isValid) {
            this.recalc();
            this.isValid = true;
        }
    }
    validate() {
        this.validateMetrics();
        if (this._width > 0 && this._height > 0 &&
            !this.isLayoutValid && this.visible) {
            this.doLayout();
            for (let child of this._children)
                child.validate();
            this.isLayoutValid = true;
        }
    }
    /**
     * Should be implemented by subclasses that need to recalculate anything prior to doing layout
     */
    recalc() { }
    setPadding(top, left, bottom, right) {
        if (left === undefined || bottom === undefined || right == undefined)
            left = bottom = right = top;
        this._top = top;
        this._left = left;
        this._bottom = bottom;
        this._right = right;
        this.invalidate();
    }
    doLayout() {
        var top = this.getTop();
        var width = this._height - this.getBottom() - top;
        var left = this.getLeft();
        var height = this._width - this.getRight() - left;
        for (var child of this._children) {
            if (child.visible === true) {
                var ps = child.getPreferredSize();
                child.layoutAligned(left, top, ps.width, ps.height, width, height);
            }
        }
    }
    /**
     * Layout the component inside an available size, doing alignment and relative sizing.
     * @param x the x position to place the component.
     * @param y the y position to place the component.
     * @param w the width of the component to place.
     * @param h the height of the component to place.
     * @param aw available width.
     * @param ah available width.
     */
    layoutAligned(x, y, w, h, aw, ah) {
        if (this._preferredWidthReference === Reference.Relative && this._preferredWidth >= 0 && this._preferredWidth <= 100) {
            w = Math.round(aw * this._preferredWidth / 100);
        }
        if (this._preferredHeightReference === Reference.Relative && this._preferredWidth > 0 && this._preferredHeight <= 100) {
            h = Math.round(ah * this._preferredHeight / 100);
        }
        if (this._horizontalAlignment === Alignment.Center || this._horizontalAlignment === Alignment.Right ||
            this._verticalAlignment === Alignment.Center || this._verticalAlignment === Alignment.Bottom) {
            if (this._horizontalAlignment === Alignment.Right && aw != w) {
                x += aw - w;
            }
            else if (this._horizontalAlignment === Alignment.Center && aw != w) {
                x += (aw - w) / 2;
            }
            if (this._verticalAlignment === Alignment.Bottom && ah != h) {
                y += ah - h;
            }
            else if (this._verticalAlignment === Alignment.Center && ah != h) {
                y += (ah - h) / 2;
            }
        }
        this.setSize(w, h);
        this.setPosition(x, y);
    }
    addChild(child) {
        if (child.parent !== undefined)
            child.parent._children.remove(child);
        child.parent = this;
        this._children.push(child);
        child.invalidate();
    }
    render(console, root = true) {
        if (root)
            this.validate();
        if (this.visible) {
            this.doRender(console);
            for (var child of this._children) {
                child.render(console, false);
            }
        }
    }
    /**
     * Should be overridden by child classes that need to do rendering.
     * @param _console
     */
    doRender(_console) { }
    focus() {
        if (this.parent !== undefined) {
            if (this.parent.focusChild !== undefined)
                this.parent.focusChild.unfocus(this);
            else
                this.parent.focusChild = this;
            this.parent.focus();
        }
    }
    unfocus(newFocus) {
        if (this.parent !== undefined)
            this.parent.focusChild = newFocus;
    }
    isInside(pos) {
        return pos.x >= this._x && pos.x <= this._x + this._width && pos.y >= this._y && pos.y <= this._y + this._height;
    }
    onMouseDown(_position, _button) { return false; }
    mouseDown(position, button) {
        if (!(this.visible && this.enabled))
            return false;
        // pass to focus first
        if (this.focusChild !== undefined && this.focusChild.mouseDown(position, button))
            return true;
        if (!this.isInside(position))
            return false;
        this.emit('mousedown', this, position, button);
        if (this.onMouseDown(position, button))
            return true;
        for (var child of this._children) {
            if (child.mouseDown(position, button))
                return true;
        }
        return false; // not handled
    }
    onMouseUp(_position, _button) { return false; }
    mouseUp(position, button) {
        if (!(this.visible && this.enabled))
            return false;
        // pass to focus first
        if (this.focusChild !== undefined && this.focusChild.mouseUp(position, button))
            return true;
        if (!this.isInside(position))
            return false;
        this.emit('mouseup', this, position, button);
        // if(this.isDragging) {
        //     this.isDragging = false;
        //     this.emit
        // }
        if (this.onMouseUp(position, button))
            return true;
        for (var child of this._children) {
            if (child.mouseUp(position, button))
                return true;
        }
        return false; // not handled
    }
    onMouseMove(_position) { return false; }
    mouseMove(position) {
        if (!(this.visible && this.enabled))
            return false;
        // pass to focus first
        if (this.focusChild !== undefined && this.focusChild.mouseMove(position))
            return true;
        var inside = this.isInside(position);
        if (!inside) {
            if (this.hover) {
                this.hover = false;
                for (var child of this._children) {
                    if (child.hover)
                        child.mouseMove(position);
                }
                this.emit('mouseout', this);
            }
            return false;
        }
        if (!this.hover) {
            this.hover = true;
            this.emit('mouseenter');
        }
        this.emit('mousemove', this, position);
        var application = this.getApplication();
        if (!GuiComponent.isDragging && application !== undefined && application.inputManager.mouseState.isButtonDown(core_1.MouseButton.Left)) {
            GuiComponent.isDragging = true;
            this.emit('dragstart', this, position);
        }
        if (this.onMouseMove(position))
            return true;
        for (var child of this._children) {
            if (child.mouseMove(position))
                return true;
        }
        return false; // not handled
    }
    onMouseWheel(_position, _delta) { return false; }
    mouseWheel(position, delta) {
        if (!(this.visible && this.enabled))
            return false;
        // pass to focus first
        if (this.focusChild !== undefined && this.focusChild.mouseWheel(position, delta))
            return true;
        if (!this.isInside(position))
            return false;
        this.emit('mousewheel', this, position, delta);
        if (this.onMouseWheel(position, delta))
            return true;
        for (var child of this._children) {
            if (child.mouseWheel(position, delta))
                return true;
        }
        return false; // not handled
    }
    Update(dt) {
        for (var child of this._children) {
            child.Update(dt);
        }
    }
}
GuiComponent.isDragging = false;
exports.GuiComponent = GuiComponent;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class RGBA {
    constructor(r, g, b, a = 1) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
    clone() {
        return new RGBA(this.r, this.g, this.b, this.a);
    }
    static fromInt(c) {
        var r, g, b, a = 0xff;
        if (c >> 24 == 0) { // rgb in a 24 bit string
            r = c >> 16 & 0xff;
            g = c >> 8 & 0xff;
            b = c & 0xff;
        }
        else {
            r = c >> 24 & 0xff;
            g = c >> 16 & 0xff;
            b = c >> 8 & 0xff;
            a = a & 0xff;
        }
        return new RGBA(r / 255, g / 255, b / 255, a / 255);
    }
    toHSLA() {
        var max = Math.max(this.r, this.g, this.b);
        var min = Math.min(this.r, this.g, this.b);
        var h = (max + min) / 2;
        var s = h;
        var l = h;
        if (max == min) {
            h = s = 0; // achromatic
        }
        else {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case this.r:
                    h = (this.g - this.b) / d + (this.g < this.b ? 6 : 0);
                    break;
                case this.g:
                    h = (this.b - this.r) / d + 2;
                    break;
                case this.b:
                    h = (this.r - this.g) / d + 4;
                    break;
            }
            h /= 6;
        }
        return new HSLA(h, s, l, this.a);
    }
    toHSVA() {
        var max = Math.max(this.r, this.g, this.b);
        var min = Math.min(this.r, this.g, this.b);
        var h = max;
        var s = max;
        var v = max;
        var d = max - min;
        s = max === 0 ? 0 : d / max;
        if (max == min) {
            h = 0; // achromatic
        }
        else {
            switch (max) {
                case this.r:
                    h = (this.g - this.b) / d + (this.g < this.b ? 6 : 0);
                    break;
                case this.g:
                    h = (this.b - this.r) / d + 2;
                    break;
                case this.b:
                    h = (this.r - this.g) / d + 4;
                    break;
            }
            h /= 6;
        }
        return new HSVA(h, s, v, this.a);
    }
    toHex(withAlpha = true) {
        var hex = [this.r * 255, this.g * 255, this.b * 255];
        if (withAlpha)
            hex = hex.concat([this.a * 255]);
        return '#' + hex.map((v) => {
            v = Math.min(Math.max(Math.round(v), 0), 255);
            return (v < 16 ? '0' : '') + v.toString(16);
        }).join('');
    }
    toInt(withAlpha = false) {
        var n = ((this.r * 255) << 16) + ((this.g * 255) << 8) + this.b * 255;
        if (withAlpha)
            n = n * (1 << 8) + this.a * 255; // extra bit shifting and multiplication is needed as bit operations break down for 2^32 -1
        return n;
    }
    /**
     * Returns the result of blending this color with another.
     * @param other the color to blend with
     */
    blend(other) {
        return RGBA.blend(this, other);
    }
    static blend(c1, c2) {
        let res = new RGBA(1, 1, 1);
        if (c1.a === 1) {
            res.r = c2.a * c2.r + (1 - c2.a) * c1.r;
            res.g = c2.a * c2.g + (1 - c2.a) * c1.g;
            res.b = c2.a * c2.b + (1 - c2.a) * c1.b;
        }
        else {
            res.a = 1 - (1 - c2.a) * (1 - c1.a);
            res.r = (c2.r * c1.a / res.a) + (c1.r * c1.a * (1 - c2.r) / res.a);
            res.g = (c2.g * c1.a / res.a) + (c1.g * c1.a * (1 - c2.g) / res.a);
            res.r = (c2.b * c1.a / res.a) + (c1.b * c1.a * (1 - c2.b) / res.a);
        }
        return res;
    }
    /**
     * Perform a linear interpolation between 2 colors
     * @param c1 The first color
     * @param c2 The second color
     * @param ratio The ratio in the range [0,1] to mix the colors.
     */
    static lerp(c1, c2, ratio) {
        var inv = 1 - ratio;
        var r = c1.r * inv + c2.r * ratio;
        var g = c1.g * inv + c2.g * ratio;
        var b = c1.b * inv + c2.b * ratio;
        var a = c1.a * inv + c2.a * ratio;
        return new RGBA(r, g, b, a);
    }
}
exports.RGBA = RGBA;
class HSLA {
    constructor(h, s, l, a = 1) {
        this.h = h;
        this.s = s;
        this.l = l;
        this.a = a;
    }
    toRGBA() {
        var hue2rgb = (p, q, t) => {
            if (t < 0)
                t += 1;
            if (t > 1)
                t -= 1;
            if (t < 1 / 6)
                return p + (q - p) * 6 * t;
            if (t < 1 / 2)
                return q;
            if (t < 2 / 3)
                return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };
        if (this.s === 0)
            return new RGBA(1, 1, 1, this.a);
        var q = 1 < 0.5 ? this.l * (1 + this.s) : 1 + this.s - 1 * this.s;
        var p = 2 * 1 - q;
        var r = hue2rgb(p, q, this.h + 1 / 3);
        var g = hue2rgb(p, q, this.h);
        var b = hue2rgb(p, q, this.h - 1 / 3);
        return new RGBA(r, g, b, this.a);
    }
}
exports.HSLA = HSLA;
class HSVA {
    constructor(h, s, v, a = 1) {
        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
    }
    toRGBA() {
        var h = this.h * 6;
        var i = Math.floor(h);
        var f = h - i;
        var p = this.v * (1 - this.s);
        var q = this.v * (1 - f * this.s);
        var t = this.v * (1 - (1 - f) * this.s);
        var mod = i % 6;
        var r = [this.v, q, p, p, t, this.v][mod];
        var g = [t, this.v, this.v, q, p, p][mod];
        var b = [p, p, t, this.v, this.v, q][mod];
        return new RGBA(r, g, b, this.a);
    }
}
exports.HSVA = HSVA;
class Matches {
}
// <http://www.w3.org/TR/css3-values/#integers>
Matches.CSS_INTEGER = "[-\\+]?\\d+%?";
// <http://www.w3.org/TR/css3-values/#number-value>
Matches.CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
// Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
Matches.CSS_UNIT_STR = "(?:" + Matches.CSS_NUMBER + ")|(?:" + Matches.CSS_INTEGER + ")";
// Actual matching.
// Parentheses and commas are optional, but not required.
// Whitespace can take the place of commas or opening paren
Matches.PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + Matches.CSS_UNIT_STR + ")[,|\\s]+(" + Matches.CSS_UNIT_STR + ")[,|\\s]+(" + Matches.CSS_UNIT_STR + ")\\s*\\)?";
Matches.PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + Matches.CSS_UNIT_STR + ")[,|\\s]+(" + Matches.CSS_UNIT_STR + ")[,|\\s]+(" + Matches.CSS_UNIT_STR + ")[,|\\s]+(" + Matches.CSS_UNIT_STR + ")\\s*\\)?";
Matches.CSS_UNIT = new RegExp(Matches.CSS_UNIT_STR);
Matches.rgb = new RegExp("rgb" + Matches.PERMISSIVE_MATCH3);
Matches.rgba = new RegExp("rgba" + Matches.PERMISSIVE_MATCH4);
Matches.hsl = new RegExp("hsl" + Matches.PERMISSIVE_MATCH3);
Matches.hsla = new RegExp("hsla" + Matches.PERMISSIVE_MATCH4);
Matches.hsv = new RegExp("hsv" + Matches.PERMISSIVE_MATCH3);
Matches.hsva = new RegExp("hsva" + Matches.PERMISSIVE_MATCH4);
Matches.hex3 = /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
Matches.hex6 = /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/;
Matches.hex4 = /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
Matches.hex8 = /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/;
class Color {
    /*private static flip(o: { [key: string]: string }) {
        var flipped: { [key: string]: string } = {};
        for (var i in o) {
            if (o.hasOwnProperty(i)) {
                flipped[o[i]] = i;
            }
        }
        return flipped;
    }

    public static hexNames = Color.flip(Color.names);*/
    static toColor(color) {
        if (typeof color === "number")
            return RGBA.fromInt(color);
        else {
            return Color.stringToObject(color);
        }
    }
    static toRGBA(color) {
        if (typeof color === "number")
            return RGBA.fromInt(color);
        else {
            var c;
            if (typeof color === 'string')
                c = Color.stringToObject(color);
            else
                c = color;
            if (c instanceof HSLA)
                c = c.toRGBA();
            else if (c instanceof HSVA)
                c = c.toRGBA();
            return c;
        }
    }
    static toInt(color, withAlpha = false) {
        return Color.toRGBA(color).toInt(withAlpha);
    }
    static colorToName(color) {
        if (color.a === 0)
            return 'transparent';
        if (color.a < 1)
            return undefined;
        if (color.format === "HSLA" || color.format === 'HSVA')
            color = color.toRGBA();
        var hex = color.toHex(false).substring(1);
        for (var name in Color.names) {
            if (Color.names[name] == hex)
                return name;
        }
        return undefined;
    }
    static stringToObject(color) {
        color = color.trim();
        if (Color.names[color])
            color = Color.names[color];
        else if (color == 'transparent')
            return new RGBA(0, 0, 0, 0);
        var match;
        if ((match = Matches.rgb.exec(color)))
            return new RGBA(Color.bound01(match[1], 255), Color.bound01(match[2], 255), Color.bound01(match[3], 255), 1.0);
        if ((match = Matches.rgba.exec(color)))
            return new RGBA(Color.bound01(match[1], 255), Color.bound01(match[2], 255), Color.bound01(match[3], 255), Color.boundAlpha(match[4]));
        if ((match = Matches.hsl.exec(color)))
            return new HSLA(Color.boundAngle(match[1]), Color.bound01(match[2], 100), Color.bound01(match[3], 100), 1.0);
        if ((match = Matches.hsla.exec(color)))
            return new HSLA(Color.boundAngle(match[1]), Color.bound01(match[2], 100), Color.bound01(match[3], 100), Color.boundAlpha(match[4]));
        if ((match = Matches.hsv.exec(color)))
            return new HSVA(Color.boundAngle(match[1]), Color.bound01(match[2], 100), Color.bound01(match[3], 100), 1.0);
        if ((match = Matches.hsva.exec(color)))
            return new HSVA(Color.boundAngle(match[1]), Color.bound01(match[2], 100), Color.bound01(match[3], 100), Color.boundAlpha(match[4]));
        if ((match = Matches.hex8.exec(color)))
            return new RGBA(Color.bound01(parseInt(match[0], 16), 255), Color.bound01(parseInt(match[1], 16), 255), Color.bound01(parseInt(match[2], 16), 255), Color.bound01(parseInt(match[3], 16), 255));
        if ((match = Matches.hex6.exec(color)))
            return new RGBA(Color.bound01(parseInt(match[0], 16), 255), Color.bound01(parseInt(match[1], 16), 255), Color.bound01(parseInt(match[2], 16), 255), 1);
        if ((match = Matches.hex4.exec(color)))
            return new RGBA(Color.bound01(parseInt(match[0] + match[0], 16), 255), Color.bound01(parseInt(match[1] + match[1], 16), 255), Color.bound01(parseInt(match[2] + match[2], 16), 255), Color.bound01(parseInt(match[3] + match[3], 16), 255));
        if ((match = Matches.hex3.exec(color)))
            return new RGBA(Color.bound01(parseInt(match[0] + match[0], 16), 255), Color.bound01(parseInt(match[1] + match[1], 16), 255), Color.bound01(parseInt(match[2] + match[2], 16), 255), 1);
        throw new EvalError("unable to parse color string.");
    }
    /**
     * Take input from [0, n] and return it as [0, 1]
     * @param n
     * @param max
     */
    static bound01(n, max) {
        var percent = typeof n === 'string' && n.indexOf('%') != -1;
        n = typeof n === 'string' ? parseFloat(n) : n;
        var num = Math.min(max, Math.max(0, n));
        if (percent)
            num = num * max / 100;
        // Handle floating point rounding errors
        if ((Math.abs(num - max) < 0.000001))
            return 1;
        // convert into range [0,1]
        return (num % max) / max;
    }
    static boundAlpha(n) {
        var num = parseInt(n);
        if (isNaN(num) || num > 1)
            num = 1;
        else if (num < 0)
            num = 0;
        return num;
    }
    /**
     * normalises the angle to the range [0,360) and returns it in the range [0,1]
     * @param n
     */
    static boundAngle(n) {
        var num = parseInt(n);
        return ((((num % 360) + 360) % 360) % 360) / 360;
    }
}
Color.white = new RGBA(1, 1, 1);
Color.black = new RGBA(0, 0, 0);
Color.names = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "00ffff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000000",
    blanchedalmond: "ffebcd",
    blue: "0000ff",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    burntsienna: "ea7e5d",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "00ffff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "ff00ff",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "778899",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "00ff00",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "ff00ff",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "663399",
    red: "ff0000",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "ffffff",
    whitesmoke: "f5f5f5",
    yellow: "ffff00",
    yellowgreen: "9acd32"
};
exports.Color = Color;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The position of a cell in a console (column, row).
 */
class Position {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    set(p) {
        this.x = p.x;
        this.y = p.y;
    }
    clone() {
        return new Position(this.x, this.y);
    }
    toString() {
        return this.x + ',' + this.y;
    }
    equals(p) {
        return this.x === p.x && this.y === this.y;
    }
    /**
     * Returns the distance between two Positions.
     * @param p1
     * @param p2
     */
    static distance(p1, p2) {
        let dx = p1.x - p2.x;
        let dy = p1.y - p2.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
    /**
     * Returns the squared distance between two Positions.
     * @param p1
     * @param p2
     */
    static distanceSqr(p1, p2) {
        let dx = p1.x - p2.x;
        let dy = p1.y - p2.y;
        return dx * dx + dy * dy;
    }
}
exports.Position = Position;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * An implementation of the Alea random number generator.
 * https://github.com/nquinlan/better-random-numbers-for-javascript-mirror/blob/master/support/js/Alea.js
 */
class Random {
    constructor(seed) {
        this.s0 = 0;
        this.s1 = 0;
        this.s2 = 0;
        this.c = 1;
        var n = 0xefc8249d;
        this.mash = (d) => {
            d = d.toString();
            for (var i = 0; i < d.length; i++) {
                n += d.charCodeAt(i);
                var h = 0.02519603282416938 * n;
                n = h >>> 0;
                h -= n;
                h *= n;
                n = h >>> 0;
                h -= n;
                n += h * 0x100000000; // 2^32
            }
            return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
        };
        this.seed(seed);
    }
    static init(seed) {
        Random.random = new Random(seed);
    }
    getSeed() { return this._seed; }
    /**
     * Seeds the generator.
     * @param s an object to seed the generator.
     */
    seed(s) {
        if (s === undefined)
            s = [new Date()];
        else if (!Array.isArray(s))
            s = [s];
        this._seed = s;
        var s0 = this.mash(' ');
        var s1 = this.mash(' ');
        var s2 = this.mash(' ');
        for (var i in s) {
            s0 -= this.mash(i);
            if (s0 < 0)
                s0 += 1;
            s1 -= this.mash(i);
            if (s1 < 0)
                s1 += 1;
            s2 -= this.mash(i);
            if (s2 < 0)
                s2 += 1;
        }
        this.s0 = s0;
        this.s1 = s1;
        this.s2 = s2;
        return this;
    }
    /**
     * @returns Pseudorandom value [0,1), uniformly distributed
     */
    random() {
        var t = 2091639 * this.s0 + this.c * 2.3283064365386963e-10; // 2^-32
        this.s0 = this.s1;
        this.s1 = this.s2;
        return this.s2 = t - (this.c = t | 0);
    }
    /**
     * Return a random floating point number N such that a <= N <= b for a <= b and b <= N <= a for b < a.
     * @param a the lower bound of the range.
     * @param b the upper bound of the range.
     */
    uniform(a, b) {
        var max = Math.max(a, b);
        var min = Math.min(a, b);
        return Math.floor(this.random() * (max - min + 1)) + min;
    }
    /**
     * Pseudorandom value [0,2^32), uniformly distributed
     * @returns a 32-bit unsigned integer
     */
    getUint32() {
        return this.random() * 0x100000000; // 2^32
    }
    /**
     * @returns a 53-bit fraction
     */
    getFract53() {
        return this.random() +
            (this.random() * 0x200000 | 0) * 1.1102230246251565e-16; // 2^-53
    }
    /**
     * Return a random element from the non-empty array seq. If seq is empty returns undefined
     * @param seq the array to get a random element from.
     */
    choice(seq) {
        if (!seq.length)
            return undefined;
        return seq[Math.floor(this.random() * seq.length)];
    }
    shuffle(seq) {
        var result = [];
        var clone = seq.slice();
        while (clone.length) {
            var i = clone.indexOf(this.choice(clone));
            result.push(clone.splice(i, 1)[0]);
        }
        return result;
    }
    /**
     * Gets an array containing the current state of the generator.
     */
    getState() {
        return [this.s0, this.s1, this.s2, this.c];
    }
    /**
     * Set the state of the generator.
     * @param state an array of 4 numbers containing the state to set the generator to.
     */
    setState(state) {
        this.s0 = state[0];
        this.s1 = state[1];
        this.s2 = state[2];
        this.c = state[3];
        return this;
    }
}
exports.Random = Random;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This is the base class for all emitter activities.
 */
class ActivityBase {
    constructor() {
        this._priority = 0;
    }
    /**
     * The priority of execution of the Behavior.
     */
    get priority() { return this._priority; }
    set priority(value) {
        this._priority = value;
    }
    /**
     * Called by an Emitter to apply the Activity every frame.
     * @param emitter The Emitter that the activity is attached to.
     * @param time The duration of the frame, in seconds.
     */
    update(_emitter, _time) {
    }
    /**
     * Called when an Emitter is started to initialize the Activity.
     * @param emitter The Emitter that the activity is attached to.
     */
    initialize(_emitter) {
    }
    /**
     * Called by the Emitter that the Behavior is attached to when it is added.
     * @param emitter The Emitter that the Behavior is being attached to.
     */
    addedToEmitter(_emitter) {
    }
    /**
     * Called by the Emitter that the Behavior is attached to when it is removed.
     * @param emitter The Emitter that the Behavior is being removed from.
     */
    removedFromEmitter(_emitter) {
    }
}
exports.ActivityBase = ActivityBase;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const position_1 = __webpack_require__(6);
const color_1 = __webpack_require__(5);
const eventemitter3_1 = __webpack_require__(3);
/**
 * Interface for Console Rendering implementations
 */
class ConsoleRenderer extends eventemitter3_1.EventEmitter {
}
exports.ConsoleRenderer = ConsoleRenderer;
class ConsoleCell {
    constructor(character, foreground, background) {
        this.character = character;
        this.foreground = foreground;
        this.background = background;
    }
}
exports.ConsoleCell = ConsoleCell;
/**
 * A Console emulator for the web using pixi.js
 */
class Console {
    constructor(width, height, foreground = new color_1.RGBA(1, 1, 1), background = new color_1.RGBA(0, 0, 0), renderer) {
        this._width = width;
        this._height = height;
        this.initCells(foreground, background);
        if (renderer) {
            this._renderer = renderer;
            renderer.init(this);
        }
    }
    get width() { return this._width; }
    get height() { return this._height; }
    get renderer() { return this._renderer; }
    set renderer(renderer) {
        this._renderer = renderer;
        renderer.init(this);
    }
    contains(p, y = 0) {
        var x;
        if (p instanceof position_1.Position) {
            x = p.x;
            y = p.y;
        }
        else {
            x = p;
        }
        return x >= 0 && y >= 0 && x <= this._width && y <= this._height;
    }
    render() {
        if (this._renderer)
            this._renderer.render(this);
    }
    /**
     * Get the column, row position from the corresponding screen position.
     * @param x - the mouse x coordinate relative to the document.
     * @param y - the mouse y coordinate relative to the document.
     * @param pos - if not undefinded the resulting column, row will be set in this position.
     */
    getPositionFromPixels(x, y, pos) {
        return this._renderer ? this.renderer.getPositionFromPixels(x, y, pos) : undefined;
    }
    /**
     * Get the corresponding screen position from a column, row position.
     * @param x - the column of the cell.
     * @param y - the row of the cell.
     * @param pos - if not undefinded the resulting coordinates will be set in this position.
     */
    getPixelPositionFromCell(x, y, pos) {
        return this._renderer ? this.renderer.getPixelPositionFromCell(x, y, pos) : undefined;
    }
    /**
     * Prints the string to the console. It is clipped to consoles bounds.
     * @param x the column to start the string.
     * @param y the row to print the string to.
     * @param text the string to print
     * @param foreground the color to print the string.
     */
    print(x, y, text, foreground = new color_1.RGBA(1, 1, 1)) {
        if (!text || x === undefined || y === undefined || y < 0 || y > this._width)
            return;
        var begin = 0;
        var end = text.length;
        if (x + end > this._width)
            end = this._width - x;
        if (x < 0) {
            end += x;
            begin -= x;
            x = 0;
        }
        for (var i = begin; i < end; i++) {
            this.cells[i + x][y].character = text.charCodeAt(i);
            this.cells[i + x][y].foreground = foreground;
        }
    }
    blit(console, dstX = 0, dstY = 0, srcX = 0, srcY = 0, srcWidth = -1, srcHeight = -1) {
        if (srcWidth === -1)
            srcWidth = this._width;
        if (srcHeight === -1)
            srcHeight = this._height;
        if (dstX + srcWidth > console._width)
            srcWidth = console._width - dstX;
        if (dstY + srcHeight > console._height)
            srcHeight = console._height - dstY;
        for (let x = 0; x < srcWidth; x++) {
            for (let y = 0; y < srcHeight; y++) {
                if (console.cells[srcX + x][srcX + y].background.a === 1)
                    this.cells[dstX + x][dstY + y].background = console.cells[srcX + x][srcX + y].background.clone();
                else if (console.cells[srcX + x][srcY + y].background.a > 0)
                    this.cells[dstX + x][dstY + y].background = this.cells[dstX + x][dstY + y].background.blend(console.cells[srcX + x][srcY + y].background);
                if (console.cells[srcX + x][srcY + y].foreground.a === 1) {
                    this.cells[dstX + x][dstY + y].character = console.cells[srcX + x][srcY + y].character;
                    this.cells[dstX + x][dstY + y].foreground = console.cells[srcX + x][srcY + y].foreground.clone();
                }
                else if (console.cells[srcX + x][srcY + y].foreground.a > 0) {
                    this.cells[dstX + x][dstY + y].character = console.cells[srcX + x][srcY + y].character;
                    this.cells[dstX + x][dstY + y].foreground = this.cells[dstX + x][dstY + y].foreground.blend(console.cells[srcX + x][srcY + y].foreground);
                }
            }
        }
    }
    clearCharacters(character = 0, x = 0, y = 0, width, height) {
        this.clearCells((c) => {
            c.character = character;
        }, x, y, width, height);
    }
    clearForeground(foreground, x = 0, y = 0, width, height) {
        this.clearCells((c) => {
            c.foreground = foreground;
        }, x, y, width, height);
    }
    clearBackground(background, x = 0, y = 0, width, height) {
        this.clearCells((c) => {
            c.background = background;
        }, x, y, width, height);
    }
    clear(character = 0, foreground = new color_1.RGBA(1, 1, 1), background = new color_1.RGBA(0, 0, 0), x = 0, y = 0, width, height) {
        this.clearCells((c) => {
            c.character = character;
            c.foreground = foreground.clone();
            c.background = background.clone();
        }, x, y, width, height);
    }
    clearCells(callback, x, y, width, height) {
        x = x || 0;
        if (x < 0)
            x = 0;
        y = y || 0;
        if (y < 0)
            y = 0;
        width = Math.min(width || this._width - x, this._width - x);
        height = Math.min(height || this._height - y, this.height - y);
        for (var cx = 0; cx < x + width; cx++) {
            for (var cy = 0; cy < y + height; cy++) {
                var cell = this.cells[cx][cy];
                callback(cell);
            }
        }
    }
    initCells(foreground, background) {
        this.cells = [];
        for (var cx = 0; cx < this._width; cx++) {
            this.cells[cx] = [];
            for (var cy = 0; cy < this._height; cy++) {
                this.cells[cx][cy] = new ConsoleCell(0, foreground.clone(), background.clone());
            }
        }
    }
}
exports.Console = Console;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"tslib\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
tslib_1.__exportStar(__webpack_require__(9), exports);
tslib_1.__exportStar(__webpack_require__(11), exports);
tslib_1.__exportStar(__webpack_require__(25), exports);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = __webpack_require__(9);
const core_1 = __webpack_require__(1);
const Color = __webpack_require__(5);
const PIXI = __webpack_require__(133);
exports.UrlParamRendererWebGL = "pixi/webgl";
exports.UrlParamRendererCanvas = "pixi/canvas";
/**
 * A pixi.js renderer that can render to WebGL or a canvas.
 */
class PixiConsoleRenderer extends console_1.ConsoleRenderer {
    constructor(divSelector, fontUrl, rendererName = exports.UrlParamRendererWebGL, defaultForeground = new Color.RGBA(1, 1, 1), defaultBackground = new Color.RGBA(0, 0, 0)) {
        super();
        this.divSelector = divSelector;
        this.fontUrl = fontUrl;
        this.rendererName = rendererName;
        this.charWidth = 0;
        this.charHeight = 0;
        this.topLeftPos = new core_1.Position(0, 0);
        this.loadComplete = false;
        this.CanvasID = PixiConsoleRenderer.CanvasIdBase + PixiConsoleRenderer.canvasCount++;
        this.defaultForeground = Color.Color.toInt(defaultForeground);
        this.defaultBackground = Color.Color.toInt(defaultBackground);
        if (this.divSelector.charAt(0) != '#')
            this.divSelector = "#" + this.divSelector;
        this.stage = new PIXI.Container();
    }
    get element() { return this._element; }
    init(con) {
        this.font = PIXI.BaseTexture.fromImage(this.fontUrl, false, PIXI.SCALE_MODES.NEAREST);
        if (!this.font.hasLoaded) {
            this.font.on("loaded", () => this.onFontLoaded(this.rendererName, con));
            this.font.on("error", () => this.onFontError(this.fontUrl));
        }
        else {
            this.onFontLoaded(this.rendererName, con);
        }
    }
    render(con) {
        if (this.loadComplete) {
            for (var x = 0; x < con.width; x++) {
                for (var y = 0; y < con.height; y++) {
                    var cell = con.cells[x][y];
                    if (cell.character >= 0 && cell.character <= 255) {
                        this.foregroundCells[x][y].texture = this.chars[cell.character];
                    }
                    this.foregroundCells[x][y].tint = cell.foreground.toInt();
                    this.backgroundCells[x][y].tint = cell.background.toInt();
                }
            }
            this.renderer.render(this.stage);
        }
    }
    getPositionFromPixels(x, y, pos) {
        var p = pos || new core_1.Position(-1, -1);
        if (this.loadComplete) {
            p.x = Math.floor(x / this.charWidth); // + this.topLeftPos.x;
            p.y = Math.floor(y / this.charHeight); // + this.topLeftPos.y;
        }
        else {
            p.x = -1;
            p.y = -1;
        }
        return p;
    }
    getPixelPositionFromCell(x, y, pos) {
        var p = pos || new core_1.Position(-1, -1);
        if (this.loadComplete) {
            p.x = Math.floor((x - this.topLeftPos.x) / this.charWidth);
            p.y = Math.floor((y - this.topLeftPos.y) / this.charHeight);
        }
        else {
            p.x = -1;
            p.y = -1;
        }
        return p;
    }
    onFontLoaded(renderName, con) {
        this.charWidth = this.font.width / 16;
        this.charHeight = this.font.height / 16;
        this.initCanvas(renderName, con);
        this.initCharacterMap();
        this.initCells(con);
        this.loadComplete = true;
        this.emit('loaded', this);
    }
    onFontError(url) {
        console.log("FATAL: error loading font: " + url);
    }
    initCanvas(renderName, con) {
        var div = document.querySelectorAll(this.divSelector)[0];
        var width = con.width * this.charWidth;
        var height = con.height * this.charHeight;
        this._canvas = document.createElement("canvas");
        this._canvas.id = this.CanvasID;
        this._canvas.width = width;
        this._canvas.height = height;
        div.appendChild(this._canvas);
        this.topLeftPos = new core_1.Position(this._canvas.offsetLeft, this._canvas.offsetTop);
        var options = {
            antialias: false,
            clearBeforeRender: true,
            preserveDrawingBuffer: false,
            resolution: 1,
            transparent: false,
            view: this._canvas
        };
        if (renderName === exports.UrlParamRendererWebGL)
            this.renderer = new PIXI.WebGLRenderer(width, height, options);
        else if (renderName === exports.UrlParamRendererCanvas)
            this.renderer = new PIXI.CanvasRenderer(width, height, options);
        else
            this.renderer = PIXI.autoDetectRenderer(width, height, options);
        this.renderer.backgroundColor = this.defaultBackground;
        this._element = div;
    }
    initCharacterMap() {
        this.chars = [];
        for (var x = 0; x < 16; x++) {
            for (var y = 0; y < 16; y++) {
                let rect = new PIXI.Rectangle(x * this.charWidth, y * this.charHeight, this.charWidth, this.charHeight);
                this.chars[x + y * 16] = new PIXI.Texture(this.font, rect);
            }
        }
    }
    initCells(con) {
        this.backgroundCells = [];
        this.foregroundCells = [];
        for (var x = 0; x < con.width; x++) {
            this.backgroundCells[x] = [];
            this.foregroundCells[x] = [];
            for (var y = 0; y < con.height; y++) {
                // background cell
                let cell = new PIXI.Sprite(this.chars[PixiConsoleRenderer.AsciiFull]);
                cell.x = x * this.charWidth;
                cell.y = y * this.charHeight;
                cell.width = this.charWidth;
                cell.height = this.charHeight;
                cell.tint = this.defaultBackground;
                this.backgroundCells[x][y] = cell;
                this.stage.addChild(cell);
                // foreground cell
                cell = new PIXI.Sprite(this.chars[PixiConsoleRenderer.AsciiSpace]);
                cell.x = x * this.charWidth;
                cell.y = y * this.charHeight;
                cell.width = this.charWidth;
                cell.height = this.charHeight;
                cell.tint = this.defaultForeground;
                this.foregroundCells[x][y] = cell;
                this.stage.addChild(cell);
            }
        }
    }
}
PixiConsoleRenderer.canvasCount = 0;
PixiConsoleRenderer.CanvasIdBase = '__scoundrel_canvas_';
PixiConsoleRenderer.AsciiSpace = 32;
PixiConsoleRenderer.AsciiFull = 219;
exports.PixiConsoleRenderer = PixiConsoleRenderer;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(24); // keyboard pollyfill for KeyboardEvent.code
const position_1 = __webpack_require__(6);
var MouseButton;
(function (MouseButton) {
    MouseButton[MouseButton["Left"] = 0] = "Left";
    MouseButton[MouseButton["Right"] = 1] = "Right";
    MouseButton[MouseButton["Middle"] = 2] = "Middle";
    MouseButton[MouseButton["Button4"] = 3] = "Button4";
    MouseButton[MouseButton["Button5"] = 4] = "Button5";
})(MouseButton = exports.MouseButton || (exports.MouseButton = {}));
class MouseState {
    constructor() {
        this.buttons = [new KeyState(), new KeyState(), new KeyState()];
        this.position = new position_1.Position(0, 0);
        this.positionDelta = new position_1.Position(0, 0);
        this.cellPosition = new position_1.Position(0, 0);
        this.cellPositionDelta = new position_1.Position(0, 0);
        this.wheelDelta = 0;
    }
    isButtonDown(button) {
        var b = this.buttons[button];
        return b ? b.down : false;
    }
    isButtonUp(button) {
        var b = this.buttons[button];
        return b ? b.down : true;
    }
    reset() {
        for (var button of this.buttons) {
            button.pressed = false;
            button.released = false;
        }
        this.wheelDelta = 0;
        this.positionDelta.x = 0;
        this.positionDelta.y = 0;
        this.cellPositionDelta.x = 0;
        this.cellPositionDelta.y = 0;
    }
}
exports.MouseState = MouseState;
class KeyState {
    constructor() {
        this.down = false;
        /** Key was just pressed this frame. */
        this.pressed = false;
        /** Key was released this frame. */
        this.released = false;
    }
}
exports.KeyState = KeyState;
class InputManager {
    constructor() {
        this.mouseState = new MouseState();
        this.keyStates = new Map();
    }
    isMouseButtonDown(button) {
        var b = this.mouseState.buttons[button];
        return b ? b.down : false;
    }
    isMouseButtonUp(button) {
        var b = this.mouseState.buttons[button];
        return b ? b.down : true;
    }
    wasButtonPressed(button) {
        var b = this.mouseState.buttons[button];
        return b ? b.pressed : false;
    }
    wasButtonReleased(button) {
        var b = this.mouseState.buttons[button];
        return b ? b.released : false;
    }
    wasMouseMoved() {
        return this.mouseState.positionDelta.x !== 0 || this.mouseState.positionDelta.y !== 0;
    }
    isKeyDown(key) {
        let state = this.keyStates.get(key);
        return state ? state.down : false;
    }
    wasKeyPresses(key) {
        let state = this.keyStates.get(key);
        return state ? state.pressed : false;
    }
    wasKeyReleased(key) {
        let state = this.keyStates.get(key);
        return state ? state.released : false;
    }
    reset() {
        this.mouseState.reset();
        for (let key of this.keyStates.values()) {
            key.pressed = false;
            key.released = false;
        }
    }
    onMouseMove(event, console) {
        var previousPosition = this.mouseState.position.clone();
        var previousCellPosition = this.mouseState.cellPosition.clone();
        this.mouseState.position.x = event.clientX;
        this.mouseState.position.y = event.clientY;
        this.mouseState.positionDelta.x += event.clientX - previousPosition.x;
        this.mouseState.positionDelta.y += event.clientY - previousPosition.y;
        console.getPositionFromPixels(event.clientX, event.clientY, this.mouseState.cellPosition);
        this.mouseState.cellPositionDelta.x += this.mouseState.cellPosition.x - previousCellPosition.x;
        this.mouseState.cellPositionDelta.y += this.mouseState.cellPosition.y - previousCellPosition.y;
    }
    onMouseDown(event) {
        if (!this.mouseState.buttons[event.button])
            this.mouseState.buttons[event.button] = new KeyState();
        this.mouseState.buttons[event.button].down = true;
        this.mouseState.buttons[event.button].pressed = true;
    }
    onMouseUp(event) {
        if (!this.mouseState.buttons[event.button])
            this.mouseState.buttons[event.button] = new KeyState();
        this.mouseState.buttons[event.button].down = false;
        this.mouseState.buttons[event.button].released = true;
    }
    onMouseWheel(event) {
        this.mouseState.wheelDelta += event.wheelDeltaY;
    }
    onKeyDown(event) {
        var state = this.keyStates.get(event.code);
        if (state === undefined) {
            state = new KeyState();
            this.keyStates.set(event.code, state);
        }
        state.down = true;
        state.pressed = true;
    }
    onKeyUp(event) {
        var state = this.keyStates.get(event.code);
        if (state === undefined) {
            state = new KeyState();
            this.keyStates.set(event.code, state);
        }
        state.down = false;
        state.released = true;
    }
}
exports.InputManager = InputManager;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A 2D vector
 */
class Vector2 {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    get xy() { return [this.x, this.y]; }
    set xy(value) {
        this.x = value[0];
        this.y = value[1];
    }
    clone() {
        return new Vector2(this.x, this.y);
    }
    /**
     * Add this vector to another.
     * @param v The other vector to add.
     * @param r If passed will be set to the result of the addition.
     */
    add(v, r) {
        if (r === undefined)
            r = new Vector2();
        r.x = this.x + v.x;
        r.y = this.y + v.y;
        return r;
    }
    /**
     * Subtract a vector from this vector.
     * @param v The other vector to subtract.
     * @param r If passed will be set to the result of the subtration.
     */
    subtract(v, r) {
        if (r === undefined)
            r = new Vector2();
        r.x = this.x - v.x;
        r.y = this.y - v.y;
        return r;
    }
    /**
     * Returns the negative of this vector.
     * @param r If passed will be set to the result of the negation.
     */
    negate(r) {
        if (r === undefined)
            r = new Vector2();
        r.x = -this.x;
        r.y = -this.y;
        return r;
    }
    /**
     * Multiply this vector with another.
     * @param v The vector to multiply by.
     * @param r If passed will be set to the result of the multiplication.
     */
    multiply(v, r) {
        if (r === undefined)
            r = new Vector2();
        r.x = this.x * v.x;
        r.y = this.y * v.y;
        return r;
    }
    /**
     * Divide this vector with another.
     * @param v The Vector to divide by.
     * @param r If passed will be set to the result of the division.
     */
    divide(v, r) {
        if (r === undefined)
            r = new Vector2();
        r.x = this.x / v.x;
        r.y = this.y / v.y;
        return r;
    }
    /**
     * Test if this vector is equal to another.
     * @param v The other vector to test for equality.
     * @param t The threshold for the test.
     */
    equals(v, t = Number.EPSILON) {
        return Math.abs(this.x - v.x) > t ? Math.abs(this.y - v.y) <= t : true;
    }
    /**
     * Returns the 2D cross product, wich is the z component of the cross product of the vectors projected into 3d space.
     * @param v
     */
    cros(v) {
        return this.x * v.x - this.y * v.y;
    }
    /**
     * Returns the dot product of this and another vector.
     * @param v
     */
    dot(v) {
        return this.x * v.x + this.y * v.y;
    }
    /**
     * Nomalized this vector to unit length
     * @param r If passed will be set to the result of the normalization.
     */
    normalize(r) {
        if (r === undefined)
            r = new Vector2();
        var i = 1 / Math.sqrt(this.x * this.x + this.y * this.y);
        r.x = this.x / i;
        r.y = this.y / i;
        return r;
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    lengthSquared() {
        return this.x * this.x + this.y * this.y;
    }
    /**
     * Returns the result of scaling both x and y by the given number.
     * @param n The numver to scale by.
     * @param r If passed will be set to the result of the scale.
     */
    scale(n, r) {
        if (r === undefined)
            r = new Vector2();
        r.x = this.x * n;
        r.y = this.y * n;
        return r;
    }
    /**
     * Returns the distance from this vector to another.
     * @param v The other vector.
     */
    distance(v) {
        var x = v.x - this.x;
        var y = v.y - this.y;
        return Math.sqrt(x * x + y * y);
    }
    /**
     * Returns the squared distance from this vector to another.
     * @param v The other vector.
     */
    distanceSquard(v) {
        var x = v.x - this.x;
        var y = v.y - this.y;
        return x * x + y * y;
    }
}
exports.Vector2 = Vector2;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const actionbase_1 = __webpack_require__(0);
/**
 * This Action applies a force on the particle to draw it towards a point.
 * The force applied is inversly proportianal to the squeare of the distance from the particle to the point, in accordance with Newton's law of gravity.
 * @extends ActionBase
 */
class GravityWell extends actionbase_1.ActionBase {
    /**
     *
     * @param power The strength of the gravity force.
     * @param x The x coordinate of the point towards which the force draws the particle.
     * @param y The y coordinate of the point towards which the force draws the particle.
     * @param epsilon The minimum distance for which gravity is calculated.
     * Particles closer than this distance experience a gravity force as if
     * they were this distance away. This stops the gravity effect blowing
     * up as distances get small. For realistic gravity effects you will want
     * a small epsilon ( ~1 ), but for stable visual effects a larger
     * epsilon (~100) is often better.
     */
    constructor(power = 0, x = 0, y = 0, epsilon = 100) {
        super();
        this.x = x;
        this.y = y;
        this.power = power;
        this.epsilon = epsilon;
    }
    get power() {
        return this._power / GravityWell.gravityConstant;
    }
    set power(value) {
        this._power = value * GravityWell.gravityConstant;
    }
    get epsilon() {
        return Math.sqrt(this._epsilonSquared);
    }
    set epsilon(value) {
        this._epsilonSquared = value * value;
    }
    update(_emitter, particle, time) {
        if (particle.mass === 0)
            return;
        var x = this.x - particle.x;
        var y = this.y - particle.y;
        var dsqr = x * x + y * y;
        if (dsqr === 0)
            return;
        if (dsqr < this._epsilonSquared)
            dsqr = this._epsilonSquared;
        var factor = (this._power * time) / (dsqr * Math.sqrt(dsqr));
        particle.velX += x * factor;
        particle.velY += y * factor;
    }
}
GravityWell.gravityConstant = 10000; // just scales the power to a more reasonable number
exports.GravityWell = GravityWell;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const actionbase_1 = __webpack_require__(0);
/**
 * The TweenToCurrentPosition action adjusts the particle's position between two
 * locations as it ages. The start location is a random ponumber within the specified
 * zone, and the end location is the particle's position when it is created or added
 * to the emitter. The current position is relative to the particle's energy,
 * which changes as the particle ages in accordance with the energy easing
 * used. This action should be used in conjunction with the Age action.
 */
class TweenToCurrentPosition extends actionbase_1.ActionBase {
    /**
     * The constructor creates a TweenToCurrentPosition action for use by an emitter.
     * To add a TweenToCurrentPosition to all particles created by an emitter, use the
     * emitter's addAction method.
     *
     * @param zone The zone for the particle's position when its energy is 0.
     */
    constructor(zone) {
        super();
        this.zone = zone;
        this._priority = -10;
    }
    /**
     *
     */
    addedToEmitter(emitter) {
        if (!emitter.hasInitializer(this)) {
            emitter.addInitializer(this);
        }
    }
    removedFromEmitter(emitter) {
        emitter.removeInitializer(this);
    }
    /**
     *
     */
    initialize(_emitter, particle) {
        var pt = this.zone.getLocation();
        var data = new TweenToPositionData(pt.x, pt.y, particle.x, particle.y);
        particle.data.set('TweenToCurrentPosition', data);
    }
    /**
     * Calculates the current position of the particle based on it's energy.
     *
     * <p>This method is called by the emitter and need not be called by the
     * user.</p>
     *
     * @param emitter The Emitter that created the particle.
     * @param particle The particle to be updated.
     * @param time The duration of the frame - used for time based updates.
     */
    update(emitter, particle, _time) {
        if (!particle.data.has('TweenToCurrentPosition')) {
            this.initialize(emitter, particle);
        }
        var data = particle.data.get('TweenToCurrentPosition');
        particle.x = data.endX + data.diffX * particle.energy;
        particle.y = data.endY + data.diffY * particle.energy;
    }
}
exports.TweenToCurrentPosition = TweenToCurrentPosition;
class TweenToPositionData {
    constructor(startX, startY, endX, endY) {
        this.diffX = startX - endX;
        this.diffY = startY - endY;
        this.endX = endX;
        this.endY = endY;
    }
}
exports.TweenToPositionData = TweenToPositionData;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"tslib\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
tslib_1.__exportStar(__webpack_require__(82), exports);
tslib_1.__exportStar(__webpack_require__(76), exports);
tslib_1.__exportStar(__webpack_require__(77), exports);
tslib_1.__exportStar(__webpack_require__(78), exports);
tslib_1.__exportStar(__webpack_require__(79), exports);
tslib_1.__exportStar(__webpack_require__(80), exports);
tslib_1.__exportStar(__webpack_require__(81), exports);
tslib_1.__exportStar(__webpack_require__(83), exports);
tslib_1.__exportStar(__webpack_require__(84), exports);
tslib_1.__exportStar(__webpack_require__(85), exports);
tslib_1.__exportStar(__webpack_require__(86), exports);
tslib_1.__exportStar(__webpack_require__(87), exports);


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"tslib\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
tslib_1.__exportStar(__webpack_require__(18), exports);
tslib_1.__exportStar(__webpack_require__(106), exports);


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(1);
const core_2 = __webpack_require__(1);
class Particle {
    constructor() {
        /**
         * The x coordinate of the particle.
         */
        this.x = 0;
        /**
         * The y coordinate of the particle.
         */
        this.y = 0;
        /**
         * The x coordinate of the particle for the previous update.
         */
        this.previousX = 0;
        /**
         * The y coordinate of the particle for the previous update.
         */
        this.previousY = 0;
        /**
         * 32bit RGBA color of the particle.
         */
        this.color = new core_2.RGBA(1, 1, 1, 1);
        this._previousColor = new core_2.RGBA(1, 1, 1, 1);
        /**
         * scale of the particle.
         */
        this.scale = 1;
        /**
         * Mass of the particle.
         */
        this.mass = 1;
        /**
         * The radius of the particle for collision approximation.
         */
        this.collisionRadius = 1;
        /**
         * The lifetime of the particle.
         */
        this.lifetime = 0;
        /**
         * The age of the particle in milliseconds.
         */
        this.age = 0;
        /**
         * The energy of the particle.
         */
        this.energy = 1;
        /**
         * Whether the particle is dead.
         */
        this.isDead = false;
        /**
         * The x coordinate of the velocity of the particle.
         */
        this.velX = 0;
        /**
         * The y coordinate of the velocity of the particle.
         */
        this.velY = 0;
        /**
         * The rotation of the particle in radians.
         */
        this.rotation = 0;
        /**
         * The angular velocity of the particle in radians / second.
         */
        this.angularVelocity = 0;
        this.sortID = 0;
        this._previousMass = 0;
        this._previousRadius = 0;
        this._inertia = 0;
        this._data = new Map();
    }
    /**
     * A data dictionary that can be utilised by actions and activities.
     */
    get data() { return this._data; }
    /**
     * The inertia of the paricle around its center point.
     */
    get inertia() {
        if (this.mass != this._previousMass || this.collisionRadius != this._previousRadius) {
            this._inertia = this.mass * this.collisionRadius * this.collisionRadius * 0.5;
            this._previousMass = this.mass;
            this._previousRadius = this.collisionRadius;
        }
        return this._inertia;
    }
    /**
     * Gets the transformation matrix for the particle
     */
    get transform() {
        var cos = this.scale * Math.cos(this.rotation);
        var sin = this.scale * Math.sin(this.rotation);
        return new core_1.Matrix3([cos, sin, -sin, cos, this.x, this.y, 0, 0, 1]);
    }
    /**
     * Sets the default values for the particle.
     */
    initialize() {
        this.color = this._previousColor = new core_2.RGBA(1, 1, 1, 1);
        this.scale = 1;
        this.collisionRadius = 1;
        this.lifetime = 0;
        this.age = 0;
        this.energy = 1;
        this.isDead = false;
        this._data = new Map();
        this.x = 0;
        this.y = 0;
        this.previousX = 0;
        this.previousY = 0;
        this.velX = 0;
        this.velY = 0;
        this.rotation = 0;
        this.angularVelocity = 0;
    }
    /**
     * Creates a new particle with all the same properties as this one.
     * @param factory Optional ParticleFactory to create the new particle.
     */
    clone(factory) {
        var p = factory !== undefined ? factory.createParticle() : new Particle();
        p.color = this.color;
        p.scale = this.scale;
        p.mass = this.mass;
        p.collisionRadius = this.collisionRadius;
        p.lifetime = this.lifetime;
        p.age = this.age;
        p.energy = this.energy;
        p.isDead = this.isDead;
        p._data = new Map();
        for (var [key, value] of this._data)
            p._data.set(key, value);
        p.x = this.x;
        p.y = this.y;
        p.velX = this.velX;
        p.velY = this.velY;
        p.rotation = this.rotation;
        p.angularVelocity = this.angularVelocity;
        return p;
    }
    revive() {
        this.lifetime = 0;
        this.age = 0;
        this.energy = 1;
        this.isDead = false;
    }
}
exports.Particle = Particle;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"tslib\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
tslib_1.__exportStar(__webpack_require__(107), exports);
tslib_1.__exportStar(__webpack_require__(108), exports);
tslib_1.__exportStar(__webpack_require__(109), exports);
tslib_1.__exportStar(__webpack_require__(110), exports);
tslib_1.__exportStar(__webpack_require__(111), exports);
tslib_1.__exportStar(__webpack_require__(112), exports);


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"tslib\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
tslib_1.__exportStar(__webpack_require__(115), exports);
tslib_1.__exportStar(__webpack_require__(114), exports);
tslib_1.__exportStar(__webpack_require__(113), exports);


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const guicomponent_1 = __webpack_require__(4);
/**
 * A panel with a border and optional title.
 */
class Panel extends guicomponent_1.GuiComponent {
    calcPreferredSize() {
        var maxWidth = 0;
        var maxHeight = 0;
        for (var child of this._children) {
            if (child.visible) {
                var d = child.getPreferredSize();
                if (d.width > maxWidth)
                    maxWidth = d.width;
                if (d.height > maxHeight)
                    maxHeight = d.height;
            }
        }
        return { width: maxWidth, height: maxHeight };
    }
    doLayout() {
        var l = this.getLeft();
        var t = this.getTop();
        var ew = this._width - t - this.getRight();
        var eh = this._height - l - this.getBottom();
        for (var child of this._children) {
            var d = child.getPreferredSize();
            child.layoutAligned(this._x + l, this._y + t, d.width, d.height, ew, eh);
        }
    }
}
exports.Panel = Panel;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(1);
class Theme {
    get background() { return this._background || Theme.default()._background; }
    set background(value) { this._background = value; }
    get backgroundActive() { return this._backgroundActive || Theme.default()._backgroundActive; }
    set backgroundActive(value) { this._backgroundActive = value; }
    get backgroundDisabled() { return this._backgroundDisabled || Theme.default()._backgroundDisabled; }
    set backgroundDisabled(value) { this._backgroundDisabled = value; }
    get foreground() { return this._foreground || Theme.default()._foreground; }
    set foreground(value) { this._foreground = value; }
    get foregroundActive() { return this._foregroundActive || (Theme.default()._foregroundActive); }
    set foregroundActive(value) { this._foregroundActive = value; }
    get foregroundDisabled() { return this._foregroundDisabled || Theme.default()._foregroundDisabled; }
    set foregroundDisabled(value) { this._foregroundDisabled = value; }
    get titleForeground() { return this._titleForeground || (Theme.default()._titleForeground); }
    set titleForeground(value) { this._titleForeground = value; }
    static default() {
        if (!Theme._default) {
            Theme._default = new Theme();
            Theme._default._background = core_1.RGBA.fromInt(0x272822);
            Theme._default._backgroundActive = core_1.RGBA.fromInt(0x383830);
            Theme._default._backgroundDisabled = core_1.RGBA.fromInt(0x272822);
            Theme._default._foreground = core_1.RGBA.fromInt(0xFD971F);
            Theme._default._foregroundActive = core_1.RGBA.fromInt(0xFFDF90);
            Theme._default._foregroundDisabled = core_1.RGBA.fromInt(0x748E5F);
            Theme._default._titleForeground = core_1.RGBA.fromInt(0xFFFFFF);
        }
        return Theme._default;
    }
}
exports.Theme = Theme;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Console = __webpack_require__(10);
exports.Console = Console;
const Core = __webpack_require__(1);
exports.Core = Core;
const Map = __webpack_require__(131);
exports.Map = Map;
const GUI = __webpack_require__(128);
exports.GUI = GUI;
const Flec = __webpack_require__(89);
exports.Flec = Flec;


/***/ }),
/* 24 */
/***/ (function(module, exports) {

(function(global) {
  'use strict';

  var nativeKeyboardEvent = ('KeyboardEvent' in global);
  if (!nativeKeyboardEvent)
    global.KeyboardEvent = function KeyboardEvent() { throw TypeError('Illegal constructor'); };

  [
    ['DOM_KEY_LOCATION_STANDARD', 0x00], // Default or unknown location
    ['DOM_KEY_LOCATION_LEFT', 0x01], // e.g. Left Alt key
    ['DOM_KEY_LOCATION_RIGHT', 0x02], // e.g. Right Alt key
    ['DOM_KEY_LOCATION_NUMPAD', 0x03], // e.g. Numpad 0 or +
  ].forEach(function(p) { if (!(p[0] in global.KeyboardEvent)) global.KeyboardEvent[p[0]] = p[1]; });

  var STANDARD = global.KeyboardEvent.DOM_KEY_LOCATION_STANDARD,
      LEFT = global.KeyboardEvent.DOM_KEY_LOCATION_LEFT,
      RIGHT = global.KeyboardEvent.DOM_KEY_LOCATION_RIGHT,
      NUMPAD = global.KeyboardEvent.DOM_KEY_LOCATION_NUMPAD;

  //--------------------------------------------------------------------
  //
  // Utilities
  //
  //--------------------------------------------------------------------

  function contains(s, ss) { return String(s).indexOf(ss) !== -1; }

  var os = (function() {
    if (contains(navigator.platform, 'Win')) { return 'win'; }
    if (contains(navigator.platform, 'Mac')) { return 'mac'; }
    if (contains(navigator.platform, 'CrOS')) { return 'cros'; }
    if (contains(navigator.platform, 'Linux')) { return 'linux'; }
    if (contains(navigator.userAgent, 'iPad') || contains(navigator.platform, 'iPod') || contains(navigator.platform, 'iPhone')) { return 'ios'; }
    return '';
  } ());

  var browser = (function() {
    if (contains(navigator.userAgent, 'Chrome/')) { return 'chrome'; }
    if (contains(navigator.vendor, 'Apple')) { return 'safari'; }
    if (contains(navigator.userAgent, 'MSIE')) { return 'ie'; }
    if (contains(navigator.userAgent, 'Gecko/')) { return 'moz'; }
    if (contains(navigator.userAgent, 'Opera/')) { return 'opera'; }
    return '';
  } ());

  var browser_os = browser + '-' + os;

  function mergeIf(baseTable, select, table) {
    if (browser_os === select || browser === select || os === select) {
      Object.keys(table).forEach(function(keyCode) {
        baseTable[keyCode] = table[keyCode];
      });
    }
  }

  function remap(o, key) {
    var r = {};
    Object.keys(o).forEach(function(k) {
      var item = o[k];
      if (key in item) {
        r[item[key]] = item;
      }
    });
    return r;
  }

  function invert(o) {
    var r = {};
    Object.keys(o).forEach(function(k) {
      r[o[k]] = k;
    });
    return r;
  }

  //--------------------------------------------------------------------
  //
  // Generic Mappings
  //
  //--------------------------------------------------------------------

  // "keyInfo" is a dictionary:
  //   code: string - name from UI Events KeyboardEvent code Values
  //     https://w3c.github.io/uievents-code/
  //   location (optional): number - one of the DOM_KEY_LOCATION values
  //   keyCap (optional): string - keyboard label in en-US locale
  // USB code Usage ID from page 0x07 unless otherwise noted (Informative)

  // Map of keyCode to keyInfo
  var keyCodeToInfoTable = {
    // 0x01 - VK_LBUTTON
    // 0x02 - VK_RBUTTON
    0x03: { code: 'Cancel' }, // [USB: 0x9b] char \x0018 ??? (Not in D3E)
    // 0x04 - VK_MBUTTON
    // 0x05 - VK_XBUTTON1
    // 0x06 - VK_XBUTTON2
    0x06: { code: 'Help' }, // [USB: 0x75] ???
    // 0x07 - undefined
    0x08: { code: 'Backspace' }, // [USB: 0x2a] Labelled Delete on Macintosh keyboards.
    0x09: { code: 'Tab' }, // [USB: 0x2b]
    // 0x0A-0x0B - reserved
    0X0C: { code: 'Clear' }, // [USB: 0x9c] NumPad Center (Not in D3E)
    0X0D: { code: 'Enter' }, // [USB: 0x28]
    // 0x0E-0x0F - undefined

    0x10: { code: 'Shift' },
    0x11: { code: 'Control' },
    0x12: { code: 'Alt' },
    0x13: { code: 'Pause' }, // [USB: 0x48]
    0x14: { code: 'CapsLock' }, // [USB: 0x39]
    0x15: { code: 'KanaMode' }, // [USB: 0x88]
    0x16: { code: 'Lang1' }, // [USB: 0x90]
    // 0x17: VK_JUNJA
    // 0x18: VK_FINAL
    0x19: { code: 'Lang2' }, // [USB: 0x91]
    // 0x1A - undefined
    0x1B: { code: 'Escape' }, // [USB: 0x29]
    0x1C: { code: 'Convert' }, // [USB: 0x8a]
    0x1D: { code: 'NonConvert' }, // [USB: 0x8b]
    0x1E: { code: 'Accept' }, // [USB: ????]
    0x1F: { code: 'ModeChange' }, // [USB: ????]

    0x20: { code: 'Space' }, // [USB: 0x2c]
    0x21: { code: 'PageUp' }, // [USB: 0x4b]
    0x22: { code: 'PageDown' }, // [USB: 0x4e]
    0x23: { code: 'End' }, // [USB: 0x4d]
    0x24: { code: 'Home' }, // [USB: 0x4a]
    0x25: { code: 'ArrowLeft' }, // [USB: 0x50]
    0x26: { code: 'ArrowUp' }, // [USB: 0x52]
    0x27: { code: 'ArrowRight' }, // [USB: 0x4f]
    0x28: { code: 'ArrowDown' }, // [USB: 0x51]
    0x29: { code: 'Select' }, // (Not in D3E)
    0x2A: { code: 'Print' }, // (Not in D3E)
    0x2B: { code: 'Execute' }, // [USB: 0x74] (Not in D3E)
    0x2C: { code: 'PrintScreen' }, // [USB: 0x46]
    0x2D: { code: 'Insert' }, // [USB: 0x49]
    0x2E: { code: 'Delete' }, // [USB: 0x4c]
    0x2F: { code: 'Help' }, // [USB: 0x75] ???

    0x30: { code: 'Digit0', keyCap: '0' }, // [USB: 0x27] 0)
    0x31: { code: 'Digit1', keyCap: '1' }, // [USB: 0x1e] 1!
    0x32: { code: 'Digit2', keyCap: '2' }, // [USB: 0x1f] 2@
    0x33: { code: 'Digit3', keyCap: '3' }, // [USB: 0x20] 3#
    0x34: { code: 'Digit4', keyCap: '4' }, // [USB: 0x21] 4$
    0x35: { code: 'Digit5', keyCap: '5' }, // [USB: 0x22] 5%
    0x36: { code: 'Digit6', keyCap: '6' }, // [USB: 0x23] 6^
    0x37: { code: 'Digit7', keyCap: '7' }, // [USB: 0x24] 7&
    0x38: { code: 'Digit8', keyCap: '8' }, // [USB: 0x25] 8*
    0x39: { code: 'Digit9', keyCap: '9' }, // [USB: 0x26] 9(
    // 0x3A-0x40 - undefined

    0x41: { code: 'KeyA', keyCap: 'a' }, // [USB: 0x04]
    0x42: { code: 'KeyB', keyCap: 'b' }, // [USB: 0x05]
    0x43: { code: 'KeyC', keyCap: 'c' }, // [USB: 0x06]
    0x44: { code: 'KeyD', keyCap: 'd' }, // [USB: 0x07]
    0x45: { code: 'KeyE', keyCap: 'e' }, // [USB: 0x08]
    0x46: { code: 'KeyF', keyCap: 'f' }, // [USB: 0x09]
    0x47: { code: 'KeyG', keyCap: 'g' }, // [USB: 0x0a]
    0x48: { code: 'KeyH', keyCap: 'h' }, // [USB: 0x0b]
    0x49: { code: 'KeyI', keyCap: 'i' }, // [USB: 0x0c]
    0x4A: { code: 'KeyJ', keyCap: 'j' }, // [USB: 0x0d]
    0x4B: { code: 'KeyK', keyCap: 'k' }, // [USB: 0x0e]
    0x4C: { code: 'KeyL', keyCap: 'l' }, // [USB: 0x0f]
    0x4D: { code: 'KeyM', keyCap: 'm' }, // [USB: 0x10]
    0x4E: { code: 'KeyN', keyCap: 'n' }, // [USB: 0x11]
    0x4F: { code: 'KeyO', keyCap: 'o' }, // [USB: 0x12]

    0x50: { code: 'KeyP', keyCap: 'p' }, // [USB: 0x13]
    0x51: { code: 'KeyQ', keyCap: 'q' }, // [USB: 0x14]
    0x52: { code: 'KeyR', keyCap: 'r' }, // [USB: 0x15]
    0x53: { code: 'KeyS', keyCap: 's' }, // [USB: 0x16]
    0x54: { code: 'KeyT', keyCap: 't' }, // [USB: 0x17]
    0x55: { code: 'KeyU', keyCap: 'u' }, // [USB: 0x18]
    0x56: { code: 'KeyV', keyCap: 'v' }, // [USB: 0x19]
    0x57: { code: 'KeyW', keyCap: 'w' }, // [USB: 0x1a]
    0x58: { code: 'KeyX', keyCap: 'x' }, // [USB: 0x1b]
    0x59: { code: 'KeyY', keyCap: 'y' }, // [USB: 0x1c]
    0x5A: { code: 'KeyZ', keyCap: 'z' }, // [USB: 0x1d]
    0x5B: { code: 'MetaLeft', location: LEFT }, // [USB: 0xe3]
    0x5C: { code: 'MetaRight', location: RIGHT }, // [USB: 0xe7]
    0x5D: { code: 'ContextMenu' }, // [USB: 0x65] Context Menu
    // 0x5E - reserved
    0x5F: { code: 'Standby' }, // [USB: 0x82] Sleep

    0x60: { code: 'Numpad0', keyCap: '0', location: NUMPAD }, // [USB: 0x62]
    0x61: { code: 'Numpad1', keyCap: '1', location: NUMPAD }, // [USB: 0x59]
    0x62: { code: 'Numpad2', keyCap: '2', location: NUMPAD }, // [USB: 0x5a]
    0x63: { code: 'Numpad3', keyCap: '3', location: NUMPAD }, // [USB: 0x5b]
    0x64: { code: 'Numpad4', keyCap: '4', location: NUMPAD }, // [USB: 0x5c]
    0x65: { code: 'Numpad5', keyCap: '5', location: NUMPAD }, // [USB: 0x5d]
    0x66: { code: 'Numpad6', keyCap: '6', location: NUMPAD }, // [USB: 0x5e]
    0x67: { code: 'Numpad7', keyCap: '7', location: NUMPAD }, // [USB: 0x5f]
    0x68: { code: 'Numpad8', keyCap: '8', location: NUMPAD }, // [USB: 0x60]
    0x69: { code: 'Numpad9', keyCap: '9', location: NUMPAD }, // [USB: 0x61]
    0x6A: { code: 'NumpadMultiply', keyCap: '*', location: NUMPAD }, // [USB: 0x55]
    0x6B: { code: 'NumpadAdd', keyCap: '+', location: NUMPAD }, // [USB: 0x57]
    0x6C: { code: 'NumpadComma', keyCap: ',', location: NUMPAD }, // [USB: 0x85]
    0x6D: { code: 'NumpadSubtract', keyCap: '-', location: NUMPAD }, // [USB: 0x56]
    0x6E: { code: 'NumpadDecimal', keyCap: '.', location: NUMPAD }, // [USB: 0x63]
    0x6F: { code: 'NumpadDivide', keyCap: '/', location: NUMPAD }, // [USB: 0x54]

    0x70: { code: 'F1' }, // [USB: 0x3a]
    0x71: { code: 'F2' }, // [USB: 0x3b]
    0x72: { code: 'F3' }, // [USB: 0x3c]
    0x73: { code: 'F4' }, // [USB: 0x3d]
    0x74: { code: 'F5' }, // [USB: 0x3e]
    0x75: { code: 'F6' }, // [USB: 0x3f]
    0x76: { code: 'F7' }, // [USB: 0x40]
    0x77: { code: 'F8' }, // [USB: 0x41]
    0x78: { code: 'F9' }, // [USB: 0x42]
    0x79: { code: 'F10' }, // [USB: 0x43]
    0x7A: { code: 'F11' }, // [USB: 0x44]
    0x7B: { code: 'F12' }, // [USB: 0x45]
    0x7C: { code: 'F13' }, // [USB: 0x68]
    0x7D: { code: 'F14' }, // [USB: 0x69]
    0x7E: { code: 'F15' }, // [USB: 0x6a]
    0x7F: { code: 'F16' }, // [USB: 0x6b]

    0x80: { code: 'F17' }, // [USB: 0x6c]
    0x81: { code: 'F18' }, // [USB: 0x6d]
    0x82: { code: 'F19' }, // [USB: 0x6e]
    0x83: { code: 'F20' }, // [USB: 0x6f]
    0x84: { code: 'F21' }, // [USB: 0x70]
    0x85: { code: 'F22' }, // [USB: 0x71]
    0x86: { code: 'F23' }, // [USB: 0x72]
    0x87: { code: 'F24' }, // [USB: 0x73]
    // 0x88-0x8F - unassigned

    0x90: { code: 'NumLock', location: NUMPAD }, // [USB: 0x53]
    0x91: { code: 'ScrollLock' }, // [USB: 0x47]
    // 0x92-0x96 - OEM specific
    // 0x97-0x9F - unassigned

    // NOTE: 0xA0-0xA5 usually mapped to 0x10-0x12 in browsers
    0xA0: { code: 'ShiftLeft', location: LEFT }, // [USB: 0xe1]
    0xA1: { code: 'ShiftRight', location: RIGHT }, // [USB: 0xe5]
    0xA2: { code: 'ControlLeft', location: LEFT }, // [USB: 0xe0]
    0xA3: { code: 'ControlRight', location: RIGHT }, // [USB: 0xe4]
    0xA4: { code: 'AltLeft', location: LEFT }, // [USB: 0xe2]
    0xA5: { code: 'AltRight', location: RIGHT }, // [USB: 0xe6]

    0xA6: { code: 'BrowserBack' }, // [USB: 0x0c/0x0224]
    0xA7: { code: 'BrowserForward' }, // [USB: 0x0c/0x0225]
    0xA8: { code: 'BrowserRefresh' }, // [USB: 0x0c/0x0227]
    0xA9: { code: 'BrowserStop' }, // [USB: 0x0c/0x0226]
    0xAA: { code: 'BrowserSearch' }, // [USB: 0x0c/0x0221]
    0xAB: { code: 'BrowserFavorites' }, // [USB: 0x0c/0x0228]
    0xAC: { code: 'BrowserHome' }, // [USB: 0x0c/0x0222]
    0xAD: { code: 'AudioVolumeMute' }, // [USB: 0x7f]
    0xAE: { code: 'AudioVolumeDown' }, // [USB: 0x81]
    0xAF: { code: 'AudioVolumeUp' }, // [USB: 0x80]

    0xB0: { code: 'MediaTrackNext' }, // [USB: 0x0c/0x00b5]
    0xB1: { code: 'MediaTrackPrevious' }, // [USB: 0x0c/0x00b6]
    0xB2: { code: 'MediaStop' }, // [USB: 0x0c/0x00b7]
    0xB3: { code: 'MediaPlayPause' }, // [USB: 0x0c/0x00cd]
    0xB4: { code: 'LaunchMail' }, // [USB: 0x0c/0x018a]
    0xB5: { code: 'MediaSelect' },
    0xB6: { code: 'LaunchApp1' },
    0xB7: { code: 'LaunchApp2' },
    // 0xB8-0xB9 - reserved
    0xBA: { code: 'Semicolon',  keyCap: ';' }, // [USB: 0x33] ;: (US Standard 101)
    0xBB: { code: 'Equal', keyCap: '=' }, // [USB: 0x2e] =+
    0xBC: { code: 'Comma', keyCap: ',' }, // [USB: 0x36] ,<
    0xBD: { code: 'Minus', keyCap: '-' }, // [USB: 0x2d] -_
    0xBE: { code: 'Period', keyCap: '.' }, // [USB: 0x37] .>
    0xBF: { code: 'Slash', keyCap: '/' }, // [USB: 0x38] /? (US Standard 101)

    0xC0: { code: 'Backquote', keyCap: '`' }, // [USB: 0x35] `~ (US Standard 101)
    // 0xC1-0xCF - reserved

    // 0xD0-0xD7 - reserved
    // 0xD8-0xDA - unassigned
    0xDB: { code: 'BracketLeft', keyCap: '[' }, // [USB: 0x2f] [{ (US Standard 101)
    0xDC: { code: 'Backslash',  keyCap: '\\' }, // [USB: 0x31] \| (US Standard 101)
    0xDD: { code: 'BracketRight', keyCap: ']' }, // [USB: 0x30] ]} (US Standard 101)
    0xDE: { code: 'Quote', keyCap: '\'' }, // [USB: 0x34] '" (US Standard 101)
    // 0xDF - miscellaneous/varies

    // 0xE0 - reserved
    // 0xE1 - OEM specific
    0xE2: { code: 'IntlBackslash',  keyCap: '\\' }, // [USB: 0x64] \| (UK Standard 102)
    // 0xE3-0xE4 - OEM specific
    0xE5: { code: 'Process' }, // (Not in D3E)
    // 0xE6 - OEM specific
    // 0xE7 - VK_PACKET
    // 0xE8 - unassigned
    // 0xE9-0xEF - OEM specific

    // 0xF0-0xF5 - OEM specific
    0xF6: { code: 'Attn' }, // [USB: 0x9a] (Not in D3E)
    0xF7: { code: 'CrSel' }, // [USB: 0xa3] (Not in D3E)
    0xF8: { code: 'ExSel' }, // [USB: 0xa4] (Not in D3E)
    0xF9: { code: 'EraseEof' }, // (Not in D3E)
    0xFA: { code: 'Play' }, // (Not in D3E)
    0xFB: { code: 'ZoomToggle' }, // (Not in D3E)
    // 0xFC - VK_NONAME - reserved
    // 0xFD - VK_PA1
    0xFE: { code: 'Clear' } // [USB: 0x9c] (Not in D3E)
  };

  // No legacy keyCode, but listed in D3E:

  // code: usb
  // 'IntlHash': 0x070032,
  // 'IntlRo': 0x070087,
  // 'IntlYen': 0x070089,
  // 'NumpadBackspace': 0x0700bb,
  // 'NumpadClear': 0x0700d8,
  // 'NumpadClearEntry': 0x0700d9,
  // 'NumpadMemoryAdd': 0x0700d3,
  // 'NumpadMemoryClear': 0x0700d2,
  // 'NumpadMemoryRecall': 0x0700d1,
  // 'NumpadMemoryStore': 0x0700d0,
  // 'NumpadMemorySubtract': 0x0700d4,
  // 'NumpadParenLeft': 0x0700b6,
  // 'NumpadParenRight': 0x0700b7,

  //--------------------------------------------------------------------
  //
  // Browser/OS Specific Mappings
  //
  //--------------------------------------------------------------------

  mergeIf(keyCodeToInfoTable,
          'moz', {
            0x3B: { code: 'Semicolon', keyCap: ';' }, // [USB: 0x33] ;: (US Standard 101)
            0x3D: { code: 'Equal', keyCap: '=' }, // [USB: 0x2e] =+
            0x6B: { code: 'Equal', keyCap: '=' }, // [USB: 0x2e] =+
            0x6D: { code: 'Minus', keyCap: '-' }, // [USB: 0x2d] -_
            0xBB: { code: 'NumpadAdd', keyCap: '+', location: NUMPAD }, // [USB: 0x57]
            0xBD: { code: 'NumpadSubtract', keyCap: '-', location: NUMPAD } // [USB: 0x56]
          });

  mergeIf(keyCodeToInfoTable,
          'moz-mac', {
            0x0C: { code: 'NumLock', location: NUMPAD }, // [USB: 0x53]
            0xAD: { code: 'Minus', keyCap: '-' } // [USB: 0x2d] -_
          });

  mergeIf(keyCodeToInfoTable,
          'moz-win', {
            0xAD: { code: 'Minus', keyCap: '-' } // [USB: 0x2d] -_
          });

  mergeIf(keyCodeToInfoTable,
          'chrome-mac', {
            0x5D: { code: 'MetaRight', location: RIGHT } // [USB: 0xe7]
          });

  // Windows via Bootcamp (!)
  if (0) {
    mergeIf(keyCodeToInfoTable,
            'chrome-win', {
              0xC0: { code: 'Quote', keyCap: '\'' }, // [USB: 0x34] '" (US Standard 101)
              0xDE: { code: 'Backslash',  keyCap: '\\' }, // [USB: 0x31] \| (US Standard 101)
              0xDF: { code: 'Backquote', keyCap: '`' } // [USB: 0x35] `~ (US Standard 101)
            });

    mergeIf(keyCodeToInfoTable,
            'ie', {
              0xC0: { code: 'Quote', keyCap: '\'' }, // [USB: 0x34] '" (US Standard 101)
              0xDE: { code: 'Backslash',  keyCap: '\\' }, // [USB: 0x31] \| (US Standard 101)
              0xDF: { code: 'Backquote', keyCap: '`' } // [USB: 0x35] `~ (US Standard 101)
            });
  }

  mergeIf(keyCodeToInfoTable,
          'safari', {
            0x03: { code: 'Enter' }, // [USB: 0x28] old Safari
            0x19: { code: 'Tab' } // [USB: 0x2b] old Safari for Shift+Tab
          });

  mergeIf(keyCodeToInfoTable,
          'ios', {
            0x0A: { code: 'Enter', location: STANDARD } // [USB: 0x28]
          });

  mergeIf(keyCodeToInfoTable,
          'safari-mac', {
            0x5B: { code: 'MetaLeft', location: LEFT }, // [USB: 0xe3]
            0x5D: { code: 'MetaRight', location: RIGHT }, // [USB: 0xe7]
            0xE5: { code: 'KeyQ', keyCap: 'Q' } // [USB: 0x14] On alternate presses, Ctrl+Q sends this
          });

  //--------------------------------------------------------------------
  //
  // Identifier Mappings
  //
  //--------------------------------------------------------------------

  // Cases where newer-ish browsers send keyIdentifier which can be
  // used to disambiguate keys.

  // keyIdentifierTable[keyIdentifier] -> keyInfo

  var keyIdentifierTable = {};
  if ('cros' === os) {
    keyIdentifierTable['U+00A0'] = { code: 'ShiftLeft', location: LEFT };
    keyIdentifierTable['U+00A1'] = { code: 'ShiftRight', location: RIGHT };
    keyIdentifierTable['U+00A2'] = { code: 'ControlLeft', location: LEFT };
    keyIdentifierTable['U+00A3'] = { code: 'ControlRight', location: RIGHT };
    keyIdentifierTable['U+00A4'] = { code: 'AltLeft', location: LEFT };
    keyIdentifierTable['U+00A5'] = { code: 'AltRight', location: RIGHT };
  }
  if ('chrome-mac' === browser_os) {
    keyIdentifierTable['U+0010'] = { code: 'ContextMenu' };
  }
  if ('safari-mac' === browser_os) {
    keyIdentifierTable['U+0010'] = { code: 'ContextMenu' };
  }
  if ('ios' === os) {
    // These only generate keyup events
    keyIdentifierTable['U+0010'] = { code: 'Function' };

    keyIdentifierTable['U+001C'] = { code: 'ArrowLeft' };
    keyIdentifierTable['U+001D'] = { code: 'ArrowRight' };
    keyIdentifierTable['U+001E'] = { code: 'ArrowUp' };
    keyIdentifierTable['U+001F'] = { code: 'ArrowDown' };

    keyIdentifierTable['U+0001'] = { code: 'Home' }; // [USB: 0x4a] Fn + ArrowLeft
    keyIdentifierTable['U+0004'] = { code: 'End' }; // [USB: 0x4d] Fn + ArrowRight
    keyIdentifierTable['U+000B'] = { code: 'PageUp' }; // [USB: 0x4b] Fn + ArrowUp
    keyIdentifierTable['U+000C'] = { code: 'PageDown' }; // [USB: 0x4e] Fn + ArrowDown
  }

  //--------------------------------------------------------------------
  //
  // Location Mappings
  //
  //--------------------------------------------------------------------

  // Cases where newer-ish browsers send location/keyLocation which
  // can be used to disambiguate keys.

  // locationTable[location][keyCode] -> keyInfo
  var locationTable = [];
  locationTable[LEFT] = {
    0x10: { code: 'ShiftLeft', location: LEFT }, // [USB: 0xe1]
    0x11: { code: 'ControlLeft', location: LEFT }, // [USB: 0xe0]
    0x12: { code: 'AltLeft', location: LEFT } // [USB: 0xe2]
  };
  locationTable[RIGHT] = {
    0x10: { code: 'ShiftRight', location: RIGHT }, // [USB: 0xe5]
    0x11: { code: 'ControlRight', location: RIGHT }, // [USB: 0xe4]
    0x12: { code: 'AltRight', location: RIGHT } // [USB: 0xe6]
  };
  locationTable[NUMPAD] = {
    0x0D: { code: 'NumpadEnter', location: NUMPAD } // [USB: 0x58]
  };

  mergeIf(locationTable[NUMPAD], 'moz', {
    0x6D: { code: 'NumpadSubtract', location: NUMPAD }, // [USB: 0x56]
    0x6B: { code: 'NumpadAdd', location: NUMPAD } // [USB: 0x57]
  });
  mergeIf(locationTable[LEFT], 'moz-mac', {
    0xE0: { code: 'MetaLeft', location: LEFT } // [USB: 0xe3]
  });
  mergeIf(locationTable[RIGHT], 'moz-mac', {
    0xE0: { code: 'MetaRight', location: RIGHT } // [USB: 0xe7]
  });
  mergeIf(locationTable[RIGHT], 'moz-win', {
    0x5B: { code: 'MetaRight', location: RIGHT } // [USB: 0xe7]
  });


  mergeIf(locationTable[RIGHT], 'mac', {
    0x5D: { code: 'MetaRight', location: RIGHT } // [USB: 0xe7]
  });

  mergeIf(locationTable[NUMPAD], 'chrome-mac', {
    0x0C: { code: 'NumLock', location: NUMPAD } // [USB: 0x53]
  });

  mergeIf(locationTable[NUMPAD], 'safari-mac', {
    0x0C: { code: 'NumLock', location: NUMPAD }, // [USB: 0x53]
    0xBB: { code: 'NumpadAdd', location: NUMPAD }, // [USB: 0x57]
    0xBD: { code: 'NumpadSubtract', location: NUMPAD }, // [USB: 0x56]
    0xBE: { code: 'NumpadDecimal', location: NUMPAD }, // [USB: 0x63]
    0xBF: { code: 'NumpadDivide', location: NUMPAD } // [USB: 0x54]
  });


  //--------------------------------------------------------------------
  //
  // Key Values
  //
  //--------------------------------------------------------------------

  // Mapping from `code` values to `key` values. Values defined at:
  // https://w3c.github.io/uievents-key/
  // Entries are only provided when `key` differs from `code`. If
  // printable, `shiftKey` has the shifted printable character. This
  // assumes US Standard 101 layout

  var codeToKeyTable = {
    // Modifier Keys
    ShiftLeft: { key: 'Shift' },
    ShiftRight: { key: 'Shift' },
    ControlLeft: { key: 'Control' },
    ControlRight: { key: 'Control' },
    AltLeft: { key: 'Alt' },
    AltRight: { key: 'Alt' },
    MetaLeft: { key: 'Meta' },
    MetaRight: { key: 'Meta' },

    // Whitespace Keys
    NumpadEnter: { key: 'Enter' },
    Space: { key: ' ' },

    // Printable Keys
    Digit0: { key: '0', shiftKey: ')' },
    Digit1: { key: '1', shiftKey: '!' },
    Digit2: { key: '2', shiftKey: '@' },
    Digit3: { key: '3', shiftKey: '#' },
    Digit4: { key: '4', shiftKey: '$' },
    Digit5: { key: '5', shiftKey: '%' },
    Digit6: { key: '6', shiftKey: '^' },
    Digit7: { key: '7', shiftKey: '&' },
    Digit8: { key: '8', shiftKey: '*' },
    Digit9: { key: '9', shiftKey: '(' },
    KeyA: { key: 'a', shiftKey: 'A' },
    KeyB: { key: 'b', shiftKey: 'B' },
    KeyC: { key: 'c', shiftKey: 'C' },
    KeyD: { key: 'd', shiftKey: 'D' },
    KeyE: { key: 'e', shiftKey: 'E' },
    KeyF: { key: 'f', shiftKey: 'F' },
    KeyG: { key: 'g', shiftKey: 'G' },
    KeyH: { key: 'h', shiftKey: 'H' },
    KeyI: { key: 'i', shiftKey: 'I' },
    KeyJ: { key: 'j', shiftKey: 'J' },
    KeyK: { key: 'k', shiftKey: 'K' },
    KeyL: { key: 'l', shiftKey: 'L' },
    KeyM: { key: 'm', shiftKey: 'M' },
    KeyN: { key: 'n', shiftKey: 'N' },
    KeyO: { key: 'o', shiftKey: 'O' },
    KeyP: { key: 'p', shiftKey: 'P' },
    KeyQ: { key: 'q', shiftKey: 'Q' },
    KeyR: { key: 'r', shiftKey: 'R' },
    KeyS: { key: 's', shiftKey: 'S' },
    KeyT: { key: 't', shiftKey: 'T' },
    KeyU: { key: 'u', shiftKey: 'U' },
    KeyV: { key: 'v', shiftKey: 'V' },
    KeyW: { key: 'w', shiftKey: 'W' },
    KeyX: { key: 'x', shiftKey: 'X' },
    KeyY: { key: 'y', shiftKey: 'Y' },
    KeyZ: { key: 'z', shiftKey: 'Z' },
    Numpad0: { key: '0' },
    Numpad1: { key: '1' },
    Numpad2: { key: '2' },
    Numpad3: { key: '3' },
    Numpad4: { key: '4' },
    Numpad5: { key: '5' },
    Numpad6: { key: '6' },
    Numpad7: { key: '7' },
    Numpad8: { key: '8' },
    Numpad9: { key: '9' },
    NumpadMultiply: { key: '*' },
    NumpadAdd: { key: '+' },
    NumpadComma: { key: ',' },
    NumpadSubtract: { key: '-' },
    NumpadDecimal: { key: '.' },
    NumpadDivide: { key: '/' },
    Semicolon: { key: ';', shiftKey: ':' },
    Equal: { key: '=', shiftKey: '+' },
    Comma: { key: ',', shiftKey: '<' },
    Minus: { key: '-', shiftKey: '_' },
    Period: { key: '.', shiftKey: '>' },
    Slash: { key: '/', shiftKey: '?' },
    Backquote: { key: '`', shiftKey: '~' },
    BracketLeft: { key: '[', shiftKey: '{' },
    Backslash: { key: '\\', shiftKey: '|' },
    BracketRight: { key: ']', shiftKey: '}' },
    Quote: { key: '\'', shiftKey: '"' },
    IntlBackslash: { key: '\\', shiftKey: '|' }
  };

  mergeIf(codeToKeyTable, 'mac', {
    MetaLeft: { key: 'Meta' },
    MetaRight: { key: 'Meta' }
  });

  // Corrections for 'key' names in older browsers (e.g. FF36-, IE9, etc)
  // https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent.key#Key_values
  var keyFixTable = {
    Add: '+',
    Decimal: '.',
    Divide: '/',
    Subtract: '-',
    Multiply: '*',
    Spacebar: ' ',
    Esc: 'Escape',
    Nonconvert: 'NonConvert',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Menu: 'ContextMenu',
    MediaNextTrack: 'MediaTrackNext',
    MediaPreviousTrack: 'MediaTrackPrevious',
    SelectMedia: 'MediaSelect',
    HalfWidth: 'Hankaku',
    FullWidth: 'Zenkaku',
    RomanCharacters: 'Romaji',
    Crsel: 'CrSel',
    Exsel: 'ExSel',
    Zoom: 'ZoomToggle'
  };

  //--------------------------------------------------------------------
  //
  // Exported Functions
  //
  //--------------------------------------------------------------------


  var codeTable = remap(keyCodeToInfoTable, 'code');

  try {
    var nativeLocation = nativeKeyboardEvent && ('location' in new KeyboardEvent(''));
  } catch (_) {}

  function keyInfoForEvent(event) {
    var keyCode = 'keyCode' in event ? event.keyCode : 'which' in event ? event.which : 0;
    var keyInfo = (function(){
      if (nativeLocation || 'keyLocation' in event) {
        var location = nativeLocation ? event.location : event.keyLocation;
        if (location && keyCode in locationTable[location]) {
          return locationTable[location][keyCode];
        }
      }
      if ('keyIdentifier' in event && event.keyIdentifier in keyIdentifierTable) {
        return keyIdentifierTable[event.keyIdentifier];
      }
      if (keyCode in keyCodeToInfoTable) {
        return keyCodeToInfoTable[keyCode];
      }
      return null;
    }());

    // TODO: Track these down and move to general tables
    if (0) {
      // TODO: Map these for newerish browsers?
      // TODO: iOS only?
      // TODO: Override with more common keyIdentifier name?
      switch (event.keyIdentifier) {
      case 'U+0010': keyInfo = { code: 'Function' }; break;
      case 'U+001C': keyInfo = { code: 'ArrowLeft' }; break;
      case 'U+001D': keyInfo = { code: 'ArrowRight' }; break;
      case 'U+001E': keyInfo = { code: 'ArrowUp' }; break;
      case 'U+001F': keyInfo = { code: 'ArrowDown' }; break;
      }
    }

    if (!keyInfo)
      return null;

    var key = (function() {
      var entry = codeToKeyTable[keyInfo.code];
      if (!entry) return keyInfo.code;
      return (event.shiftKey && 'shiftKey' in entry) ? entry.shiftKey : entry.key;
    }());

    return {
      code: keyInfo.code,
      key: key,
      location: keyInfo.location,
      keyCap: keyInfo.keyCap
    };
  }

  function queryKeyCap(code, locale) {
    code = String(code);
    if (!codeTable.hasOwnProperty(code)) return 'Undefined';
    if (locale && String(locale).toLowerCase() !== 'en-us') throw Error('Unsupported locale');
    var keyInfo = codeTable[code];
    return keyInfo.keyCap || keyInfo.code || 'Undefined';
  }

  if ('KeyboardEvent' in global && 'defineProperty' in Object) {
    (function() {
      function define(o, p, v) {
        if (p in o) return;
        Object.defineProperty(o, p, v);
      }

      define(KeyboardEvent.prototype, 'code', { get: function() {
        var keyInfo = keyInfoForEvent(this);
        return keyInfo ? keyInfo.code : '';
      }});

      // Fix for nonstandard `key` values (FF36-)
      if ('key' in KeyboardEvent.prototype) {
        var desc = Object.getOwnPropertyDescriptor(KeyboardEvent.prototype, 'key');
        Object.defineProperty(KeyboardEvent.prototype, 'key', { get: function() {
          var key = desc.get.call(this);
          return keyFixTable.hasOwnProperty(key) ? keyFixTable[key] : key;
        }});
      }

      define(KeyboardEvent.prototype, 'key', { get: function() {
        var keyInfo = keyInfoForEvent(this);
        return (keyInfo && 'key' in keyInfo) ? keyInfo.key : 'Unidentified';
      }});

      define(KeyboardEvent.prototype, 'location', { get: function() {
        var keyInfo = keyInfoForEvent(this);
        return (keyInfo && 'location' in keyInfo) ? keyInfo.location : STANDARD;
      }});

      define(KeyboardEvent.prototype, 'locale', { get: function() {
        return '';
      }});
    }());
  }

  if (!('queryKeyCap' in global.KeyboardEvent))
    global.KeyboardEvent.queryKeyCap = queryKeyCap;

  // Helper for IE8-
  global.identifyKey = function(event) {
    if ('code' in event)
      return;

    var keyInfo = keyInfoForEvent(event);
    event.code = keyInfo ? keyInfo.code : '';
    event.key = (keyInfo && 'key' in keyInfo) ? keyInfo.key : 'Unidentified';
    event.location = ('location' in event) ? event.location :
      ('keyLocation' in event) ? event.keyLocation :
      (keyInfo && 'location' in keyInfo) ? keyInfo.location : STANDARD;
    event.locale = '';
  };

}(self));


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const pixiconsolerenderer_1 = __webpack_require__(11);
/** An extensible factory for creation of consolerenderer instances.
 *
 */
class ConsoleRendererFactory {
    static init() {
        this.defaultFactory = (...args) => { return new pixiconsolerenderer_1.PixiConsoleRenderer(...args); };
        this.factories.set(pixiconsolerenderer_1.UrlParamRendererWebGL, this.defaultFactory);
        this.factories.set(pixiconsolerenderer_1.UrlParamRendererCanvas, this.defaultFactory);
    }
    static addFactory(name, factory) {
        this.factories.set(name, factory);
    }
    static createRenderer(name = pixiconsolerenderer_1.UrlParamRendererWebGL, ...args) {
        if (!this.factories.has(name))
            name = pixiconsolerenderer_1.UrlParamRendererWebGL;
        let factory;
        if ((factory = this.factories.get(name)) !== undefined)
            return factory(...args);
        // fallback to the default factory
        return this.defaultFactory(...args);
    }
}
ConsoleRendererFactory.factories = new Map(); //{[x: string]: (...args: any[]) => ConsoleRenderer} = {};
exports.ConsoleRendererFactory = ConsoleRendererFactory;
ConsoleRendererFactory.init();


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = __webpack_require__(10);
const color_1 = __webpack_require__(5);
const input_1 = __webpack_require__(12);
const eventemitter3_1 = __webpack_require__(3);
/**
 * This is the main entry point for a Scoundrel application.
 */
class Application extends eventemitter3_1.EventEmitter {
    constructor(divSelector = "#application", width = 0, height = 0, rendererName = console_1.UrlParamRendererWebGL, fontUrl, defaultForeground = new color_1.RGBA(1, 1, 1), defaultBackground = new color_1.RGBA(0, 0, 0)) {
        super();
        this._isDragging = false;
        if (fontUrl === undefined)
            fontUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADAAQMAAABoEv5EAAAABlBMVEVHcEz///+flKJDAAAAAXRSTlMAQObYZgAAB0VJREFUeF6tl0+IHEsdx7+V31IToDMjnmqY7HQ0TwVRqKFxZkP2bS+IgN4DOZb4jhFWvCwQ2GoGUOBBHg+FRh7Gc05zEoEAtSwYgYAeF7y0ePFYiwIdWNL+qmraybITVvP8UtTWzKfq949f12zjXXU+jF6izS0AI9egHeFp3gCgrDxTO/CjAFh7Y/uJMga4tVO+ejmE53PdRdsc/YNB/vcnDH41f3WZ02XpvP/nF3+c/Wlsn6oft+nEZfmL35anbfPz7M9FM4JRP/mCwb/0WcsgrxLQsgefPDj1OT2RiKYKnVeN+lsbo3LNMIV7wYe0pOYBO495HO6EOYZ70Ujhjp3ZnrkG3l+SQ+xgqwwyKer8tI3lWpveGVziCHdHop6ffgr40bvgKdeyqufOxfAMgRe3h9TiRFxKwcAnU6KymrIIXgUwPa0TKM8u9eBtLnw8AcgE+hMMog8L6Xx32krRElxZ3S5ts45KOt05L+ERFUDKQ56pzm3yOHGHfeaiDQPYgBuUYYtcIVYM7gpLwiIp2BcNgxyYCyvhNiYCoFbTVxhkMMU6MBXAV8VKk75LUNDTNdAAHMSKPx/YAE6qFlxzxgkQ3CKCacpm7YxaErYANj6EXZ84IL0AYlRmCAwJa5Dd0rsWKY8Abm3LXOEDleNwKhoizw3ACwAEKF7MrCtIDwiKFC8ASCDjRbF0BfSIoCMYoskC01hYR9ATgoZ6GIEKLWHwPeskuMDNQaiHT/UT1uFj6zLo0uoCZhHrEU84PLBOQRMYOGa9D6yjIkrAMQhRwSEnX4pmUDVTuKlwgCFAMbgmhw+vlSvhD6gtrS/Y2bLeJzWzXKuqGVf1RPyS5wKORK3oD7NqhdlSj5dqXFm1VBGsFLUPlgqLADCuPhsT/gM+TiAnBp7nMoBG0eMyAt+f2Ctig7PNBQNNvQ9SCfDHIoEUlRJ1BDWDEFVOOuWxj5bzmFJdLmMe/yftACjRlKIpSRexS7hi9+CHAGfA8env9qCwTkNPAlgqBlkPvonQAjO7BkhgSloiNA1YOalcuAgeZ6LJ4GQCivYmMAlMgx1HPThe+xCrgoF1wiYgfALTCLjN4CLYh37ATcXWGXBC1uPQI+oY1zXqbrqptoM9YAAMw8IQ2WkCElAAARNAMRBWIqkHKg5sgGjyOJQ4n4gm3MHkD+JzrTnBgvQB6V3LplaSHvNHIGSOgrwiPQ6g6QHpCNCD1QYkU0r4COoeiPOFaHarJhatLajOuRPZ+UZhFwpcV9w1xf+uI0n2rsNatzfASbi5xVrqKijsIRbi/GHfovyglqGIBmjA2U2WWkUwIX2fAGiIVQC7lY3g8ZC0TCdIBaBgeqBV9NED0pPYVxPRzNagRS78vmiG4pz7amZNGfNIgertl9X+uw03sHhXFIxiGFtJA7cpFnQUQmwKYSfAlLQic1fYgjTWzwAcg4J4beZwCKA3O8RGGZtSIYOGx0Gcp+T2yU0TKKCJBy+izQyOFwGUwuc8CCX5MoHkXKe9FA9GwDuQmiqNCPoTI3E+Fee7FY8mGvS8PQC5tVBXGomuAkp7CRkBIdxQpH3sQfKqCrWaconAMhzO1/EEGTCNeYXB1YRRxMCgBOZISqb8GsyonccqrbMRtRLNvmih8aSMOfbAch7hxIG4nNMVoOC+ZQ00maugVuTvRx8bEMPzGu7+9w1KermI9xWXS3IUMKV1X6vc9ZvI4LqOr9bKEDTEOa4KEk7C7C6P2E0wRZl2JnWKzeAWqakADNTPrMFGpBj05YqakuPwD6jOqyajy/LMzGGyMw2Ci9kF54oA5+44M65q5GtwXC5bzeD05cT5Aq9RrMEegADO5PwqUOur51b2HeeDqd2l575i0HeMGrno/JoObvqv4fMfPPrpykiYsQVEzTM7kAB++O0XfzXbwEe/fvT7v2wDn//oRTA1avirt6N6/Kx9U9Vvg6lvPGJTW8BHv3nBpt7CvHnWSqixVYIXoyZFtQ2kqHjFPqOpumObMCmqLaCPCoaBFDXPCDIpqi0gRbUNSBjEIWPa/fhSYHBRjy+6N1037sL8fjDous6f8CTFcyXs5pdhO0iSvan84nnXPU+mbgIpXPDog/4AkJpDIs0Gow4jR133IeBZB1EP/AnPnf9vQOcR6gGTd88xagbdewHLkQf4LPtnU+OKTUGObgbpAUhdgi8H3i+fLy9zC1ZufY7j/hc0tqWKgCs/sw5QGTx2qwAyBuJ8FIDZrbwSNRbViv9kuBwvj8YVAz8/Ow4g3vK1FJ+NLQfWzqp6fvY4r3qQiTqCeiIYnCdTEVQBjEQAk+QjuVIRyAhAYAOAsEp8yhlM3R7PD60PeVQM4G54DdTYLoP3AQmMwNqbiCa9ipsMmkJIr2P9792xunRpLw9nQE96YCKI73IR7I1tE4EL4OQ0AoRdIzTy1r07ld+YCuD0NVh0D0ACwbmk4AMs8bs1OIkwgj0ENQEk53nVSuHkJtMIkmQY17Xt238DWYvsDcV7jqQAAAAASUVORK5CYII=';
        this._renderer = console_1.ConsoleRendererFactory.createRenderer(rendererName, divSelector, fontUrl, rendererName, defaultForeground, defaultBackground);
        /**
         * loaded event.
         *
         * @event Application#loaded
         * @type Application
         */
        this._inputManager = new input_1.InputManager();
        // TODO: look at limiting events to once per animationframe.
        this._renderer.on('loaded', () => {
            this._renderer.element.addEventListener('mousemove', (event) => {
                this._inputManager.onMouseMove(event, this.console);
                this.emit('mousemove', this, this._inputManager.mouseState);
                if (!this._isDragging && this._inputManager.mouseState.buttons[0].pressed) {
                    this._isDragging = true;
                    this.emit('dragstart', this, this._inputManager.mouseState);
                }
            });
            this._renderer.element.addEventListener('mouseup', (event) => {
                this._inputManager.onMouseUp(event);
                this.emit('mouseup', this, this._inputManager.mouseState, event.button);
                if (this._isDragging && this._inputManager.mouseState.buttons[0].released) {
                    this._isDragging = false;
                    this.emit('dragend', this, this._inputManager.mouseState);
                }
            });
            this._renderer.element.addEventListener('mousedown', (event) => {
                this._inputManager.onMouseDown(event);
                this.emit('mousedown', this, this._inputManager.mouseState, event.button);
            });
            this._renderer.element.addEventListener('wheel', (event) => {
                this._inputManager.onMouseWheel(event);
                this.emit('mousewheel', this, this._inputManager.mouseState, event.button);
            });
            this._renderer.element.addEventListener('keydown', (event) => {
                this._inputManager.onKeyDown(event);
                this.emit('keydown', this, this._inputManager, event.code);
            });
            this._renderer.element.addEventListener('keyup', (event) => {
                this._inputManager.onKeyUp(event);
                this.emit('keyup', this, this._inputManager, event.code);
            });
            this.emit('loaded', this);
        });
        this.console = new console_1.Console(width, height, color_1.Color.toRGBA(defaultForeground), color_1.Color.toRGBA(defaultBackground), this._renderer);
    }
    get inputManager() { return this._inputManager; }
    get isDragging() { return this._isDragging; }
    run() {
        this.mainLoop();
    }
    mainLoop() {
        requestAnimationFrame(() => this.mainLoop());
        this._inputManager.reset();
        this.emit('prerender', this);
        this.console.render();
    }
}
exports.Application = Application;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const random_1 = __webpack_require__(7);
/**
 * A FastWeightedArray performes the same purpose as a WeightedArray
 * but this array is optimized to select random items in a large array
 * much more rapidly. In improving the speed of the array, it is necessary
 * to loose the functionality to remove items from the FastWeightedArray, so
 * the original WeightedArray is also still available.
 *
 * <p>The FastWeightedArray is a collection of values that are weighted. When
 * a random value is required from the collection, the value returned
 * is randomly selected based on the weightings.</p>
 *
 * <p>Due to the nature of a FastWeightedArray, there are no facilities
 * to push, unshift or splice items into the array. All items are
 * added to the FastWeightedArray using the add method.</p>
 */
class FastWeightedArray {
    constructor() {
        this._values = [];
        this._totalWeights = 0;
    }
    /**
     * The number of items in the FastWeightedArray
     */
    get length() { return this._values.length; }
    /**
     * The sum of the weights of all the values.
     */
    get totalWeights() { return this._totalWeights; }
    /**
     * Adds a value to the FastWeightedArray.
     *
     * @param value the value to add
     * @param weight the weighting to place on the item
     * @return this.
     */
    add(value, weight) {
        this._totalWeights += weight;
        this._values.push([this._totalWeights, value]);
    }
    /**
     * Empties the FastWeightedArray. After calling this method the FastWeightedArray
     * contains no items.
     */
    clear() {
        this._values = [];
        this._totalWeights = 0;
    }
    /**
     * Returns a random value from the WeightedArray.
     */
    getRandomValue() {
        var position = random_1.Random.random.random() * this._totalWeights;
        var low = 0;
        var mid = 0;
        var high = this._values.length;
        while (low < high) {
            mid = Math.floor((low + high) * 0.5);
            if (this._values[mid][0] < position)
                low = mid + 1;
            else
                high = mid;
        }
        return this._values[low][1];
    }
}
exports.FastWeightedArray = FastWeightedArray;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const color_1 = __webpack_require__(5);
/**
 * A color gradient implementation.
 */
class Gradient {
    constructor(colorStops) {
        this._colorStops = [];
        if (colorStops !== undefined) {
            for (var stop of colorStops) {
                this._colorStops.push({ position: stop.position, color: stop.color });
            }
        }
    }
    addColorStop(color, position) {
        if (position < 0 || position > 1)
            throw new Error('position must be in the range [0,1]');
        var i = 0;
        for (i = 0; i < this._colorStops.length; i++)
            if (this._colorStops[i].position >= position)
                break;
        if (this._colorStops[i].position === position) { // exact match replace.
            this._colorStops[i].color = color;
        }
        else {
            this._colorStops.splice(i, 0, { position: position, color: color });
        }
        return this;
    }
    removeColorStop(position) {
        var i = this._colorStops.findIndex((value) => value.position === position);
        if (i !== -1)
            this._colorStops.splice(i, 1);
    }
    getColor(position) {
        var i = this._colorStops.findIndex((value) => value.position > position);
        if (i <= 0)
            return this._colorStops[0].color;
        var length = this._colorStops[i].position - this._colorStops[i - 1].position;
        position = (position - this._colorStops[i - 1].position) / length;
        return color_1.RGBA.lerp(this._colorStops[i - 1].color, this._colorStops[i].color, position);
    }
}
exports.Gradient = Gradient;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const vector2_1 = __webpack_require__(13);
class Matrix3 {
    constructor(values) {
        this.values = new Float32Array(9);
        if (values !== undefined) {
            this.init(values);
        }
    }
    at(index) {
        return this.values[index];
    }
    init(values) {
        for (var i = 0; i < 9; i++) {
            this.values[i] = values[i];
        }
        return this;
    }
    reset() {
        for (var i = 0; i < 9; i++) {
            this.values[i] = 0;
        }
    }
    copy(dest) {
        if (!dest)
            dest = new Matrix3();
        for (var i = 0; i < 9; i++) {
            dest.values[i] = this.values[i];
        }
        return dest;
    }
    all() {
        var data = [];
        for (var i = 0; i < 9; i++) {
            data[i] = this.values[i];
        }
        return data;
    }
    row(index) {
        return [
            this.values[index * 3 + 0],
            this.values[index * 3 + 1],
            this.values[index * 3 + 2]
        ];
    }
    col(index) {
        return [
            this.values[index],
            this.values[index + 3],
            this.values[index + 6]
        ];
    }
    equals(matrix, threshold = Number.EPSILON) {
        for (var i = 0; i < 9; i++) {
            if (Math.abs(this.values[i] - matrix.at(i)) > threshold)
                return false;
        }
        return true;
    }
    determinant() {
        var a00 = this.values[0], a01 = this.values[1], a02 = this.values[2], a10 = this.values[3], a11 = this.values[4], a12 = this.values[5], a20 = this.values[6], a21 = this.values[7], a22 = this.values[8];
        var det01 = a22 * a11 - a12 * a21, det11 = -a22 * a10 + a12 * a20, det21 = a21 * a10 - a11 * a20;
        return a00 * det01 + a01 * det11 + a02 * det21;
    }
    setIdentity() {
        this.values[0] = 1;
        this.values[1] = 0;
        this.values[2] = 0;
        this.values[3] = 0;
        this.values[4] = 1;
        this.values[5] = 0;
        this.values[6] = 0;
        this.values[7] = 0;
        this.values[8] = 1;
        return this;
    }
    transpose() {
        var temp01 = this.values[1], temp02 = this.values[2], temp12 = this.values[5];
        this.values[1] = this.values[3];
        this.values[2] = this.values[6];
        this.values[3] = temp01;
        this.values[5] = this.values[7];
        this.values[6] = temp02;
        this.values[7] = temp12;
        return this;
    }
    inverse() {
        var a00 = this.values[0], a01 = this.values[1], a02 = this.values[2], a10 = this.values[3], a11 = this.values[4], a12 = this.values[5], a20 = this.values[6], a21 = this.values[7], a22 = this.values[8];
        var det01 = a22 * a11 - a12 * a21, det11 = -a22 * a10 + a12 * a20, det21 = a21 * a10 - a11 * a20;
        var det = a00 * det01 + a01 * det11 + a02 * det21;
        if (!det)
            return undefined;
        det = 1.0 / det;
        this.values[0] = det01 * det;
        this.values[1] = (-a22 * a01 + a02 * a21) * det;
        this.values[2] = (a12 * a01 - a02 * a11) * det;
        this.values[3] = det11 * det;
        this.values[4] = (a22 * a00 - a02 * a20) * det;
        this.values[5] = (-a12 * a00 + a02 * a10) * det;
        this.values[6] = det21 * det;
        this.values[7] = (-a21 * a00 + a01 * a20) * det;
        this.values[8] = (a11 * a00 - a01 * a10) * det;
        return this;
    }
    multiply(matrix) {
        var a00 = this.values[0], a01 = this.values[1], a02 = this.values[2], a10 = this.values[3], a11 = this.values[4], a12 = this.values[5], a20 = this.values[6], a21 = this.values[7], a22 = this.values[8];
        var b00 = matrix.at(0), b01 = matrix.at(1), b02 = matrix.at(2), b10 = matrix.at(3), b11 = matrix.at(4), b12 = matrix.at(5), b20 = matrix.at(6), b21 = matrix.at(7), b22 = matrix.at(8);
        this.values[0] = b00 * a00 + b01 * a10 + b02 * a20;
        this.values[1] = b00 * a01 + b01 * a11 + b02 * a21;
        this.values[2] = b00 * a02 + b01 * a12 + b02 * a22;
        this.values[3] = b10 * a00 + b11 * a10 + b12 * a20;
        this.values[4] = b10 * a01 + b11 * a11 + b12 * a21;
        this.values[5] = b10 * a02 + b11 * a12 + b12 * a22;
        this.values[6] = b20 * a00 + b21 * a10 + b22 * a20;
        this.values[7] = b20 * a01 + b21 * a11 + b22 * a21;
        this.values[8] = b20 * a02 + b21 * a12 + b22 * a22;
        return this;
    }
    multiplyVector2(vector, result) {
        var x = vector.x, y = vector.y;
        if (result === undefined)
            result = new vector2_1.Vector2();
        result.x = x * this.values[0] + y * this.values[3] + this.values[6];
        result.y = x * this.values[1] + y * this.values[4] + this.values[7];
        return result;
    }
    static product(m1, m2, result) {
        var a00 = m1.at(0), a01 = m1.at(1), a02 = m1.at(2), a10 = m1.at(3), a11 = m1.at(4), a12 = m1.at(5), a20 = m1.at(6), a21 = m1.at(7), a22 = m1.at(8);
        var b00 = m2.at(0), b01 = m2.at(1), b02 = m2.at(2), b10 = m2.at(3), b11 = m2.at(4), b12 = m2.at(5), b20 = m2.at(6), b21 = m2.at(7), b22 = m2.at(8);
        if (result === undefined)
            result = new Matrix3();
        result.init([
            b00 * a00 + b01 * a10 + b02 * a20,
            b00 * a01 + b01 * a11 + b02 * a21,
            b00 * a02 + b01 * a12 + b02 * a22,
            b10 * a00 + b11 * a10 + b12 * a20,
            b10 * a01 + b11 * a11 + b12 * a21,
            b10 * a02 + b11 * a12 + b12 * a22,
            b20 * a00 + b21 * a10 + b22 * a20,
            b20 * a01 + b21 * a11 + b22 * a21,
            b20 * a02 + b21 * a12 + b22 * a22
        ]);
        return result;
    }
}
Matrix3.identity = new Matrix3().setIdentity();
exports.Matrix3 = Matrix3;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const position_1 = __webpack_require__(6);
/**
 * Stores a position and size
 */
class Rect extends position_1.Position {
    /**
     * constructor
     * @param x the column
     * @param y the row
     * @param w the width
     * @param h the height
     *
     */
    constructor(x = 0, y = 0, w = 0, h = 0) {
        super(x, y);
        this.w = w;
        this.h = h;
    }
    toString() {
        return super.toString() + "(" + this.w + "," + this.h + ")";
    }
    /**
     * Update the size of this rectangle.
     * @param w the width
     * @param h the height
     */
    resize(w, h) {
        this.w = w;
        this.h = h;
    }
    equals(r) {
        return this.x === r.x && this.y === r.y && this.w === r.w && this.h === r.h;
    }
    contains(px, py) {
        if (typeof px === "number" && py !== undefined) {
            return px >= this.x && py >= this.y && px < this.x + this.w && py < this.y + this.h;
        }
        else if (px instanceof position_1.Position) {
            return px.x >= this.x && px.y >= this.y && px.x < this.x + this.w && px.y < this.y + this.h;
        }
        return false;
    }
    /**
     * Check if a rectangle is inside this rectangle.
     * @param rect the rectangle
     * @returns true if rect is inside *this*.
     */
    containsRect(rect) {
        return this.x <= rect.x && this.y <= rect.y
            && this.x + this.w >= rect.x + rect.w
            && this.y + this.h >= rect.y + rect.h;
    }
    /**
     * Check if a rectangle is intersecting this rectangle.
     * @param rect the rectangle
     * @returns true if rect and *this* are intersecting.
     */
    intersects(rect) {
        return !(this.x + this.w <= rect.x
            || rect.x + rect.w <= this.x
            || this.y + this.h <= rect.y
            || rect.y + rect.h <= this.y);
    }
    /**
     * Grows this rectangle so that it contains a point
     * @param p the point's position
     */
    expand(p) {
        if (p.x < this.x) {
            this.w += this.x - p.x;
            this.x = p.x;
        }
        else if (p.x >= this.x + this.w) {
            this.w += p.x - this.x - this.w + 1;
        }
        if (p.y < this.y) {
            this.h += this.y - p.y;
            this.y = p.y;
        }
        else if (p.y >= this.y + this.h) {
            this.h += p.y - this.y - this.h + 1;
        }
    }
    expandRect(r) {
        this.expand(r);
        this.expand(new position_1.Position(r.x + r.w - 1, r.y + r.h - 1));
    }
    set(rect) {
        this.x = rect.x;
        this.y = rect.y;
        this.w = rect.w;
        this.h = rect.h;
    }
    clamp(xmin, ymin, xmax, ymax) {
        if (this.x < xmin) {
            this.w -= xmin - this.x;
            this.x = xmin;
        }
        if (this.x + this.w > xmax) {
            this.w = xmax - this.x;
        }
        if (this.y < ymin) {
            this.h -= ymin - this.y;
            this.y = ymin;
        }
        if (this.y + this.h > ymax) {
            this.h = ymax - this.y;
        }
    }
}
exports.Rect = Rect;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const random_1 = __webpack_require__(7);
class WeightedArray {
    constructor() {
        this._values = [];
        this._totalWeights = 0;
    }
    /**
     * Gets the value, weight pair at the given index.
     * @param i The index of the value, weight pair.
     */
    getAt(i) {
        if (i < this._values.length)
            return this._values[i];
        return undefined;
    }
    get length() { return this._values.length; }
    get totalWeights() { return this._totalWeights; }
    /**
     * Add a value to the Weighted Array
     * @param value The value to add.
     * @param weight The weighting of the value.
     */
    add(value, weight = 1) {
        this._values.push([value, weight]);
        this._totalWeights += weight;
        return this;
    }
    /**
     * Remove a value from the weighted array.
     * @param value The value to remove.
     */
    remove(value) {
        var i = this._values.findIndex((v) => v[0] === value);
        if (i !== -1) {
            this._totalWeights -= this._values[i][1];
            this._values.splice(i, 1);
        }
        return this;
    }
    /**
     * Test if the weighted array contains the given value.
     * @param value The value to check for.
     */
    contains(value) {
        return this._values.findIndex((v) => v[0] === value) !== -1;
    }
    /**
     * Empty the weighted array.
     */
    clear() {
        this._values = [];
        this._totalWeights = 0;
    }
    /**
     * Returns a random value from the WeightedArray.
     */
    getRandomValue() {
        var position = random_1.Random.random.random() * this._totalWeights;
        var current = 0;
        for (var i = 0; i < this._values.length; i++) {
            current += this._values[i][1];
            if (current >= position)
                return this._values[i][0];
        }
        return this._values[this._values.length - 1][0];
    }
}
exports.WeightedArray = WeightedArray;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const actionbase_1 = __webpack_require__(0);
/**
 * This Action modifies the velocity of each particle by a constance acceleration.
 * @extends ActionBase
 */
class Accelerate extends actionbase_1.ActionBase {
    constructor(x = 0, y = 0) {
        super();
        this.x = x;
        this.y = y;
    }
    update(_emitter, particle, time) {
        particle.velX += this.x * time;
        particle.velY += this.y * time;
    }
}
exports.Accelerate = Accelerate;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const actionbase_1 = __webpack_require__(0);
const easing_1 = __webpack_require__(16);
/**
 * This Action ages the particle over time, altering its energy to reflect its age.
 * @extends ActionBase
 */
class Age extends actionbase_1.ActionBase {
    constructor(easing) {
        super();
        if (easing !== undefined)
            this.easing = easing;
        else
            this.easing = easing_1.Linear.easeNone;
    }
    /**
     * Sets the energy of the particle based on its age and the easing function.
     * @param emitter The Emitter that the activity is attached to.
     * @param particle The current particle to modify.
     * @param time The duration of the frame, in seconds.
     */
    update(_emitter, particle, time) {
        particle.age += time;
        if (particle.age >= particle.lifetime) {
            particle.energy = 0;
            particle.isDead = true;
        }
        else
            particle.energy = this.easing(particle.age, 1, -1, particle.lifetime);
    }
}
exports.Age = Age;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const gravitywell_1 = __webpack_require__(14);
/**
 * The AntiGravtity action applies a force to the particle to push it away from a single point.
 * The force applied is inversly proportianal to the squeare of the distance from the particle to the point, in accordance with Newton's law of gravity.
 */
class AntiGravity extends gravitywell_1.GravityWell {
    get power() { return -super.power; }
    set power(value) {
        super.power = -value;
    }
    /**
     *
     * @param power The strength of the anti-gravity force.
     * @param x The x coordinate of the point away from which the force draws the particle.
     * @param y The y coordinate of the point away from which the force draws the particle.
     * @param epsilon The minimum distance for which anti-gravity is calculated.
     * Particles closer than this distance experience a anti-gravity force as if
     * they were this distance away. This stops the anti-gravity effect blowing
     * up as distances get small. For realistic gravity effects you will want
     * a small epsilon ( ~1 ), but for stable visual effects a larger
     * epsilon (~100) is often better.
     */
    constructor(power = 0, x = 0, y = 0, epsilon = 1) {
        super(-power, x, y, epsilon);
    }
}
exports.AntiGravity = AntiGravity;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const actionbase_1 = __webpack_require__(0);
/**
 * This Action applies a force on the particle to draw it towards other nearby particles.
 * The size of the acceleration is constant, only the direction varies.
 * @extends ActionBase
 */
class AproachingNeighbours extends actionbase_1.ActionBase {
    /**
     *
     * @param maxDistance The maximum distance over which this action operates.
     * @param acceleration The size of the acceleration applied to approach the other particles.
     */
    constructor(maxDistance = 0, acceleration = 0) {
        super();
        this.acceleration = acceleration;
        this.maxDistance = maxDistance;
    }
    get maxDistance() { return this._max; }
    set maxDistance(value) {
        this._max = value;
        this._maxSq = value * value;
    }
    addedToEmitter(emitter) {
        emitter.spaceSort = true;
    }
    update(emitter, particle, time) {
        var moveX = 0;
        var moveY = 0;
        var dx;
        var dy;
        var distanceSquared;
        var distanceInv;
        var i;
        var other;
        for (i = particle.sortID - 1; i >= 0; i--) {
            other = emitter.particlesArray[i];
            if ((dx = other.x - particle.x) < -this._max)
                break;
            dy = other.y - particle.y;
            if (dy > this._max || dy < -this._max)
                continue;
            distanceSquared = dy * dy + dx * dx;
            if (distanceSquared <= this._maxSq && distanceSquared > 0) {
                distanceInv = 1 / Math.sqrt(distanceSquared);
                moveX += dx * distanceInv;
                moveY += dy * distanceInv;
            }
        }
        for (i = particle.sortID + 1; i < emitter.particlesArray.length; i--) {
            other = emitter.particlesArray[i];
            if ((dx = other.x - particle.x) < -this._max)
                break;
            dy = other.y - particle.y;
            if (dy > this._max || dy < -this._max)
                continue;
            distanceSquared = dy * dy + dx * dx;
            if (distanceSquared <= this._maxSq && distanceSquared > 0) {
                distanceInv = 1 / Math.sqrt(distanceSquared);
                moveX += dx * distanceInv;
                moveY += dy * distanceInv;
            }
        }
        if (moveX != 0 || moveY != 0) {
            var factor = time * this.acceleration / Math.sqrt(moveX * moveX + moveY * moveY);
            particle.velX += factor * moveX;
            particle.velY += factor * moveY;
        }
    }
}
exports.AproachingNeighbours = AproachingNeighbours;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const actionbase_1 = __webpack_require__(0);
/**
 * This Action confines each particle to a rectangular region. The
 * particle bounces back off the sides of the rectangle when it reaches the edge.
 * The bounce treats the particle as a circular body.
 * @extends ActionBase
 */
class BoundingBox extends actionbase_1.ActionBase {
    /**
     *
     * @param left The left coordinate of the box.
     * @param top The top coordinate of the box.
     * @param right The right coordinate of the box.
     * @param bottom The bottom coordinate of the box.
     * @param bounce The coefficient of restitution when the particles bounce off the
     * sides of the box. A value of 1 gives a pure elastic collision, with no energy loss.
     * A value between 0 and 1 causes the particle to loose enegy in the collision. A value
     * greater than 1 causes the particle to gain energy in the collision.
     */
    constructor(left = 0, top = 0, right = 0, bottom = 0, bounce = 1) {
        super();
        this._priority = -20;
        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.bounce = bounce;
    }
    update(emitter, particle, _time) {
        var radius = particle.collisionRadius;
        var position;
        if (particle.velX > 0 && (position = particle.x + radius) >= this.right) {
            particle.velX = -particle.velX * this.bounce;
            particle.x += 2 * (this.right - position);
            emitter.emit('boundingBoxCollision', particle);
        }
        else if (particle.velX < 0 && (position = particle.x - radius) <= this.left) {
            particle.velX = -particle.velX * this.bounce;
            particle.x += 2 * (this.left - position);
            emitter.emit('boundingBoxCollision', particle);
        }
        if (particle.velY > 0 && (position = particle.y + radius) >= this.bottom) {
            particle.velY = -particle.velY * this.bounce;
            particle.y += 2 * (this.bottom - position);
            emitter.emit('boundingBoxCollision', particle);
        }
        else if (particle.velY < 0 && (position = particle.y - radius) <= this.top) {
            particle.velY = -particle.velY * this.bounce;
            particle.y += 2 * (this.top - position);
            emitter.emit('boundingBoxCollision', particle);
        }
    }
}
exports.BoundingBox = BoundingBox;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const actionbase_1 = __webpack_require__(0);
/**
 * This Action modifies the collision radius of the particle as it ages.
 * It uses the particle's energy level to decide what radius the particle should have.
 * @extends ActionBase
 */
class ChangeCollisionRadius extends actionbase_1.ActionBase {
    get startRadius() { return this.endRadius + this.diffRadius; }
    set startRadius(value) { this.diffRadius = value - this.endRadius; }
    constructor(startRadius = 1, endRadius = 1) {
        super();
        this.diffRadius = startRadius - endRadius;
        this.endRadius = endRadius;
    }
    update(_emitter, particle, _time) {
        particle.collisionRadius = this.endRadius + this.diffRadius * particle.energy;
    }
}
exports.ChangeCollisionRadius = ChangeCollisionRadius;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const actionbase_1 = __webpack_require__(0);
const core_1 = __webpack_require__(1);
/**
 * This Action modifies the color of the particle as it ages.
 * It uses the particle's energy level to decide what color the particle should have.
 * @extends ActionBase
 */
class ChangeColor extends actionbase_1.ActionBase {
    constructor(startColor = new core_1.RGBA(1, 1, 1, 1), endColor = new core_1.RGBA(1, 1, 1, 1)) {
        super();
        this.startColor = startColor;
        this.endColor = endColor;
    }
    update(_emitter, particle, _time) {
        particle.color = core_1.RGBA.lerp(this.endColor, this.startColor, particle.energy);
    }
}
exports.ChangeColor = ChangeColor;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const actionbase_1 = __webpack_require__(0);
/**
 * This Action modifies the mass of the particle as it ages.
 * It uses the particle's energy level to decide what mass the particle should have.
 * @extends ActionBase
 */
class ChangeMass extends actionbase_1.ActionBase {
    get startMass() { return this.endMass + this.diffMass; }
    set startMass(value) { this.diffMass = value - this.endMass; }
    constructor(startMass = 1, endMass = 1) {
        super();
        this.diffMass = startMass - endMass;
        this.endMass = endMass;
    }
    update(_emitter, particle, _time) {
        particle.mass = this.endMass + this.diffMass * particle.energy;
    }
}
exports.ChangeMass = ChangeMass;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const actionbase_1 = __webpack_require__(0);
/**
 * This Action detects collisions between particles and modifies their velocities in response to the collision.
 * All particles are approximated to a circular shape for the collisions and they are assumed to be of even density.
 *
 * <p>If the particles reach a stationary, or near stationary, state under an
 * accelerating force (e.g. gravity) then they will fall through each other.
 * This is due to the nature of the alogorithm used, which is designed for
 * speed of execution and sufficient accuracy when the particles are in motion,
 * not for absolute precision.</p>
 *
 * @extends ActionBase
 */
class Collide extends actionbase_1.ActionBase {
    constructor(bounce = 1) {
        super();
        // used to alternate the direction of parsing the collisions
        this._sign = 1;
        this._maxDistance = 0;
        this._priority = -20;
        this.bounce = bounce;
    }
    update(emitter, particle, _time) {
        var particles = emitter.particlesArray;
        var other;
        var i;
        var factor;
        var distanceSq;
        var collisionDist;
        var dx, dy;
        var n1, n2;
        var relN;
        var m1, m2;
        var f1, f2;
        for (i = particle.sortID + this._sign; i < particles.length && i >= 0; i += this._sign) {
            other = particles[i];
            if ((dx = other.x - particle.x) * this._sign > this._maxDistance)
                break;
            collisionDist = other.collisionRadius + particle.collisionRadius;
            if (dx * this._sign > collisionDist)
                continue;
            dy = other.y - particle.y;
            if (dy > collisionDist || dy < -collisionDist)
                continue;
            distanceSq = dy * dy + dx * dx;
            if (distanceSq <= collisionDist * collisionDist && distanceSq > 0) {
                factor = 1 / Math.sqrt(distanceSq);
                dx *= factor;
                dy *= factor;
                n1 = dx * particle.velX + dy * particle.velY;
                n2 = dx * other.velX + dy * other.velY;
                relN = n1 - n2;
                if (relN > 0) // colliding, not separating
                 {
                    m1 = particle.mass;
                    m2 = other.mass;
                    factor = ((1 + this.bounce) * relN) / (m1 + m2);
                    f1 = factor * m2;
                    f2 = -factor * m1;
                    particle.velX -= f1 * dx;
                    particle.velY -= f1 * dy;
                    other.velX -= f2 * dx;
                    other.velY -= f2 * dy;
                    emitter.emit('particleCollision', particle);
                }
            }
        }
    }
    addedToEmitter(emitter) {
        emitter.addFrameUpdateCallback(this.frameUpdate);
    }
    removedFromEmitter(emitter) {
        emitter.removeFrameUpdateCallback(this.frameUpdate);
    }
    frameUpdate(emitter, _time) {
        var max1 = 0;
        var max2 = 0;
        for (var p of emitter.particlesArray) {
            if (p.collisionRadius > max1) {
                max2 = max1;
                max1 = p.collisionRadius;
            }
            else if (p.collisionRadius > max2)
                max2 = p.collisionRadius;
        }
        this._maxDistance = max1 + max2;
        this._sign = -this._sign;
    }
}
exports.Collide = Collide;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const actionbase_1 = __webpack_require__(0);
/**
 * This Action detects collisions between particles and a zone, modifying the particles' velocity in response to the collision.
 * All particles are approximated to a circular shape for the collisions.
 *
 * @extends ActionBase
 */
class CollisionZone extends actionbase_1.ActionBase {
    constructor(zone, bounce = 1) {
        super();
        this._priority = -30;
        this.zone = zone;
        this.bounce = bounce;
    }
    update(emitter, particle, _time) {
        var collide = this.zone.collideParticle(particle, this.bounce);
        if (collide)
            emitter.emit('zoneCollision', this, particle);
    }
}
exports.CollisionZone = CollisionZone;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const actionbase_1 = __webpack_require__(0);
/**
 * This Action causes another action to fire only if a contidion if matched.
 * @extends ActionBase
 */
class ConditionalAction extends actionbase_1.ActionBase {
    constructor(condition, action) {
        super();
        this.condition = condition;
        this.action = action;
    }
    update(emitter, particle, time) {
        if (this.condition(emitter, particle, time))
            this.action.update(emitter, particle, time);
    }
    addedToEmitter(emitter) {
        this.action.addedToEmitter(emitter);
    }
    removedFromEmitter(emitter) {
        this.action.removedFromEmitter(emitter);
    }
}
exports.ConditionalAction = ConditionalAction;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const actionbase_1 = __webpack_require__(0);
/**
 * This Action marks the particle as dead if it is travelling faster than the specified speed.
 * The behavior can be switched to instead mark as dead particles travelling slower than the specified speed.
 * @extends ActionBase
 */
class DeathSpeed extends actionbase_1.ActionBase {
    /**
     * The speed limit beyond which the particle dies.
     */
    get limit() { return this._limit; }
    set limit(value) {
        this._limit = value;
        this._limitSqr = value * value;
    }
    constructor(speed = Number.MAX_VALUE, isMinimum = false) {
        super();
        this.isMinimum = isMinimum;
        this.limit = speed;
    }
    update(_emitter, particle, _time) {
        var speedSqr = particle.velX * particle.velX + particle.velY * particle.velY;
        if ((this.isMinimum && speedSqr < this._limitSqr) || (!this.isMinimum && speedSqr > this._limitSqr))
            particle.isDead = true;
    }
}
exports.DeathSpeed = DeathSpeed;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const actionbase_1 = __webpack_require__(0);
/**
 * This Action marks the particle as dead if it is inside a specified zone.
 *
 * @extends ActionBase
 */
class DeathZone extends actionbase_1.ActionBase {
    constructor(zone, isSafe = false) {
        super();
        /**
         * If true, the zone is treated as the safe area and particles ouside the
         * zone are killed. If false, particles inside the zone are killed.
         */
        this.isSafe = false;
        this._priority = -20;
        this.zone = zone;
        this.isSafe = isSafe;
    }
    update(_emitter, particle, _time) {
        var inside = this.zone.contains(particle.x, particle.y);
        if ((this.isSafe && !inside) || (!this.isSafe && inside))
            particle.isDead = true;
    }
}
exports.DeathZone = DeathZone;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const actionbase_1 = __webpack_require__(0);
const powerFactor = 100000;
/**
 * This Action applies a force on the particles to push them away from a single point.
 * The force occurs instantanrously at the central point of the expolosion and then ripples out in a shock wave.
 *
 * @extends ActionBase
 */
class Explosion extends actionbase_1.ActionBase {
    constructor(power = 0, x = 0, y = 0, expansionRate = 300, depth = 10, epsilon = 1) {
        super();
        this._radius = 0;
        this._oldRadius = 0;
        this._radiusChange = 0;
        this.power = power;
        this.x = x;
        this.y = y;
        this.expansionRate = expansionRate;
        this.depth = depth;
        this.epsilon = epsilon;
    }
    /**
     * The strength of the explosion. Larger numbers produce a stronger force.
     */
    get power() { return this._power / powerFactor; }
    set power(value) {
        this._power = value * powerFactor;
    }
    /**
     * The depth (front-edge to back-edge) of the shock wave.
     */
    get depth() { return this._depth * 2; }
    set depth(value) {
        this._depth = value * 0.5;
        this._invDepth = 1 / this._depth;
    }
    /**
     * The minimum distance for which the explosion force is calculated.
     * Particles closer than this distance to the center of the explosion
     * experience the explosion as it they were this distance away. This
     * stops the explosion effect blowing up as distances get small.
     */
    get epsilon() { return Math.sqrt(this._epsilonSqr); }
    set epsilon(value) {
        this._epsilonSqr = value * value;
    }
    reset() {
        this._radius = 0;
        this._oldRadius = 0;
        this._radiusChange = 0;
    }
    addedToEmitter(emitter) {
        emitter.addFrameUpdateCallback(this.frameUpdate);
    }
    removedFromEmitter(emitter) {
        emitter.removeFrameUpdateCallback(this.frameUpdate);
    }
    frameUpdate(_emitter, time) {
        this._oldRadius = this._radius;
        this._radiusChange = this.expansionRate * time;
        this._radius += this._radiusChange;
    }
    update(_emitter, particle, time) {
        var x = particle.x - this.x;
        var y = particle.y - this.y;
        var dSq = x * x + y * y;
        if (dSq == 0) {
            dSq = 0.02;
            x = 0.1;
            y = 0.1;
        }
        var d = Math.sqrt(dSq);
        if (d < this._oldRadius - this._depth) {
            return;
        }
        if (d > this._radius + this._depth) {
            return;
        }
        var offset = d < this._radius ? this._depth - this._radius + d : this._depth - d + this._radius;
        var oldOffset = d < this._oldRadius ? this._depth - this._oldRadius + d : this._depth - d + this._oldRadius;
        offset *= this._invDepth;
        oldOffset *= this._invDepth;
        if (offset < 0) {
            time = time * (this._radiusChange + offset) / this._radiusChange;
            offset = 0;
        }
        if (oldOffset < 0) {
            time = time * (this._radiusChange + oldOffset) / this._radiusChange;
            oldOffset = 0;
        }
        var factor;
        if (d < this._oldRadius || d > this._radius) {
            factor = time * this._power * (offset + oldOffset) / (this._radius * 2 * d * particle.mass);
        }
        else {
            var ratio = (1 - oldOffset) / this._radiusChange;
            var f1 = ratio * time * this._power * (oldOffset + 1);
            var f2 = (1 - ratio) * time * this._power * (offset + 1);
            factor = (f1 + f2) / (this._radius * 2 * d * particle.mass);
        }
        particle.velX += x * factor;
        particle.velY += y * factor;
    }
}
exports.Explosion = Explosion;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const actionbase_1 = __webpack_require__(0);
/**
 * This Action modifies the alpha of the particle as it ages.
 * It uses the particle's energy level to decide what alpha the particle should have.
 * @extends ActionBase
 */
class Fade extends actionbase_1.ActionBase {
    get startAlpha() { return this.endAlpha + this.diffAlpha; }
    set startAlpha(value) { this.diffAlpha = value - this.endAlpha; }
    constructor(startAlpha = 1, endAlpha = 1) {
        super();
        this.diffAlpha = startAlpha - endAlpha;
        this.endAlpha = endAlpha;
    }
    update(_emitter, particle, _time) {
        var alpha = Math.round(this.endAlpha + this.diffAlpha * particle.energy * 255);
        particle.color.a = alpha; // extra bit shifting and multiplication is needed as bit operations break down for 2^32 -1
    }
}
exports.Fade = Fade;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const actionbase_1 = __webpack_require__(0);
/**
 * This Action applies friction to the particle to slow it down when it's moving.
 * The frictional force is constant, irrespective of how fast the particle is moving.
 *
 * @extends ActionBase
 */
class Friction extends actionbase_1.ActionBase {
    constructor(friction = 0) {
        super();
        this.friction = friction;
    }
    update(_emitter, particle, time) {
        var len = particle.velX * particle.velX + particle.velY * particle.velY;
        if (len !== 0) {
            var scale = 1 - (this.friction * time) / (Math.sqrt(len) * particle.mass);
            if (scale < 0) {
                particle.velX = 0;
                particle.velY = 0;
            }
            else {
                particle.velX *= scale;
                particle.velY *= scale;
            }
        }
    }
}
exports.Friction = Friction;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"tslib\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
tslib_1.__exportStar(__webpack_require__(0), exports);
tslib_1.__exportStar(__webpack_require__(33), exports);
tslib_1.__exportStar(__webpack_require__(37), exports);
tslib_1.__exportStar(__webpack_require__(39), exports);
tslib_1.__exportStar(__webpack_require__(38), exports);
tslib_1.__exportStar(__webpack_require__(42), exports);
tslib_1.__exportStar(__webpack_require__(63), exports);
tslib_1.__exportStar(__webpack_require__(46), exports);
tslib_1.__exportStar(__webpack_require__(32), exports);
tslib_1.__exportStar(__webpack_require__(14), exports);
tslib_1.__exportStar(__webpack_require__(34), exports);
tslib_1.__exportStar(__webpack_require__(35), exports);
tslib_1.__exportStar(__webpack_require__(36), exports);
tslib_1.__exportStar(__webpack_require__(40), exports);
tslib_1.__exportStar(__webpack_require__(43), exports);
tslib_1.__exportStar(__webpack_require__(41), exports);
tslib_1.__exportStar(__webpack_require__(44), exports);
tslib_1.__exportStar(__webpack_require__(45), exports);
tslib_1.__exportStar(__webpack_require__(47), exports);
tslib_1.__exportStar(__webpack_require__(49), exports);
tslib_1.__exportStar(__webpack_require__(50), exports);
tslib_1.__exportStar(__webpack_require__(51), exports);
tslib_1.__exportStar(__webpack_require__(52), exports);
tslib_1.__exportStar(__webpack_require__(53), exports);
tslib_1.__exportStar(__webpack_require__(54), exports);
tslib_1.__exportStar(__webpack_require__(55), exports);
tslib_1.__exportStar(__webpack_require__(56), exports);
tslib_1.__exportStar(__webpack_require__(57), exports);
tslib_1.__exportStar(__webpack_require__(58), exports);
tslib_1.__exportStar(__webpack_require__(59), exports);
tslib_1.__exportStar(__webpack_require__(60), exports);
tslib_1.__exportStar(__webpack_require__(61), exports);
tslib_1.__exportStar(__webpack_require__(62), exports);
tslib_1.__exportStar(__webpack_require__(64), exports);
tslib_1.__exportStar(__webpack_require__(65), exports);
tslib_1.__exportStar(__webpack_require__(66), exports);
tslib_1.__exportStar(__webpack_require__(67), exports);
tslib_1.__exportStar(__webpack_require__(68), exports);
tslib_1.__exportStar(__webpack_require__(69), exports);
var tweentocurrentposition_1 = __webpack_require__(15);
exports.TweenToCurrentPosition = tweentocurrentposition_1.TweenToCurrentPosition;
tslib_1.__exportStar(__webpack_require__(70), exports);
tslib_1.__exportStar(__webpack_require__(71), exports);
tslib_1.__exportStar(__webpack_require__(72), exports);


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const actionbase_1 = __webpack_require__(0);
/**
 * The Jet Action applies an acceleration to particles only if they are in
 * the specified zone.
 */
class Jet extends actionbase_1.ActionBase {
    /**
     * The constructor creates a Jet action for use by an emitter.
     * To add a Jet to all particles created by an emitter, use the
     * emitter's addAction method.
     *
     * @param accelerationX The x component of the acceleration to apply, in
     * pixels per second per second.
     * @param accelerationY The y component of the acceleration to apply, in
     * pixels per second per second.
     * @param zone The zone in which to apply the acceleration.
     * @param invertZone If false (the default) the acceleration is applied
     * only to particles inside the zone. If true the acceleration is applied
     * only to particles outside the zone.
     */
    constructor(accelerationX = 0, accelerationY = 0, zone, invertZone = false) {
        super();
        this.x = accelerationX;
        this.y = accelerationY;
        this.zone = zone;
        this.invertZone = invertZone;
    }
    /**
     * Checks if the particle is inside the zone and, if so, applies the
     * acceleration to the particle for the period of time indicated.
     *
     * <p>This method is called by the emitter and need not be called by the
     * user.</p>
     *
     * @param emitter The Emitter that created the particle.
     * @param particle The particle to be updated.
     * @param time The duration of the frame - used for time based updates.
     */
    update(_emitter, particle, time) {
        if (this.zone.contains(particle.x, particle.y)) {
            if (!this.invertZone) {
                particle.velX += this.x * time;
                particle.velY += this.y * time;
            }
        }
        else {
            if (this.invertZone) {
                particle.velX += this.x * time;
                particle.velY += this.y * time;
            }
        }
    }
}
exports.Jet = Jet;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const actionbase_1 = __webpack_require__(0);
/**
 * The LinearDrag action applies drag to the particle to slow it down when
 * it's moving. The drag force is proportional to the speed of the particle.
 * For other types of drag see QuadraticDrag and Friction.
 *
 * @see Friction
 * @see QuadraticDrag
 */
class LinearDrag extends actionbase_1.ActionBase {
    /**
     * The constructor creates a LinearDrag action for use by an emitter.
     * To add a LinearDrag to all particles created by an emitter, use the
     * emitter's addAction method.
     *
     * @param drag The amount of drag. A higher number produces a stronger drag
     * force.
     */
    constructor(drag = 0) {
        super();
        this.drag = drag;
    }
    /**
     * Calculates the drag on the particle and applies it for the period of
     * time indicated.
     *
     * <p>This method is called by the emitter and need not be called by the
     * user.</p>
     *
     * @param emitter The Emitter that created the particle.
     * @param particle The particle to be updated.
     * @param time The duration of the frame - used for time based updates.
     */
    update(_emitter, particle, time) {
        var scale = 1 - this.drag * time / particle.mass;
        if (scale < 0) {
            particle.velX = 0;
            particle.velY = 0;
        }
        else {
            particle.velX *= scale;
            particle.velY *= scale;
        }
    }
}
exports.LinearDrag = LinearDrag;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const actionbase_1 = __webpack_require__(0);
/**
 * The MatchRotateVelocity action applies an angular acceleration to each
 * particle to match its angular velocity to that of its nearest neighbours.
 *
 * <p>This action has a priority of 10, so that it executes
 * before other actions.</p>
 */
class MatchRotateVelocity extends actionbase_1.ActionBase {
    /**
     * The constructor creates a MatchRotateVelocity action for use by an
     * emitter. To add a MatchRotateVelocity to all particles created by an
     * emitter, use the emitter's addAction method.
     *
     * @param maxDistance The maximum distance, in pixels, over which this
     * action operates. The particle will match its angular velocity to other
     * particles that are at most this close to it.
     * @param acceleration The angular acceleration applied to adjust the
     * angular velocity to match that of the other particles.
     */
    constructor(maxDistance = 0, acceleration = 0) {
        super();
        this._priority = 10;
        this.maxDistance = maxDistance;
        this.acceleration = acceleration;
    }
    /**
     * The maximum distance, in pixels, over which this action operates.
     * The particle will match its angular velocity other particles that are
     * at most this close to it.
     */
    get maxDistance() {
        return this._max;
    }
    set maxDistance(value) {
        this._max = value;
        this._maxSq = value * value;
    }
    /**
     * Instructs the emitter to produce a sorted particle array for optimizing
     * the calculations in the update method of this action.
     *
     * @param emitter The emitter this action has been added to.
     */
    addedToEmitter(emitter) {
        emitter.spaceSort = true;
    }
    /**
     * Checks all particles near the current particle and applies the
     * angular acceleration to alter the particle's angular velocity
     * towards their average angular velocity.
     *
     * <p>This method is called by the emitter and need not be called by the
     * user.</p>
     *
     * @param emitter The Emitter that created the particle.
     * @param particle The particle to be updated.
     * @param time The duration of the frame - used for time based updates.
     */
    update(emitter, particle, time) {
        var particles = emitter.particlesArray;
        var other;
        var i;
        var len = particles.length;
        var distanceSq;
        var dx;
        var dy;
        var vel = 0;
        var count = 0;
        var factor;
        for (i = particle.sortID - 1; i >= 0; --i) {
            other = particles[i];
            if ((dx = particle.x - other.x) > this._max)
                break;
            dy = other.y - particle.y;
            if (dy > this._max || dy < -this._max)
                continue;
            distanceSq = dy * dy + dx * dx;
            if (distanceSq <= this._maxSq) {
                vel += other.angularVelocity;
                ++count;
            }
        }
        for (i = particle.sortID + 1; i < len; ++i) {
            other = particles[i];
            if ((dx = other.x - particle.x) > this._max)
                break;
            dy = other.y - particle.y;
            if (dy > this._max || dy < -this._max)
                continue;
            distanceSq = dy * dy + dx * dx;
            if (distanceSq <= this._maxSq) {
                vel += other.angularVelocity;
                ++count;
            }
        }
        if (count != 0) {
            vel = vel / count - particle.angularVelocity;
            if (vel != 0) {
                var velSign = 1;
                if (vel < 0) {
                    velSign = -1;
                    vel = -vel;
                }
                factor = time * this.acceleration;
                if (factor > vel)
                    factor = vel;
                particle.angularVelocity += factor * velSign;
            }
        }
    }
}
exports.MatchRotateVelocity = MatchRotateVelocity;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const actionbase_1 = __webpack_require__(0);
/**
 * The MatchVelocity action applies an acceleration to each particle to match
 * its velocity to that of its nearest neighbours.
 *
 * <p>This action has a priority of 10, so that it executes
 * before other actions.</p>
 */
class MatchVelocity extends actionbase_1.ActionBase {
    /**
     * The constructor creates a MatchVelocity action for use by an emitter.
     * To add a MatchVelocity to all particles created by an emitter, use the
     * emitter's addAction method.
     *
     * @param maxDistance The maximum distance, in pixels, over which this
     * action operates. The particle will match its velocity other particles
     * that are at most this close to it.
     * @param acceleration The acceleration applied to adjust each
     * particle's velocity to match that of the other particles near it.
     */
    constructor(maxDistance = 0, acceleration = 0) {
        super();
        this._priority = 10;
        this.maxDistance = maxDistance;
        this.acceleration = acceleration;
    }
    /**
     * The maximum distance, in pixels, over which this action operates.
     * The particle will match its velocity other particles that are this close or closer to it.
     */
    get maxDistance() {
        return this._max;
    }
    set maxDistance(value) {
        this._max = value;
        this._maxSq = value * value;
    }
    /**
     * Instructs the emitter to produce a sorted particle array for optimizing
     * the calculations in the update method of this action.
     *
     * @param emitter The emitter this action has been added to.
     */
    addedToEmitter(emitter) {
        emitter.spaceSort = true;
    }
    /**
     * Checks all particles near the current particle and applies the
     * acceleration to alter the particle's velocity
     * towards their average velocity.
     *
     * <p>This method is called by the emitter and need not be called by the
     * user.</p>
     *
     * @param emitter The Emitter that created the particle.
     * @param particle The particle to be updated.
     * @param time The duration of the frame - used for time based updates.
     */
    update(emitter, particle, time) {
        var particles = emitter.particlesArray;
        var other;
        var i;
        var len = particles.length;
        var distanceSq;
        var dx;
        var dy;
        var velX = 0;
        var velY = 0;
        var count = 0;
        var factor;
        for (i = particle.sortID - 1; i >= 0; --i) {
            other = particles[i];
            if ((dx = particle.x - other.x) > this._max)
                break;
            dy = other.y - particle.y;
            if (dy > this._max || dy < -this._max)
                continue;
            distanceSq = dy * dy + dx * dx;
            if (distanceSq <= this._maxSq) {
                velX += other.velX;
                velY += other.velY;
                ++count;
            }
        }
        for (i = particle.sortID + 1; i < len; ++i) {
            other = particles[i];
            if ((dx = other.x - particle.x) > this._max)
                break;
            dy = other.y - particle.y;
            if (dy > this._max || dy < -this._max)
                continue;
            distanceSq = dy * dy + dx * dx;
            if (distanceSq <= this._maxSq) {
                velX += other.velX;
                velY += other.velY;
                ++count;
            }
        }
        if (count != 0) {
            velX = velX / count - particle.velX;
            velY = velY / count - particle.velY;
            if (velX != 0 || velY != 0) {
                factor = time * this.acceleration / Math.sqrt(velX * velX + velY * velY);
                if (factor > 1)
                    factor = 1;
                particle.velX += factor * velX;
                particle.velY += factor * velY;
            }
        }
    }
}
exports.MatchVelocity = MatchVelocity;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const actionbase_1 = __webpack_require__(0);
/**
 * The MinimumDistance action applies an acceleration to the particle to
 * manumberain a minimum distance between it and its neighbours.
 *
 * <p>This action has a priority of 10, so that it executes
 * before other actions.</p>
 */
class MinimumDistance extends actionbase_1.ActionBase {
    /**
     * The constructor creates a MinimumDistance action for use by an emitter.
     * To add a MinimumDistance to all particles created by an emitter, use
     * the emitter's addAction method.
     *
     * @param minimum The minimum distance, in pixels, that this action
     * manumberains between particles.
     * @param acceleration The acceleration force applied to avoid the
     * other particles.
     */
    constructor(minimum = 0, acceleration = 0) {
        super();
        this._priority = 10;
        this.minimum = minimum;
        this.acceleration = acceleration;
    }
    /**
     * The minimum distance, in pixels, that this action manumberains between
     * particles.
     */
    get minimum() {
        return this._min;
    }
    set minimum(value) {
        this._min = value;
        this._minSq = value * value;
    }
    /**
     * Instructs the emitter to produce a sorted particle array for optimizing
     * the calculations in the update method of this action.
     *
     * @param emitter The emitter this action has been added to.
     */
    addedToEmitter(emitter) {
        emitter.spaceSort = true;
    }
    /**
     * Checks for particles closer than the minimum distance to the current
     * particle and if any are found applies the acceleration to move the
     * particles apart.
     *
     * <p>This method is called by the emitter and need not be called by the
     * user.</p>
     *
     * @param emitter The Emitter that created the particle.
     * @param particle The particle to be updated.
     * @param time The duration of the frame - used for time based updates.
     */
    update(emitter, particle, time) {
        var particles = emitter.particlesArray;
        var other;
        var i;
        var len = particles.length;
        var distanceInv;
        var distanceSq;
        var dx;
        var dy;
        var moveX = 0;
        var moveY = 0;
        var factor;
        for (i = particle.sortID - 1; i >= 0; --i) {
            other = particles[i];
            if ((dx = particle.x - other.x) > this._min)
                break;
            dy = particle.y - other.y;
            if (dy > this._min || dy < -this._min)
                continue;
            distanceSq = dy * dy + dx * dx;
            if (distanceSq <= this._minSq && distanceSq > 0) {
                distanceInv = 1 / Math.sqrt(distanceSq);
                moveX += dx * distanceInv;
                moveY += dy * distanceInv;
            }
        }
        for (i = particle.sortID + 1; i < len; ++i) {
            other = particles[i];
            if ((dx = particle.x - other.x) < -this._min)
                break;
            dy = particle.y - other.y;
            if (dy > this._min || dy < -this._min)
                continue;
            distanceSq = dy * dy + dx * dx;
            if (distanceSq <= this._minSq && distanceSq > 0) {
                distanceInv = 1 / Math.sqrt(distanceSq);
                moveX += dx * distanceInv;
                moveY += dy * distanceInv;
            }
        }
        if (moveX != 0 || moveY != 0) {
            factor = time * this.acceleration / Math.sqrt(moveX * moveX + moveY * moveY);
            particle.velX += factor * moveX;
            particle.velY += factor * moveY;
        }
    }
}
exports.MinimumDistance = MinimumDistance;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const actionbase_1 = __webpack_require__(0);
/**
 * The Move action updates the position of the particle based on its velocity.
 * It uses a Euler numberegrator to calculate the new position. If you want an
 * emitter's particles to move then you must add a Move action, or a similar
 * custom action, to the emitter
 *
 * <p>This action has a priority of -10, so that it executes after other actions.</p>
 */
class Move extends actionbase_1.ActionBase {
    /**
     * The constructor creates a Move action for use by an emitter.
     * To add a Move to all particles created by an emitter, use the
     * emitter's addAction method.
     *
     * @see org.flnumberparticles.common.emitters.Emitter#addAction()
     */
    constructor() {
        super();
        this._priority = -10;
    }
    /**
     * Updates the particle's position based on its velocity and the period of
     * time indicated.
     *
     * <p>This method is called by the emitter and need not be called by the
     * user.</p>
     *
     * @param emitter The Emitter that created the particle.
     * @param particle The particle to be updated.
     * @param time The duration of the frame - used for time based updates.
     */
    update(_emitter, particle, time) {
        particle.previousX = particle.x;
        particle.previousY = particle.y;
        particle.x += particle.velX * time;
        particle.y += particle.velY * time;
    }
}
exports.Move = Move;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const actionbase_1 = __webpack_require__(0);
const gravityConst = 1000; // scales the power
/**
 * The MutualGravity Action applies forces to attract each particle towards
 * the other particles. The force applied is inversely proportional to the
 * square of the distance between the particles, in accordance with Newton's
 * law of gravity. This simulates the effect of gravity over large distances
 * (as between planets, for example).
 *
 * <p>This action has a priority of 10, so that it executes
 * before other actions.</p>
 */
class MutualGravity extends actionbase_1.ActionBase {
    /**
     * The constructor creates a MutualGravity action for use by an emitter.
     * To add a MutualGravity to all particles created by an emitter, use the
     * emitter's addAction method.
     *
     * @param power The strength of the gravitational pull between the
     * particles.
     * @param maxDistance The maximum distance between particles for the
     * gravitational effect to be calculated. You can sometimes speed up
     * the calculation of this action by
     * reducing the maxDistance since often only the closest other particles
     * have a significant effect on the motion of a particle.
     * @param epsilon The minimum distance for which gravity is calculated.
     * Particles closer than this distance experience a gravity force as if
     * they were this distance away. This stops the gravity effect blowing
     * up as distances get small.
     */
    constructor(power = 0, maxDistance = 0, epsilon = 1) {
        super();
        this._priority = 10;
        this.power = power;
        this.maxDistance = maxDistance;
        this.epsilon = epsilon;
    }
    /**
     * The strength of the gravity force.
     */
    get power() {
        return this._power / gravityConst;
    }
    set power(value) {
        this._power = value * gravityConst;
    }
    /**
     * The maximum distance between particles for the gravitational
     * effect to be calculated. You can sometimes speed up the calculation
     * of this action by reducing the
     * maxDistance since often only the closest other particles have a
     * significant effect on the motion of a particle.
     */
    get maxDistance() {
        return this._maxDistance;
    }
    set maxDistance(value) {
        this._maxDistance = value;
        this._maxDistanceSq = value * value;
    }
    /**
     * The minimum distance for which the gravity force is calculated.
     * Particles closer than this distance experience the gravity as it they
     * were this distance away. This stops the gravity effect blowing up as
     * distances get very small.
     */
    get epsilon() {
        return Math.sqrt(this._epsilonSq);
    }
    set epsilon(value) {
        this._epsilonSq = value * value;
    }
    /**
     * Instructs the emitter to produce a sorted particle array for optimizing
     * the calculations in the update method of this action.
     *
     * @param emitter The emitter this action has been added to.
     */
    addedToEmitter(emitter) {
        emitter.spaceSort = true;
    }
    /**
     * Checks all particles near the current particle and applies the
     * gravity force between them.
     *
     * <p>This method is called by the emitter and need not be called by the
     * user.</p>
     *
     * @param emitter The Emitter that created the particle.
     * @param particle The particle to be updated.
     * @param time The duration of the frame - used for time based updates.
     */
    update(emitter, particle, time) {
        if (particle.mass == 0) {
            return;
        }
        var particles = emitter.particlesArray;
        var other;
        var i;
        var len = particles.length;
        var factor;
        var distance;
        var distanceSq;
        var dx;
        var dy;
        for (i = particle.sortID + 1; i < len; ++i) {
            other = particles[i];
            if (other.mass == 0) {
                continue;
            }
            if ((dx = other.x - particle.x) > this._maxDistance)
                break;
            dy = other.y - particle.y;
            if (dy > this._maxDistance || dy < -this._maxDistance)
                continue;
            distanceSq = dy * dy + dx * dx;
            if (distanceSq <= this._maxDistanceSq && distanceSq > 0) {
                distance = Math.sqrt(distanceSq);
                if (distanceSq < this._epsilonSq) {
                    distanceSq = this._epsilonSq;
                }
                factor = (this._power * time) / (distanceSq * distance);
                particle.velX += (dx *= factor) * other.mass;
                particle.velY += (dy *= factor) * other.mass;
                other.velX -= dx * particle.mass;
                other.velY -= dy * particle.mass;
            }
        }
    }
}
exports.MutualGravity = MutualGravity;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const actionbase_1 = __webpack_require__(0);
/**
 * The QuadraticDrag action applies drag to the particle to slow it down when
 * it's moving. The drag force is proportional to the square of the speed of
 * the particle. For other types of drag see the LinerDrag and Friction actions.
 *
 * @see Friction
 * @see LinearDrag
 */
class QuadraticDrag extends actionbase_1.ActionBase {
    /**
     * The constructor creates a QuadraticDrag action for use by an emitter.
     * To add a QuadraticDrag to all particles created by an emitter, use the
     * emitter's addAction method.
     *
     * @param drag The amount of drag. A higher number produces a stronger
     * drag force.
     */
    constructor(drag = 0) {
        super();
        this.drag = drag;
    }
    /**
     * Calculates the drag on the particle and applies it for the period of
     * time indicated.
     *
     * <p>This method is called by the emitter and need not be called by the
     * user.</p>
     *
     * @param emitter The Emitter that created the particle.
     * @param particle The particle to be updated.
     * @param time The duration of the frame - used for time based updates.
     */
    update(_emitter, particle, time) {
        var len2 = particle.velX * particle.velX + particle.velY * particle.velY;
        if (len2 == 0) {
            return;
        }
        var scale = 1 - this.drag * time * Math.sqrt(len2) / particle.mass;
        if (scale < 0) {
            particle.velX = 0;
            particle.velY = 0;
        }
        else {
            particle.velX *= scale;
            particle.velY *= scale;
        }
    }
}
exports.QuadraticDrag = QuadraticDrag;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const actionbase_1 = __webpack_require__(0);
const core_1 = __webpack_require__(1);
/**
 * The RandomDrift action moves the particle by a random small amount every
 * frame, causing the particle to drift around.
 */
class RandomDrift extends actionbase_1.ActionBase {
    /**
     * The constructor creates a RandomDrift action for use by an emitter.
     * To add a RandomDrift to all particles created by an emitter, use the
     * emitter's addAction method.
     *
     * @param driftX The maximum amount of horizontal drift in pixels per second.
     * @param driftY The maximum amount of vertical drift in pixels per second.
     */
    constructor(driftX = 0, driftY = 0) {
        super();
        this.driftX = driftX;
        this.driftY = driftY;
    }
    /**
     * The maximum amount of horizontal drift in pixels per second.
     */
    get driftX() {
        return this._sizeX / 2;
    }
    set driftX(value) {
        this._sizeX = value * 2;
    }
    /**
     * The maximum amount of vertical drift in pixels per second.
     */
    get driftY() {
        return this._sizeY / 2;
    }
    set driftY(value) {
        this._sizeY = value * 2;
    }
    /**
     * Calculates a random drift for this frame and applies it for the
     * period of time indicated.
     *
     * <p>This method is called by the emitter and need not be called by the
     * user.</p>
     *
     * @param emitter The Emitter that created the particle.
     * @param particle The particle to be updated.
     * @param time The duration of the frame - used for time based updates.
     */
    update(_emitter, particle, time) {
        particle.velX += (core_1.Random.random.random() - 0.5) * this._sizeX * time;
        particle.velY += (core_1.Random.random.random() - 0.5) * this._sizeY * time;
    }
}
exports.RandomDrift = RandomDrift;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const actionbase_1 = __webpack_require__(0);
/**
 * The Rotate action updates the rotation of the particle based on its angular
 * velocity. It uses a Euler numberegrator to calculate the new rotation. If you
 * want an emitter's particles to rotate then you must add a Rotate action, or
 * a similar custom action, to the emitter
 *
 * <p>This action has a priority of -10, so that it executes after other actions.</p>
 */
class Rotate extends actionbase_1.ActionBase {
    /**
     * The constructor creates a Rotate action for use by an emitter.
     * To add a Rotate to all particles created by an emitter, use the
     * emitter's addAction method.
     */
    constructor() {
        super();
        this._priority = -10;
    }
    /**
     * Updates the particle's rotation based on its angular velocity and the period of
     * time indicated.
     *
     * <p>This method is called by the emitter and need not be called by the
     * user.</p>
     *
     * @param emitter The Emitter that created the particle.
     * @param particle The particle to be updated.
     * @param time The duration of the frame - used for time based updates.
     */
    update(_emitter, particle, time) {
        particle.rotation += particle.angularVelocity * time;
    }
}
exports.Rotate = Rotate;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const actionbase_1 = __webpack_require__(0);
/**
 * The RotateToDirection action updates the rotation of the particle
 * so that it always points in the direction it is traveling.
 */
class RotateToDirection extends actionbase_1.ActionBase {
    /**
 * Calculates a new rotation based on the direction of the
 * particle's velocity and applies it to the particle.
 *
 * <p>This method is called by the emitter and need not be called by the
 * user.</p>
 *
 * @param emitter The Emitter that created the particle.
 * @param particle The particle to be updated.
 * @param time The duration of the frame - used for time based updates.
 */
    update(_emitter, particle, _time) {
        particle.rotation = Math.atan2(particle.velY, particle.velX);
    }
}
exports.RotateToDirection = RotateToDirection;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const actionbase_1 = __webpack_require__(0);
/**
 * The RotationalFriction action applies friction to the particle's rotational
 * movement to slow it down when it's rotating. The frictional force is
 * constant, irrespective of how fast the particle is rotating. For forces
 * proportional to the particle's angular velocity, use one of the rotational
 * drag effects - RotationalLinearDrag and RotationalQuadraticDrag.
 *
 * @see RotationalLinearDrag
 * @see RotationalQuadraticDrag
 */
class RotationalFriction extends actionbase_1.ActionBase {
    /**
     * The constructor creates a RotationalFriction action for use by an emitter.
     * To add a RotationalFriction to all particles created by an emitter,
     * use the emitter's addAction method.
     *
     * @param friction The amount of friction. A higher number produces a stronger frictional force.
     */
    constructor(friction = 0) {
        super();
        this.friction = friction;
    }
    /**
     * Calculates the effect of the friction on the particle over the
     * period of time indicated and adjusts the particle's angular velocity
     * accordingly.
     *
     * <p>This method is called by the emitter and need not be called by the
     * user.</p>
     *
     * @param emitter The Emitter that created the particle.
     * @param particle The particle to be updated.
     * @param time The duration of the frame - used for time based updates.
     */
    update(_emitter, particle, time) {
        if (particle.angularVelocity == 0) {
            return;
        }
        var scale = 1 - (this.friction * time) / (Math.abs(particle.angularVelocity) * particle.inertia);
        if (scale < 0) {
            particle.angularVelocity = 0;
        }
        else {
            particle.angularVelocity *= scale;
        }
    }
}
exports.RotationalFriction = RotationalFriction;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const actionbase_1 = __webpack_require__(0);
/**
 * The RotationalLinearDrag action applies drag to the particle to slow it down
 * when it's rotating. The drag force is proportional to the angular velocity of
 * the particle. For other types of rotational drag see RotationalQuadraticDrag
 * and RotationalFriction.
 *
 * @see RotationalFriction
 * @see RotationalQuadraticDrag
 */
class RotationalLinearDrag extends actionbase_1.ActionBase {
    /**
     * The constructor creates a RotationalLinearDrag action for use by an emitter.
     * To add a RotationalLinearDrag to all particles created by an
     * emitter, use the emitter's addAction method.
     *
     * @param drag The amount of drag. A higher number produces a stronger drag
     * force.
     */
    constructor(drag = 0) {
        super();
        this.drag = drag;
    }
    /**
     * Calculates the rotational drag on the particle and applies it for the
     * period of time indicated.
     *
     * <p>This method is called by the emitter and need not be called by the
     * user.</p>
     *
     * @param emitter The Emitter that created the particle.
     * @param particle The particle to be updated.
     * @param time The duration of the frame - used for time based updates.
     */
    update(_emitter, particle, time) {
        if (particle.angularVelocity == 0) {
            return;
        }
        var scale = 1 - this.drag * time / particle.inertia;
        if (scale < 0) {
            particle.angularVelocity = 0;
        }
        else {
            particle.angularVelocity *= scale;
        }
    }
}
exports.RotationalLinearDrag = RotationalLinearDrag;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const actionbase_1 = __webpack_require__(0);
/**
 * The RotationalQuadraticDrag action applies drag to the particle to slow it
 * down when it's rotating. The drag force is proportional to the square of the
 * angular velocity of the particle. For other types of rotational drag see the
 * RotationalLinerDrag and RotationalFriction actions.
 *
 * @see RotationalFriction
 * @see RotationalLinearDrag
 */
class RotationalQuadraticDrag extends actionbase_1.ActionBase {
    /**
     * The constructor creates a RotationalQuadraticDrag action for use by
     * an emitter. To add a RotationalQuadraticDrag to all particles created
     * by an emitter, use the emitter's addAction method.
     *
     * @param drag The amount of drag. A higher number produces a stronger drag
     * force.
     */
    constructor(drag = 0) {
        super();
        this.drag = drag;
    }
    /**
     * Calculates the rotational drag on the particle and applies it for the
     * period of time indicated.
     *
     * <p>This method is called by the emitter and need not be called by the
     * user.</p>
     *
     * @param emitter The Emitter that created the particle.
     * @param particle The particle to be updated.
     * @param time The duration of the frame - used for time based updates.
     */
    update(_emitter, particle, time) {
        if (particle.angularVelocity == 0) {
            return;
        }
        var scale = 1 - this.drag * time * particle.angularVelocity / particle.inertia;
        if (scale < 0) {
            particle.angularVelocity = 0;
        }
        else {
            particle.angularVelocity *= scale;
        }
    }
}
exports.RotationalQuadraticDrag = RotationalQuadraticDrag;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const actionbase_1 = __webpack_require__(0);
/**
 * This Action modifies the scale of the particle as it ages.
 * It uses the particle's energy level to decide what scale the particle should have.
 * @extends ActionBase
 */
class ChangeScale extends actionbase_1.ActionBase {
    get startScale() { return this.endScale + this.diffScale; }
    set startScale(value) { this.diffScale = value - this.endScale; }
    constructor(startScale = 1, endScale = 1) {
        super();
        this.diffScale = startScale - endScale;
        this.endScale = endScale;
    }
    update(_emitter, particle, _time) {
        particle.scale = this.endScale + this.diffScale * particle.energy;
    }
}
exports.ChangeScale = ChangeScale;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const actionbase_1 = __webpack_require__(0);
/**
 * The ScaleAll action adjusts the size of the particle, its collision radius
 * and its mass as it ages. It uses the particle's energy level to decide what size
 * the particle should be.
 *
 * <p>Usually a particle's energy changes from 1 to 0 over its lifetime, but
 * this can be altered via the easing set within the age action.</p>
 *
 * <p>This action should be used in conjunction with the Age action.</p>
 */
class ScaleAll extends actionbase_1.ActionBase {
    /**
     * The constructor creates a ScaleAll action for use by an emitter.
     * To add a ScaleAll to all particles created by an emitter, use the
     * emitter's addAction method.
     *
     * @param startScale The scale factor for the particle when its energy
     * is 1 - usually at the start of its lifetime. A scale of 1 is normal size.
     * @param endScale The scale factor for the particle when its energy
     * is 0 - usually at the end of its lifetime. A scale of 1 is normal size.
     */
    constructor(startScale = 1, endScale = 1) {
        super();
        this._diffScale = 0;
        this._endScale = 1;
        this.startScale = startScale;
        this.endScale = endScale;
    }
    /**
     * The scale factor for the particle when its energy
     * is 1 - usually at the start of its lifetime. A scale of 1 is normal size.
     */
    get startScale() {
        return this._endScale + this._diffScale;
    }
    set startScale(value) {
        this._diffScale = value - this._endScale;
    }
    /**
     * The scale factor for the particle when its energy
     * is 0 - usually at the end of its lifetime. A scale of 1 is normal size.
     */
    get endScale() {
        return this._endScale;
    }
    set endScale(value) {
        this._diffScale = this._endScale + this._diffScale - value;
        this._endScale = value;
    }
    /**
     * Sets the scale of the particle based on the values defined
     * and the particle's energy level.
     *
     * <p>This method is called by the emitter and need not be called by the
     * user</p>
     *
     * @param emitter The Emitter that created the particle.
     * @param particle The particle to be updated.
     * @param time The duration of the frame - used for time based updates.
     */
    update(_emitter, particle, _time) {
        var scale = this._endScale + this._diffScale * particle.energy;
        var change = scale / particle.scale;
        particle.scale = scale;
        particle.mass *= change * change;
        particle.collisionRadius *= change;
    }
}
exports.ScaleAll = ScaleAll;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const actionbase_1 = __webpack_require__(0);
/**
 * The SpeedLimit action limits each particle's maximum or minimum speed to the
 * specified speed.
 *
 * <p>This action has aa priority of -5, so that it executes after all accelerations
 * have occured.</p>
 */
class SpeedLimit extends actionbase_1.ActionBase {
    /**
     * The constructor creates a SpeedLimit action for use by an emitter.
     * To add a SpeedLimit to all particles created by an emitter, use the
     * emitter's addAction method.
     *
     * @param speed The speed limit for the action in pixels per second.
     * @param isMinimum If true, particles travelling slower than the speed limit
     * are accelerated to the speed limit, otherwise particles travelling faster
     * than the speed limit are decelerated to the speed limit.
     */
    constructor(speed = Number.MAX_VALUE, isMinimum = false) {
        super();
        this._priority = -5;
        this.limit = speed;
        this.isMinimum = isMinimum;
    }
    /**
     * The speed limit
     */
    get limit() {
        return this._limit;
    }
    set limit(value) {
        this._limit = value;
        this._limitSq = value * value;
    }
    /**
     * Whether the speed is a minimum (true) or maximum (false) speed.
     */
    get isMinimum() {
        return this._isMinimum;
    }
    set isMinimum(value) {
        this._isMinimum = value;
    }
    /**
     * Checks whether the particle's speed is above or below the speed limit
     * as appropriate and, if so, alters its speed to match the speed limit.
     *
     * <p>This method is called by the emitter and need not be called by the
     * user.</p>
     *
     * @param emitter The Emitter that created the particle.
     * @param particle The particle to be updated.
     * @param time The duration of the frame - used for time based updates.
     */
    update(_emitter, particle, _time) {
        var speedSq = particle.velX * particle.velX + particle.velY * particle.velY;
        if ((this._isMinimum && speedSq < this._limitSq) || (!this._isMinimum && speedSq > this._limitSq)) {
            var scale = this._limit / Math.sqrt(speedSq);
            particle.velX *= scale;
            particle.velY *= scale;
        }
    }
}
exports.SpeedLimit = SpeedLimit;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const actionbase_1 = __webpack_require__(0);
/**
 * The TargetRotateVelocity action adjusts the angular velocity of the particle
 * towards the target angular velocity.
 */
class TargetRotateVelocity extends actionbase_1.ActionBase {
    /**
     * The constructor creates a TargetRotateVelocity action for use by an emitter.
     * To add a TargetRotateVelocity to all particles created by an emitter, use the
     * emitter's addAction method.
     *
     * @param targetVelocity The target angular velocity, in radians per second.
     * @param rate Adjusts how quickly the particle reaches the target angular
     * velocity. Larger numbers cause it to approach the target angular velocity
     * more quickly.
     */
    constructor(targetVelocity = 0, rate = 0.1) {
        super();
        this.targetVelocity = targetVelocity;
        this.rate = rate;
    }
    /**
     * Calculates the difference between the particle's angular velocity and
     * the target and adjusts the angular velocity closer to the target by an
     * amount proportional to the difference, the time and the rate of convergence.
     *
     * <p>This method is called by the emitter and need not be called by the
     * user.</p>
     *
     * @param emitter The Emitter that created the particle.
     * @param particle The particle to be updated.
     * @param time The duration of the frame - used for time based updates.
     */
    update(_emitter, particle, time) {
        particle.angularVelocity += (this.targetVelocity - particle.angularVelocity) * this.rate * time;
    }
}
exports.TargetRotateVelocity = TargetRotateVelocity;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const actionbase_1 = __webpack_require__(0);
/**
 * The TargetVelocity action adjusts the velocity of the particle towards the
 * target velocity.
 */
class TargetVelocity extends actionbase_1.ActionBase {
    /**
     * The constructor creates a TargetVelocity action for use by an emitter.
     * To add a TargetVelocity to all particles created by an emitter, use the
     * emitter's addAction method.
     *
     * @param velX The x coordinate of the target velocity, in pixels per second.
     * @param velY The y coordinate of the target velocity, in pixels per second.
     * @param rate Adjusts how quickly the particle reaches the target velocity.
     * Larger numbers cause it to approach the target velocity more quickly.
     */
    constructor(targetVelocityX = 0, targetVelocityY = 0, rate = 0.1) {
        super();
        this.targetVelocityX = targetVelocityX;
        this.targetVelocityY = targetVelocityY;
        this.rate = rate;
    }
    /**
     * Calculates the difference between the particle's velocity and
     * the target and adjusts the velocity closer to the target by an
     * amount proportional to the difference, the time and the rate of convergence.
     *
     * <p>This method is called by the emitter and need not be called by the
     * user.</p>
     *
     * @param emitter The Emitter that created the particle.
     * @param particle The particle to be updated.
     * @param time The duration of the frame - used for time based updates.
     */
    update(_emitter, particle, time) {
        particle.velX += (this.targetVelocityX - particle.velX) * this.rate * time;
        particle.velY += (this.targetVelocityY - particle.velY) * this.rate * time;
    }
}
exports.TargetVelocity = TargetVelocity;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const actionbase_1 = __webpack_require__(0);
/**
 * The TurnTowardsPonumber action causes the particle to constantly adjust its
 * direction so that it travels towards a particular ponumber.
 */
class TurnTowardsPonumber extends actionbase_1.ActionBase {
    /**
     * The constructor creates a TurnTowardsPonumber action for use by an emitter.
     * To add a TurnTowardsPonumber to all particles created by an emitter, use the
     * emitter's addAction method.
     *
     * @param power The strength of the turn action. Higher values produce a sharper turn.
     * @param x The x coordinate of the ponumber towards which the particle turns.
     * @param y The y coordinate of the ponumber towards which the particle turns.
     */
    constructor(x = 0, y = 0, power = 0) {
        super();
        this.power = power;
        this.x = x;
        this.y = y;
    }
    /**
     * Calculates the direction to the focus ponumber and turns the particle towards
     * this direction.
     *
     * <p>This method is called by the emitter and need not be called by the
     * user.</p>
     *
     * @param emitter The Emitter that created the particle.
     * @param particle The particle to be updated.
     * @param time The duration of the frame - used for time based updates.
     */
    update(_emitter, particle, time) {
        var velLength = Math.sqrt(particle.velX * particle.velX + particle.velY * particle.velY);
        var dx = particle.velX / velLength;
        var dy = particle.velY / velLength;
        var acc = this.power * time;
        var targetX = this.x - particle.x;
        var targetY = this.y - particle.y;
        var len = Math.sqrt(targetX * targetX + targetY * targetY);
        if (len == 0) {
            return;
        }
        targetX /= len;
        targetY /= len;
        var dot = targetX * dx + targetY * dy;
        var perpX = targetX - dx * dot;
        var perpY = targetY - dy * dot;
        var factor = acc / Math.sqrt(perpX * perpX + perpY * perpY);
        particle.velX += perpX * factor;
        particle.velY += perpY * factor;
        factor = velLength / Math.sqrt(particle.velX * particle.velX + particle.velY * particle.velY);
        particle.velX *= factor;
        particle.velY *= factor;
    }
}
exports.TurnTowardsPonumber = TurnTowardsPonumber;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const actionbase_1 = __webpack_require__(0);
/**
 * The TweenPosition action adjusts the particle's position between two
 * locations as it ages. The position is relative to the particle's energy,
 * which changes as the particle ages in accordance with the energy easing
 * used. This action should be used in conjunction with the Age action.
 */
class TweenPosition extends actionbase_1.ActionBase {
    /**
     * The constructor creates a TweenPosition action for use by an emitter.
     * To add a TweenPosition to all particles created by an emitter, use the
     * emitter's addAction method.
     *
     * @param startX The x value for the particle's position when its energy is 1.
     * @param startY The y value for the particle's position when its energy is 1.
     * @param endX The x value of the particle's position when its energy is 0.
     * @param endY The y value of the particle's position when its energy is 0.
     */
    constructor(startX = 0, startY = 0, endX = 0, endY = 0) {
        super();
        this._diffX = 0;
        this._endX = 0;
        this._diffY = 0;
        this._endY = 0;
        this.startX = startX;
        this.endX = endX;
        this.startY = startY;
        this.endY = endY;
    }
    /**
     * The x position for the particle's position when its energy is 1.
     */
    get startX() {
        return this._endX + this._diffX;
    }
    set startX(value) {
        this._diffX = value - this._endX;
    }
    /**
     * The X value for the particle's position when its energy is 0.
     */
    get endX() {
        return this._endX;
    }
    set endX(value) {
        this._diffX = this._endX + this._diffX - value;
        this._endX = value;
    }
    /**
     * The y position for the particle's position when its energy is 1.
     */
    get startY() {
        return this._endY + this._diffY;
    }
    set startY(value) {
        this._diffY = value - this._endY;
    }
    /**
     * The y value for the particle's position when its energy is 0.
     */
    get endY() {
        return this._endY;
    }
    set endY(value) {
        this._diffY = this._endY + this._diffY - value;
        this._endY = value;
    }
    /**
     * Calculates the current position of the particle based on it's energy.
     *
     * <p>This method is called by the emitter and need not be called by the
     * user.</p>
     *
     * @param emitter The Emitter that created the particle.
     * @param particle The particle to be updated.
     * @param time The duration of the frame - used for time based updates.
     */
    update(_emitter, particle, _time) {
        particle.x = this._endX + this._diffX * particle.energy;
        particle.y = this._endY + this._diffY * particle.energy;
    }
}
exports.TweenPosition = TweenPosition;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const actionbase_1 = __webpack_require__(0);
const tweentocurrentposition_1 = __webpack_require__(15);
/**
 * The TweenToZone action adjusts the particle's position between two
 * locations as it ages. The start location is wherever the particle starts
 * from, depending on the emitter and the initializers. The end position is
 * a random point within the specified zone. The current position is relative
 * to the particle's energy,
 * which changes as the particle ages in accordance with the energy easing
 * used. This action should be used in conjunction with the Age action.
 */
class TweenToZone extends actionbase_1.ActionBase {
    /**
     * The constructor creates a TweenToZone action for use by an emitter.
     * To add a TweenToZone to all particles created by an emitter, use the
     * emitter's addAction method.
     *
     * @param zone The zone for the particle's position when its energy is 0.
     */
    constructor(zone) {
        super();
        this.zone = zone;
        this._priority = -10;
    }
    /**
     *
     */
    addedToEmitter(emitter) {
        if (!emitter.hasInitializer(this)) {
            emitter.addInitializer(this);
        }
    }
    removedFromEmitter(emitter) {
        emitter.removeInitializer(this);
    }
    /**
     *
     */
    initialize(_emitter, particle) {
        var pt = this.zone.getLocation();
        var data = new tweentocurrentposition_1.TweenToPositionData(particle.x, particle.y, pt.x, pt.y);
        particle.data.set(this, data);
    }
    /**
     * Calculates the current position of the particle based on it's energy.
     *
     * <p>This method is called by the emitter and need not be called by the
     * user.</p>
     *
     * @param emitter The Emitter that created the particle.
     * @param particle The particle to be updated.
     * @param time The duration of the frame - used for time based updates.
     */
    update(emitter, particle, _time) {
        if (!particle.data.get(this)) {
            this.initialize(emitter, particle);
        }
        var data = particle.data.get(this);
        particle.x = data.endX + data.diffX * particle.energy;
        particle.y = data.endY + data.diffY * particle.energy;
    }
}
exports.TweenToZone = TweenToZone;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const actionbase_1 = __webpack_require__(0);
/**
 * The WrapAroundBox action confines all the particles to a rectangle region. If a
 * particle leaves the rectangle on one side it reenters on the other.
 *
 * This action has a priority of -20, so that it executes after
 * all movement has occured.
 */
class WrapAroundBox extends actionbase_1.ActionBase {
    /**
     * The constructor creates a WrapAroundBox action for use by
     * an emitter. To add a WrapAroundBox to all particles created by an emitter,
     * use the emitter's addAction method.
     *
     * @param left The left coordinate of the box.
     * @param top The top coordinate of the box.
     * @param right The right coordinate of the box.
     * @param bottom The bottom coordinate of the box.
     */
    constructor(left = 0, top = 0, right = 0, bottom = 0) {
        super();
        this._priority = -20;
        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
    }
    /**
     * The left coordinate of the box.
     */
    get left() {
        return this._left;
    }
    set left(value) {
        this._left = value;
        this._width = this._right - this._left;
    }
    /**
     * The top coordinate of the box.
     */
    get top() {
        return this._top;
    }
    set top(value) {
        this._top = value;
        this._height = this._bottom - this._top;
    }
    /**
     * The left coordinate of the box.
     */
    get right() {
        return this._right;
    }
    set right(value) {
        this._right = value;
        this._width = this._right - this._left;
    }
    /**
     * The left coordinate of the box.
     */
    get bottom() {
        return this._bottom;
    }
    set bottom(value) {
        this._bottom = value;
        this._height = this._bottom - this._top;
    }
    /**
     * Tests whether the particle has left the box and, if so, moves it
     * to enter on the other side.
     *
     * <p>This method is called by the emitter and need not be called by the
     * user</p>
     *
     * @param emitter The Emitter that created the particle.
     * @param particle The particle to be updated.
     * @param time The duration of the frame - used for time based updates.
     */
    update(_emitter, particle, _time) {
        if (particle.velX > 0 && particle.x >= this._right) {
            particle.x -= this._width;
        }
        else if (particle.velX < 0 && particle.x <= this._left) {
            particle.x += this._width;
        }
        if (particle.velY > 0 && particle.y >= this._bottom) {
            particle.y -= this._height;
        }
        else if (particle.velY < 0 && particle.y <= this._top) {
            particle.y += this._height;
        }
    }
}
exports.WrapAroundBox = WrapAroundBox;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const actionbase_1 = __webpack_require__(0);
/**
 * The ZonedAction Action applies an action to the particle only if it is in
 * the specified zone.
 */
class ZonedAction extends actionbase_1.ActionBase {
    /**
     * The constructor creates a ZonedAction action for use by an emitter.
     * To add a ZonedAction to all particles created by an emitter, use the
     * emitter's addAction method.
     *
     * @param action The action to apply when inside the zone.
     * @param zone The zone in which to apply the action.
     * @param invertZone If false (the default) the action is applied only to
     * particles inside the zone. If true the action is applied only to
     * particles outside the zone.
     */
    constructor(action, zone, invertZone = false) {
        super();
        this.action = action;
        this.zone = zone;
        this.invertZone = invertZone;
    }
    /**
     * Provides acces to the priority of the action being used.
     *
     * @see org.flintparticles.common.actions.Action#getDefaultPriority()
     */
    get priority() {
        return this.action.priority;
    }
    set priority(value) {
        this.action.priority = value;
    }
    /**
     * Calls the addedToEmitter method of the action being used.
     *
     * @param emitter The emitter this action has been added to.
     */
    addedToEmitter(emitter) {
        this.action.addedToEmitter(emitter);
    }
    /**
     * Calls the removedFromEmitter method of the action being used.
     *
     * @param emitter The emitter this action has been added to.
     */
    removedFromEmitter(emitter) {
        this.action.removedFromEmitter(emitter);
    }
    /**
     * Checks if the particle is in the zone and if so calls the update
     * method of the action being used.
     *
     * <p>This method is called by the emitter and need not be called by the
     * user.</p>
     *
     * @param emitter The Emitter that created the particle.
     * @param particle The particle to be updated.
     * @param time The duration of the frame - used for time based updates.
     */
    update(emitter, particle, time) {
        if (this.zone.contains(particle.x, particle.y)) {
            if (!this.invertZone) {
                this.action.update(emitter, particle, time);
            }
        }
        else {
            if (this.invertZone) {
                this.action.update(emitter, particle, time);
            }
        }
    }
}
exports.ZonedAction = ZonedAction;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"tslib\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
tslib_1.__exportStar(__webpack_require__(8), exports);
tslib_1.__exportStar(__webpack_require__(74), exports);
tslib_1.__exportStar(__webpack_require__(75), exports);


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const activitybase_1 = __webpack_require__(8);
/**
 * The MoveEmitter activity moves the emitter at a constant velocity.
 */
class MoveEmitter extends activitybase_1.ActivityBase {
    /**
     * The constructor creates a MoveEmitter activity for use by
     * an emitter. To add a MoveEmitter to an emitter, use the
     * emitter's addActvity method.
     *
     * @see org.flintparticles.common.emitters.Emitter#addActivity()
     *
     * @param x The x coordinate of the velocity to move the emitter,
     * in pixels per second.
     * @param y The y coordinate of the velocity to move the emitter,
     * in pixels per second.
     */
    MoveEmitter(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    /**
     * @inheritDoc
     */
    update(emitter, time) {
        emitter.x += this.x * time;
        emitter.y += this.y * time;
    }
}
exports.MoveEmitter = MoveEmitter;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const activitybase_1 = __webpack_require__(8);
/**
 * The RotateEmitter activity rotates the emitter at a constant rate.
 */
class RotateEmitter extends activitybase_1.ActivityBase {
    /**
     * The constructor creates a RotateEmitter activity for use by
     * an emitter. To add a RotateEmitter to an emitter, use the
     * emitter's addActvity method.
     *
     * @see org.flintparticles.common.emitters.Emitter#addActivity()
     *
     * @para angularVelocity The angular velocity for the emitter in
     * radians per second.
     */
    RotateEmitter(angularVelocity = 0) {
        this.angularVelocity = angularVelocity;
    }
    /**
     * @inheritDoc
     */
    update(emitter, time) {
        emitter.rotation += this.angularVelocity * time;
    }
}
exports.RotateEmitter = RotateEmitter;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Easing functions based on Robert Penner's easing functions.
 */
class Back {
    static easeIn(t, b, c, d, s = 1.70158) {
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    }
    static easeOut(t, b, c, d, s = 1.70158) {
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    }
    static easeInOut(t, b, c, d, s = 1.70158) {
        if ((t /= d * 0.5) < 1) {
            return c * 0.5 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
        }
        return c * 0.5 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
    }
}
exports.Back = Back;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Easing functions based on Robert Penner's easing functions.
 */
class Bounce {
    static easeOut(t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
            return c * (7.5625 * t * t) + b;
        }
        else if (t < (2 / 2.75)) {
            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75) + b;
        }
        else if (t < (2.5 / 2.75)) {
            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375) + b;
        }
        else {
            return c * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375) + b;
        }
    }
    static easeIn(t, b, c, d) {
        return c - this.easeOut(d - t, 0, c, d) + b;
    }
    static easeInOut(t, b, c, d) {
        if (t < d * 0.5) {
            return this.easeIn(t * 2, 0, c, d) * 0.5 + b;
        }
        else {
            return this.easeOut(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
        }
    }
}
exports.Bounce = Bounce;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Easing functions based on Robert Penner's easing functions.
 */
class Circular {
    static easeIn(t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    }
    static easeOut(t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    }
    static easeInOut(t, b, c, d) {
        if ((t /= d * 0.5) < 1) {
            return -c * 0.5 * (Math.sqrt(1 - t * t) - 1) + b;
        }
        return c * 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    }
}
exports.Circular = Circular;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Easing functions based on Robert Penner's easing functions.
 */
class Cubic {
    static easeIn(t, b, c, d) {
        return c * (t /= d) * t * t + b;
    }
    static easeOut(t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
    }
    static easeInOut(t, b, c, d) {
        if ((t /= d * 0.5) < 1) {
            return c * 0.5 * t * t * t + b;
        }
        return c * 0.5 * ((t -= 2) * t * t + 2) + b;
    }
}
exports.Cubic = Cubic;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Easing functions based on Robert Penner's easing functions.
 */
class Elastic {
    static easeIn(t, b, c, d, a = 0, p = 0) {
        if (t == 0) {
            return b;
        }
        if ((t /= d) == 1) {
            return b + c;
        }
        if (!p) {
            p = d * 0.3;
        }
        var s;
        if (!a || a < Math.abs(c)) {
            a = c;
            s = p * 0.25;
        }
        else {
            s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        return -(a * Math.pow(2, 10 * (--t)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    }
    static easeOut(t, b, c, d, a = 0, p = 0) {
        if (t == 0) {
            return b;
        }
        if ((t /= d) == 1) {
            return b + c;
        }
        if (!p) {
            p = d * 0.3;
        }
        var s;
        if (!a || a < Math.abs(c)) {
            a = c;
            s = p * 0.25;
        }
        else {
            s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    }
    static easeInOut(t, b, c, d, a = 0, p = 0) {
        if (t == 0) {
            return b;
        }
        if ((t /= d * 0.5) == 2) {
            return b + c;
        }
        if (!p) {
            p = d * (0.3 * 1.5);
        }
        var s;
        if (!a || a < Math.abs(c)) {
            a = c;
            s = p * 0.25;
        }
        else {
            s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        if (t < 1) {
            return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        }
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
    }
}
exports.Elastic = Elastic;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Easing functions based on Robert Penner's easing functions.
 */
class Exponential {
    static easeIn(t, b, c, d) {
        return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    }
    static easeOut(t, b, c, d) {
        return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    }
    static easeInOut(t, b, c, d) {
        if (t == 0) {
            return b;
        }
        if (t == d) {
            return b + c;
        }
        if ((t /= d * 0.5) < 1) {
            return c * 0.5 * Math.pow(2, 10 * (t - 1)) + b;
        }
        return c * 0.5 * (-Math.pow(2, -10 * --t) + 2) + b;
    }
}
exports.Exponential = Exponential;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Linear easing functions based on Robert Penner's easing functions.
 */
class Linear {
    static easeNone(t, b, c, d) {
        return c * t / d + b;
    }
    static easeIn(t, b, c, d) {
        return c * t / d + b;
    }
    static easeOut(t, b, c, d) {
        return c * t / d + b;
    }
    static easeInOut(t, b, c, d) {
        return c * t / d + b;
    }
}
exports.Linear = Linear;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Easing functions based on Robert Penner's easing functions.
 */
class Quadratic {
    static easeIn(t, b, c, d) {
        return c * (t /= d) * t + b;
    }
    static easeOut(t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    }
    static easeInOut(t, b, c, d) {
        if ((t /= d * 0.5) < 1) {
            return c * 0.5 * t * t + b;
        }
        return -c * 0.5 * ((--t) * (t - 2) - 1) + b;
    }
}
exports.Quadratic = Quadratic;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Easing functions based on Robert Penner's easing functions.
 */
class Quartic {
    static easeIn(t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
    }
    static easeOut(t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    }
    static easeInOut(t, b, c, d) {
        if ((t /= d * 0.5) < 1) {
            return c * 0.5 * t * t * t * t + b;
        }
        return -c * 0.5 * ((t -= 2) * t * t * t - 2) + b;
    }
}
exports.Quartic = Quartic;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Easing functions based on Robert Penner's easing functions.
 */
class Quintic {
    static easeIn(t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    }
    static easeOut(t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    }
    static easeInOut(t, b, c, d) {
        if ((t /= d * 0.5) < 1) {
            return c * 0.5 * t * t * t * t * t + b;
        }
        return c * 0.5 * ((t -= 2) * t * t * t * t + 2) + b;
    }
}
exports.Quintic = Quintic;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Easing functions based on Robert Penner's easing functions.
 */
class Sine {
    static easeIn(t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI * 0.5)) + c + b;
    }
    static easeOut(t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI * 0.5)) + b;
    }
    static easeInOut(t, b, c, d) {
        return -c * 0.5 * (Math.cos(Math.PI * t / d) - 1) + b;
    }
}
exports.Sine = Sine;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A set of easing equations that start and end at the end value and reach the start value
 * at the half-time point. They are designed for modifying the particle energy such that it
 * starts and ends at zero and peaks at half way through the particle's lifetime.
 */
class TwoWay {
    /**
     * Gives a linear increase and decrease in energy either side of the centre point.
     */
    static linear(t, b, c, d) {
        if ((t = 2 * t / d) <= 1) {
            return (1 - t) * c + b;
        }
        return (t - 1) * c + b;
    }
    /**
     * Energy increases and then decreases as if following the top half of a circle.
     */
    static circular(t, b, c, d) {
        t = 1 - (2 * t / d);
        return (1 - Math.sqrt(1 - t * t)) * c + b;
    }
    /**
     * Energy follows the first half of a sine wave.
     */
    static sine(t, b, c, d) {
        return (1 - Math.sin(Math.PI * t / d)) * c + b;
    }
    /**
     * Eases towards the middle using a quadratic curve.
     */
    static quadratic(t, b, c, d) {
        t = 1 - (2 * t / d);
        return t * t * c + b;
    }
    /**
     * Eases towards the middle using a cubic curve.
     */
    static cubic(t, b, c, d) {
        t = 1 - (2 * t / d);
        if (t < 0)
            t = -t;
        return t * t * t * c + b;
    }
    /**
     * Eases towards the middle using a quartic curve.
     */
    static quartic(t, b, c, d) {
        t = 1 - (2 * t / d);
        return t * t * t * t * c + b;
    }
    /**
     * Eases towards the middle using a quintic curve.
     */
    static quintic(t, b, c, d) {
        t = 1 - (2 * t / d);
        if (t < 0)
            t = -t;
        return t * t * t * t * t * c + b;
    }
}
exports.TwoWay = TwoWay;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const particles_1 = __webpack_require__(17);
const eventemitter3_1 = __webpack_require__(3);
const spawners_1 = __webpack_require__(19);
const utils_1 = __webpack_require__(20);
/**
 * An Emitter manages the creation and state of particles.
 */
class Emitter extends eventemitter3_1.EventEmitter {
    constructor() {
        super();
        this.particleFactory = new particles_1.ParticleFactory();
        this.initializers = [];
        this.actions = [];
        this.activities = [];
        this.particles = [];
        this._spawner = new spawners_1.ZeroSpawner();
        this._running = false;
        this.started = false;
        this.updating = false;
        this._useInternalUpdate = true;
        this.frameUpdateCallbacks = [];
        /**
         * Used to alternate the direction in which the particles in the particles
         * array are processed, to iron out errors from always processing them in
         * the same order.
         */
        this._processLastFirst = false;
        this.x = 0;
        this.y = 0;
        /**Rotation in radians */
        this.rotation = 0;
        /**Indicates whether the particles should be arranged into spacially sorted arrays. */
        this.spaceSort = false;
    }
    /**
     * Add an Initializer to the Emitter.
     * @param initializer The Initializer to add.
     */
    addInitializer(initializer) {
        for (var i = 0; i < this.initializers.length; i++) {
            if (this.initializers[i].priority < initializer.priority)
                break;
        }
        this.initializers.splice(i, 0, initializer);
        initializer.addedToEmitter(this);
    }
    /**
     * Remove an Initializer from the Emitter.
     * @param initializer The Initializer to remove.
     */
    removeInitializer(initializer) {
        var index;
        if ((index = this.initializers.indexOf(initializer)) !== -1) {
            this.initializers.splice(index, 1);
            initializer.removedFromEmitter(this);
        }
    }
    /**
     * Check if the Emitter has an Initializer
     * @param initializer The Initializer to test for.
     */
    hasInitializer(initializer) {
        return this.initializers.indexOf(initializer) !== -1;
    }
    /**
     * Check if the Emitter has an Initializer of the given Class
     * @example
     * emitter.hasInitializerOfType(ColorInit);
     * @param cls The Class to test for.
     */
    hasInitializerOfType(cls) {
        for (var i = 0; i < this.initializers.length; i++) {
            if (this.initializers[i].constructor.name === cls.name)
                return true;
        }
        return false;
    }
    /**
     * Add an Activity to the Emitter.
     * @param activity The Activity to add.
     */
    addActivity(activity) {
        for (var i = 0; i < this.activities.length; i++) {
            if (this.activities[i].priority < activity.priority)
                break;
        }
        this.activities.splice(i, 0, activity);
        activity.addedToEmitter(this);
    }
    /**
     * Remove an Activity from the Emitter.
     * @param activity The Activity to remove.
     */
    removeActivity(activity) {
        var index;
        if ((index = this.activities.indexOf(activity)) !== -1) {
            this.activities.splice(index, 1);
            activity.removedFromEmitter(this);
        }
    }
    /**
     * Check if the Emitter has an Activity
     * @param activity The Activity to test for.
     */
    hasActivity(activity) {
        return this.activities.indexOf(activity) !== -1;
    }
    /**
     * Check if the Emitter has an Activity of the given Class
     * @example
     * emitter.hasActivityOfType(ColorInit);
     * @param cls The Class to test for.
     */
    hasActivityOfType(cls) {
        for (var i = 0; i < this.activities.length; i++) {
            if (this.activities[i].constructor.name === cls.name)
                return true;
        }
        return false;
    }
    /**
     * Add an Action to the Emitter.
     * @param action The Action to add.
     */
    addAction(action) {
        for (var i = 0; i < this.actions.length; i++) {
            if (this.actions[i].priority < action.priority)
                break;
        }
        this.actions.splice(i, 0, action);
        action.addedToEmitter(this);
    }
    /**
     * Remove an Action from the Emitter.
     * @param action The Action to remove.
     */
    removeAction(action) {
        var index;
        if ((index = this.actions.indexOf(action)) !== -1) {
            this.actions.splice(index, 1);
            action.removedFromEmitter(this);
        }
    }
    /**
     * Check if the Emitter has an Action
     * @param action The Action to test for.
     */
    hasAction(action) {
        return this.actions.indexOf(action) !== -1;
    }
    /**
     * Add a frameUpdateCallback to the emitter.
     * @param cb The callback to add.
     */
    addFrameUpdateCallback(cb) {
        this.frameUpdateCallbacks.push(cb);
    }
    removeFrameUpdateCallback(cb) {
        var index;
        if ((index = this.frameUpdateCallbacks.indexOf(cb)) !== -1) {
            this.frameUpdateCallbacks.splice(index, 1);
        }
    }
    /**
     * Check if the Emitter has an Action of the given Class
     * @example
     * emitter.hasActionOfType(ColorInit);
     * @param cls The Class to test for.
     */
    hasActionOfType(cls) {
        for (var i = 0; i < this.actions.length; i++) {
            if (this.actions[i].constructor.name === cls.name)
                return true;
        }
        return false;
    }
    get particlesArray() { return this.particles; }
    /**
     * Indicates if the emitter is running or not.
     */
    get running() { return this._running; }
    get spawner() { return this._spawner; }
    set spawner(value) {
        this._spawner = value;
        if (this._running)
            this._spawner.startEmitter(this);
    }
    get rotationDegrees() { return Math.asDegrees(this.rotation); }
    set rotationDegrees(value) { this.rotation = Math.asRadians(value); }
    get useInternalUpdate() { return this._useInternalUpdate; }
    set useInternalUpdate(value) {
        if (this._useInternalUpdate != value) {
            this._useInternalUpdate = value;
            if (this.started) {
                if (value)
                    utils_1.FrameUpdater.instance.addListener('update', this.update);
                else
                    utils_1.FrameUpdater.instance.removeListener('update', this.update);
            }
        }
    }
    /**
     * Usedd internally to create a particle.
     */
    createParticle() {
        var particle = this.particleFactory.createParticle();
        this.initParticle(particle);
        for (var i = 0; i < this.initializers.length; i++)
            this.initializers[i].initialize(this, particle);
        this.particles.push(particle);
        this.emit('particalCreated', particle);
        return particle;
    }
    /**
     * Used to initialise a particle relative to the Emitter.
     * @param particle The Particle to initialise.
     */
    initParticle(particle) {
        particle.x = this.x;
        particle.y = this.y;
        particle.previousX = this.x;
        particle.previousY = this.y;
        particle.rotation = this.rotation;
    }
    sortParticles() {
        if (this.spaceSort) {
            this.particles.sort((a, b) => {
                return a.x - b.x || a.y - b.y;
            });
            for (var i = 0; i < this.particles.length; i++)
                this.particles[i].sortID = i;
        }
    }
    /**
     * This method allows a particle to be manually added to the Emitter
     * @param particle The Particle to add to the Emitter.
     * @param applyInitializers Indicates whether to apply the emitter's initializers to the Particle.
     */
    addParticle(particle, applyInitializers = false) {
        if (applyInitializers) {
            for (var i = 0; i < this.initializers.length; i++) {
                this.initializers[i].initialize(this, particle);
            }
        }
        this.particles.push(particle);
        this.emit('particleAdded', particle);
    }
    /**
     * Manually add multiple particles to the Emitter.
     * @param particles An array of Particles to add to the Emitter.
     * @param applyInitializers Indicates whether to apply the emitter's initializers to the Particles.
     */
    addParticles(particles, applyInitializers = false) {
        for (var i = 0; i < particles.length; i++) {
            if (applyInitializers) {
                for (var j = 0; j < this.initializers.length; j++) {
                    this.initializers[j].initialize(this, particles[i]);
                }
            }
            this.particles.push(particles[i]);
            this.emit('particleAdded', particles[i]);
        }
    }
    /**
     * Remove a particle from the emitter.
     * @param particle The Particle to remove.
     * @return true if the particle was remove, false otherwise.
     */
    removeParticle(particle) {
        var i = this.particles.indexOf(particle);
        if (i != -1) {
            if (this.updating) {
                this.once('emitterUpdated', () => {
                    this.particles.remove(particle);
                    this.emit('particleRemoved', particle);
                });
            }
            else {
                this.particles.remove(particle);
                this.emit('particleRemoved', particle);
            }
            return true;
        }
        return false;
    }
    /**
     * Remove multiple particles from the emitter.
     * @param particles An array of the particles to remove.
     */
    removeParticles(particles) {
        if (this.updating) {
            this.once('emitterUpdated', () => {
                for (var i = 0; i < particles.length; i++) {
                    this.particles.remove(particles[i]);
                    this.emit('particleRemoved', particles[i]);
                }
            });
        }
        else {
            for (var i = 0; i < particles.length; i++) {
                this.particles.remove(particles[i]);
                this.emit('particleRemoved', particles[i]);
            }
        }
    }
    /**
     * Kill all of the particles of the emitter.
     */
    killAllParticles() {
        for (var i = 0; i < this.particles.length; i++) {
            this.emit('particleDead', this.particles[i]);
            this.particleFactory.disposeParticle(this.particles[i]);
        }
        this.particles = [];
    }
    /**
     * Starts the emitter.
     */
    start() {
        if (this._useInternalUpdate)
            utils_1.FrameUpdater.instance.addListener('update', this.update);
        this.started = true;
        this._running = true;
        for (var i = 0; i < this.activities.length; i++) {
            this.activities[i].initialize(this);
        }
        var count = this._spawner.startEmitter(this);
        for (var i = 0; i < count; i++)
            this.createParticle();
    }
    /**
     * This updates the emitter. If useInternalUpdate is true this will be automatically called each animation frame.
     * @param time The duration, in milliseconds, from the last update.
     */
    update(time) {
        if (!this._running)
            return;
        this.updating = true;
        var spawnerComplete = this._spawner.isComplete;
        var count = this._spawner.updateEmitter(this, time);
        if (spawnerComplete !== this.spawner.isComplete)
            this.emit('spawnerComplete', this);
        for (var i = 0; i < count; i++)
            this.createParticle();
        this.sortParticles();
        for (var i = 0; i < this.frameUpdateCallbacks.length; i++)
            this.frameUpdateCallbacks[i](this, time);
        for (var i = 0; i < this.activities.length; i++)
            this.activities[i].update(this, time);
        for (var i = 0; i < this.particles.length; i++) {
            if (this._processLastFirst)
                i = this.particles.length - 1 - i;
            for (var j = 0; j < this.actions.length; j++) {
                this.actions[i].update(this, this.particles[i], time);
            }
        }
        for (var i = this.particles.length - 1; i >= 0; i--) {
            var particle = this.particles[i];
            if (particle.isDead) {
                this.particles.splice(i, 1);
                this.emit('particleDead', particle);
                this.particleFactory.disposeParticle(particle);
            }
        }
        if (this.particles.length === 0)
            this.emit('emitterEmpty', this);
        this.updating = false;
        this.emit('emitterUpdated', this);
    }
    /**
     * Pause the emitter.
     */
    pause() {
        this._running = false;
    }
    /**
     * Resume the emitter.
     */
    resume() {
        this._running = true;
    }
    /**
     * Stops the emitter killing all particles.
     */
    stop() {
        if (this._useInternalUpdate)
            utils_1.FrameUpdater.instance.removeListener('update', this.update);
        this.started = false;
        this._running = false;
        this.killAllParticles();
    }
    /**
     * Makes the emitter skip forwards a period of time with a single update.
     * Used when you want the emitter to look like it's been running for a while.
     * @param time The time to skip ahead, in milliseconds.
     * @param frameRate The framerate for calculating the new states of the particles, in frames per second.
     */
    runAhead(time, frameRate = 10) {
        var step = 1000 / frameRate;
        while (time > 0) {
            time -= step;
            this.update(step);
        }
    }
}
exports.Emitter = Emitter;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"tslib\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
// flec is a particle engine
tslib_1.__exportStar(__webpack_require__(88), exports);
tslib_1.__exportStar(__webpack_require__(96), exports);
tslib_1.__exportStar(__webpack_require__(48), exports);
tslib_1.__exportStar(__webpack_require__(73), exports);
tslib_1.__exportStar(__webpack_require__(17), exports);
tslib_1.__exportStar(__webpack_require__(19), exports);
tslib_1.__exportStar(__webpack_require__(120), exports);
tslib_1.__exportStar(__webpack_require__(20), exports);


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const initializerbase_1 = __webpack_require__(2);
/**
 * The AbsolutePosition Initializer sets the initial location of the particle.
 *
 * <p>The class uses zones to place the particle. A zone defines a region
 * in the coordinate space of the particle system, independent of the emitter's position,
 * and the particle is placed at a random point within
 * that region. For precise placement, the Point zone defines a single
 * point at which all particles will be placed. Various zones (and the
 * Zones interface for use when implementing custom zones) are defined
 * in the zones module.</p>
 */
class AbsolutePosition extends initializerbase_1.InitializerBase {
    /**
     * The constructor creates a AbsolutePosition initializer for use by
     * an emitter. To add a PositionAbsolute to all particles created by an emitter, use the
     * emitter's addInitializer method.
     *
     * @param zone The zone to place all particles in.
     */
    constructor(zone) {
        super();
        this.zone = zone;
    }
    /**
     * @inheritDoc
     */
    initialize(_emitter, particle) {
        var loc = this.zone.getLocation();
        particle.x = loc.x;
        particle.y = loc.y;
        particle.previousX = particle.x;
        particle.previousY = particle.y;
    }
}
exports.AbsolutePosition = AbsolutePosition;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const initializerbase_1 = __webpack_require__(2);
const core_1 = __webpack_require__(1);
/**
 * The AbsoluteRotation Initializer sets the rotation of the particle. The rotation is
 * independent of the rotation of the emitter.
 */
class AbsoluteRotation extends initializerbase_1.InitializerBase {
    /**
     * The constructor creates a AbsoluteRotation initializer for use by
     * an emitter. To add a AbsoluteRotation to all particles created by an emitter, use the
     * emitter's addInitializer method.
     *
     * <p>The rotation of particles initialized by this class
     * will be a random value between the minimum and maximum
     * values set. If no maximum value is set, the minimum value
     * is used with no variation.</p>
     *
     * @param minAngle The minimum angle, in radians, for the particle's rotation.
     * @param maxAngle The maximum angle, in radians, for the particle's rotation.
     */
    constructor(minAngle = 0, maxAngle = NaN) {
        super();
        this.minAngle = minAngle;
        this.maxAngle = maxAngle;
    }
    /**
     * When reading, returns the average of minAngle and maxAngle.
     * When writing this sets both maxAngle and minAngle to the
     * same angle value.
     */
    get angle() {
        return this.minAngle == this.maxAngle ? this.minAngle : (this.maxAngle + this.minAngle) / 2;
    }
    set angle(value) {
        this.maxAngle = this.minAngle = value;
    }
    /**
     * @inheritDoc
     */
    initialize(_emitter, particle) {
        if (isNaN(this.maxAngle)) {
            particle.rotation = this.minAngle;
        }
        else {
            particle.rotation = this.minAngle + core_1.Random.random.random() * (this.maxAngle - this.minAngle);
        }
    }
}
exports.AbsoluteRotation = AbsoluteRotation;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const initializerbase_1 = __webpack_require__(2);
const core_1 = __webpack_require__(1);
class AlphaInitializer extends initializerbase_1.InitializerBase {
    /**
     * Constructor
     * @param min The minimum alpha value.
     * @param max The maximum aplha value.
     */
    constructor(min = 1, max) {
        super();
        this._priority = -10;
        this.min = min;
        this.max = max !== undefined ? max : min;
    }
    /**
     * @inheritDoc
     */
    initialize(_emitter, particle) {
        var alpha = this.max === this.min ? this.min : this.min + core_1.Random.random.random() * (this.max - this.min);
        particle.color.a = alpha;
    }
}
exports.AlphaInitializer = AlphaInitializer;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const initializerbase_1 = __webpack_require__(2);
const core_1 = __webpack_require__(1);
/**
 * This initializer selects one of multiple initializers with optional weighting.
 */
class ChoiceInitializer extends initializerbase_1.InitializerBase {
    constructor(initializers) {
        super();
        this._initializers = new core_1.WeightedArray();
        if (initializers !== undefined && initializers.length > 0) {
            if (initializers[0] instanceof Array) {
                for (let i of initializers)
                    this._initializers.add(i[0], i[1]);
            }
            else {
                for (let i of initializers)
                    this._initializers.add(i, 1);
            }
        }
    }
    addInitializer(initializer, weight = 1) {
        this._initializers.add(initializer, weight);
    }
    removeInitializer(initializer) {
        this._initializers.remove(initializer);
    }
    /**
     *
     */
    initialize(emitter, particle) {
        this._initializers.getRandomValue().initialize(emitter, particle);
    }
}
exports.ChoiceInitializer = ChoiceInitializer;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const initializerbase_1 = __webpack_require__(2);
const core_1 = __webpack_require__(1);
const core_2 = __webpack_require__(1);
/**
 * This initializer sets the initial color of a particle from a color between two colors.
 */
class ColorInitializer extends initializerbase_1.InitializerBase {
    constructor(min = new core_1.RGBA(1, 1, 1, 1), max) {
        super();
        this.min = min;
        this.max = max;
    }
    initialize(_emitter, particle) {
        particle.color = this.max === undefined ? this.min.clone() : core_1.RGBA.lerp(this.min, this.max, core_2.Random.random.random());
    }
}
exports.ColorInitializer = ColorInitializer;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const initializerbase_1 = __webpack_require__(2);
/**
 * This initializer copies properties from an dictionary into the particles data map.
 */
class DataInitializer extends initializerbase_1.InitializerBase {
    constructor(data) {
        super();
        if (data instanceof Map) {
            for (var [key, value] of data.entries())
                this.data.set(key, value);
        }
        else {
            for (var key in data) {
                if (data.hasOwnProperty(key))
                    this.data.set(key, data[key]);
            }
        }
    }
    initialize(_emitter, particle) {
        for (var [key, value] of this.data.entries())
            particle.data.set(key, value);
    }
}
exports.DataInitializer = DataInitializer;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"tslib\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
tslib_1.__exportStar(__webpack_require__(2), exports);
tslib_1.__exportStar(__webpack_require__(92), exports);
tslib_1.__exportStar(__webpack_require__(100), exports);
tslib_1.__exportStar(__webpack_require__(99), exports);
tslib_1.__exportStar(__webpack_require__(93), exports);
tslib_1.__exportStar(__webpack_require__(94), exports);
tslib_1.__exportStar(__webpack_require__(95), exports);
tslib_1.__exportStar(__webpack_require__(97), exports);
tslib_1.__exportStar(__webpack_require__(98), exports);
tslib_1.__exportStar(__webpack_require__(90), exports);
tslib_1.__exportStar(__webpack_require__(101), exports);
tslib_1.__exportStar(__webpack_require__(102), exports);
tslib_1.__exportStar(__webpack_require__(91), exports);
tslib_1.__exportStar(__webpack_require__(103), exports);
tslib_1.__exportStar(__webpack_require__(104), exports);
tslib_1.__exportStar(__webpack_require__(105), exports);


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const initializerbase_1 = __webpack_require__(2);
/**
 * This initializer collects a number of initializers into a single larger initializer.
 */
class InitializerGroup extends initializerbase_1.InitializerBase {
    constructor(...initializers) {
        super();
        this.initializers = [];
        for (var i of initializers) {
            this.addInitializer(i);
        }
    }
    addInitializer(i) {
        this.initializers.push(i);
    }
    removeInitializer(i) {
        this.initializers.remove(i);
    }
    addedToEmitter(emitter) {
        for (var i = 0; i < this.initializers.length; i++)
            this.initializers[i].addedToEmitter(emitter);
    }
    removedFromEmitter(emitter) {
        for (var i = 0; i < this.initializers.length; i++)
            this.initializers[i].removedFromEmitter(emitter);
    }
    initialize(emitter, particle) {
        for (var i = 0; i < this.initializers.length; i++)
            this.initializers[i].initialize(emitter, particle);
    }
}
exports.InitializerGroup = InitializerGroup;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const initializerbase_1 = __webpack_require__(2);
/**
 * The Position Initializer sets the initial location of the particle.
 *
 * <p>The class uses zones to place the particle. A zone defines a region
 * in relation to the emitter and the particle is placed at a random point within
 * that region. For precise placement, the Point zone defines a single
 * point at which all particles will be placed. Various zones (and the
 * Zones interface for use when implementing custom zones) are defined
 * in the org.flintparticles.twoD.zones package.</p>
 */
class Position extends initializerbase_1.InitializerBase {
    /**
     * The constructor creates a Position initializer for use by
     * an emitter. To add a Position to all particles created by an emitter, use the
     * emitter's addInitializer method.
     *
     * @param zone The zone to place all particles in.
     */
    constructor(zone) {
        super();
        this.zone = zone;
    }
    /**
     * @inheritDoc
     */
    initialize(_emitter, particle) {
        var loc = this.zone.getLocation();
        if (particle.rotation == 0) {
            particle.x += loc.x;
            particle.y += loc.y;
        }
        else {
            var sin = Math.sin(particle.rotation);
            var cos = Math.cos(particle.rotation);
            particle.x += cos * loc.x - sin * loc.y;
            particle.y += cos * loc.y + sin * loc.x;
        }
        particle.previousX = particle.x;
        particle.previousY = particle.y;
    }
}
exports.Position = Position;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const initializerbase_1 = __webpack_require__(2);
/**
 * This Initializer sets the value of a given property.
 */
class PropertyInitializer extends initializerbase_1.InitializerBase {
    constructor(property, value = 1) {
        super();
        this.property = property;
        this.value = value;
    }
    initialize(_emitter, particle) {
        particle[this.property] = this.value;
    }
}
exports.PropertyInitializer = PropertyInitializer;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const initializerbase_1 = __webpack_require__(2);
const core_1 = __webpack_require__(1);
/**
 * This Initializer sets the value of a given property to a random value between a minimum and maximum
 */
class RangeInitializer extends initializerbase_1.InitializerBase {
    constructor(property, min, max) {
        super();
        this.property = property;
        this.min = min;
        this.max = max !== undefined ? max : min;
    }
    initialize(_emitter, particle) {
        var value = this.max === this.min ? this.min : this.min + core_1.Random.random.random() * (this.max - this.min);
        particle[this.property] = value;
    }
}
exports.RangeInitializer = RangeInitializer;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const initializerbase_1 = __webpack_require__(2);
const core_1 = __webpack_require__(1);
/**
 * The RotateVelocity Initializer sets the angular velocity of the particle.
 * It is usually combined with the Rotate action to rotate the particle
 * using this angular velocity.
 */
class RotateVelocity extends initializerbase_1.InitializerBase {
    /**
     * The constructor creates a RotateVelocity initializer for use by
     * an emitter. To add a RotateVelocity to all particles created by an emitter, use the
     * emitter's addInitializer method.
     *
     * <p>The angularVelocity of particles initialized by this class
     * will be a random value between the minimum and maximum
     * values set. If no maximum value is set, the minimum value
     * is used with no variation.</p>
     *
     * @param minAngVelocity The minimum angularVelocity, in
     * radians per second, for the particle's angularVelocity.
     * @param maxAngVelocity The maximum angularVelocity, in
     * radians per second, for the particle's angularVelocity.
     */
    constructor(minAngVelocity = 0, maxAngVelocity = NaN) {
        super();
        this.minAngularVelocity = minAngVelocity;
        this.maxAngularVelocity = maxAngVelocity;
    }
    /**
     * When reading, returns the average of minAngVelocity and maxAngVelocity.
     * When writing this sets both maxAngVelocity and minAngVelocity to the
     * same angular velocity value.
     */
    get angularVelocity() {
        return this.minAngularVelocity == this.maxAngularVelocity ? this.minAngularVelocity : (this.maxAngularVelocity + this.minAngularVelocity) / 2;
    }
    set angularVelocity(value) {
        this.maxAngularVelocity = this.minAngularVelocity = value;
    }
    /**
     * @inheritDoc
     */
    initialize(_emitter, particle) {
        if (isNaN(this.maxAngularVelocity)) {
            particle.angularVelocity = this.minAngularVelocity;
        }
        else {
            particle.angularVelocity = this.minAngularVelocity + core_1.Random.random.random() * (this.maxAngularVelocity - this.minAngularVelocity);
        }
    }
}
exports.RotateVelocity = RotateVelocity;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const initializerbase_1 = __webpack_require__(2);
const core_1 = __webpack_require__(1);
/**
 * The Rotation Initializer sets the rotation of the particle. The rotation is
 * relative to the rotation of the emitter.
 */
class Rotation extends initializerbase_1.InitializerBase {
    /**
     * The constructor creates a Rotation initializer for use by
     * an emitter. To add a Rotation to all particles created by an emitter, use the
     * emitter's addInitializer method.
     *
     * <p>The rotation of particles initialized by this class
     * will be a random value between the minimum and maximum
     * values set. If no maximum value is set, the minimum value
     * is used with no variation.</p>
     *
     * @param minAngle The minimum angle, in radians, for the particle's rotation.
     * @param maxAngle The maximum angle, in radians, for the particle's rotation.
     */
    constructor(minAngle = 0, maxAngle = NaN) {
        super();
        this.minAngle = minAngle;
        this.maxAngle = maxAngle;
    }
    /**
     * When reading, returns the average of minAngle and maxAngle.
     * When writing this sets both maxAngle and minAngle to the
     * same angle value.
     */
    get angle() {
        return this.minAngle == this.maxAngle ? this.minAngle : (this.maxAngle + this.minAngle) / 2;
    }
    set angle(value) {
        this.maxAngle = this.minAngle = value;
    }
    /**
     * @inheritDoc
     */
    initialize(_emitter, particle) {
        if (isNaN(this.maxAngle)) {
            particle.rotation += this.minAngle;
        }
        else {
            particle.rotation += this.minAngle + core_1.Random.random.random() * (this.maxAngle - this.minAngle);
        }
    }
}
exports.Rotation = Rotation;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const initializerbase_1 = __webpack_require__(2);
const core_1 = __webpack_require__(1);
/**
 * The ScaleAllInit Initializer sets the size of the particle
 * and adjusts its mass and collision radius accordingly.
 *
 * <p>This initializer has a priority of -10 to ensure it occurs after
 * mass and radius assignment classes like CollisionRadiusInit and MassInit.</p>
 */
class ScaleAllInit extends initializerbase_1.InitializerBase {
    /**
     * The constructor creates a ScaleAllInit initializer for use by
     * an emitter. To add a ScaleAllInit to all particles created by an emitter, use the
     * emitter's addInitializer method.
     *
     * <p>The scale factor of particles initialized by this class
     * will be a random value between the minimum and maximum
     * values set. If no maximum value is set, the minimum value
     * is used with no variation.</p>
     *
     * @param minScale the minimum scale factor for particles
     * initialized by the instance.
     * @param maxScale the maximum scale factor for particles
     * initialized by the instance.
     */
    constructor(minScale = 1, maxScale = NaN) {
        super();
        this._priority = -10;
        this.minScale = minScale;
        this.maxScale = isNaN(maxScale) ? minScale : maxScale;
    }
    /**
     * When reading, returns the average of minScale and maxScale.
     * When writing this sets both maxScale and minScale to the
     * same scale value.
     */
    get scale() {
        return this.minScale == this.maxScale ? this.minScale : (this.maxScale + this.minScale) / 2;
    }
    set scale(value) {
        this.maxScale = this.minScale = value;
    }
    /**
     * @inheritDoc
     */
    initialize(_emitter, particle) {
        var scale;
        if (this.maxScale == this.minScale) {
            scale = this.minScale;
        }
        else {
            scale = this.minScale + core_1.Random.random.random() * (this.maxScale - this.minScale);
        }
        particle.scale = scale;
        particle.mass *= scale * scale;
        particle.collisionRadius *= scale;
    }
}
exports.ScaleAllInit = ScaleAllInit;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const initializerbase_1 = __webpack_require__(2);
/**
 * The Velocity Initializer sets the velocity of the particle. It is
 * usually combined with the Move action to move the particle
 * using this velocity.
 *
 * <p>The initial velocity is defined using a zone from the
 * zones module. The use of zones enables diverse
 * ranges of velocities. For example, to use a specific velocity,
 * a Point zone can be used. To use a varied speed in a specific
 * direction, a LineZone zone can be used. For a fixed speed in
 * a varied direction, a Disc or DiscSector zone with identical
 * inner and outer radius can be used. A Disc or DiscSector with
 * different inner and outer radius produces a range of speeds
 * in a range of directions.</p>
 */
class Velocity extends initializerbase_1.InitializerBase {
    /**
     * The constructor creates a Velocity initializer for use by
     * an emitter. To add a Velocity to all particles created by an emitter, use the
     * emitter's addInitializer method.
     *
     * @param velocity The zone to use for creating the velocity.
     */
    constructor(zone) {
        super();
        this.zone = zone;
    }
    /**
     * @inheritDoc
     */
    initialize(_emitter, particle) {
        var loc = this.zone.getLocation();
        if (particle.rotation == 0) {
            particle.velX = loc.x;
            particle.velY = loc.y;
        }
        else {
            var sin = Math.sin(particle.rotation);
            var cos = Math.cos(particle.rotation);
            particle.velX = cos * loc.x - sin * loc.y;
            particle.velY = cos * loc.y + sin * loc.x;
        }
    }
}
exports.Velocity = Velocity;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const initializerbase_1 = __webpack_require__(2);
const core_1 = __webpack_require__(1);
/**
 * This Initializer sets the value of a given property choosing from a value from a weighted array.
 */
class WeightedPropertyInitializer extends initializerbase_1.InitializerBase {
    constructor(property, values) {
        super();
        this.property = property;
        this.values = values;
        this._values = new core_1.WeightedArray();
        if (values !== undefined && values.length > 0) {
            if (values[0] instanceof Array) {
                for (let i of values)
                    this._values.add(i[0], i[1]);
            }
            else {
                for (let i of values)
                    this._values.add(i, 1);
            }
        }
    }
    initialize(_emitter, particle) {
        particle[this.property] = this._values.getRandomValue();
    }
}
exports.WeightedPropertyInitializer = WeightedPropertyInitializer;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const particle_1 = __webpack_require__(18);
/**
 * ParticleFactory manages the creation and reuse of particles.
 */
class ParticleFactory {
    /**
     * Obtains a new particle, either from the pool of dead particles, or a new Particle if none are available.
     */
    createParticle() {
        if (this.particlePool.length)
            return this.particlePool.pop();
        else
            return new particle_1.Particle();
    }
    /**
     * Returns a particle to the particle pool for reuse.
     * @param particle The Particle to return.
     */
    disposeParticle(particle) {
        particle.initialize();
        this.particlePool.push(particle);
    }
    /**
     * Empties the particle pool.
     */
    clear() {
        this.particlePool = [];
    }
}
exports.ParticleFactory = ParticleFactory;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The Blast spawner causes the emitter to create a single burst of particles when it starts and then emits no further particles.
 */
class Blast {
    constructor(ammount = 0) {
        this.isComplete = false;
        this.isRunning = false;
        this.ammount = ammount;
    }
    startEmitter(_emitter) {
        this.isComplete = true;
        return this.ammount;
    }
    updateEmitter(_emitter, _time) {
        return 0;
    }
    stop() {
    }
    resume() {
    }
}
exports.Blast = Blast;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The Pulse spawner causes the emitter to create groups of particles at regular intervals.
 */
class Pulse {
    /**
     *
     * @param period The time in milliseconds between each pulse.
     * @param quantity The number of particles to emit at each pulse.
     */
    constructor(period = 1, quantity = 0) {
        this.period = period;
        this.quantity = quantity;
        this.isComplete = false;
        this.isRunning = false;
    }
    startEmitter(_emitter) {
        this.isRunning = true;
        this._timeToNext = this.period;
        return this.quantity;
    }
    updateEmitter(_emitter, time) {
        var count = 0;
        if (this.isRunning) {
            this._timeToNext -= time;
            while (this._timeToNext <= 0) {
                count += this.quantity;
                this._timeToNext += this.period;
            }
        }
        return count;
    }
    stop() {
        this.isRunning = false;
    }
    resume() {
        this.isRunning = true;
    }
}
exports.Pulse = Pulse;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(1);
/**
 * The Random spawner causes the emitter to create groups of particles at random intervals.
 */
class Random {
    /**
     *
     * @param minRate The minimum number of particles to emit per second.
     * @param maxRate The maximum number of particles to emit per second.
     */
    constructor(minRate = 0, maxRate = 1) {
        this.minRate = minRate;
        this.maxRate = maxRate;
        this.isComplete = false;
        this.isRunning = false;
    }
    newTimeToNext() {
        var r = core_1.Random.random.random();
        return 1000 / ((1 - r) * this.minRate + r * this.maxRate);
    }
    startEmitter(_emitter) {
        this.isRunning = true;
        this._timeToNext = this.newTimeToNext();
        return 0;
    }
    updateEmitter(_emitter, time) {
        var count = 0;
        if (this.isRunning) {
            this._timeToNext -= time;
            while (this._timeToNext <= 0) {
                count++;
                this._timeToNext += this.newTimeToNext();
            }
        }
        return count;
    }
    stop() {
        this.isRunning = false;
    }
    resume() {
        this.isRunning = true;
    }
}
exports.Random = Random;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The steady spawner causes the emitter to create particles at a steady rate.
 */
class Steady {
    /**
     *
     * @param rate The number of particles to spawn per second.
     */
    constructor(rate = 0) {
        this.isComplete = false;
        this.isRunning = false;
        this.rate = rate;
    }
    get rate() { return this._rate; }
    set rate(value) {
        if (!value || value < 0)
            value = 0;
        if (this._rate !== value) {
            this._rate = value;
            var rateInv = this._rateInv;
            this._rateInv = value ? 1000 / value : Number.MAX_VALUE;
            if (this._rate && value) {
                var timePassed = rateInv - this._timeToNext;
                this._timeToNext = Math.max(this._rateInv - timePassed, 0);
            }
            else {
                this._timeToNext = this._rateInv;
            }
        }
    }
    startEmitter(_emitter) {
        this.isRunning = true;
        this._timeToNext = this._rateInv;
        return 0;
    }
    updateEmitter(_emitter, time) {
        var count = 0;
        if (this.isRunning) {
            this._timeToNext -= time;
            while (this._timeToNext <= 0) {
                count++;
                this._timeToNext += this._rateInv;
            }
        }
        return count;
    }
    stop() {
        this.isRunning = false;
    }
    resume() {
        this.isRunning = true;
    }
}
exports.Steady = Steady;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const easing_1 = __webpack_require__(16);
/**
 * The TimePeriod spawner causes the emitter to create particles for a period of time and then stop.
 * The rate of emission over that period can be modified using an easing function.
 */
class TimePeriod {
    /**
     * TimePeriod constructor
     * @param numParticles The number of particles to emit over the full duration of the time period.
     * @param duration The duration of this spawner in milliseconds.
     * @param easingFunction Optional easing function fo distribure the particle emission over the time period.
     */
    constructor(numParticles = 0, duration = 0, easingFunction = easing_1.Linear.easeNone) {
        this.numParticles = numParticles;
        this.duration = duration;
        this.easingFunction = easingFunction;
        this.isRunning = false;
        this.isComplete = false;
    }
    startEmitter(_emitter) {
        this.isRunning = true;
        this._timePassed = 0;
        this._particlesSpawned = 0;
        return 0;
    }
    updateEmitter(_emitter, time) {
        var count = 0;
        if (this.isRunning || this._timePassed < this.duration) {
            this._timePassed += time;
            if (this._timePassed >= this.duration) {
                this.isComplete = true;
                count = this.numParticles - this._particlesSpawned;
                this._particlesSpawned = this.numParticles;
            }
            else {
                var oldParticles = this._particlesSpawned;
                this._particlesSpawned = Math.round(this.easingFunction(this._timePassed, 0, this.numParticles, this.duration));
                count = this._particlesSpawned - oldParticles;
            }
        }
        return count;
    }
    stop() {
        this.isRunning = false;
    }
    resume() {
        this.isRunning = true;
    }
}
exports.TimePeriod = TimePeriod;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The ZeroSpawner spawner causes the emitter to emit no particles.
 */
class ZeroSpawner {
    get isComplete() { return true; }
    get isRunning() { return false; }
    startEmitter(_emitter) {
        return 0;
    }
    updateEmitter(_emitter, _time) {
        return 0;
    }
    stop() {
    }
    resume() {
    }
}
exports.ZeroSpawner = ZeroSpawner;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(1);
const eventemitter3_1 = __webpack_require__(3);
/**
 * This class represents the pixel data of a bitmap image.
 */
class BitmapData extends eventemitter3_1.EventEmitter {
    constructor(src) {
        super();
        this._data = [];
        this._hasLoaded = false;
        this._isLoading = false;
        this.width = 0;
        this.height = 0;
        if (src instanceof HTMLImageElement || typeof src === "string") {
            var image = src instanceof HTMLImageElement ? src : new Image();
            if (!image.complete || typeof src === 'string') {
                this._isLoading = true;
                image.onload = () => { this.loadSource(image); };
                if (typeof src === "string")
                    image.src = src;
            }
            else { // an already loaded image
                this.loadSource(image);
            }
        }
        else {
            this.loadSource(src);
        }
    }
    get hasLoaded() { return this._hasLoaded; }
    get isLoading() { return this._isLoading; }
    loadSource(source) {
        var ctx;
        if (source instanceof HTMLImageElement) {
            var canvas = document.createElement('canvas');
            canvas.width = source.width;
            canvas.height = source.height;
            ctx = canvas.getContext('2d');
            if (ctx)
                ctx.drawImage(source, 0, 0, source.width, source.height);
        }
        else {
            ctx = source.getContext('2d');
        }
        if (ctx) {
            var data = ctx.getImageData(0, 0, source.width, source.height).data;
            for (var i = 0, j = 0; i < data.length; i += 4, j++) {
                this._data[j] = new core_1.RGBA(data[i] / 255, data[i + 1] / 255, data[i + 2] / 255, data[i + 3] / 255);
            }
            this.width = source.width;
            this.height = source.height;
            this._hasLoaded = true;
            this.emit('load', this);
        }
        this._isLoading = false;
    }
    getAtPosition(x = 0, y = 0) {
        return this._hasLoaded ? this._data[y * this.width + x] : new core_1.RGBA(0, 0, 0, 0);
    }
    getAt(i) {
        return this._hasLoaded ? this._data[i] : new core_1.RGBA(0, 0, 0, 0);
    }
}
exports.BitmapData = BitmapData;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class ColorUtil {
    /**
     * Interpolate between 2 colors based on ratio.
     * @param c1 The first color as RGBA.
     * @param c2 The second color as RGBA.
     * @param ratio The ratio in the range [0,1] to mix the colors.
     */
    static interpolate(c1, c2, ratio) {
        var inv = 1 - ratio;
        var red = Math.round(((c1 >>> 24) & 255) * ratio + ((c2 >>> 24) & 255) * inv);
        var green = Math.round(((c1 >>> 16) & 255) * ratio + ((c2 >>> 16) & 255) * inv);
        var blue = Math.round(((c1 >>> 8) & 255) * ratio + ((c2 >>> 8) & 255) * inv);
        var alpha = Math.round((c1 & 255) * ratio + (c2 & 255) * inv);
        return red << 24 | green << 16 | blue << 8 | alpha;
    }
}
exports.ColorUtil = ColorUtil;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const eventemitter3_1 = __webpack_require__(3);
/**
 * FrameUpdater provies a constant tick event used by Emitter if the useInternalTick is true.
 */
class FrameUpdater extends eventemitter3_1.EventEmitter {
    constructor() {
        super(...arguments);
        this.running = false;
        this.time = 0;
        this.id = 0;
    }
    static get instance() {
        if (FrameUpdater._instance === undefined)
            FrameUpdater._instance = new FrameUpdater();
        return FrameUpdater._instance;
    }
    start() {
        this.id = requestAnimationFrame(this.frameUpdate);
        this.running = true;
    }
    stop() {
        if (this.id)
            cancelAnimationFrame(this.id);
        this.running = false;
        this.id = 0;
    }
    frameUpdate(time) {
        if (!this.time)
            this.time = time;
        this.emit('update', time - this.time);
        this.time = time;
        if (this.running)
            this.id = requestAnimationFrame(this.frameUpdate);
    }
    on(event, fn, context) {
        super.on(event, fn, context);
        if (this.listeners('update', true) && !this.running)
            this.start();
        return this;
    }
    addListener(event, fn, context) {
        super.addListener(event, fn, context);
        if (this.listeners('update', true) && !this.running)
            this.start();
        return this;
    }
    once(event, fn, context) {
        super.once(event, fn, context);
        if (this.listeners('update', true) && !this.running)
            this.start();
        return this;
    }
    removeListener(event, fn, context, once) {
        super.removeListener(event, fn, context, once);
        if (!this.listeners('update', true) && this.running)
            this.stop();
        return this;
    }
    off(event, fn, context, once) {
        super.off(event, fn, context, once);
        if (!this.listeners('update', true) && this.running)
            this.stop();
        return this;
    }
    removeAllListeners(event) {
        super.removeAllListeners(event);
        if (this.running)
            this.stop();
        return this;
    }
}
exports.FrameUpdater = FrameUpdater;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(1);
/**
 * The BitmapData zone defines a shaped zone based on a BitmapData object.
 * The zone contains all pixels in the bitmap that are not transparent -
 * i.e. they have an alpha value greater than zero.
 */
class BitmapDataZone {
    /**
     * The constructor creates a BitmapDataZone object.
     *
     * @param bitmapData The bitmapData object that defines the zone.
     * @param xOffset A horizontal offset to apply to the pixels in the BitmapData object
     * to reposition the zone
     * @param yOffset A vertical offset to apply to the pixels in the BitmapData object
     * to reposition the zone
     * @param scaleX A scale factor to stretch the bitmap horizontally
     * @param scaleY A scale factor to stretch the bitmap vertically
     */
    constructor(bitmapData, offsetX = 0, offsetY = 0, scaleX = 1, scaleY = 1) {
        this._bitmapData = bitmapData;
        this._offsetX = offsetX;
        this._offsetY = offsetY;
        this._scaleX = scaleX;
        this._scaleY = scaleY;
        this.invalidate();
    }
    /**
     * The bitmapData object that defines the zone.
     */
    get bitmapData() {
        return this._bitmapData;
    }
    set bitmapData(value) {
        this._bitmapData = value;
        this.invalidate();
    }
    /**
     * A horizontal offset to apply to the pixels in the BitmapData object
     * to reposition the zone
     */
    get offsetX() {
        return this._offsetX;
    }
    set offsetX(value) {
        this._offsetX = value;
    }
    /**
     * A vertical offset to apply to the pixels in the BitmapData object
     * to reposition the zone
     */
    get offsetY() {
        return this._offsetY;
    }
    set offsetY(value) {
        this._offsetY = value;
    }
    /**
     * A scale factor to stretch the bitmap horizontally
     */
    get scaleX() {
        return this._scaleX;
    }
    set scaleX(value) {
        this._scaleX = value;
    }
    /**
     * A scale factor to stretch the bitmap vertically
     */
    get scaleY() {
        return this._scaleY;
    }
    set scaleY(value) {
        this._scaleY = value;
    }
    /**
     * This method forces the zone to revaluate itself. It should be called whenever the
     * contents of the BitmapData object change. However, it is an intensive method and
     * calling it frequently will likely slow your code down.
     */
    invalidate() {
        if (!this._bitmapData) {
            return;
        }
        this._validPoints = new core_1.FastWeightedArray();
        for (var x = 0; x < this._bitmapData.width; ++x) {
            for (var y = 0; y < this._bitmapData.height; ++y) {
                var pixel = this._bitmapData.getAtPosition(x, y);
                if (pixel.a != 0) {
                    this._validPoints.add(new core_1.Vector2(x, y), pixel.a);
                }
            }
        }
    }
    /**
     * The contains method determines whether a point is inside the zone.
     *
     * @param point The location to test for.
     * @return true if point is inside the zone, false if it is outside.
     */
    contains(x, y) {
        if (x >= this._offsetX && x <= this._offsetX + this._bitmapData.width * this._scaleX
            && y >= this._offsetY && y <= this._offsetY + this._bitmapData.height * this._scaleY) {
            var pixel = this._bitmapData.getAtPosition(Math.round((x - this._offsetX) / this._scaleX), Math.round((y - this._offsetY) / this._scaleY));
            return pixel.a != 0;
        }
        return false;
    }
    /**
     * The getLocation method returns a random point inside the zone.
     *
     * @return a random point inside the zone.
     */
    getLocation() {
        var p = new core_1.Vector2(this._validPoints.getRandomValue()).clone();
        p.x = p.x * this._scaleX + this._offsetX;
        p.y = p.y * this._scaleY + this._offsetY;
        return p;
    }
    /**
     * The getArea method returns the size of the zone.
     * It's used by the MultiZone class to manage the balancing between the
     * different zones.
     *
     * @return the size of the zone.
     */
    getArea() {
        return this._validPoints.totalWeights * this._scaleX * this._scaleY;
    }
    /**
     * Manages collisions between a particle and the zone. The particle will collide with the edges of
     * the zone, from the inside or outside. In the interests of speed, these collisions do not take
     * account of the collisionRadius of the particle and they do not calculate an accurate bounce
     * direction from the shape of the zone. Priority is placed on keeping particles inside
     * or outside the zone.
     *
     * @param particle The particle to be tested for collision with the zone.
     * @param bounce The coefficient of restitution for the collision.
     *
     * @return Whether a collision occured.
     */
    collideParticle(particle, bounce = 1) {
        if (this.contains(particle.x, particle.y) != this.contains(particle.previousX, particle.previousY)) {
            particle.x = particle.previousX;
            particle.y = particle.previousY;
            particle.velX = -bounce * particle.velX;
            particle.velY = -bounce * particle.velY;
            return true;
        }
        else {
            return false;
        }
    }
}
exports.BitmapDataZone = BitmapDataZone;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(1);
const TWOPI = Math.PI * 2;
/**
 * The DiscSectorZone zone defines a section of a Disc zone. The disc
 * on which it's based have a hole in the middle, like a doughnut.
 */
class DiscSectorZone {
    /**
     * The constructor defines a DiscSectorZone zone.
     *
     * @param center The centre of the disc.
     * @param outerRadius The radius of the outer edge of the disc.
     * @param innerRadius If set, this defines the radius of the inner
     * edge of the disc. Points closer to the center than this inner radius
     * are excluded from the zone. If this parameter is not set then all
     * points inside the outer radius are included in the zone.
     * @param minAngle The minimum angle, in radians, for points to be included in the zone.
     * An angle of zero is horizontal and to the right. Positive angles are in a clockwise
     * direction (towards the graphical y axis). Angles are converted to a value between 0
     * and two times PI.
     * @param maxAngle The maximum angle, in radians, for points to be included in the zone.
     * An angle of zero is horizontal and to the right. Positive angles are in a clockwise
     * direction (towards the graphical y axis). Angles are converted to a value between 0
     * and two times PI.
     */
    constructor(center = new core_1.Vector2(0, 0), outerRadius = 0, innerRadius = 0, minAngle = 0, maxAngle = 0) {
        if (outerRadius < innerRadius) {
            throw new Error("The outerRadius (" + outerRadius + ") can't be smaller than the innerRadius (" + innerRadius + ") in your DiscSectorZone. N.B. the outerRadius is the second argument in the constructor and the innerRadius is the third argument.");
        }
        this._center = center.clone();
        this._innerRadius = innerRadius;
        this._outerRadius = outerRadius;
        this._innerSq = this._innerRadius * this._innerRadius;
        this._outerSq = this._outerRadius * this._outerRadius;
        this._minAngle = minAngle;
        this._maxAngle = maxAngle;
        if (!isNaN(this._maxAngle)) {
            while (this._maxAngle > TWOPI) {
                this._maxAngle -= TWOPI;
            }
            while (this._maxAngle < 0) {
                this._maxAngle += TWOPI;
            }
            this._minAllowed = this._maxAngle - TWOPI;
            if (!isNaN(this._minAngle)) {
                if (minAngle == maxAngle) {
                    this._minAngle = this._maxAngle;
                }
                else {
                    this._minAngle = this.clamp(this._minAngle);
                }
            }
            this.calculateNormals();
        }
    }
    clamp(angle) {
        if (!isNaN(this._maxAngle)) {
            while (angle > this._maxAngle) {
                angle -= TWOPI;
            }
            while (angle < this._minAllowed) {
                angle += TWOPI;
            }
        }
        return angle;
    }
    calculateNormals() {
        if (!isNaN(this._minAngle)) {
            this._minNormal = new core_1.Vector2(Math.sin(this._minAngle), -Math.cos(this._minAngle));
            this._minNormal = this._minNormal.normalize();
        }
        if (!isNaN(this._maxAngle)) {
            this._maxNormal = new core_1.Vector2(-Math.sin(this._maxAngle), Math.cos(this._maxAngle));
            this._maxNormal = this._maxNormal.normalize();
        }
    }
    /**
     * The centre of the disc.
     */
    get center() {
        return this._center;
    }
    set center(value) {
        this._center = value;
    }
    /**
     * The x coordinate of the point that is the center of the disc.
     */
    get centerX() {
        return this._center.x;
    }
    set centerX(value) {
        this._center.x = value;
    }
    /**
     * The y coordinate of the point that is the center of the disc.
     */
    get centerY() {
        return this._center.y;
    }
    set centerY(value) {
        this._center.y = value;
    }
    /**
     * The radius of the inner edge of the disc.
     */
    get innerRadius() {
        return this._innerRadius;
    }
    set innerRadius(value) {
        this._innerRadius = value;
        this._innerSq = this._innerRadius * this._innerRadius;
    }
    /**
     * The radius of the outer edge of the disc.
     */
    get outerRadius() {
        return this._outerRadius;
    }
    set outerRadius(value) {
        this._outerRadius = value;
        this._outerSq = this._outerRadius * this._outerRadius;
    }
    /**
     * The minimum angle, in radians, for points to be included in the zone.
     * An angle of zero is horizontal and to the right. Positive angles are in a clockwise
     * direction (towards the graphical y axis). Angles are converted to a value between 0
     * and two times PI.
     */
    get minAngle() {
        return this._minAngle;
    }
    set minAngle(value) {
        this._minAngle = this.clamp(value);
        this.calculateNormals();
    }
    /**
     * The maximum angle, in radians, for points to be included in the zone.
     * An angle of zero is horizontal and to the right. Positive angles are in a clockwise
     * direction (towards the graphical y axis). Angles are converted to a value between 0
     * and two times PI.
     */
    get maxAngle() {
        return this._maxAngle;
    }
    set maxAngle(value) {
        this._maxAngle = value;
        while (this._maxAngle > TWOPI) {
            this._maxAngle -= TWOPI;
        }
        while (this._maxAngle < 0) {
            this._maxAngle += TWOPI;
        }
        this._minAllowed = this._maxAngle - TWOPI;
        this._minAngle = this.clamp(this._minAngle);
        this.calculateNormals();
    }
    /**
     * The contains method determines whether a point is inside the zone.
     * This method is used by the initializers and actions that
     * use the zone. Usually, it need not be called directly by the user.
     *
     * @param x The x coordinate of the location to test for.
     * @param y The y coordinate of the location to test for.
     * @return true if point is inside the zone, false if it is outside.
     */
    contains(x, y) {
        x -= this._center.x;
        y -= this._center.y;
        var distSq = x * x + y * y;
        if (distSq > this._outerSq || distSq < this._innerSq) {
            return false;
        }
        var angle = Math.atan2(y, x);
        angle = this.clamp(angle);
        return angle >= this._minAngle;
    }
    /**
     * The getLocation method returns a random point inside the zone.
     * This method is used by the initializers and actions that
     * use the zone. Usually, it need not be called directly by the user.
     *
     * @return a random point inside the zone.
     */
    getLocation() {
        var rand = core_1.Random.random.random();
        var r = this._innerRadius + (1 - rand * rand) * (this._outerRadius - this._innerRadius);
        var angle = this._minAngle + core_1.Random.random.random() * (this._maxAngle - this._minAngle);
        var point = new core_1.Vector2(r * Math.cos(angle), r * Math.sin(angle));
        point.x += this._center.x;
        point.y += this._center.y;
        return point;
    }
    /**
     * The getArea method returns the size of the zone.
     * This method is used by the MultiZone class. Usually,
     * it need not be called directly by the user.
     *
     * @return a random point inside the zone.
     */
    getArea() {
        return (this._outerSq - this._innerSq) * (this._maxAngle - this._minAngle) * 0.5;
    }
    /**
     * Manages collisions between a particle and the zone. The particle will collide with the edges of
     * the disc sector defined for this zone, from inside or outside the disc. In the interests of speed,
     * these collisions do not take account of the collisionRadius of the particle.
     *
     * @param particle The particle to be tested for collision with the zone.
     * @param bounce The coefficient of restitution for the collision.
     *
     * @return Whether a collision occured.
     */
    collideParticle(particle, bounce = 1) {
        // This is approximate, since accurate calculations would be quite complex and thus time consuming
        var xNow = particle.x - this._center.x;
        var yNow = particle.y - this._center.y;
        var xThen = particle.previousX - this._center.x;
        var yThen = particle.previousY - this._center.y;
        var insideNow = true;
        var insideThen = true;
        var distThenSq = xThen * xThen + yThen * yThen;
        var distNowSq = xNow * xNow + yNow * yNow;
        if (distThenSq > this._outerSq || distThenSq < this._innerSq) {
            insideThen = false;
        }
        if (distNowSq > this._outerSq || distNowSq < this._innerSq) {
            insideNow = false;
        }
        if ((!insideNow) && (!insideThen)) {
            return false;
        }
        var angleThen = this.clamp(Math.atan2(yThen, xThen));
        var angleNow = this.clamp(Math.atan2(yNow, xNow));
        insideThen = insideThen && angleThen >= this._minAngle;
        insideNow = insideNow && angleNow >= this._minAngle;
        if (insideNow == insideThen) {
            return false;
        }
        var adjustSpeed;
        var dotProduct = particle.velX * xNow + particle.velY * yNow;
        var factor;
        var normalSpeed;
        if (insideNow) {
            if (distThenSq > this._outerSq) {
                // bounce off outer radius
                adjustSpeed = (1 + bounce) * dotProduct / distNowSq;
                particle.velX -= adjustSpeed * xNow;
                particle.velY -= adjustSpeed * yNow;
            }
            else if (distThenSq < this._innerSq) {
                // bounce off inner radius
                adjustSpeed = (1 + bounce) * dotProduct / distNowSq;
                particle.velX -= adjustSpeed * xNow;
                particle.velY -= adjustSpeed * yNow;
            }
            if (angleThen < this._minAngle) {
                if (angleThen < (this._minAllowed + this._minAngle) / 2) {
                    // bounce off max radius
                    normalSpeed = this._maxNormal.x * particle.velX + this._maxNormal.y * particle.velY;
                    factor = (1 + bounce) * normalSpeed;
                    particle.velX -= factor * this._maxNormal.x;
                    particle.velY -= factor * this._maxNormal.y;
                }
                else {
                    // bounce off min radius
                    normalSpeed = this._minNormal.x * particle.velX + this._minNormal.y * particle.velY;
                    factor = (1 + bounce) * normalSpeed;
                    particle.velX -= factor * this._minNormal.x;
                    particle.velY -= factor * this._minNormal.y;
                }
            }
        }
        else // inside then
         {
            if (distNowSq > this._outerSq) {
                // bounce off outer radius
                adjustSpeed = (1 + bounce) * dotProduct / distNowSq;
                particle.velX -= adjustSpeed * xNow;
                particle.velY -= adjustSpeed * yNow;
            }
            else if (distNowSq < this._innerSq) {
                // bounce off inner radius
                adjustSpeed = (1 + bounce) * dotProduct / distNowSq;
                particle.velX -= adjustSpeed * xNow;
                particle.velY -= adjustSpeed * yNow;
            }
            if (angleNow < this._minAngle) {
                if (angleNow < (this._minAllowed + this._minAngle) / 2) {
                    // bounce off max radius
                    normalSpeed = this._maxNormal.x * particle.velX + this._maxNormal.y * particle.velY;
                    factor = (1 + bounce) * normalSpeed;
                    particle.velX -= factor * this._maxNormal.x;
                    particle.velY -= factor * this._maxNormal.y;
                }
                else {
                    // bounce off min radius
                    normalSpeed = this._minNormal.x * particle.velX + this._minNormal.y * particle.velY;
                    factor = (1 + bounce) * normalSpeed;
                    particle.velX -= factor * this._minNormal.x;
                    particle.velY -= factor * this._minNormal.y;
                }
            }
        }
        particle.x = particle.previousX;
        particle.y = particle.previousY;
        return true;
    }
}
exports.DiscSectorZone = DiscSectorZone;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(1);
const TWOPI = Math.PI * 2;
/**
 * The DiscZone zone defines a circular zone. The zone may
 * have a hole in the middle, like a doughnut.
 */
class DiscZone {
    /**
     * The constructor defines a DiscZone zone.
     *
     * @param center The centre of the disc.
     * @param outerRadius The radius of the outer edge of the disc.
     * @param innerRadius If set, this defines the radius of the inner
     * edge of the disc. Points closer to the center than this inner radius
     * are excluded from the zone. If this parameter is not set then all
     * points inside the outer radius are included in the zone.
     */
    constructor(center = new core_1.Vector2(0, 0), outerRadius = 0, innerRadius = 0) {
        if (outerRadius < innerRadius) {
            throw new Error("The outerRadius (" + outerRadius + ") can't be smaller than the innerRadius (" + innerRadius + ") in your DiscZone. N.B. the outerRadius is the second argument in the constructor and the innerRadius is the third argument.");
        }
        this._center = center.clone();
        this._innerRadius = innerRadius;
        this._outerRadius = outerRadius;
        this._innerSq = this._innerRadius * this._innerRadius;
        this._outerSq = this._outerRadius * this._outerRadius;
    }
    /**
     * The centre of the disc.
     */
    get center() {
        return this._center;
    }
    set center(value) {
        this._center = value;
    }
    /**
     * The x coordinate of the point that is the center of the disc.
     */
    get centerX() {
        return this._center.x;
    }
    set centerX(value) {
        this._center.x = value;
    }
    /**
     * The y coordinate of the point that is the center of the disc.
     */
    get centerY() {
        return this._center.y;
    }
    set centerY(value) {
        this._center.y = value;
    }
    /**
     * The radius of the inner edge of the disc.
     */
    get innerRadius() {
        return this._innerRadius;
    }
    set innerRadius(value) {
        this._innerRadius = value;
        this._innerSq = this._innerRadius * this._innerRadius;
    }
    /**
     * The radius of the outer edge of the disc.
     */
    get outerRadius() {
        return this._outerRadius;
    }
    set outerRadius(value) {
        this._outerRadius = value;
        this._outerSq = this._outerRadius * this._outerRadius;
    }
    /**
     * The contains method determines whether a point is inside the zone.
     * This method is used by the initializers and actions that
     * use the zone. Usually, it need not be called directly by the user.
     *
     * @param x The x coordinate of the location to test for.
     * @param y The y coordinate of the location to test for.
     * @return true if point is inside the zone, false if it is outside.
     */
    contains(x, y) {
        x -= this._center.x;
        y -= this._center.y;
        var distSq = x * x + y * y;
        return distSq <= this._outerSq && distSq >= this._innerSq;
    }
    /**
     * The getLocation method returns a random point inside the zone.
     * This method is used by the initializers and actions that
     * use the zone. Usually, it need not be called directly by the user.
     *
     * @return a random point inside the zone.
     */
    getLocation() {
        var rand = core_1.Random.random.random();
        var r = this._innerRadius + (1 - rand * rand) * (this._outerRadius - this._innerRadius);
        var angle = Math.random() * TWOPI;
        var point = new core_1.Vector2(r * Math.cos(angle), r * Math.sin(angle));
        point.x += this._center.x;
        point.y += this._center.y;
        return point;
    }
    /**
     * The getArea method returns the size of the zone.
     * This method is used by the MultiZone class. Usually,
     * it need not be called directly by the user.
     *
     * @return a random point inside the zone.
     */
    getArea() {
        return Math.PI * (this._outerSq - this._innerSq);
    }
    /**
     * Manages collisions between a particle and the zone. The particle will collide with the edges of
     * the disc defined for this zone, from inside or outside the disc.  The collisionRadius of the
     * particle is used when calculating the collision.
     *
     * @param particle The particle to be tested for collision with the zone.
     * @param bounce The coefficient of restitution for the collision.
     *
     * @return Whether a collision occured.
     */
    collideParticle(particle, bounce = 1) {
        var outerLimit;
        var innerLimit;
        var outerLimitSq;
        var innerLimitSq;
        var distanceSq;
        var distance;
        var pdx;
        var pdy;
        var pDistanceSq;
        var adjustSpeed;
        var positionRatio;
        var epsilon = 0.001;
        var dx = particle.x - this._center.x;
        var dy = particle.y - this._center.y;
        var dotProduct = particle.velX * dx + particle.velY * dy;
        if (dotProduct < 0) // moving towards center
         {
            outerLimit = this._outerRadius + particle.collisionRadius;
            if (Math.abs(dx) > outerLimit)
                return false;
            if (Math.abs(dy) > outerLimit)
                return false;
            distanceSq = dx * dx + dy * dy;
            outerLimitSq = outerLimit * outerLimit;
            if (distanceSq > outerLimitSq)
                return false;
            // Particle is inside outer circle
            pdx = particle.previousX - this._center.x;
            pdy = particle.previousY - this._center.y;
            pDistanceSq = pdx * pdx + pdy * pdy;
            if (pDistanceSq > outerLimitSq) {
                // particle was outside outer circle
                adjustSpeed = (1 + bounce) * dotProduct / distanceSq;
                particle.velX -= adjustSpeed * dx;
                particle.velY -= adjustSpeed * dy;
                distance = Math.sqrt(distanceSq);
                positionRatio = (2 * outerLimit - distance) / distance + epsilon;
                particle.x = this._center.x + dx * positionRatio;
                particle.y = this._center.y + dy * positionRatio;
                return true;
            }
            if (this._innerRadius != 0 && this._innerRadius != this._outerRadius) {
                innerLimit = this._innerRadius + particle.collisionRadius;
                if (Math.abs(dx) > innerLimit)
                    return false;
                if (Math.abs(dy) > innerLimit)
                    return false;
                innerLimitSq = innerLimit * innerLimit;
                if (distanceSq > innerLimitSq)
                    return false;
                // Particle is inside inner circle
                if (pDistanceSq > innerLimitSq) {
                    // particle was outside inner circle
                    adjustSpeed = (1 + bounce) * dotProduct / distanceSq;
                    particle.velX -= adjustSpeed * dx;
                    particle.velY -= adjustSpeed * dy;
                    distance = Math.sqrt(distanceSq);
                    positionRatio = (2 * innerLimit - distance) / distance + epsilon;
                    particle.x = this._center.x + dx * positionRatio;
                    particle.y = this._center.y + dy * positionRatio;
                    return true;
                }
            }
            return false;
        }
        else // moving away from center
         {
            outerLimit = this._outerRadius - particle.collisionRadius;
            pdx = particle.previousX - this._center.x;
            pdy = particle.previousY - this._center.y;
            if (Math.abs(pdx) > outerLimit)
                return false;
            if (Math.abs(pdy) > outerLimit)
                return false;
            pDistanceSq = pdx * pdx + pdy * pdy;
            outerLimitSq = outerLimit * outerLimit;
            if (pDistanceSq > outerLimitSq)
                return false;
            // particle was inside outer circle
            distanceSq = dx * dx + dy * dy;
            if (this._innerRadius != 0 && this._innerRadius != this._outerRadius) {
                innerLimit = this._innerRadius - particle.collisionRadius;
                innerLimitSq = innerLimit * innerLimit;
                if (pDistanceSq < innerLimitSq && distanceSq >= innerLimitSq) {
                    // particle was inside inner circle and is outside it
                    adjustSpeed = (1 + bounce) * dotProduct / distanceSq;
                    particle.velX -= adjustSpeed * dx;
                    particle.velY -= adjustSpeed * dy;
                    distance = Math.sqrt(distanceSq);
                    positionRatio = (2 * innerLimit - distance) / distance - epsilon;
                    particle.x = this._center.x + dx * positionRatio;
                    particle.y = this._center.y + dy * positionRatio;
                    return true;
                }
            }
            if (distanceSq >= outerLimitSq) {
                // Particle is inside outer circle
                adjustSpeed = (1 + bounce) * dotProduct / distanceSq;
                particle.velX -= adjustSpeed * dx;
                particle.velY -= adjustSpeed * dy;
                distance = Math.sqrt(distanceSq);
                positionRatio = (2 * outerLimit - distance) / distance - epsilon;
                particle.x = this._center.x + dx * positionRatio;
                particle.y = this._center.y + dy * positionRatio;
                return true;
            }
            return false;
        }
    }
}
exports.DiscZone = DiscZone;


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(1);
/**
 * The GrayscaleZone zone defines a shaped zone based on a BitmapData object.
 * The zone contains all pixels in the bitmap that are not black, with a weighting
 * such that lighter pixels are more likely to be selected than darker pixels
 * when creating particles inside the zone.
 */
class GrayscaleZone {
    /**
     * The constructor creates a GrayscaleZone object.
     *
     * @param bitmapData The bitmapData object that defines the zone.
     * @param offsetX A horizontal offset to apply to the pixels in the BitmapData object
     * to reposition the zone
     * @param offsetY A vertical offset to apply to the pixels in the BitmapData object
     * to reposition the zone
     */
    constructor(bitmapData, offsetX = 0, offsetY = 0, scaleX = 1, scaleY = 1) {
        this._bitmapData = bitmapData;
        this._offsetX = offsetX;
        this._offsetY = offsetY;
        this._scaleX = scaleX;
        this._scaleY = scaleY;
        this.invalidate();
    }
    /**
     * The bitmapData object that defines the zone.
     */
    get bitmapData() {
        return this._bitmapData;
    }
    set bitmapData(value) {
        this._bitmapData = value;
        this.invalidate();
    }
    /**
     * A horizontal offset to apply to the pixels in the BitmapData object
     * to reposition the zone
     */
    get offsetX() {
        return this._offsetX;
    }
    set offsetX(value) {
        this._offsetX = value;
    }
    /**
     * A vertical offset to apply to the pixels in the BitmapData object
     * to reposition the zone
     */
    get offsetY() {
        return this._offsetY;
    }
    set offsetY(value) {
        this._offsetY = value;
    }
    /**
     * A scale factor to stretch the bitmap horizontally
     */
    get scaleX() {
        return this._scaleX;
    }
    set scaleX(value) {
        this._scaleX = value;
    }
    /**
     * A scale factor to stretch the bitmap vertically
     */
    get scaleY() {
        return this._scaleY;
    }
    set scaleY(value) {
        this._scaleY = value;
    }
    /**
     * This method forces the zone to revaluate itself. It should be called whenever the
     * contents of the BitmapData object change. However, it is an intensive method and
     * calling it frequently will likely slow your application down.
     */
    invalidate() {
        if (!this._bitmapData) {
            return;
        }
        this._validPoints = new core_1.FastWeightedArray();
        for (var x = 0; x < this._bitmapData.width; ++x) {
            for (var y = 0; y < this._bitmapData.height; ++y) {
                var pixel = this._bitmapData.getAtPosition(x, y);
                var grey = 0.2126 * pixel.r + 0.7152 * pixel.g + 0.0722 * pixel.b;
                if (grey != 0) {
                    this._validPoints.add(new core_1.Vector2(x, y), grey / 255);
                }
            }
        }
    }
    /**
     * The contains method determines whether a point is inside the zone.
     *
     * @param point The location to test for.
     * @return true if point is inside the zone, false if it is outside.
     */
    contains(x, y) {
        if (x >= this._offsetX && x <= this._offsetX + this._bitmapData.width * this._scaleX
            && y >= this._offsetY && y <= this._offsetY + this._bitmapData.height * this._scaleY) {
            var pixel = this._bitmapData.getAtPosition(Math.round((x - this._offsetX) / this._scaleX), Math.round((y - this._offsetY) / this._scaleY));
            return pixel.r != 0 && pixel.g != 0 && pixel.b != 0;
        }
        return false;
    }
    /**
     * The getLocation method returns a random point inside the zone.
     *
     * @return a random point inside the zone.
     */
    getLocation() {
        var p = new core_1.Vector2(this._validPoints.getRandomValue()).clone();
        p.x = p.x * this._scaleX + this._offsetX;
        p.y = p.y * this._scaleY + this._offsetY;
        return p;
    }
    /**
     * The getArea method returns the size of the zone.
     * It's used by the MultiZone class to manage the balancing between the
     * different zones.
     *
     * @return the size of the zone.
     */
    getArea() {
        return this._validPoints.totalWeights * this._scaleX * this._scaleY;
    }
    /**
     * Manages collisions between a particle and the zone. The particle will collide with the edges of
     * the zone, from the inside or outside. In the interests of speed, these collisions do not take
     * account of the collisionRadius of the particle and they do not calculate an accurate bounce
     * direction from the shape of the zone. Priority is placed on keeping particles inside
     * or outside the zone.
     *
     * @param particle The particle to be tested for collision with the zone.
     * @param bounce The coefficient of restitution for the collision.
     *
     * @return Whether a collision occured.
     */
    collideParticle(particle, bounce = 1) {
        if (this.contains(particle.x, particle.y) != this.contains(particle.previousX, particle.previousY)) {
            particle.x = particle.previousX;
            particle.y = particle.previousY;
            particle.velX = -bounce * particle.velX;
            particle.velY = -bounce * particle.velY;
            return true;
        }
        else {
            return false;
        }
    }
}
exports.GrayscaleZone = GrayscaleZone;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"tslib\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
tslib_1.__exportStar(__webpack_require__(116), exports);
tslib_1.__exportStar(__webpack_require__(117), exports);
tslib_1.__exportStar(__webpack_require__(118), exports);
tslib_1.__exportStar(__webpack_require__(119), exports);
tslib_1.__exportStar(__webpack_require__(121), exports);
tslib_1.__exportStar(__webpack_require__(122), exports);
tslib_1.__exportStar(__webpack_require__(123), exports);
tslib_1.__exportStar(__webpack_require__(124), exports);


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(1);
/**
 * The LineZone zone defines a zone that contains all the points on a line.
 */
class LineZone {
    /**
     * The constructor creates a LineZone zone.
     *
     * @param start The point at one end of the line.
     * @param end The point at the other end of the line.
     */
    constructor(start = new core_1.Vector2(0, 0), end = new core_1.Vector2(0, 0)) {
        this._start = start;
        this._end = end;
        this.setLengthAndNormal();
    }
    setLengthAndNormal() {
        this._length = this._end.subtract(this._start);
        this._parallel = this._length.normalize();
        this._normal = new core_1.Vector2(this._parallel.y, -this._parallel.x);
    }
    /**
     * The point at one end of the line.
     */
    get start() {
        return this._start;
    }
    set start(value) {
        this._start = value;
        this.setLengthAndNormal();
    }
    /**
     * The point at the other end of the line.
     */
    get end() {
        return this._end;
    }
    set end(value) {
        this._end = value;
        this.setLengthAndNormal();
    }
    /**
     * The x coordinate of the point at the start of the line.
     */
    get startX() {
        return this._start.x;
    }
    set startX(value) {
        this._start.x = value;
        this._length = this._end.subtract(this._start);
    }
    /**
     * The y coordinate of the point at the start of the line.
     */
    get startY() {
        return this._start.y;
    }
    set startY(value) {
        this._start.y = value;
        this._length = this._end.subtract(this._start);
    }
    /**
     * The x coordinate of the point at the end of the line.
     */
    get endX() {
        return this._end.x;
    }
    set endX(value) {
        this._end.x = value;
        this._length = this._end.subtract(this._start);
    }
    /**
     * The y coordinate of the point at the end of the line.
     */
    get endY() {
        return this._end.y;
    }
    set endY(value) {
        this._end.y = value;
        this._length = this._end.subtract(this._start);
    }
    /**
     * @inheritDoc
     */
    contains(x, y) {
        // not on line if dot product with perpendicular is not zero
        if ((x - this._start.x) * this._length.y - (y - this._start.y) * this._length.x != 0) {
            return false;
        }
        // is it between the points, dot product of the vectors towards each point is negative
        return (x - this._start.x) * (x - this._end.x) + (y - this._start.y) * (y - this._end.y) <= 0;
    }
    /**
     * @inheritDoc
     */
    getLocation() {
        var ret = this._start.clone();
        var scale = core_1.Random.random.random();
        ret.x += this._length.x * scale;
        ret.y += this._length.y * scale;
        return ret;
    }
    /**
     * @inheritDoc
     */
    getArea() {
        // treat as one pixel tall rectangle
        return this._length.length();
    }
    /**
     * Manages collisions between a particle and the zone. The particle will collide with the line defined
     * for this zone. In the interests of speed, the collisions are not exactly accurate at the ends of the
     * line, but are accurate enough to ensure the particle doesn't pass through the line and to look
     * realistic in most circumstances. The collisionRadius of the particle is used when calculating the collision.
     *
     * @param particle The particle to be tested for collision with the zone.
     * @param bounce The coefficient of restitution for the collision.
     *
     * @return Whether a collision occured.
     */
    collideParticle(particle, bounce = 1) {
        // if it was moving away from the line, return false
        var previousDistance = (particle.previousX - this._start.x) * this._normal.x + (particle.previousY - this._start.y) * this._normal.y;
        var velDistance = particle.velX * this._normal.x + particle.velY * this._normal.y;
        if (previousDistance * velDistance >= 0) {
            return false;
        }
        // if it is further away than the collision radius and the same side as previously, return false
        var distance = (particle.x - this._start.x) * this._normal.x + (particle.y - this._start.y) * this._normal.y;
        if (distance * previousDistance > 0 && (distance > particle.collisionRadius || distance < -particle.collisionRadius)) {
            return false;
        }
        // move line collisionradius distance in direction particle was, extend it by collision radius
        var offsetX;
        var offsetY;
        if (previousDistance < 0) {
            offsetX = this._normal.x * particle.collisionRadius;
            offsetY = this._normal.y * particle.collisionRadius;
        }
        else {
            offsetX = -this._normal.x * particle.collisionRadius;
            offsetY = -this._normal.y * particle.collisionRadius;
        }
        var thenX = particle.previousX + offsetX;
        var thenY = particle.previousY + offsetY;
        var nowX = particle.x + offsetX;
        var nowY = particle.y + offsetY;
        var startX = this._start.x - this._parallel.x * particle.collisionRadius;
        var startY = this._start.y - this._parallel.y * particle.collisionRadius;
        var endX = this._end.x + this._parallel.x * particle.collisionRadius;
        var endY = this._end.y + this._parallel.y * particle.collisionRadius;
        var den = 1 / ((nowY - thenY) * (endX - startX) - (nowX - thenX) * (endY - startY));
        var u = den * ((nowX - thenX) * (startY - thenY) - (nowY - thenY) * (startX - thenX));
        if (u < 0 || u > 1) {
            return false;
        }
        var v = -den * ((endX - startX) * (thenY - startY) - (endY - startY) * (thenX - startX));
        if (v < 0 || v > 1) {
            return false;
        }
        particle.x = particle.previousX + v * (particle.x - particle.previousX);
        particle.y = particle.previousY + v * (particle.y - particle.previousY);
        var normalSpeed = this._normal.x * particle.velX + this._normal.y * particle.velY;
        var factor = (1 + bounce) * normalSpeed;
        particle.velX -= factor * this._normal.x;
        particle.velY -= factor * this._normal.y;
        return true;
    }
}
exports.LineZone = LineZone;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(1);
/**
 * The MutiZone zone defines a zone that combines other zones into one larger zone.
 */
class MultiZone {
    /**
     * The constructor defines a MultiZone zone.
     */
    constructor() {
        this._zones = [];
        this._areas = [];
        this._totalArea = 0;
    }
    /**
     * The addZone method is used to add a zone into this MultiZone object.
     *
     * @param zone The zone you want to add.
     */
    addZone(zone) {
        this._zones.push(zone);
        var area = zone.getArea();
        this._areas.push(area);
        this._totalArea += area;
    }
    /**
     * The removeZone method is used to remove a zone from this MultiZone object.
     *
     * @param zone The zone you want to add.
     */
    removeZone(zone) {
        var len = this._zones.length;
        for (var i = 0; i < len; ++i) {
            if (this._zones[i] == zone) {
                this._totalArea -= this._areas[i];
                this._areas.splice(i, 1);
                this._zones.splice(i, 1);
                return;
            }
        }
    }
    /**
     * @inheritDoc
     */
    contains(x, y) {
        var len = this._zones.length;
        for (var i = 0; i < len; ++i) {
            if (this._zones[i].contains(x, y)) {
                return true;
            }
        }
        return false;
    }
    /**
     * @inheritDoc
     */
    getLocation() {
        var selectZone = core_1.Random.random.random() * this._totalArea;
        var len = this._zones.length;
        for (var i = 0; i < len; ++i) {
            if ((selectZone -= this._areas[i]) <= 0) {
                return this._zones[i].getLocation();
            }
        }
        if (this._zones.length == 0) {
            throw new Error("Attempt to use a MultiZone object that contains no Zones");
        }
        else {
            return this._zones[0].getLocation();
        }
    }
    /**
     * @inheritDoc
     */
    getArea() {
        return this._totalArea;
    }
    /**
     * @inheritDoc
     */
    collideParticle(particle, bounce = 1) {
        var collide = false;
        for (var zone of this._zones) {
            collide = zone.collideParticle(particle, bounce) || collide;
        }
        return collide;
    }
}
exports.MultiZone = MultiZone;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(1);
/**
 * The PointZone zone defines a zone that contains a single point.
 */
class PointZone {
    /**
     * The constructor defines a PointZone zone.
     *
     * @param point The point that is the zone.
     */
    constructor(point = new core_1.Vector2(0, 0)) {
        this._point = point;
    }
    /**
     * The point that is the zone.
     */
    get point() {
        return this._point;
    }
    set point(value) {
        this._point = value;
    }
    /**
     * The x coordinate of the point that is the zone.
     */
    get x() {
        return this._point.x;
    }
    set x(value) {
        this._point.x = value;
    }
    /**
     * The y coordinate of the point that is the zone.
     */
    get y() {
        return this._point.y;
    }
    set y(value) {
        this._point.y = value;
    }
    /**
     * The contains method determines whether a point is inside the zone.
     * This method is used by the initializers and actions that
     * use the zone. Usually, it need not be called directly by the user.
     *
     * @param x The x coordinate of the location to test for.
     * @param y The y coordinate of the location to test for.
     * @return true if point is inside the zone, false if it is outside.
     */
    contains(x, y) {
        return this._point.x == x && this._point.y == y;
    }
    /**
     * The getLocation method returns a random point inside the zone.
     * This method is used by the initializers and actions that
     * use the zone. Usually, it need not be called directly by the user.
     *
     * @return a random point inside the zone.
     */
    getLocation() {
        return this._point.clone();
    }
    /**
     * The getArea method returns the size of the zone.
     * This method is used by the MultiZone class. Usually,
     * it need not be called directly by the user.
     *
     * @return a random point inside the zone.
     */
    getArea() {
        // treat as one pixel square
        return 1;
    }
    /**
     * Manages collisions between a particle and the zone. Particles will colide with the point defined
     * for this zone. The collisionRadius of the particle is used when calculating the collision.
     *
     * @param particle The particle to be tested for collision with the zone.
     * @param bounce The coefficient of restitution for the collision.
     *
     * @return Whether a collision occured.
     */
    collideParticle(particle, bounce = 1) {
        var relativePreviousX = particle.previousX - this._point.x;
        var relativePreviousY = particle.previousY - this._point.y;
        var dot = relativePreviousX * particle.velX + relativePreviousY * particle.velY;
        if (dot >= 0) {
            return false;
        }
        var relativeX = particle.x - this._point.x;
        var relativeY = particle.y - this._point.y;
        var radius = particle.collisionRadius;
        dot = relativeX * particle.velX + relativeY * particle.velY;
        if (dot <= 0) {
            if (relativeX > radius || relativeX < -radius) {
                return false;
            }
            if (relativeY > radius || relativeY < -radius) {
                return false;
            }
            if (relativeX * relativeX + relativeY * relativeY > radius * radius) {
                return false;
            }
        }
        var frameVelX = relativeX - relativePreviousX;
        var frameVelY = relativeY - relativePreviousY;
        var a = frameVelX * frameVelX + frameVelY * frameVelY;
        var b = 2 * (relativePreviousX * frameVelX + relativePreviousY * frameVelY);
        var c = relativePreviousX * relativePreviousX + relativePreviousY * relativePreviousY - radius * radius;
        var sq = b * b - 4 * a * c;
        if (sq < 0) {
            return false;
        }
        var srt = Math.sqrt(sq);
        var t1 = (-b + srt) / (2 * a);
        var t2 = (-b - srt) / (2 * a);
        var t = [];
        if (t1 > 0 && t1 <= 1) {
            t.push(t1);
        }
        if (t2 > 0 && t2 <= 1) {
            t.push(t2);
        }
        var time;
        if (t.length == 0) {
            return false;
        }
        if (t.length == 1) {
            time = t[0];
        }
        else {
            time = Math.min(t1, t2);
        }
        var cx = relativePreviousX + time * frameVelX + this._point.x;
        var cy = relativePreviousY + time * frameVelY + this._point.y;
        var nx = cx - this._point.x;
        var ny = cy - this._point.y;
        var d = Math.sqrt(nx * nx + ny * ny);
        nx /= d;
        ny /= d;
        var n = frameVelX * nx + frameVelY * ny;
        frameVelX -= 2 * nx * n;
        frameVelY -= 2 * ny * n;
        particle.x = cx + (1 - time) * frameVelX;
        particle.y = cy + (1 - time) * frameVelY;
        var normalVel = particle.velX * nx + particle.velY * ny;
        particle.velX -= (1 + bounce) * nx * normalVel;
        particle.velY -= (1 + bounce) * ny * normalVel;
        return true;
    }
}
exports.PointZone = PointZone;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(1);
/**
 * The RectangleZone zone defines a rectangular shaped zone.
 */
class RectangleZone {
    /**
     * The constructor creates a RectangleZone zone.
     *
     * @param left The left coordinate of the rectangle defining the region of the zone.
     * @param top The top coordinate of the rectangle defining the region of the zone.
     * @param right The right coordinate of the rectangle defining the region of the zone.
     * @param bottom The bottom coordinate of the rectangle defining the region of the zone.
     */
    constructor(left = 0, top = 0, right = 0, bottom = 0) {
        this._left = left;
        this._top = top;
        this._right = right;
        this._bottom = bottom;
        this._width = right - left;
        this._height = bottom - top;
    }
    /**
     * The left coordinate of the rectangle defining the region of the zone.
     */
    get left() {
        return this._left;
    }
    set left(value) {
        this._left = value;
        if (!isNaN(this._right) && !isNaN(this._left)) {
            this._width = this._right - this._left;
        }
    }
    /**
     * The right coordinate of the rectangle defining the region of the zone.
     */
    get right() {
        return this._right;
    }
    set right(value) {
        this._right = value;
        if (!isNaN(this._right) && !isNaN(this._left)) {
            this._width = this._right - this._left;
        }
    }
    /**
     * The top coordinate of the rectangle defining the region of the zone.
     */
    get top() {
        return this._top;
    }
    set top(value) {
        this._top = value;
        if (!isNaN(this._top) && !isNaN(this._bottom)) {
            this._height = this._bottom - this._top;
        }
    }
    /**
     * The bottom coordinate of the rectangle defining the region of the zone.
     */
    get bottom() {
        return this._bottom;
    }
    set bottom(value) {
        this._bottom = value;
        if (!isNaN(this._top) && !isNaN(this._bottom)) {
            this._height = this._bottom - this._top;
        }
    }
    /**
     * The contains method determines whether a point is inside the zone.
     * This method is used by the initializers and actions that
     * use the zone. Usually, it need not be called directly by the user.
     *
     * @param x The x coordinate of the location to test for.
     * @param y The y coordinate of the location to test for.
     * @return true if point is inside the zone, false if it is outside.
     */
    contains(x, y) {
        return x >= this._left && x <= this._right && y >= this._top && y <= this._bottom;
    }
    /**
     * The getLocation method returns a random point inside the zone.
     * This method is used by the initializers and actions that
     * use the zone. Usually, it need not be called directly by the user.
     *
     * @return a random point inside the zone.
     */
    getLocation() {
        return new core_1.Vector2(this._left + Math.random() * this._width, this._top + Math.random() * this._height);
    }
    /**
     * The getArea method returns the size of the zone.
     * This method is used by the MultiZone class. Usually,
     * it need not be called directly by the user.
     *
     * @return a random point inside the zone.
     */
    getArea() {
        return this._width * this._height;
    }
    /**
     * Manages collisions between a particle and the zone. Particles will collide with the edges
     * of the rectangle defined for this zone, from inside or outside the zone. The collisionRadius
     * of the particle is used when calculating the collision.
     *
     * @param particle The particle to be tested for collision with the zone.
     * @param bounce The coefficient of restitution for the collision.
     *
     * @return Whether a collision occured.
     */
    collideParticle(particle, bounce = 1) {
        var position;
        var previousPosition;
        var intersect;
        var collision = false;
        if (particle.velX > 0) {
            position = particle.x + particle.collisionRadius;
            previousPosition = particle.previousX + particle.collisionRadius;
            if (previousPosition < this._left && position >= this._left) {
                intersect = particle.previousY + (particle.y - particle.previousY) * (this._left - previousPosition) / (position - previousPosition);
                if (intersect >= this._top - particle.collisionRadius && intersect <= this._bottom + particle.collisionRadius) {
                    particle.velX = -particle.velX * bounce;
                    particle.x += 2 * (this._left - position);
                    collision = true;
                }
            }
            else if (previousPosition <= this._right && position > this._right) {
                intersect = particle.previousY + (particle.y - particle.previousY) * (this._right - previousPosition) / (position - previousPosition);
                if (intersect >= this._top - particle.collisionRadius && intersect <= this._bottom + particle.collisionRadius) {
                    particle.velX = -particle.velX * bounce;
                    particle.x += 2 * (this._right - position);
                    collision = true;
                }
            }
        }
        else if (particle.velX < 0) {
            position = particle.x - particle.collisionRadius;
            previousPosition = particle.previousX - particle.collisionRadius;
            if (previousPosition > this._right && position <= this._right) {
                intersect = particle.previousY + (particle.y - particle.previousY) * (this._right - previousPosition) / (position - previousPosition);
                if (intersect >= this._top - particle.collisionRadius && intersect <= this._bottom + particle.collisionRadius) {
                    particle.velX = -particle.velX * bounce;
                    particle.x += 2 * (this._right - position);
                    collision = true;
                }
            }
            else if (previousPosition >= this._left && position < this._left) {
                intersect = particle.previousY + (particle.y - particle.previousY) * (this._left - previousPosition) / (position - previousPosition);
                if (intersect >= this._top - particle.collisionRadius && intersect <= this._bottom + particle.collisionRadius) {
                    particle.velX = -particle.velX * bounce;
                    particle.x += 2 * (this._left - position);
                    collision = true;
                }
            }
        }
        if (particle.velY > 0) {
            position = particle.y + particle.collisionRadius;
            previousPosition = particle.previousY + particle.collisionRadius;
            if (previousPosition < this._top && position >= this._top) {
                intersect = particle.previousX + (particle.x - particle.previousX) * (this._top - previousPosition) / (position - previousPosition);
                if (intersect >= this._left - particle.collisionRadius && intersect <= this._right + particle.collisionRadius) {
                    particle.velY = -particle.velY * bounce;
                    particle.y += 2 * (this._top - position);
                    collision = true;
                }
            }
            else if (previousPosition <= this._bottom && position > this._bottom) {
                intersect = particle.previousX + (particle.x - particle.previousX) * (this._bottom - previousPosition) / (position - previousPosition);
                if (intersect >= this._left - particle.collisionRadius && intersect <= this._right + particle.collisionRadius) {
                    particle.velY = -particle.velY * bounce;
                    particle.y += 2 * (this._bottom - position);
                    collision = true;
                }
            }
        }
        else if (particle.velY < 0) {
            position = particle.y - particle.collisionRadius;
            previousPosition = particle.previousY - particle.collisionRadius;
            if (previousPosition > this._bottom && position <= this._bottom) {
                intersect = particle.previousX + (particle.x - particle.previousX) * (this._bottom - previousPosition) / (position - previousPosition);
                if (intersect >= this._left - particle.collisionRadius && intersect <= this._right + particle.collisionRadius) {
                    particle.velY = -particle.velY * bounce;
                    particle.y += 2 * (this._bottom - position);
                    collision = true;
                }
            }
            else if (previousPosition >= this._top && position < this._top) {
                intersect = particle.previousX + (particle.x - particle.previousX) * (this._top - previousPosition) / (position - previousPosition);
                if (intersect >= this._left - particle.collisionRadius && intersect <= this._right + particle.collisionRadius) {
                    particle.velY = -particle.velY * bounce;
                    particle.y += 2 * (this._top - position);
                    collision = true;
                }
            }
        }
        return collision;
    }
}
exports.RectangleZone = RectangleZone;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const guicomponent_1 = __webpack_require__(4);
/**
 * A panel with a border and optional title.
 */
class BorderPanel extends guicomponent_1.GuiComponent {
    constructor(_title, _titleAlignment = guicomponent_1.Alignment.Left) {
        super();
        this._title = _title;
        this._titleAlignment = _titleAlignment;
        /**
         * Character codes to use for the sides of the title. Default is ┤ and ├. Set as empty array for no sides.
         */
        this.titleSides = [180, 195];
    }
    get title() { return this._title; }
    set title(value) {
        if (this._title != value) {
            this._title = value;
            this.invalidate();
        }
    }
    get titleAlignment() { return this._titleAlignment; }
    set titleAlignment(value) {
        if (this._titleAlignment != value) {
            this._titleAlignment = value;
            this.invalidate();
        }
    }
    calcPreferredSize() {
        var maxWidth = 0;
        var maxHeight = 0;
        for (var child of this._children) {
            if (child.visible) {
                var d = child.getPreferredSize();
                if (d.width > maxWidth)
                    maxWidth = d.width;
                if (d.height > maxHeight)
                    maxHeight = d.height;
            }
        }
        return { width: maxWidth + 2, height: maxHeight + 2 };
    }
    doLayout() {
        var l = this.getLeft() + 1;
        var t = this.getTop() + 1;
        var ew = this._width - t - this.getRight() - 1;
        var eh = this._height - l - this.getBottom() - 1;
        for (var child of this._children) {
            var d = child.getPreferredSize();
            child.layoutAligned(this._x + l, this._y + t, d.width, d.height, ew, eh);
        }
    }
    doRender(console) {
        // draw border
        var width = this._width - 1;
        var height = this._height - 1;
        console.cells[this._x][this._y].character = 218;
        console.cells[this._x][this._y].foreground = this.foreground.clone();
        console.cells[this._x][this._y + height].character = 192;
        console.cells[this._x][this._y + height].foreground = this.foreground.clone();
        console.cells[this._x + width][this._y].character = 191;
        console.cells[this._x + width][this._y].foreground = this.foreground.clone();
        console.cells[this._x + width][this._y + height].character = 217;
        console.cells[this._x + width][this._y + height].foreground = this.foreground.clone();
        for (let x = 1; x < width; x++) {
            console.cells[this._x + x][this._y].character = 196;
            console.cells[this._x + x][this._y].foreground = this.foreground.clone();
            console.cells[this._x + x][this._y + height].character = 196;
            console.cells[this._x + x][this._y + height].foreground = this.foreground.clone();
            for (let y = 1; y < height; y++) { // make the foreground visible but empty
                console.cells[this._x + x][this._y + y].character = 0;
                console.cells[this._x + x][this._y + y].foreground.a = 1;
            }
        }
        for (let y = 1; y < height; y++) {
            console.cells[this._x][this._y + y].character = 179;
            console.cells[this._x][this._y + y].foreground = this.foreground.clone();
            console.cells[this._x + width][this._y + y].character = 179;
            console.cells[this._x + width][this._y + y].foreground = this.foreground.clone();
        }
        if (this.background !== undefined) {
            for (let x = 0; x < this._width; x++) {
                for (let y = 0; y < this._height; y++) {
                    console.cells[this._x + x][this._y + y].background = this.background.clone();
                }
            }
        }
        if (this._title !== undefined) {
            var sl = this.titleSides.length === 0 ? 0 : 2;
            var length = Math.min(this._width - 2 - sl, this._title.length);
            var l = 1;
            if (this._titleAlignment === guicomponent_1.Alignment.Right)
                l = this._width - 1 - sl - length;
            else if (this._titleAlignment === guicomponent_1.Alignment.Center)
                l = Math.round((this._width - 1 - sl - length) / 2);
            if (sl)
                console.cells[l++][0].character = this.titleSides[0];
            for (var i = 0; i < length; i++) {
                console.cells[l][0].character = this._title.charCodeAt(i);
                console.cells[l++][0].foreground = this._theme.titleForeground.clone();
            }
            if (sl)
                console.cells[l][0].character = this.titleSides[1];
        }
    }
}
exports.BorderPanel = BorderPanel;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const guicomponent_1 = __webpack_require__(4);
const core_1 = __webpack_require__(1);
class Button extends guicomponent_1.GuiComponent {
    constructor(_content) {
        super();
        this._content = _content;
        this._buttonDown = false;
    }
    get content() { return this._content; }
    set content(value) {
        if (this._content != value) {
            this._content = value;
            this.invalidate();
        }
    }
    calcPreferredSize() {
        return { width: this._content.length, height: 1 };
    }
    doRender(console) {
        var foreground = this.enabled ? this._theme.foregroundActive : this._theme.foregroundDisabled;
        var background = this.enabled ? this.hover ? this._theme.backgroundActive : this._theme.background : this._theme.backgroundDisabled;
        for (let x = 0; x < this._width; x++) {
            console.cells[this._x + x][this._y].character = this._content.charCodeAt(x);
            console.cells[this._x + x][this._y].foreground = foreground.clone();
            if (background.a > 0)
                console.cells[this._x + x][this._y].background = background.clone();
        }
    }
    onMouseDown(_position, button) {
        if (button != core_1.MouseButton.Left)
            return false;
        this.focus();
        this._buttonDown = true;
        return true;
    }
    onMouseUp(position, button) {
        if (this.parent !== undefined && this.parent.focusChild == this) {
            this._buttonDown = false;
            this.emit("click", this, position, button);
            this.unfocus();
            return true;
        }
        return false;
    }
}
exports.Button = Button;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(1);
const panel_1 = __webpack_require__(21);
class Draggable extends panel_1.Panel {
    constructor() {
        super();
    }
    static get draggedWidget() { return Draggable.drag; }
    onInit(application) {
        application.on('dragstart', (a, m) => { this._dragStart(a, m); });
        application.on('dragend', (a, m) => { this._dragEnd(a, m); });
    }
    _dragStart(_app, mouseState) {
        console.log('dragstart');
        if (this.visible && this.enabled && this.isInside(mouseState.cellPosition)) {
            Draggable.drag = this;
            console.log(Draggable.drag);
            Draggable.startDrag = mouseState.cellPosition;
            //this.getRoot().focusChild = this;
            //this.getRoot().dragStart(mouseState.cellPosition, this)
        }
    }
    _dragEnd(_app, _mouseState) {
        console.log('dragend', Draggable.drag);
        if (Draggable.drag === this) {
            //this.getRoot().dragEnd(mouseState.cellPosition, this);
            //this.getRoot().unfocus();
            Draggable.drag = undefined;
        }
    }
    onMouseMove(position) {
        if (Draggable.drag === this) {
            console.log('draggable.onmousemove >>');
            this._x += position.x - Draggable.startDrag.x;
            this._y += position.y - Draggable.startDrag.y;
            return true;
        }
        return false;
    }
}
Draggable.startDrag = new core_1.Position();
exports.Draggable = Draggable;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"tslib\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
tslib_1.__exportStar(__webpack_require__(4), exports);
tslib_1.__exportStar(__webpack_require__(129), exports);
tslib_1.__exportStar(__webpack_require__(130), exports);
tslib_1.__exportStar(__webpack_require__(21), exports);
tslib_1.__exportStar(__webpack_require__(125), exports);
tslib_1.__exportStar(__webpack_require__(126), exports);
tslib_1.__exportStar(__webpack_require__(22), exports);
//export * from './slider';
tslib_1.__exportStar(__webpack_require__(127), exports);


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const guicomponent_1 = __webpack_require__(4);
class Label extends guicomponent_1.GuiComponent {
    constructor(_content) {
        super();
        this._content = _content;
    }
    get content() { return this._content; }
    set content(value) {
        if (this._content != value) {
            this._content = value;
            this.invalidate();
        }
    }
    calcPreferredSize() {
        return { width: this._content.length, height: 1 };
    }
    doRender(console) {
        for (let x = 0; x < this._width; x++) {
            console.cells[this._x + x][this._y].character = this._content.charCodeAt(x);
            console.cells[this._x + x][this._y].foreground = this.foreground.clone();
            if (this.background.a > 0)
                console.cells[this._x + x][this._y].background = this.background.clone();
        }
    }
}
exports.Label = Label;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const guicomponent_1 = __webpack_require__(4);
class StackPanel extends guicomponent_1.GuiComponent {
    constructor(_orientation = guicomponent_1.Orientation.Vertical) {
        super();
        this._orientation = _orientation;
    }
    get orientation() { return this._orientation; }
    set orientation(value) {
        if (this._orientation != value) {
            this._orientation = value;
            this.invalidate();
        }
    }
    calcPreferredSize() {
        var sumWidth = 0;
        var sumHeight = 0;
        var maxWidth = 0;
        var maxHeight = 0;
        for (var child of this._children) {
            if (child.visible) {
                var d = child.getPreferredSize();
                if (d.width > maxWidth)
                    maxWidth = d.width;
                if (d.height > maxHeight)
                    maxHeight = d.height;
                sumWidth += d.width;
                sumHeight += d.height;
            }
        }
        return { width: this._orientation === guicomponent_1.Orientation.Horizontal ? sumWidth : maxWidth,
            height: this._orientation === guicomponent_1.Orientation.Horizontal ? maxHeight : sumHeight };
    }
    doLayout() {
        var t = this.getLeft();
        var l = this.getTop();
        var ew = this._width - t - this.getRight();
        var eh = this._height - l - this.getBottom();
        for (var child of this._children) {
            if (child.visible) {
                var d = child.getPreferredSize();
                var x = l;
                var y = t;
                var w = d.width;
                var h = d.height;
                var aw = ew;
                var ah = eh;
                if (this._orientation === guicomponent_1.Orientation.Horizontal) {
                    aw = w;
                    l += w;
                }
                else {
                    ah = h;
                    t += h;
                }
                child.layoutAligned(this._x + x, this._y + y, w, h, aw, ah);
            }
        }
    }
}
exports.StackPanel = StackPanel;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"tslib\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
tslib_1.__exportStar(__webpack_require__(132), exports);


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(1);
/**
 * Properties of a map tile.
 */
class Tile {
    constructor() {
        this.explored = false;
        this.isWall = true;
        this.isWalkable = true;
    }
}
exports.Tile = Tile;
class Map extends core_1.Rect {
    constructor(width, height, setCallback) {
        super(0, 0, width, height);
        this.dirty = true;
        this.tiles = [];
        for (let x = 0; x < width; x++) {
            this.tiles[x] = [];
            for (let y = 0; y < height; y++) {
                this.tiles[x][y] = new Tile();
            }
        }
        if (setCallback !== undefined)
            this.setCallback = setCallback;
        else
            this.setCallback = () => { };
    }
    setDirty() { this.dirty = true; }
    /**
     * Sets dirty to false and returns if it was dirty.
     */
    resetDirty() {
        var dirty = this.dirty;
        this.dirty = false;
        return dirty;
    }
    isWall(x, y) {
        if (x >= 0 && x < this.w && y >= 0 && y < this.h)
            return this.tiles[x][y].isWall;
        return false;
    }
    isWalkable(x, y) {
        if (x >= 0 && x < this.w && y >= 0 && y < this.h)
            return this.tiles[x][y].isWalkable;
        return false;
    }
    isExplored(x, y) {
        if (x >= 0 && x < this.w && y >= 0 && y < this.h)
            return this.tiles[x][y].explored;
        return false;
    }
    /**
     * Tests if a tile is a wall with at least one adjacent floor tile.
     * @param x the x position of the tile to check.
     * @param y the y position of the tile to check.
     */
    isWallWithAdjacentFloor(x, y) {
        if (this.isWall(x, y)) {
            for (let p of this.getAdjacentCells(new core_1.Position(x, y))) {
                if (!this.isWall(p.x, p.y))
                    return true;
            }
        }
        return false;
    }
    /**
     * Returns an array of adjacent floor tiles if the given tile is a wall, or an empty array if the given tile is not a wall.
     * @param x the x position of the tile to check.
     * @param y the y position of the tile to check.
     */
    getAdjacentFloorsToWall(x, y) {
        var tiles = [];
        if (this.isWall(x, y)) {
            for (let p of this.getAdjacentCells(new core_1.Position(x, y))) {
                if (!this.isWall(p.x, p.y))
                    tiles.push(p);
            }
        }
        return tiles;
    }
    setFloor(x, y) {
        this.tiles[x][y].isWall = false;
        this.tiles[x][y].isWalkable = true;
        this.dirty = true;
        this.setCallback(x, y, this, this.tiles[x][y]);
    }
    setWall(x, y) {
        this.tiles[x][y].isWall = true;
        this.tiles[x][y].isWalkable = false;
        this.dirty = true;
        this.setCallback(x, y, this, this.tiles[x][y]);
    }
    setWalkable(x, y) {
        this.tiles[x][y].isWalkable = false;
        this.dirty = true;
        this.setCallback(x, y, this, this.tiles[x][y]);
    }
    setExplored(x, y) {
        this.tiles[x][y].explored = true;
        this.dirty = true;
        this.setCallback(x, y, this, this.tiles[x][y]);
    }
    /**
     * Get position of cells adjacent to a given position.
     * @param p the position to find the adjacent cells to.
     * @param diagonals if true inclide diagonally adjacent cells.
     */
    getAdjacentCells(p, diagonals = false) {
        let cells = [];
        for (let i = 0, len = diagonals ? 8 : 4; i < len; i++) {
            let x = p.x + Map.adjacentX[i];
            if (x >= 0 && x < this.w) {
                let y = p.y + Map.adjacentY[i];
                if (y >= 0 && y < this.h)
                    cells.push(new core_1.Position(x, y));
            }
        }
        return cells;
    }
}
// static arrays to help scan adjacent cells
Map.adjacentX = [-1, 1, 0, 0, -1, 1, -1, 1];
Map.adjacentY = [0, 0, -1, 1, -1, -1, 1, 1];
exports.Map = Map;


/***/ }),
/* 133 */
/***/ (function(module, exports) {

module.exports = PIXI;

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(23);


/***/ })
/******/ ]);
//# sourceMappingURL=scoundrel.js.map