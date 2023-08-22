import * as fs from 'node:fs/promises' // Got this line from the docs
const folderName = process.argv[2] || 'Project'

import { mkdir, mkdirSync, writeFile, writeFileSync } from 'node:fs';
import { Buffer } from 'node:buffer';

const data = new Uint8Array(Buffer.from('Hello Node.js'));

// Create ./tmp/a/apple, regardless of whether ./tmp and ./tmp/a exist.
// mkdir('Dogs', { recursive: true }, (err) => {
//     console.log("IN THE CALLBACK!!")
//   if (err) throw err;
// });

try{
    mkdirSync(folderName);
    writeFile(`${folderName}/index.html`, data, (err) => {
        if(err) throw err;
    })
    writeFile(`${folderName}/app.js`, data, (err) => {
        if(err) throw err;
    })
    writeFile(`${folderName}/styles.css`, data, (err) => {
        if(err) throw err;
    })    
} catch(err){
    console.log("Something went wront!");
    console.log(err);
}
