//solução 1
function verificaPalindromo(string){
    if(!string) return;

    return string.split('').reverse().join('') === string
}
console.log(verificaPalindromo('roma'))

//verificar palindromo

//solução 2

function verificarPalindromo2(string){
    if(!string) return 'string inexistente';

    for (let i = 0; i < string.length /2; i++){
        if(string[i]!== string[string.length -1 -i])
           { return false;

           } 

           return true;
    }
}console.log(verificarPalindromo2('abba'))