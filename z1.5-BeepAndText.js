const beeper = require('beeper');
const chalk = require('chalk');

(async function() {
    for(var i=60;i>0;i--){
        await beeper('*-');
        
        var r = randomInteger(0, 255);
        var g = randomInteger(0, 255);
        var b = randomInteger(0, 255);
        
        console.log(chalk.rgb(r, g, b).bold(i+'s'));
    }
})();

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}