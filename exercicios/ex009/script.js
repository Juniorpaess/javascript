function carregar() {
    var msg = document.getElementById('msg')
    var  img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
     msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'foto-manha.jpg'
        document.body.style.background = '#F2C36B'
        
    }
    else if (hora >= 12 && hora < 18){
        img.src = 'foto-tarde.jpg'
        document.body.style.background = '#F2E416'
    }
    else {
        img.src = 'foto-noite.jpg'
        document.body.style.background = '#A6918D'
    }


}