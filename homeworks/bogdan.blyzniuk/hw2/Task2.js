/**
 * @param {number} minute
 * @returns {number} Returns the quoter based on input.
 */
function hourQuoter (minute) {
    if(isNaN(minute)|| minute===''){
        return('Its not a number');
      }
      else if (minute >=0 && minute < 15) 
	{
		return('First Quoter');
    }
	else if (minute >=15 && minute <= 29)
	{
		return('Second Quoter');
    }
	else if (minute >=30 && minute <= 44 )
	{
		return('Third Quoter');
    }
    else if (minute >=45 && minute <= 59 )
	{
		return('Fourth Quoter');
    }
	else 
	{
		return('Unknown Quoter');
    }
}
    console.log (hourQuoter(15));
    module.exports = hourQuoter;

