var a = 'Буря мглою небо кроет, вихри снежные крутя, то как зверь она завоет то заплачет как дитя';
var b = a.split('');
var c = [];
console.log(b);
for (i=0; i<b.length; i+=1){
	let num = parseInt(Math.random()*100);
	b[i] = i + num;
	c.push(b[i]);
	var res =  a[i] = c[i];
}
console.log(res);
console.log(c);





/**
 * Encode string into number array by Stirlitz method
 * @param {string} input string for encoding
 * @param {string} key key for encoding
 * @returns {Array<number>} Returns encoded array of numbers.
 */
// function encode(input, key) {
//     return;
// }

/**
 * Decode array of numbers to string by Stirlitz method
 * @param {Array<number>} input Array of numbers
 * @param {string} key key for decoding
 * @returns {string} Returns decoded string.
 */
// function decode(input, key) {
//     return;
// }

// module.exports = {
//     encode,
//     decode,
// };