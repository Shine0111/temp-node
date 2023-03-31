// fs module
// -Sync ,blocking

const { readFileSync, writeFileSync } = require('fs');
console.log('start');

// for readFileSync, we need two parameters: the file path and the encoded on the file.
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

console.log(first);
console.log(second);

// for writeFileSync, we need two parameters: the file name and if the file is not there, node will create that file.
// synchronous function that blocks the code execution until the file is written.
writeFileSync(
    './content/result-sync.txt',	
    `Here is the result: ${first}, ${second},`, // this is the value to be written to the file
    { flag: 'a' } // third parameter is an options object, 'a' is for append (So instead of overwriting, we will append).
);

console.log('Done with the task');
console.log('Starting the next task');