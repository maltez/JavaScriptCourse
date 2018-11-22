function sortChars(str) {
    if (!str) {
        return;
    }
    str = str.split('');
    str = str.sort();
    str = str.join('');
    return str;
}

const arr = ['abc', 'cba', 'bac', 'cc', 'cc', 'qa', 'q', 'cc'];

function groupAnagrams(arr) {
    const anagrams = {};
    arr.forEach((arr) => {
        const sorted = sortChars(arr);
        if(anagrams[sorted]) {
            return anagrams[sorted].push(arr);
        }
        anagrams[sorted] = [arr];
    });
    return anagrams;
}

const groupedAnagrams = groupAnagrams(arr);
for(const sorted in groupedAnagrams){
    console.log(groupedAnagrams[sorted]);
}