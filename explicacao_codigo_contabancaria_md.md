# Explicação do Código: `ContaBancaria` em JavaScript

Este código ilustra conceitos fundamentais de **Programação Orientada a Objetos (POO)** e **Tratamento de Exceções (Erros)** em JavaScript.

Below is a detailed breakdown of what was implemented and the purpose of each part.

---

## 1. Definição da Classe `ContaBancaria`

```javascript
class ContaBancaria {
  constructor(titular, saldoInicial) {
    this.titular = titular;
    this.saldo = saldoInicial;
  }
  ...
}
```

* **O que foi feito:** Foi criada uma classe chamada `ContaBancaria` com um método construtor.
* **Para que serve:** A classe funciona como um "molde" (blueprint) para criar objetos de contas bancárias. O `constructor` inicializa as propriedades `titular` (nome da pessoa) e `saldo` (dinheiro disponível na conta) assim que uma nova conta é instanciada.

---

## 2. Método `depositar(valor)`

```javascript
depositar(valor) {
  if (valor <= 0) {
    throw new Error("O valor do depósito deve ser maior que zero.");
  }
  this.saldo += valor;
  console.log(`Depósito de R$ ${valor} realizado com sucesso!`);
  console.log(`Saldo atual: R$ ${this.saldo}`);
}
```

* **O que foi feito:**
  1. **Validação:** Verifica se o `valor` do depósito é menor ou igual a zero (`valor <= 0`). Se for, dispara um erro utilizando `throw new Error(...)`.
  2. **Atualização do saldo:** Adiciona o valor ao saldo atual (`this.saldo += valor`).
  3. **Mensagens:** Exibe no console a confirmação da transação e o saldo atualizado.
* **Para que serve:** Permite adicionar dinheiro à conta com segurança, impedindo operações inválidas (como tentar depositar valores negativos ou zero).

---

## 3. Método `sacar(valor)`

```javascript
sacar(valor) {
  if (valor > this.saldo) {
    throw new Error("Saldo insuficiente para realizar o saque.");
  }
  if (valor <= 0) {
    throw new Error("O valor do saque deve ser maior que zero.");
  }
  this.saldo -= valor;
  console.log(`Saque de R$ ${valor} realizado com sucesso!`);
  console.log(`Saldo atual: R$ ${this.saldo}`);
}
```

* **O que foi feito:**
  1. **Validação de saldo:** Impede o saque se o valor solicitado for maior que o saldo disponível.
  2. **Validação de valor:** Impede saques com valores menores ou iguais a zero.
  3. **Atualização do saldo:** Subtrai o valor do saldo (`this.saldo -= valor`).
  4. **Mensagens:** Exibe a confirmação do saque e o saldo restante.
* **Para que serve:** Garante as regras de negócio bancárias: a conta não pode ter saldo negativo via saque e o usuário não pode sacar um valor inválido.

---

## 4. Instanciação do Objeto

```javascript
const minhaConta = new ContaBancaria("Carlos", 100);
```

* **O que foi feito:** Criou-se uma nova instância da classe `ContaBancaria` chamada `minhaConta`.
* **Para que serve:** Cria uma conta real em memória pertencente ao titular `"Carlos"`, iniciando com o saldo de **R$ 100**.

---

## 5. Bloco de Tratamento de Erros: `try - catch - finally`

```javascript
try {
  // Teste de depósito válido
  minhaConta.depositar(50);

  // Forçando situação de erro (tentando sacar R$ 500 de uma conta com R$ 150)
  minhaConta.sacar(500);
} catch (error) {
  // Captura do erro e exibição da mensagem
  console.log(`[ERRO CAPTURADO]: ${error.message}`);
} finally {
  // Mensagem final obrigatória
  console.log("Operação bancária finalizada.");
}
```

### **A. O bloco `try`**
* **O que foi feito:** Executa a operação de depósito de R$ 50 (o saldo passa para R$ 150) e em seguida tenta realizar um saque de R$ 500.
* **Para que serve:** Agrupa comandos que podem falhar ou disparar um erro. O JavaScript tenta executar esse bloco linha por linha.

### **B. O bloco `catch (error)`**
* **O que foi feito:** Quando a linha `minhaConta.sacar(500)` lança o erro `"Saldo insuficiente para realizar o saque."`, a execução do `try` é interrompida imediatamente e passa para o `catch`. O parâmetro `error` contém o objeto do erro lançado.
* **Para que serve:** Trata o erro de forma amigável no sistema sem que a aplicação "quebre" ou pare de funcionar de forma inesperada.

### **C. O bloco `finally`**
* **O que foi feito:** Exibe a mensagem `"Operação bancária finalizada."`.
* **Para que serve:** Executa um código **obrigatoriamente**, ocorrendo um erro ou não. Em aplicações reais, é comumente usado para fechar conexões com banco de dados, fechar arquivos ou encerar carregamentos da interface.

---

## Saída Esperada no Console

 Ao executar o código acima, a seguinte sequência de mensagens será exibida:

```text
Depósito de R$ 50 realizado com sucesso!
Saldo atual: R$ 150
[ERRO CAPTURADO]: Saldo insuficiente para realizar o saque.
Operação bancária finalizada.
```