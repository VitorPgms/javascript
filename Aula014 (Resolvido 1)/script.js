function contar() {
    let ini = document.getElementById('txti')
    let fim =  document.getElementById('txtf')
    let pas = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        res.innerHTML = 'Impossivel Contar...'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)

        
        if (p <= 0) {
            //Caso o Usuario coloque 0 no passo.
            window.alert ('[Erro] Passo invalido | Considerando Passo = 1')
            p = 1
        }
        
        if(i < f) {
            //Contagem crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `Passo ${c} \u{1F449}`
            }
        
        
         } else {
            // Contagem decrescente 
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `Passo ${c} \u{1F449}`  //O u\{} serve para adicionar um emoji.
            }
            res.innerHTML += `\u{1F3C1}`
         }
    }
}