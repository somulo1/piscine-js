import process,{ argv } from 'node:process';
import { Buffer } from 'node:buffer';
import fs from 'fs';

const targetFile = argv[2];
const keyWord = argv[3];
let destinationFile = argv[4];
let processed = ''

fs.readFile(targetFile, 'utf8', (err, content) => {
    if (err) {
        console.error(err.message);
        process.exit(1);
    } else {
        if (keyWord.toLowerCase() === 'encode') {
            processed = Buffer.from(content).toString('base64');
            if (!destinationFile) destinationFile = 'cypher.txt'
            write(destinationFile, processed)
        } else if (keyWord.toLowerCase() === 'decode') {
            processed = Buffer.from(content, 'base64').toString('utf8');
            if (!destinationFile) destinationFile = 'clear.txt'
            write(destinationFile, processed)
        } else {
            console.error(`${keyWord} is an invalid entry`)
            process.exit(1);
        }
    }
});

function write(destinationFile, processed) {
    fs.writeFile(destinationFile, processed, (err) => {
        if (err) {
            console.error(err.message);
            process.exit(1)
        }
    });
}