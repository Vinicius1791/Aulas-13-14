const pessoa = {
    nome : "Vini",
    idade : 33,
    generoMusicalPreferido : "Rap"
}

function minhaFuncao(x) {
    const novaPessoa = {
        ...x,
        comidasPreferidas: ["Churrasco", "Massa", "Feijão"],
        melhorAmigo:{
            nome: 'Vitor',
            idade: 25
        }
    }
    console.log(`O nome da pessoa é ${novaPessoa.nome} e suas comidas preferidas são ${novaPessoa.comidasPreferidas[0]}, ${novaPessoa.comidasPreferidas[1]} e ${novaPessoa.comidasPreferidas[2]}. Seu melhor amigo se chama ${novaPessoa.melhorAmigo.nome} e tem ${novaPessoa.melhorAmigo.idade} anos`)
}