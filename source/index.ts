import { Estacionamento } from "./metodos";

let eto = new Estacionamento();

let menu = true;

while (menu) {
    let resposta: number;
    resposta = Number(prompt("Menu:\n 1 - > Cadastrar \n 2 - > Carros estacionados \n 3 - > Registros de pagamento:(Saida) \n 4 - > Tirar carro \n 5 -> Sair")!);
    if (!(resposta >= 1 && resposta <= 5)) {
        alert("Opção invalida!");
    }
    if (resposta == 1) {
        eto.CadastroCarro();
    }
    if (resposta == 2) {
        eto.CarrosEstacionados();
    }
    if (resposta == 3) {
        eto.RegistrosPagamento();
    }
    if (resposta == 4) {
        eto.CalcularTempo();
    }
    if (resposta == 5) {
        menu = false;
        alert("Programa finalizado!");
    }
}