import { writeFile } from 'node:fs/promises';
import { readFile } from 'node:fs/promises';
import { readdir } from 'node:fs/promises';
import { argv } from 'node:process'

let filePath = argv[2]
let files
let guests = []
let list = ""
try {
    files = await readdir(filePath);
    for (let i = 0; i < files.length; i++) {
        let content = await readFile(`${filePath}/${files[i]}`, 'utf8')
        let obj = (JSON.parse(content))
        if (obj.answer === 'yes') {
            guests.push(files[i])
        }
    }
    let result = trimGuestName(guests)
    result.sort()

    for (let i = 0; i < result.length; i++) {
        list += `${i+1}. ${result[i]}`;
        if (i < result.length - 1) {
            list += "\n";
        }
    }
    writeFile('vip.txt', list)
} catch (err) {
    console.error(err);
}

function trimGuestName(files) {
    let result = [];
    for (const file of files) {
        const trimedExt = file.slice(0, -5)
        const splitted = trimedExt.split('_');
        result.push(`${splitted[1]} ${splitted[0]}`)
    }
    return result
}