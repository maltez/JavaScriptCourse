/**
 * Build string from numbers from 1 to n
 * @param {number} input
 * @returns {string} Returns the string from 1 to input.
 */
function stringBuilder(input) {
    let text = '';
    if(typeof(input) !== 'number'){

        return console.log('This is not a number, please enter any number');

      } else if(input === 1){

        return console.log('1.');

      } else if(input > 1){

        for(let i=0; i < input; i++){

          if(i !== input-1){
            text += i+1 + ', ';
          } else{
            text += i+1+'.';
          }

        }
        return console.log(text);
      } else if(input < 1){

        for(let i=1; i >= input; i--){
          if(i !== input){
            text += i + ', ' 
          }else{
            text += i + '.'
          }
        }
        
        return console.log(text);
      }
};

stringBuilder(-3);

module.exports = stringBuilder;