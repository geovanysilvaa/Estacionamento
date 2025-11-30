# 🅿️ Sistema de Estacionamento - POO 🚗

## 📖 Descrição
Sistema de estacionamento desenvolvido em **TypeScript**, usando **Programação Orientada a Objetos (POO)**.  
Permite cadastrar carros, controlar vagas, calcular tempo de estacionamento, registrar pagamentos e consultar registros de saída.

---

## ⚙️ Funcionalidades
- 📝 Cadastrar carros (cor, modelo, placa)  
- 📋 Listar carros estacionados  
- ⏱️ Calcular tempo de permanência e valor a pagar  
- 💰 Registrar pagamentos e histórico  
- 🅿️ Controlar limite de vagas  

---

## 🗂️ Estrutura de Classes

### `Carro`
Representa um carro estacionado.  
**Atributos:** `cor`, `modelo`, `placa`, `entrada` (Date), `ficha`.

### `Registros`
Registra pagamentos.  
**Atributos:** `fichaP`, `pagamentoP`, `placaP`.

### `Estacionamento`
Gerencia todo o estacionamento.  
**Atributos:** `armazena` (Array<Carro>), `pagamento` (Array<Registros>), `limiteDevagas`.  
**Métodos principais:**
- `CadastroCarro()` → cadastra carro novo  
- `CarrosEstacionados()` → lista carros  
- `CalcularTempo()` → calcula tempo e registra pagamento  
- `RegistrosPagamento()` → exibe histórico  

---

## 🛠️ Tecnologias
- TypeScript  
- Node.js  
- Prompt/Alert (interface simples)  
- Parcel (opcional)  

---

## 🚀 Como Executar
```bash
git clone https://github.com/geovanysilvaa/Estacionamento.git
cd Estacionamento
npm install
npm start


💡 Exemplo de Uso
import { Estacionamento } from "./metodos";

const estacionamento = new Estacionamento();
estacionamento.CadastroCarro();
estacionamento.CarrosEstacionados();
estacionamento.CalcularTempo();
estacionamento.RegistrosPagamento();


📊 Exemplo Visual de Funcionamento

Ficha	Placa	Modelo	Cor	Entrada	Pagamento (R$)
23	ABC-1234	Civic	Preto	30/11/2025 09:00	10
54	XYZ-5678	Corolla	Branco	30/11/2025 10:15	5


📌 Autor
Geovany de Oliveria Silva Batista