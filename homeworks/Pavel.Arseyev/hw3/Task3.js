/**
 * Checks string is polindrome or not
 * @param {string} input
 * @returns {boolean} Returns is string polindroe or not.
 */
function isPolindrome(input) {
    //приводим строку к нижнему регистру и удаляем всё, кроме букв, затем меняем все "Ё" на "Е".
    let string = input.toLowerCase().replace(/[^a-zа-яё]/g, '').replace(/ё/g, 'е');
    console.log(string);
    //Создем массив из переданной строки с обратным расположением символов и склеиваем обратно в строку.
    let reverse = string.split('').reverse().join('');
    console.log(reverse);
    //Если строки равны между собой, значит переданная строка является палиндромом.
    return reverse === string;
}

/* 
*Слова-палиндромы для проверки:
* Топот
* Потоп
* Шабаш
* Шалаш
* Заказ
* 
* Фразы-палиндромы:
* Ухи желал еж и желал ежиху.
* Морда казаха за кадром.
* Я сличил то и то - вот и отличился.
* А лис, он умён — крыса сыр к нему носила.
* Ты, милок, иди яром: у дороги мина, за дорогой огород, а за ним и город у моря; иди, коли мыт.
*/

console.log(isPolindrome('Ты, милок, иди яром: у дороги мина, за дорогой огород, а за ним и город у моря; иди, коли мыт.'));

module.exports = isPolindrome;
