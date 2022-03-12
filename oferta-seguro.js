const cliente = {
  nome: "Iuri",
  idade: 25,
  cpf: "12345665897",
  email: "iuri@mail.com",
  fones: [
    "5521987896548",
    "5521987465298"
  ],
  dependentes: [{
    nome: "Nathália",
    parentesco: "Esposa",
    dataNasc: "22/09/1996"
  },
  {
    nome: "Cleber",
    parentesco: "Pai",
    dataNasc: "09/04/1975"
  }],
  saldo: 100,
  depositar: function (valor) {
    this.saldo += valor;
  }
}

function oferecerSeguro(obj) {
  const propsClientes = Object.keys(obj);
  if (propsClientes.includes("dependentes")) {
    console.log(`Oferta de seguro de vida para ${obj.nome}`);
  }
}



console.log(Object.values(cliente))
console.log(Object.entries(cliente))


console.log(`--------------------------------------------`)
oferecerSeguro(cliente);