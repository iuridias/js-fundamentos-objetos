const cliente = {
  nome: "Iuri",
  idade: 25,
  cpf: "12345665897",
  email: "iuri@mail.com"
}

const chaves = ["nome", "idade", "cpf", "email"];

const chave = 'nome';

console.log(cliente[chaves[0]]);
console.log(cliente[chave]);

chaves.forEach(info => console.log(cliente[info]))