/* function verificar() {
    let num = document.getElementById('txtn')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (num.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0){
        alert('erro!')
    } else {
        res.innerHTML = 'Contando: '
        let n = Number(num.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        for(let c = n; c <= f; c += p)
        res.innerHTML +=   ` ${c}`
    }
} */

for (n = 1; n <= 10; n = n + 2){
    console.log(n)
}