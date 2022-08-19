var idade = 25
console.log(`Você tem ${idade} anos.`)
if (idade < 16){
    console.log("Nem.")
} else if(idade < 18 || idade > 65){
    console.log("Opcional.")
} else {
    console.log("Obrigatório.")
}