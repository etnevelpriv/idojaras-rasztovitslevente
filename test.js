import readline from 'readline';
import { Napiidojaras } from './Napiidojaras.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Mi a mai max hőmérséklet? ', (max) => {
    console.log(`Max: ${max}!`);
    rl.question('Mi a mai minimum hőmérséklet? ', (min) => {
        console.log(`Min: ${min}`);
        rl.question('Milyen az időjárás típusa? ', (type) => {
            console.log(`Tipus: ${type}`);
            const day = new Date();
            console.log(new Napiidojaras(Number(day), Number(max), Number(min), type).toString());
            rl.close();
        });
    });
});

rl.on('close', () => {
    process.exit(0);
});
