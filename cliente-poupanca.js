function Cliente (nome, cpf, email, saldo) {
  this.nome = nome;
  this.cpf = cpf;
  this.email = email;
  this.saldo = saldo;
  this.depositar = function (valor) {
    this.saldo += valor;
  }
}

function ClientePoupanca (nome, cpf, email, saldo, saldoPoup) {
  Cliente.call(this, nome, cpf, email, saldo);
  this.saldoPoup = saldoPoup;
}

const iuri = new ClientePoupanca (
  "Iuri",
  "16655879987",
  "iuri@email.com",
  120,
  200
)

console.log(iuri)

ClientePoupanca.prototype.depositarPoup = function (valor) {
  this.saldoPoup += valor;
}

iuri.depositarPoup(500);

console.log(iuri.saldoPoup);