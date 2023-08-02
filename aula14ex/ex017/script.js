function tabuada() {
    let num = document.querySelector('#txtn')
    let tab = document.querySelector('#seltab')
    if (num.value.length == 0) { //Se não houver valor digitado no input, ele aparece o aviso abaixo
        alert('[ERRO] Digite um número')
    } else {
        let n = Number(num.value) //Está variável pega o valor digitado no input e converte em número - é necessário
        let c = 1
        tab.innerHTML = '' //Antes do while começar, os valores dentro do select são limpos
        while (c <= 10) {
            let item = document.createElement('option') //Aqui cria um elemento option dentro do select
            item.text = `${n} x ${c} = ${n*c}` //Faz com que seja possível escrever na variável item, que foi utilizada para criar um elemento option dentro do select, o que esta dentro das ``
            item.value = `tab${c}` //Para atribuir um value a cada option (útil em PHP, para saber qual o item foi selecionado - também serve em outras linguagens)
            tab.appendChild(item) //Adicionar um elemento filho - tabuada, que é o item
            c++ //1, 2, 3, 4... incrementar
        }
    }
}