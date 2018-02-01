# js-aspect-ratio
A simple package for calculate the aspect ratio
## Install
    npm install js-aspect-ratio
## Synopsis
Get aspect with ratio 4:3 from a height of 375px
```javascript
var AspectRatio = require('./dist/index.js').default // you must import like **require('js-aspect-ratio')**
var aspectRatio = new AspectRatio(4, 3) // Here you must specify the want aspect ratio 4:3, 16:9

var test = require('tape')

test('Get width ratio 4:3 from a height of 375px', function (t) {
  t.plan(1)
  t.equal(aspectRatio.getWidth(375), 500)
})
```
Or get a aspect height ratio 4:3 from a width of 500px
```javascript
test('Get height ratio 4:3 from a width of 500px', function (t) {
  t.plan(1)
  t.equal(aspectRatio.getHeight(500), 375)
})
```
## License
MIT

