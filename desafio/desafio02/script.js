function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector("div#res")

    if (fano.value.lenght == 0 || fano.value > ano ) {
        window.alert('[ERRO] Ano invalido, tente denovo')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')//criando img em js
        img.setAttribute('id', 'foto')//colocano id
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'madrugadap.png')
            } else if (idade >= 10 && idade < 21) {
                //jovem
                img.setAttribute('src', 'manhap.png')
            } else if (idade >= 21 && idade < 50){
                //adulto
                img.setAttribute('src', 'tardep.png')
            } else {
                //idoso
                img.setAttribute('src', 'noitep.png')
            }
        } else if(fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'madrugadap.png')
            } else if (idade >= 10 && idade < 21) {
                //jovem
                img.setAttribute('src', 'manhap.png')
            } else if (idade >= 21 && idade < 50){
                //adulto
                img.setAttribute('src', 'tardep.png')
            } else {
                //idoso
                img.setAttribute('src', 'noitep.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}