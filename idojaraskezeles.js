import readline from 'readline';
import { Napiidojaras } from './Napiidojaras.js';
import fs from "node:fs"


const mainIdojaras = function () {
    const idojarasPromise = new Promise((resolve) => {

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
                    resolve(new Napiidojaras(Number(day), Number(max), Number(min), type));
                    rl.close();
                });
            });
        });

        rl.on('close', () => {
            process.exit(0);
        });
    });
    return idojarasPromise;
};

const beolvas = async function () {
    try {
        const resp = fs.readFileSync('idojaras.csv');
        const data = resp.toString().split('\n').splice(1);
        const arr = [];
        // console.log(data);
        for (let i = 0; i < data.length; i++) {
            const day = data[i].split(';')[0];
            const max = data[i].split(';')[1];
            const min = data[i].split(';')[2];
            const type = data[i].split(';')[3];
            arr.push(new Napiidojaras(Number(day), Number(max), Number(min), type));
        };
        console.log(arr)
        return arr;
    } catch (err) {
        throw new Error(err);
    };
};

beolvas();