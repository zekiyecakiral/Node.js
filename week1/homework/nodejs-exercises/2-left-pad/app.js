const leftPad = require('left-pad')

const numbers = [ "12", "846", "2", "1236" ];

numbers.forEach(item=>{
    console.log(leftPad(item, 8, ' '))
});