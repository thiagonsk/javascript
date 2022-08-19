var agora = new Date()
var hora = agora.getHours()
if (hora >= 6 && hora < 12) {
    console.log(`Agora são ${hora} Hrs`)
    console.log("Manhã")
} else if(hora < 18 ){
    console.log(`Agora são ${hora} Hrs`)
    console.log("Tarde")
} else if(hora < 24 || hora == 00){
    console.log(`Agora são ${hora} Hrs`)
    console.log("Noite")
} else if(hora > 0 && hora < 6){
    console.log(`Agora são ${hora} Hrs`)
    console.log("Madrugada")
} else {
    console.log("Essa hora não existe corno!")
}