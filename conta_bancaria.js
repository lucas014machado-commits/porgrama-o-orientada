class ContaBancaria {
  constructor(titular, saldoInicial) {
    this.titular = titular;
    this.saldo = saldoInicial;
  }

  depositar(valor) {
    if (valor <= 0) {
      throw new Error("O valor do depósito deve ser maior que zero.");
    }
    this.saldo += valor;
    console.log(`Depósito de R$ ${valor} realizado com sucesso!`);
    console.log(`Saldo atual: R$ ${this.saldo}`);
  }

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
}

// --- Testes com o Bloco try-catch-finally ---

// Instanciação da conta
const minhaConta = new ContaBancaria("Carlos", 100);

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