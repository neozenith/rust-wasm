'use strict';
fetch('./func_test.wasm')
  .then(response => response.arrayBuffer())
  .then(bytes => WebAssembly.instantiate(bytes))
  .then(results => {
    console.log('Loaded wasm module');
    const instance = results.instance;

    const white = 2;
    const black = 1;
    const crowned_white = 6;
    const crowned_black = 5;
    const offset = instance.exports.offsetForPosition(3, 4);
    console.log('Offset for 3,4 is ', offset);
  });
