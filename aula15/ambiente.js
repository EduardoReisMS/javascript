let num = [5, 2, 3, 1, 4]
num[5] = 6 //Aqui eu escolho a posição que quero adicionar o valor 6
num.push(7) //Aqui eu digo que quero adicionar o número, sem escolher onde eu quero que ele fique
// num.sort() coloca todos os elementos do vetor em ordem crescente
console.log(`O vetor tem ${num.length} posições`)
console.log(`Posição original dos elementos: ${num}`)
console.log(`Em ordem crescente: ${num.sort()}`)
console.log(`O primeiro valor do vetor é: ${num[0]}`)