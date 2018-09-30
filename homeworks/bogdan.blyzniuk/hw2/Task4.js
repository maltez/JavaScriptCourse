/**
 * @param {number} first
 * @param {number} second
 * @returns {boolean} Returns devide first on second without remainder or not.
 */
function isDevided(first, second) {
var rest = first%second;
if (rest == 0) 
	{
		return(true);
    }
	else  
	{
		return(false);
    }
}
console.log (isDevided(5,2));
module.exports = isDevided;
