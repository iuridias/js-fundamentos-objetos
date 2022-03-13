class Cliente {
  constructor(nome, email, cpf, saldo) {
    this.nome = nome;
    this.email = email;
    this.cpf = cpf;
    this.saldo = saldo;
  }

  depositar(valor) {
    this.saldo += valor;
  }

  exibirSaldo() {
    console.log(this.saldo);
  }
}

const iuri = new Cliente(
  "Iuri",
  "iuri@email.com",
  "55478965487",
  150
)

console.log(iuri);

iuri.depositar(500);

iuri.exibirSaldo();
