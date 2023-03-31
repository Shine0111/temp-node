// fs module
// -Async ,non-blocking 
const { readFile, writeFile } = require('fs');

// For async, we need to provide a callback function
// we run the callback function when we are done or whatever functionality is complete.
// For example, onClick events.

console.log('start');
// If we don't give the encoding value, we will get an error of buffer.
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
            return
        }
        const second = result;
        writeFile(
            './content/result-async.txt', 
            `Here is the result: ${first}, ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err);
                    return
                }
                console.log('Done with this task');
            }
        )
    })
});
/* This code reads the contents of two files asynchronously using the readFile method from the fs module. It then combines the contents of both files and writes the result to a new file using the writeFile method from the fs module. 
The first argument of readFile and writeFile specifies the file path. The second argument specifies the character encoding type of the file. The third argument is a callback function that is executed when the file read or write is complete. 
If there is an error during reading or writing of the file, the callback function will log the error to the console. 
Finally, the contents of both files are concatenated and written to a new file called result-async.txt in the ./content directory.
 */
console.log('starting new task');