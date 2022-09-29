function verificar() {
    let num = document.getElementById('txtn')
    let sel = document.getElementById('seltab')
    if (num.value.lenght == 0) {
        alert('ERRO!')
    } else {
        let n = Number(num.value)
        let c = 1
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            sel.appendChild(item)
            c++
        }
    }
}