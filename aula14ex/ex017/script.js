function mult() {
    var n1 = document.querySelector('#n1')
    var convert = Number(n1.value)
    var n2 = Number(1)
    var resultado = document.querySelector('#res')
    while (n2 <= 10) {
        var mult = convert * n2
        n2++
        resultado.innerHTML += mult
    }
}