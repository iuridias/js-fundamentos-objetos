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

let relatorio = "";

for (let info in cliente) {
  if (typeof cliente[info] === "object" || 
      typeof cliente[info] === "function") {
    continue
  } else {
    relatorio += `${info}: ${cliente[info]} \n`
  }
  
}

console.log(relatorio);