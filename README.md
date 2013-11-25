# Delayer

Add functionality to set unique, named timeouts and intervals
so they can be cleared afterwards when disposing the object.
This is especially useful in your custom View class which inherits
from the standard Chaplin.View.

Mixin this object to add the delayer capability to any object:

```javascript
_.extend(object, Delayer);
```

Or to a prototype of a class:

```javascript
_.extend(View.prototype, Delayer)
```

In the dispose method, call `clearDelayed` to remove all pending
timeouts and running intervals:

```javascript
dispose: function() {
  if (this.disposed) return;
  this.clearDelayed();
  <super>
}
```

For browsers and node.js.

## Installation
* Just include delayer before your scripts.
* `npm install delayer` if you’re using node.js.
* `component install chaplinjs/delayer` if you’re using [component(1)](https://github.com/component/component).
* `bower install delayer` if you’re using [Twitter Bower](http://bower.io).

## Usage

Node.js:

```javascript
var delayer = require('delayer');
_.extend(thing, delayer);
```

Browser:

```javascript
// component(1)
var delayer = require('delayer');
_.extend(thing, delayer);

// Default:
_.extend(thing, window.delayer)
```

## License

The MIT License (MIT)

Copyright (c) 2013 Paul Miller (http://paulmillr.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the “Software”), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
