const fichaGuerreiro = {
  nome: "Aragorn",
  classe: "guerreiro"
 }
 
 const equipoGuerreiro = {
  espada: "Andúril",
  capa: "capa élfica +2"
 }

//  const guerreiro = {fichaGuerreiro, equipoGuerreiro};
 
const guerreiro = {...equipoGuerreiro, ...fichaGuerreiro};

 console.log(guerreiro);

