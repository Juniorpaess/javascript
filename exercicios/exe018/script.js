/*function testes(nome){
    console.log("O nome dele é: "+nome)
}

testes("wilson")*/

/*function testes2(nome, idade){
    console.log("O nome dele é: "+nome)
    console.log("A idade dele é: "+idade)

}

testes2("Wilson", 25)*/

/*function pegarNome(){
    return "Wilson"
}

var nome = pegarNome()
console.log(nome)*/

function pegarNome(parametro){
        if (parametro == 1){
            return "Wilson"
        } else {
            return ("Outro nome")
        }

}
var nome = pegarNome(10)
console.log(nome) 