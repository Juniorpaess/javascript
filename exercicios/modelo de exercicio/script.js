let num = document.getElementById('fnum')
let flista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else{
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
          valores.push(Number(num.value))
          let item = document.createElement('option')
          item.text = `Valor ${num.value} foi adicionado`
          flista.appendChild(item)
    } else {
        alert('Valor não indentificado')
    }
}

num,value = ''
num.focus()

function finalizar (){
    if (valores.length == 0) {
        alert('Por favor digite valores')
    } else {
        let tot = valores.length
        res.innerHTML - ''
        res.innerHTML +=`<p> Ao todo temos ${tot} números cadastrados </p>`
    }
}



