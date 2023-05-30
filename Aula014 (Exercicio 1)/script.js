
function contarPassos() {
    var n1 = parseInt(document.getElementById('txtn1').value)
    var n2 = parseInt(document.getElementById('txtn2').value)
    var next = parseInt(document.getElementById('passo').value)
    var res = document.getElementById('res')

    if (isNaN(n1) || isNaN(n2)) {
    alert('[ERRO] Por favor, insira o seu valor numerico')
    return;
    }
    if (n1 > n2) {
    alert('[ERRO] O valor de inicio deve ser menor do que o valor do fim !!')
    }

    var resultado = ""

    for (var n = n1; n <= n2; n += next){
    resultado += (`Passo${n} `)
    }

    res.innerHTML = resultado; 
}

