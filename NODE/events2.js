var events = require('events');

var eventEmmiter = new events.EventEmitter();

var myEventHandler = function(){
    console.log('I Love To Play !!!');
}

eventEmmiter.on('play',myEventHandler);
eventEmmiter.emit('play');