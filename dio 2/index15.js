// OR || NOSSO BONECO SO PODE SAIR SE TIVER SEM CHUVA OU COM GUARDA-CHUVA

let tempo = 'sol'
let item = 'guarda chuva'
let podeSair = (tempo !== 'chuva' ) || (item === 'guarda chuva')
console.log('nosso personagem pode sair ' + podeSair)
