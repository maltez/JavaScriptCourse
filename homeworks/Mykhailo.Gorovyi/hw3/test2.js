let numb = [1, 3, 5, 7, 9, 15, 33];
let resoult = number(numb);
console.log(resoult);
function number(numb) {
    let numb2 = [];
    for(let i = 0; numb.length > i ;i++) {
        if(numb [i] < 10 && numb [i] > 0){
        numb2.push(numb[i]);
        }

    }
    return numb2;

}