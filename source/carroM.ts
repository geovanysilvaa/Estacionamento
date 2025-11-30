export class Carro {
    cor: string;
    modelo: string;
    placa: string;
    entrada: Date;
    ficha: number;

    constructor(cor: string, modelo: string, placa: string, ficha: number, entrada: Date) {
        this.cor = cor;
        this.modelo = modelo;
        this.placa = placa;
        this.ficha = ficha;
        this.entrada = entrada;
    }
}
