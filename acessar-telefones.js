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

cliente.fones.forEach((fone) => {
  console.log(fone);
})