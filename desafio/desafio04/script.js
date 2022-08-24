function gerar() {
    /*
    var res = window.document.getElementById('res')
    var num = window.document.getElementById('txtn')
    var r = 0
    var n = Number(num.value)

    if (num.value.length == 0) {
        window.alert('[ERRO] Por Favor, insira um número.')
    } else {
        res.innerHTML = ""
        for(i = 0; i <= 10; i++) {
            r = n * i
            res.innerHTML += (`${n} x ${i} = ${r} <br>`)
        }
    }
    */
    var tab = window.document.getElementById('seltab')
    var num = window.document.getElementById('txtn')
    if (num.value.length == 0) {
        window.alert('[ERRO] Por Favor, insira um número.')
    } else {
        var n = Number(num.value)
        tab.innerHTML = ''
        for(i = 1; i <= 10; i++) {
            let item = document.createElement('option')
            item.value = `tab${i}`
            item.text = `${n} x ${i} = ${n*i}`
            tab.appendChild(item)
        }
    }
}