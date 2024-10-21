import { argv } from 'node:process';
import fs from 'fs';

const dir = argv[2]
const path = dir ? dir : '.';

fs.readdir(path, (err, files) => {
    if (!err) {
        console.log(files.length);
    } else {
        console.error(err);
    }
})