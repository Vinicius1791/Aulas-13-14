function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log( minhaFuncao(pessoa, "backender") )//false
console.log( minhaFuncao(pessoa, "altura") )//undefined

//a) O que vai ser impresso no console?
//b) Explique o valor impresso no console. Você sabe por que isso aconteceu? Ele imprime no console porque a função retorna a propriedade do objeto conforme os parametros de entrada. No caso da propriedade "backender" ele imprime o valor false pois é o valor que existe para aquele atributo, no caso do atributo "altura" ele imprime o valor undefined, porque não existe o atributo altura no objeto.