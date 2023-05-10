const menorValor = 1
const maiorValor = 100
const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}
console.log('Número secreto: ', numeroSecreto)

const elementoMenorValor = document.querySelector('#menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorrValor = document.querySelector('#maior-valor')
elementoMaiorrValor.innerHTML = maiorValor