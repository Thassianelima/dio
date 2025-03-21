//estrutura de decisao
// switch / case / break / default

let fruta = 'jaca'

switch (fruta){
    case 'laranja':
        console.log('suco de laranja')
break
    case 'banana':
        console.log('vitamina de banana')
break
    case 'maça':
        console.log('suco de maça')
break
    case 'melancia':
    case 'jaca':
        console.log('suco de melancia ou jaca')
break
default: 
        console.log('nao temos essa fruta')
    }