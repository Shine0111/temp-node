// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (ONLY SHARE MINIMUM)
const names = require('./4-names');
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor');

// if we have a function that is executed inside the module, require will run even if it's not defined in const. When you import a module, you invoke it.
require('./7-mind-grenade');

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)