import { argv } from 'node:process';
import fs from 'fs';

const path = argv[2];

fs.readdir(path, (err, files) => {
    if (!err) {
        let count = 1;
     
        files = files.map(file => trimName(file));

        files.sort();

        for (const file of files) {
            console.log(count + '. ' + file);
            count++;
        }
        process.exit(0)
    } else {
        console.error(err);
    }
});

function trimName(name) {
    let result = '';
    const trimedExt = name.slice(0, -5)
    const splitted = trimedExt.split('_');
    result = splitted[1] + ' ' + splitted[0]
    return result
}