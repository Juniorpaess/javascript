function verificar() {
    var data = new Date
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.lenght == 0 || Number(fano.value) > ano){
        alert('ERRO!')
    } else {
        var fsex = document.getElementById('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade} anos`

    }

}