let txt = 'here will be some text';
console.log(toWeirdCase(txt));

function toWeirdCase(txt) {
    let Arr = [];
    let e = [];
    if (txt.match(/^[a-zA-Z ]+$/)) {
        tempArr = txt.split(' ');
        tempArr.forEach(function(element){
            e = element.split('');
            for (i = 0; i < e.length; i++){
                if (i % 2 === 0 || i === 0) {
                    e[i] = e[i].toUpperCase();
                }
            }
            Arr.push(e.join(''));
        });
        return Arr.join(' ');
    } else {
        return 'invalid input!';
    }
}
