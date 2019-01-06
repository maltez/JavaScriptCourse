// проверить email @ только одна
let email = /^\w*\@{1}\w*\.\w*$/gi;
let testEmail = 'test@gmail.com';
console.log(testEmail.match(email));