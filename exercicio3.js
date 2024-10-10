const filme  = { 
    direção : "vini",
    nome : 'manas da pesada',
    anoLancamento : 2024,
    elenco : ['Teresa', 'Muriel'],
    jaViu :  true
}
filme.personagens = ["tetê", "muri"]
console.log(filme)
console.log(`${filme.elenco[0]} interpreta ${filme.personagens[0]}`)
console.log(`${filme.elenco[1]} interpreta ${filme.personagens[1]}`)
filme.elenco[0]= "xuxa"

console.log(filme)