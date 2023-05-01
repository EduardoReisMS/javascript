function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var horas = data.getHours()
    msg.innerText = `Agora são ${horas} horas`
    if (horas >= 0 && horas < 12) {
        img.src = 'fotomanha.png'
        document.body.style.background = 'beige'
    } else if (horas >= 12 && horas < 18) {
        img.src = 'fototarde.png'
        document.body.style.background = 'burlywood'
    } else {
        img.src = 'fotonoite.png'
        document.body.style.background = 'darkgray'
    }
}

