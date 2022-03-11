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
  }]
}

//console.log(cliente)

cliente.dependentes.push({
  nome: "Cleber",
  parentesco: "Pai",
  dataNasc: "09/04/1975"
})

console.log(cliente.dependentes);

console.log(cliente.dependentes[1]);

cliente.dependentes.forEach((dependentes) => console.log(dependentes.nome));

const dependenteMaisNovo = cliente.dependentes.filter(dependente => dependente.dataNasc === "22/09/1996")

console.log(dependenteMaisNovo[0].nome);