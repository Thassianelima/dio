let numero = '1'
console.log(numero === 1)

// = é atribuição
// == é para comparar o valor
// === é para comparar o valor e o formato do conteúdo

let marca = 'apple'
console.log(marca !== 'samsung')

// !== é diferente?

let cpfBloqueado = '123.445.222-45'
let cpfUsusario = '222.111.222-09'
let ehCpfbLOQUEADO = cpfUsusario === cpfBloqueado
console.log('o usuario pode embarcar? ' + ehCpfbLOQUEADO)

let cpfPermitido = '222.555.333-02'
let cpfDoUsuario  = '222.555.333-02'
let podeEmbarcar = cpfDoUsuario !== cpfPermitido
console.log('é um usuario invalido?' + podeEmbarcar)