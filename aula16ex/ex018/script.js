let num = document.querySelector('#num')
let tab = document.querySelector('#tabela')
let resultado = document.querySelector('#res')
let valores = []
function adicionar() {
    let n = Number(num.value)
    if (num.value.length == 0) {
        alert('[ERRO] Escolha um número!')
        return
    } else {
        valores.push(n)
        let item = document.createElement('option')
        item.text = n
        tab.appendChild(item)
        num.value = ''
    }
}

function encontrarMaiorValor(arr) {
    let maior = arr[0]
    for (let i = 1; i < arr.length; i++){
        if (arr[i] > maior){
            maior = arr[i]
        }
    }
    return maior
}

function encontrarMenorValor(arr) {
    let menor = arr[0]; // Começa com o primeiro elemento como menor valor

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < menor) {
            menor = arr[i]; // Atualiza o menor valor se encontrar um valor menor
        }
    }

    return menor;
}


function analisar() {
    if (valores.length === 0) {
        alert('[ERRO] Preencha a tabela acima com dados e tente novamente.');
    } else {
        let maiorValor = encontrarMaiorValor(valores);
        let menorValor = encontrarMenorValor(valores);
        let soma = valores.reduce((acc, cur) => acc + cur, 0);
        let media = soma / valores.length;

        resultado.innerHTML = `Ao todo, temos ${valores.length} números cadastrados.<br>`;
        resultado.innerHTML += `O maior valor informado foi ${maiorValor}.<br>`;
        resultado.innerHTML += `O menor valor informado foi ${menorValor}.<br>`;
        resultado.innerHTML += `Somando todos os valores, temos ${soma}.<br>`;
        resultado.innerHTML += `A média dos valores digitados é ${media.toFixed(2)}.`;
    }
}
