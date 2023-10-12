const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'files', 'starter.txt'), (err, data) => {
     if(err) throw err;
     console.log(data.toString());
    });

console.log('Hello...');

fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you.', (err) => {
    if(err) throw err;
    console.log('Write complete');
   });

process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
})

