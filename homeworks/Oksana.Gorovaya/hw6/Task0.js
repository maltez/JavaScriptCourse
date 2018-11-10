const arr = ['abc', 'cba', 'bac', 'cc', 'cc', 'q', 'qa', 'cc'];
console.log(anagramCheck(arr));

function anagramCheck (arr) {
    arrayAbc = [];
    arrayCC = [];
    arrayQ = [];
    arrayQa = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i].match('^[abc]{3}$')) {
            arrayAbc.push(arr[i]);
        } else if (arr[i].match('^[c]{2}$')) {
            arrayCC.push(arr[i]);
        } else if (arr[i].match('^[q]$')) {
            arrayQ.push(arr[i]);
        } else if (arr[i].match('^[q][a]$')) {
            arrayQa.push(arr[i]);
        } else {
            return 'cannot handle this letter';
        }
    }
    return [arrayAbc, arrayCC, arrayQ, arrayQa];
}