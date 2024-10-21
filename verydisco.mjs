import { argv } from 'node:process'

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


console.log(veryDiscoArr.join(' '));