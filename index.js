import { Napiidojaras } from "./Napiidojaras.js";
import { beolvas, mainIdojaras } from "./idojaraskezeles.js";
import fs from "node:fs";

console.log(new Napiidojaras(Number(5), Number(10), Number(-3), "Napos").toString());

const init = async function () {
    const arr = await beolvas();
    const elem = await mainIdojaras();
    arr.push(elem);
    // console.log(arr);
    let legmelegebbNap = arr[0];
    arr.forEach((element) => {
        if (element.napiMaxHomerseklet > legmelegebbNap.napiMaxHomerseklet) {
            legmelegebbNap = element;
        };
    });
    console.log(`A legmelegebb nap: ${legmelegebbNap}`);
    ujFajlbaIras(arr)
};

const ujFajlbaIras = function (arr) {
    let str = `nap;min;max;időjárás\n`;
    // console.log(arr)
    try {
        arr.forEach((element) => {
            const nap = element.aHetNapja;
            const max = element.napiMaxHomerseklet;
            const min = element.napiMinHomerseklet;
            const type = element.idojarasSzovegesen;
            str += `${nap};${min};${max};${type}\n`;
        });
        // console.log(str)
        fs.writeFileSync("idojaras-uj.csv", str);
    } catch (err) {
        throw new Error(err);
    };
};

init();