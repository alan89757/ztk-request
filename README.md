# ztk-request

A simple string utility library for common string transformations.

## Installation
npm install ztk-request
## Usage
const { camelCase, capitalize, truncate } = require('ztk-request');

console.log(camelCase('hello_world')); // Output: helloWorld
console.log(capitalize('world')); // Output: World
console.log(truncate('This is a long text', 10)); // Output: This is a...
## API

### `camelCase(str)`
Converts a string from snake_case or kebab-case to camelCase.

### `capitalize(str)`
Capitalizes the first character of a string.

### `truncate(str, maxLength, [ellipsis='...'])`
Truncates a string to a specified maximum length and appends an ellipsis.

## License
MIT
    