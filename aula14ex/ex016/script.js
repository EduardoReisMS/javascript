function contar() {
    var n1 = document.querySelector('#inicio')
    var n2 = document.querySelector('#fim') 
    var n3 = document.querySelector('#salto') 
    var resultado = document.querySelector('#res')
    var primeiro = Number(n1.value)
    var segundo = Number(n2.value)
    var salto = Number(n3.value)
    while (primeiro <= segundo) {
        resultado.innerHTML += primeiro
        primeiro = primeiro + salto
    }
}