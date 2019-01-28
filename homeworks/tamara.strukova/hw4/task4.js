/**
 * Return the highest number if second paraameter is true and the lowest number if parameter is false.
 * @param {Array<number>} input
 * @param {boolean} order
 * @returns {number} Returns filtered array.
 */
const maxMin = (input, order = true) => {
    let eachNum;
    let num1 = 0;
    let num2 = 0;

    for (let i = 0; i < input.length; i++) {
        for (let z = 0; z < input.length; z++) {

            if (input[i] < input[z]) {
                if (input[i] <= num1) {
                    num1 = input[i];
                }

                if (input[z] >= num2) {
                    num2 = input[z];
                }
            } else {
                if (input[i] >= num2) {
                    num2 = input[i];
                }

                if (input[z] <= num1) {
                    num1 = input[z];
                }
            }
        }
    }

    if (!(order === true)){
        return num1;
    } else {
        return num2;
    }
};

console.log(maxMin([1,2, 3, -4, 5, -200], false));

module.exports = maxMin;
