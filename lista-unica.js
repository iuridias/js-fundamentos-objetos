const clientes = [{
  nome: "Iuri",
  idade: 25,
  cpf: "12345665897",
  dependentes: [{
    nome: "Nathália",
    parentesco: "Esposa",
    dataNasc: "22/09/1996"
  },
  {
    nome: "Cleber",
    parentesco: "Pai",
    dataNasc: "09/04/1975"
  }]
},
{
  nome: "German Cano",
  idade: 32,
  cpf: "78896548776",
  dependentes: [{
    nome: "Lorenzo",
    parentesco: "Filho",
    dataNasc: "05/05/2015"
  }]
}]

const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes];

console.table(listaDependentes);