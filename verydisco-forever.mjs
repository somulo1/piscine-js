import { argv } from 'node:process';
import { writeFile } from 'node:fs/promises';
import { Buffer } from 'node:buffer';

const arg = argv[2];
const words = arg.split(' ');
let veryDiscoArr = [];

words.map((element) => {
    const halfIndex = element.length % 2 === 0 ? element.length / 2 : (element.length +1 ) / 2;
        let part1 = element.slice(0, halfIndex)
        let part2 = element.slice(halfIndex)
        const veryDisco = part2 + part1;
        veryDiscoArr.push(veryDisco);
});
let result = veryDiscoArr.join(' ')
//console.log(result);
try {
    const controller = new AbortController();
    const { signal} = controller;
    const data = new Uint8Array(Buffer.from(result));
    const promise = writeFile('verydisco-forever.txt', data, { signal });

    await promise;
} catch (e) {
 
    console.error(e);
}