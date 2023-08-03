let num = [1, 5, 3, 2, 3, 6]
num.sort()
// for (let pos = 0; pos<num.length; pos++) {
//     console.log(`A posição ${pos} tem o valor ${num[pos]}`)
// }

for (let pos in num) {
    console.log(`A posição ${pos} tem o valor: ${num[pos]}`)
    console.log(num.indexOf(7))
    // num.indexOf(7) procura o valor 7 dentro do vetor e retorna a posição que ele está. Se não encontrar, retorna o valor -1
}