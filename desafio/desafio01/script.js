function carregar() {
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora São ${hora} horas.`

    if (hora >= 6 && hora < 12) {
        //manha
        img.src = "imagens/manhap.png"
        document.body.style.backgroundColor = '#e2cd9f'
    } else if(hora >= 12 && hora < 18){
        //tarde
        img.src = "imagens/tardep.png"
        document.body.style.backgroundColor = '#e77b50'
    } else if(hora >= 18 && hora < 24){
        //noite
        img.src = "imagens/noitep.png"
        document.body.style.backgroundColor = '#4522a5'
    } else {
        //madrugada
        img.src = "imagens/madrugadap.png"
        document.body.style.backgroundColor = '#7210a0'
    }
}