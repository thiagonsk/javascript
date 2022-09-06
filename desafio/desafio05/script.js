var num = window.document.getElementById('txtn')
var shw = window.document.getElementById('show')
var res = document.getElementById('res')
var cont = -1
let vet = new Array
function adicionar(n) {
    if(num.value.length == 0) {
        alert('[ERRO] O campo deve ser preenchido.')
    } else if(num.value < 1 || num.value > 100){
        alert('[ERRO] Número inválido, tente novamente.')
    } else {
        cont++
        vet[cont] = n
        let item = document.createElement('option')
        item.value = `vet${cont}`
        item.text = `Valor ${n} Adicionado.`
        res.appendChild(item)
    }
}

function finalizar() {
    if(num.value.length == 0) {
        alert('[ERRO] O campo deve ser preenchido.')
    } else if(num.value < 1 || num.value > 100){
        alert('[ERRO] Número inválido, tente novamente.')
    } else {
        let maio = 0
        let meno = 101
        let soma = null
        let media = null
        for(i = 0; i < vet.length; i++) {
            if(maio < vet[i]){
                maio = Number(vet[i])
            }

            if(meno > vet[i]) {
                meno = Number(vet[i])
            }
        }
        
        for(i = 0; i < vet.length; i++) {
           soma += Number(vet[i])
        }

        media = soma / vet.length

        shw.innerText = `Ao todo, temos ${vet.length} Números cadastrados.
        O maior número é ${maio}. 
        O menor número é ${meno}.
        A soma dos valores é ${soma}.
        A media dos valores é ${media}.`
    }
}