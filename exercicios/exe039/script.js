/*let subject = 'create video'

function createThink(subject){
    subject = 'study'
    return subject
}

console.log(createThink(subject))
console.log(subject)*/

//const sayMyName = (name) => {
  //  console.log(name)
//}

//sayMyName('Wilson')

function Person(name){
    this.name = name
}

const wilson = new Person("Wilson")
const paes = new Person("Paes")
console.log(wilson)
console.log(paes)