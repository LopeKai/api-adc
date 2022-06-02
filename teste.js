const numeros = [1,2,3,4,4,5,6,7,8,9,10,12,14]

const strings = numeros

function NumeroMaiorQueDez(number) {
    return `Esse número ${number} é maior que dez.`
}

console.log(strings.filter((maior) => maior > 10).map(NumeroMaiorQueDez))
