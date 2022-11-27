function calcular() {
    var data = new Date();
    var ano = data.getFullYear();
    var nasc = document.getElementById("ano");
    var res = document.getElementById("res");

    if (nasc.value.length == 0 || nasc.value > ano ) {
        window.alert("dados incorretos, verifique e tente novamente.");
    } else {
        var sex = document.getElementsByName("radsex");
        var idade = ano - Number(nasc.value);
        var genero = '';

        if(sex[0].checked) {
            genero = 'Homem';
        } else {
            genero = 'Mulher';
        }

        res.innerHTML = `Detectamos ${genero} de ${idade} anos`;
    }
}