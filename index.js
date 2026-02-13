import { Napiidojaras } from "./Napiidojaras.js";
import { beolvas, mainIdojaras } from "./idojaraskezeles.js";

console.log(new Napiidojaras(Number(5), Number(10), Number(-3), "Napos").toString());

const init = async function () {
    const arr = await beolvas();
    console.log(arr);
};

init();