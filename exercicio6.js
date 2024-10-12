const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

//a) O que vai ser impresso no console?

//{nome: 'juca', idade: 3, raca: 'SRD'}

//{nome: 'juba', idade: 3, raca: 'SRD'}

//{nome: 'jubo' idade: 3, raca: 'SRD'}

//b) O que faz a sintaxe dos três pontos antes do nome de um objeto?

//Faz uma copia do objeto(atributos e propriedades).
