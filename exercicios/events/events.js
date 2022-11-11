const {EventEmitter} = require('events')

const ev = new EventEmitter()

ev.on('saySomething', (message) => {
    console.log('Eu ouvi você ', message)
})

ev.emit('saySomething', "Wilson")
ev.emit('saySomething', "Paes")

// ev.onde é para ouvir uma unica vez