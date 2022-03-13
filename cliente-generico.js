function Cliente (nome, cpf, email, saldo) {
  this.nome = nome;
  this.cpf = cpf;
  this.email = email;
  this.saldo = saldo;
  this.depositar = function (valor) {
    this.saldo += valor;
  }
}

const iuri = new Cliente (
  "Iuri",
  "16655879987",
  "iuri@email.com",
  120
)

console.log(iuri);