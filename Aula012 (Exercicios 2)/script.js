function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Data inexistente')
    }else {
        var fsex = document.getElementsByName('txtsexo')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Você tem ${idade} anos de idade`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Crianca
                img.setAttribute('src', 'img/crianca-homem.png')
            }else if (idade < 20) {
                //Adolescente
                img.setAttribute('src', 'img/adolescente-homem.png')
            }else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'img/adulto-homem.png')
            }else if(idade < 125){
                //Idoso
                img.setAttribute('src', 'img/idoso-homem.png')
            }else {
                img.setAttribute('src', 'img/morreu.png')
            }
        }else {
            genero = 'Mulher'
            if (idade >= 0 && idade <10){
                //crianca
                img.setAttribute('src', 'img/crianca-mulher.png')
            }else if (idade < 20) {
                //adolescente
                img.setAttribute('src', 'img/adolescente-mulher.png')
            }else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'img/adulta-mulher.png')
            }else {
                //idoso
                img.setAttribute('src', 'img/idosa-mulher.png')
            }
        } 
        res.style.textAlign = 'center'
        res.innerHTML =  `Voce tem ${idade} anos e é ${genero}`
        res.appendChild(img)
    }
}