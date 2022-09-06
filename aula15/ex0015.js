var num = [10, 8, 9]
num[3] = 6 //cria espaço se necessário
num.push(18) //metodo interno que criae preenche mais um espaço na array
/*console.log(`Minha array -> ${num}; tamanho: ${num.length}`)
console.log(`ordenado: ${num}`)*/

1/*for(i = 0; i < num.length; i++) {
    console.log(`posição ${i} = ${num[i]}`)
}
*/

for (const i in num) {
   console.log(num[i])
}