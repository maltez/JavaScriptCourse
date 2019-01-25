/**
 * Calculates Сommon Divisor 
 * @param {number} num1
 * @param {number} num2
 * @returns {number} Returns Сommon Divisor.
 */

 const commonDevisor = (num1, num2) => {
     //Если переданные параметры являются числами
     if(typeof(num1) === 'number' && typeof(num2) === 'number'){
        //И если они больше нуля
        if(num1 > 0 && num2 > 0){
            //назначаем итератору цикла значение меньшего из переданных чисел
            for(let i = num1 < num2 ? num1 : num2; i > 0; i--){
                if(!(num1 % i) && !(num2 % i)){
                   return i;
                }
            }
        } else{
            return 'Put a number bigger than 0!'
        }
     } else {
        return 'Put a number!'
     }    
 };

 console.log(commonDevisor(568, 456));


module.exports = commonDevisor;
