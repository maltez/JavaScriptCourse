let str = 'Буря мглою недо кроет, вихри снежные крутя, то как зверь оа завоет то заплачет как дитя';
let str2 = " ,абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
let resoult = test(str);
console.log(test2(resoult));
function test(str, str2) {
    str2 = str2 || " ,абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
    let splitstr = str.toLowerCase().split("");
    let splitstr2 = str2.split("");
    let mass = [];
    for(let i = 0; i < splitstr.length; i++){
        mass.push(splitstr2.indexOf(splitstr[i]));
    }return mass;

}
function test2(mass, str2) {
    let str3 = '';
    str2 = str2 || " ,абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
    let splitstr2 = str2.split("");
    for(i = 0; i < mass.length; i++){
    str3 = str3 + splitstr2[mass[i]];

    }return str3;


}