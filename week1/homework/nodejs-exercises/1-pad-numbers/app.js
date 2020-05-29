const padLeft = require('./padLeft');

const numbers = [ "12", "846", "2", "1236" ];

numbers.forEach(item=>{
    console.log(padLeft(item,5," "))
});
