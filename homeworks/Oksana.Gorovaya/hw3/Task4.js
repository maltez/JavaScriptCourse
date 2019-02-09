const initial_str = 'Буря мглою небо кроет, вихри снежные крутя, то как зверь она завоет то заплачет как дитя';

const result = encryptor(initial_str);
const res = decriptor (result);
console.log(res);

function encryptor(initial_str, key) {
    key = key || 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя ,';
   let splited_str = initial_str.toLowerCase().split('');
   let y = key.split('');
   let encrypted_str = [];
   for (i = 0; i < splited_str.length; i++) {
        encrypted_str.push(y.indexOf(splited_str[i]));
   }
   return encrypted_str;
}
function decriptor (encrypted_str, key) {
    key = key || 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя ,';
    let y = key.split('');
    let decrypted_str = '';
    for (i = 0; i < encrypted_str.length; i++) {
        decrypted_str += y[encrypted_str[i]];

    }
    return decrypted_str;
}