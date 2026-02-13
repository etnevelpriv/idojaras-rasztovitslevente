export class Napiidojaras {
    constructor (aHetNapja, napiMaxHomerseklet, napiMinHomerseklet, idojarasSzovegesen) {
        this.aHetNapja = aHetNapja;
        this.napiMaxHomerseklet = napiMaxHomerseklet;
        this.napiMinHomerseklet = napiMinHomerseklet;
        this.idojarasSzovegesen = idojarasSzovegesen;
    };
    toString () {
        return (`A hét hanyadik napja: ${this.aHetNapja}, Napi maximum hőmérséklet: ${this.napiMaxHomerseklet}, Napi minimum hőmérséklet: ${this.napiMinHomerseklet}, Időjárás típusa: ${this.idojarasSzovegesen}`);
    };
};