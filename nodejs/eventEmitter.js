const EventEmitter = require("events");

const ev = new EventEmitter()
ev.on('killed', name => console.log(`${name} `))