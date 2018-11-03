/**
 * 
 * @param {Array} textArray
 */
const polyMaker = function (textArray) {
    if (!textArray) {
        return;
    } else if (textArray.length === 1) {
        return textArray.slice();
    }

    /**
     * 
     * @param {string} text
     */
    var groupPoly = function (text) {
        var split = text.split('');
        var resArray = [text];
        textArray.splice(0, 1);
        var checker = false;

        for (var iArray = 0; iArray < textArray.length; iArray += 1) {

            var curSplit = textArray[iArray].split('');
            if (split.length === curSplit.length) {
                for (var iSplit = 0; iSplit < split.length; iSplit += 1) {
                    checker = false;

                    for (var iCurSplit = 0; iCurSplit < curSplit.length; iCurSplit += 1) {
                        if (split[iSplit] === curSplit[iCurSplit]) {
                            checker = true;
                            curSplit.splice(iCurSplit, 1);
                            break;
                        }
                    }

                    if (!checker) {
                        break;
                    }
                }

                if (checker) {
                    resArray.push(textArray[iArray]);
                    textArray.splice(iArray, 1);
                    iArray -= 1;
                }
            }
        }
        return resArray;
    }
    var ResArray = [];
    var tmpArray = [];

    while (textArray.length) {
        ResArray.push(groupPoly(textArray[0]));
    }

    return ResArray;
}


console.log(polyMaker(['abc', 'cba', 'dd', 'bcc', 'dd', 'baca']));