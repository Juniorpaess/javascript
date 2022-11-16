let movie = 'Lord of the rings'

function starWarsFan(){
    const movie = 'Star Wars'
    return movie
}

function marvelFan(){
    movie = 'The Avengers'
    return movie
}

function blizzardFan(){
    const isFan = true
    let phrase = 'Warcraft'
    console.log('bofore if: ' + phrase)
    if(isFan){
        let phrase = 'initial text'
        phrase = 'For the Worde'
        console.log('inside if: ' +phrase)

    }
    phrase = 'for the alliance'
    console.log('Inside if: ' +phrase)
}

console.log(movie)
console.log(starWarsFan())
console.log(marvelFan())
console.log(movie)
blizzardFan()