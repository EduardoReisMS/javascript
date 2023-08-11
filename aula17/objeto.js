let objeto = {
    nome:'Jose', 
    peso:85.4, 
    sexo:'M', 
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    } }
objeto.engordar(2)
console.log(`${objeto.nome} pesa ${objeto.peso}Kg`)