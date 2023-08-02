function contar() {
    let inicio = document.querySelector('#txti')
    let fim = document.querySelector('#txtf')
    let passo = document.querySelector('#txtp')
    let resultado = document.querySelector('#res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] Preencha todos os dados!')
        resultado.innerHTML = 'Impossível contar!'
    } else {
        resultado.innerHTML = 'Contando... <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            for (let c = i; c <= f; c += p) {
                resultado.innerHTML += `${c} 👉`
            }
        } else {
            // Contagem regressiva
            for (let c = i; c >= f; c -= p) {
                resultado.innerHTML += `${c} 👉`
            }
        }
        resultado.innerHTML += `🏁`
    }
}
// function contar() {
//     var n1 = document.querySelector('#inicio')
//     var n2 = document.querySelector('#fim')
//     var n3 = document.querySelector('#salto')
//     var resultado = document.querySelector('#res')
//     var primeiro = Number(n1.value)
//     var segundo = Number(n2.value)
//     var salto = Number(n3.value)
//     if (n3.value == 0) {
//         alert('[ERRO] Escolha algum valor para o "Passo" acima de 0')
//     } else if (n2.value == '') {
//         alert('[ERRO] Campo "Fim" vazio. Escolha algum valor acima de 0')
//     } else {
//         while (primeiro <= segundo) {
//             resultado.innerHTML += primeiro
//             primeiro = primeiro + salto
//         }
//     }
// }