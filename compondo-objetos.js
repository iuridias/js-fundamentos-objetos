const cliente = {
  nome: "Iuri",
  idade: 25,
  cpf: "12345665897",
  email: "iuri@mail.com",
  fones: [
    "5521987896548",
    "5521987465298"
  ]
}

cliente.dependentes = {
  nome: "Nathália",
  parentesco: "Esposa",
  dataNasc: "22/09/1996"
}

console.log(cliente);

cliente.dependentes.nome = "Nathália Mattos da Rocha Dias"

console.log(cliente.dependentes)