function carregar()
{
    var msg = document.querySelector("div#msg");
    var img = document.querySelector("img#imagem");
    var data = new Date();
    var hora = data.getHours();
    //var hora = 23
    msg.innerHTML = `Agora São ${hora} horas.`
    
    if(hora >= 0 && hora < 6) {
        //madrugada
        img.src = 'imagens/madrugadap.png'
        document.body.style.background = "rgb(152, 125, 181)"
    } else if (hora < 12 ) {
        //manha
        img.src = 'imagens/manhap.png'
        document.body.style.background = "rgb(210, 210, 210)"
    } else if (hora < 18 ) {
        //tarde
        img.src = 'imagens/tardep.png'
        document.body.style.background = "rgb(250, 184, 121)"
    } else {
        //noite
        img.src = 'imagens/noitep.png'
        document.body.style.background = "rgb(21, 41, 72)"
    }


}
