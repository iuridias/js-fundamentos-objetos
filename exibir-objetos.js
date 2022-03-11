const cliente = {
  nome: "Iuri",
  idade: 25,
  cpf: "12345665897",
  email: "iuri@mail.com"
}

console.log(`O  nome do cliente é: ${cliente.nome}`);
console.log(`Os primeiros digítos do CPF: ${cliente.cpf.substring(0, 3)}`);
console.log(`O email do cliente é: ${cliente.email}`);