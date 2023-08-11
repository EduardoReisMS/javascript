let num = document.querySelector('#num')
let tab = document.querySelector('#tabela')
let resultado = document.querySelector('#res')
let valores = []
 
function adicionar() {
    let n = Number(num.value)
    if (num.value.length == 0) {
        alert('[ERRO] Escolha um número!')
        return
    } else if (num.value < 1 || num.value > 100) {
        alert('[ERRO] Digite um número que esteja entre 1 e 100')
    } else if (valores.includes(n)) {
        alert('[ERRO] Este número já foi adicionado')
    }else {
        valores.push(n)
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado`
        tab.appendChild(item)
        resultado.innerHTML = ''
        num.value = ''
        num.focus()
    }
}

function analisar() {
    if (valores.length === 0) {
        alert('[ERRO] Preencha a tabela acima com dados e tente novamente.');
    } else {
        let soma = 0
        let media = 0
        let maior = valores[0]
        let menor = valores[0]
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma/valores.length
        resultado.innerHTML = `Ao todo, temos ${valores.length} números cadastrados.<br>`;
        resultado.innerHTML += `O maior valor informado foi ${maior}.<br>`;
        resultado.innerHTML += `O menor valor informado foi ${menor}.<br>`;
        resultado.innerHTML += `Somando todos os valores, temos ${soma}.<br>`;
        resultado.innerHTML += `A média dos valores digitados é ${media.toFixed(2)}.`;
    }
}