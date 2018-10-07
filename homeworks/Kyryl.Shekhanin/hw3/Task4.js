/**
 * Encode string into number array by Stirlitz method
 * @param {string} input string for encoding
 * @param {string} key key for encoding
 * @returns {Array<number>} Returns encoded array of numbers.
 */



//DirArray = [{lett : a}, {lett: b} ...] , Dir.lett = 'b' ---> res = 1; (return position);
function findDirectorElement(DirectorArray, Director) {
    for (let dirInd = 0; dirInd < DirectorArray.length; dirInd += 1) {
        if (DirectorArray[dirInd].letter === Director.letter) {
            return dirInd;
        }
    }
    return -1;

}

// str = 'bbaa', symb = 'a' ---> res = 2;
function numberElementInStr(Str, Symb) {
    let counter = 0;
    for (let i = 0; i < Str.length; i += 1) {
        if (Str.indexOf(Symb, i) !== -1) {
            counter += 1;
            i = Str.indexOf(Symb, i);
        }
    }

    return counter;
}


// symb = 'a', counter = 3 key = 'bbaa' ---> res = [3,4,7];
function GetSymbPosition(symb, counter, keyArray) {

    var IndexSymbArray = [];
    var moduleCounter = 0;
    if (keyArray.indexOf(symb) === -1) {
        IndexSymbArray.push(-1);
        return IndexSymbArray;
    }


    for (var i = 0; counter > 0; i += 1) {
        if (keyArray.indexOf(symb, i) === -1 && counter !== 0) {
            i = 0;
            moduleCounter += 1;
        }
        IndexSymbArray.push(keyArray.indexOf(symb, i) + (moduleCounter * keyArray.length) + 1);
        i = keyArray.indexOf(symb, i);
        counter -= 1;
    }

    return IndexSymbArray;
}

function encode(input, key = 'abcdefghijklmnopqrstuvwxyz !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~') {
    if (typeof input != 'string' || typeof key != 'string') {
        return;
    }

    var Director = {};
    var DirectArry = [];

    var inputLowCase = input.toLowerCase();
    var keyLowCase = key.toLowerCase();

    var inputArray = inputLowCase.split('');
    var keyArray = keyLowCase.split('');

    var resultArray = [];

    for (let i = 0; i < inputArray.length; i += 1) {
        Director = {};
        Director.letter = inputArray[i];
        if (findDirectorElement(DirectArry, Director) === -1) {
            let NumSymb = numberElementInStr(inputArray, Director.letter);
            Director.pos = GetSymbPosition(Director.letter, NumSymb, keyArray);
            DirectArry.push(Director);
        }

        resultArray.push(DirectArry[findDirectorElement(DirectArry, Director)].pos.shift());


    }



    return resultArray;

}

/**
 * Decode array of numbers to string by Stirlitz method
 * @param {Array<number>} input Array of numbers
 * @param {string} key key for decoding
 * @returns {string} Returns decoded string.
 */
function decode(input, key = 'abcdefghijklmnopqrstuvwxyz !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~') {
    var resultStr = '';

    for (var i = 0; i < input.length; i += 1) {
        resultStr += key.charAt((input[i] % key.length) - 1); 
    }
    return resultStr;
}

var Str = 'In cryptography, encryption is the process of encoding a message...'
var encodeArray = encode(Str);
console.log(encodeArray);

var decodeStr = decode(encodeArray);
console.log(decodeStr);

console.log('Two string are equal:  ', Str.toLowerCase() === decodeStr);


module.exports = {
    encode,
    decode,
};
