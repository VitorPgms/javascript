let num = document.querySelector('input#txtn')
let lista = document.getElementById('flista')
let res = document.getElementById('res')


function adicionar() {
    if (num.value.length == 0) {
        window.alert('[Erro] Por favor digite um valor')
    } else {
        let n = Number(num.value)
        res.innerHTML = ''
    }
}
