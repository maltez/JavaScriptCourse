/**
 * @param {number} minute
 * @returns {number} Returns the quoter based on input.
 */
function hourQuoter (minute) {
    if ( typeof minute !== 'number'){
        return false;
    }
    if ( minute < 0 || minute > 59 ){
        return false;
    }

    var str = '';
    
    if ( 0 <= minute < 15 ){
        str = '1st quoter';
    }
    if ( 15 <= minute < 30 ){
        str = '2nd quoter';
    }
    if ( 30 <= minute < 45 ){
        str = '3d quoter';
    }
    if ( 45 <= minute < 60 ){
        str = '4th quoter';
    }

    return str;
}

module.exports = hourQuoter;
