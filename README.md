# Resizer-Image
A library to resize images in file or base64.

# Demo 
### [Code Sandbox ](https://codesandbox.io/s/resizer-image-demo-l65mhh?file=/src/App.js)

# Installation
```js
npm i resizer-image
```

# Usage 
```js
import { resize } from "resizer-image";
```
```js
const sizes = [
    { w: 0, h: 0 }, // keeps width, keeps height
    { w: 160, h: 0 }, // changes width, keeps height ratio
    { w: 0, h: 90 }, // changes height, keeps width ratio
    { w: 160, h: 90 },
    { w: 320, h: 180 },
    { w: 480, h: 270 },
    { w: 640, h: 360 }
  ]
  
const resizedImages = await resize(input, sizes); //=> [ "blob:http://....","blob:http://...."] 
```
## Params  
```js
resize(input, sizes)
```
| Param | Description | Example
| ------   | ------ |  ------ | 
| input   | a file or base64 src | e.target.```files[0]``` | 
| sizes   | an array of sizes | [{ w: ```160```, h: ```90``` },{ w: ```320```, h: ```180``` }] | 

* h=```0```, keep the ratio of height 
* w=```0```, keep the ratio of width

## Sources
CodeSandbox: https://codesandbox.io/s/resizer-image-demo-l65mhh?file=/src/App.js 
Github: https://github.com/vnseattle/resizer-image

### Happy coding
Dev9x