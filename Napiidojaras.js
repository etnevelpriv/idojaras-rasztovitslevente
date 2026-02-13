export class Napiidojaras {
    constructor(aHetNapja, napiMaxHomerseklet, napiMinHomerseklet, idojarasSzovegesen) {
        if (typeof aHetNapja != "number" || aHetNapja < 0 || aHetNapja > 6 || aHetNapja == null || aHetNapja == undefined || aHetNapja == NaN) {
            throw new Error(`A hét napja nincs megvelelően megadva: ${aHetNapja}`);
        };
        if (typeof napiMaxHomerseklet != "number" || napiMaxHomerseklet < -50 || napiMaxHomerseklet > 100 || napiMaxHomerseklet == null || napiMaxHomerseklet == undefined || napiMaxHomerseklet == NaN) {
            throw new Error(`A maximum hőmérsékelt nincs megvelelően megadva: ${napiMaxHomerseklet}`);
        };
        if (typeof napiMinHomerseklet != "number" || napiMinHomerseklet < -50 || napiMinHomerseklet > 100 || napiMinHomerseklet == null || napiMinHomerseklet == undefined || napiMinHomerseklet == NaN) {
            throw new Error(`A maximum hőmérsékelt nincs megvelelően megadva: ${napiMinHomerseklet}`);
        };
        if (typeof idojarasSzovegesen != "string" || idojarasSzovegesen == null || idojarasSzovegesen == undefined) {
            throw new Error(`A maximum hőmérsékelt nincs megvelelően megadva: ${napimanapiMaxHomerseklet}`);
        };
        this.aHetNapja = aHetNapja;
        this.napiMaxHomerseklet = napiMaxHomerseklet;
        this.napiMinHomerseklet = napiMinHomerseklet;
        this.idojarasSzovegesen = idojarasSzovegesen;
    };
    toString() {
        return (`A hét hanyadik napja: ${this.aHetNapja}, Napi maximum hőmérséklet: ${this.napiMaxHomerseklet}, Napi minimum hőmérséklet: ${this.napiMinHomerseklet}, Időjárás típusa: ${this.idojarasSzovegesen}`);
    };
};