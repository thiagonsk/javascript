function contar() {
    let ini = window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let pas = window.document.getElementById('txtp')
    let res = document.getElementById('res')
    
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        alert('[ERRO] Todos o campos devem ser preenchidos!')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)

        if (p == 0) {
            alert('[ERRO] passo invalido, considerando passo = 1.')
            p = 1
        }

        if (i < f) {
            //contagem progressiva
            for(c = i; c <= f; c += p) {
                res.innerHTML += ` ${c}`
                if ((c + p) > f) {
                    res.innerHTML += ` \u{1f3c1}`
                } 
                else {
                    res.innerHTML += ` \u{1f449}`
                }
            }
        } else {
            //contagem regressiva
            for(c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c}`
                if ((c - p) < f) {
                    res.innerHTML += ` \u{1f3c1}`
                } 
                else {
                    res.innerHTML += ` \u{1f449}`
                }
            }
        }
    }
}

function limpar() {
    res.innerHTML = `preparando a contagem...`
}