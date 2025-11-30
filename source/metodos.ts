import { Carro } from "./carroM";
import { Registros } from "./resgistrosP";

export class Estacionamento {
    armazena: Array<Carro>;
    pagamento: Array<Registros>;
    limiteDevagas: number;

    constructor() {
        this.armazena = [];
        this.pagamento = [];
        this.limiteDevagas = 5;
    }
    CadastroCarro() {
        if (this.limiteDevagas == 0) {
            alert("Estacionamento lotado!");
        } else {
            let cor = prompt("Digite a cor do carro!");
            let placa = prompt("Digite a placa do carro!");
            let modelo = prompt("Digite o modelo do carro!");
            let entrada = new Date();
            let ficha = Math.floor(Math.random() * 100) + 1;

            if (!cor || !placa || !modelo) {
                alert("Preecha todos os campos!");
                return;
            }

            let existe = false;

            for (let i = 0; i < this.armazena.length; i++) {
                if (this.armazena[i].ficha == ficha || this.armazena[i].placa == placa) {
                    existe = true;
                    break;
                }
            }
            if (existe) {
                alert("Erro esse carro ja esta no estacionamento!");
            } else {
                let novo = new Carro(cor, modelo, placa, ficha, entrada);
                this.limiteDevagas = this.limiteDevagas - 1;
                this.armazena.push(novo);
                alert("Cadastro realizado com sucesso!" + " | " + ficha);
            }
        }
    }

    CarrosEstacionados() {
        if (this.armazena.length == 0) {
            alert("Sem carros estacionados!");
        } else {
            let lista = "lista: \n";

            for (let i = 0; i < this.armazena.length; i++) {
                lista = lista + (i + 1) + " = " + " Cor :" + this.armazena[i].cor + " | Entrada: " + this.armazena[i].entrada + " | Ficha: " + this.armazena[i].ficha + " | Modelo: " + this.armazena[i].modelo + " | Placa: " + this.armazena[i].placa + "\n\n";
            }
            alert(lista);
        }
    }
    CalcularTempo() {
        if (this.armazena.length == 0) {
            alert("Sem carros estacionados!");
        } else {
            let resposta = prompt("Digite sua ficha:");
            let ficha = Number(resposta);
            let achou = false;
            let valorPorHora = 5;

            let saida = new Date();

            for (let i = 0; i < this.armazena.length; i++) {
                if (this.armazena[i].ficha === ficha) {
                    achou = true;

                    let entrada = this.armazena[i].entrada;

                    let tempoMs = saida.getTime() - entrada.getTime();

                    let minutos = Math.floor(tempoMs / 60000);
                    let horas = Math.floor(minutos / 60);
                    let restoMin = minutos % 60;
                    let total = Math.ceil(minutos / 60) * valorPorHora;

                    let placaP = this.armazena[i].placa;
                    if (total > 5) {
                        alert("Tempo total: " + horas + " hora e " + restoMin + " minuto!");
                        alert("Valor a pagar: R$ " + total + "");
                        let resgitro = new Registros(ficha, total, placaP);
                        this.pagamento.push(resgitro);

                        alert("Pagamento registrado!");
                        this.armazena.splice(i, 1);
                        this.limiteDevagas = this.limiteDevagas + 1;
                        break;
                    } else {
                        total = 5;
                        alert("Tempo total: " + horas + " hora e " + restoMin + " minuto!");
                        alert("Valor a pagar: R$ " + total + "");
                        let resgitro = new Registros(ficha, total, placaP);
                        this.pagamento.push(resgitro);

                        alert("Carregando...");
                        alert("Pagamento realizado com sucesso!")
                        this.armazena.splice(i, 1);
                        this.limiteDevagas = this.limiteDevagas + 1;
                        break;
                    }
                }
            }

            if (!achou) {
                alert("Ficha não encontrada!");
            }
        }
    }
    RegistrosPagamento() {
        if (this.pagamento.length == 0) {
            alert("Não a registros de pagamento!");
        } else {
            let lista = "Lista e Saida: \n";

            for (let i = 0; i < this.pagamento.length; i++) {
                lista = lista + (i + 1) + " = " + " Ficha: " + this.pagamento[i].fichaP + " Pagamento: R$: " + this.pagamento[i].pagamentoP + " Placa: " + this.pagamento[i].placaP + "\n\n";
            }
            alert(lista);
        }
    }
}
