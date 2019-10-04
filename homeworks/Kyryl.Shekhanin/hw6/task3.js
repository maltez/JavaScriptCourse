


const InputChecker = function (input) {
    if (!input) {
        return;
    }
    var PhoneFormat = '(***)-***-****';
    var MailFormat = {
        format: '[user_name]@[domain_name]',
        domain_nameSize: 127,
        user_nameSize: 127
    };
    var NumberFormat = {
        format: '0,1,2,3,4,5,6,7,8,9',
        maxSize: Infinity
    };

    /**
     * format - (***)-***-****
     * @param {string} inpPh
     */
    var isPhone = function (inpPh) {
        if (inpPh.length === PhoneFormat.length) {
            for (var i = 0; i < inpPh.length; i += 1) {
                if (PhoneFormat.charAt(i) === '*') {
                    if (+inpPh.charAt(i) < 0 || +inpPh.charAt(i) > 9) {
                        return false
                    }
                } else {
                    if (PhoneFormat.charAt(i) !== inpPh.charAt(i)) {
                        return false
                    }
                }
            }
            return true;
        }
        return false;
    }

    /**
     * format - [user_name]@[domain_name]
     * @param {string} inpMail
     */
    var isMail = function (inpMail) {
        var subString = inpMail.split('@');

        if (subString.length !== 2) {
            return false;
        } else if (subString[0].length > MailFormat.user_nameSize) {
            return false;
        } else if (subString[1].length > MailFormat.domain_nameSize) {
            return false;
        }

        return true;
    }

    /**
     * format - [0..9];
     * @param {string} inpNum
     */
    var isNum = function (inpNum) {
        if (inpNum.length > Number.maxSize) {
            return false;
        }

        var subStringNumFormat = NumberFormat.format.split(',');

        for (var iNum = 0; iNum < inpNum.length; iNum += 1) {
            var localComoare = false;
            for (var iFormat = 0; iFormat < subStringNumFormat.length; iFormat += 1) {
                if (inpNum.charAt(iNum) === subStringNumFormat[iFormat]) {
                    localComoare = true;
                    break;
                }
            }
            if (!localComoare) {
                return false;
            }
        }
        return true;
    }


    if (isPhone(input)) {
        return 'telephone';
    } else if (isMail(input)) {
        return 'email';
    } else if (isNum(input)) {
        return 'number';
    } else {
        return 'text';
    }

}


var tel = '(063)-624-0832';
var mail = 'kyryl.shekhanin@nure.ua';
var num = '2312032312';
var text = 'Verbose logs are written to:C: \Users\KYRYLS~1\AppData\Local\Temp\vscode - node - debug2.txtПрограмма "task3.js" завершилась с кодом - 1(0xffffffff).';
var bred = 'assasagadg1451224612@sdgsddfzxfgfakfo-djsddf.231.sdsfsd';


console.log('\n\n' + tel + ' is');
console.log(InputChecker(tel));


console.log('\n\n' + mail + ' is');
console.log(InputChecker(mail));



console.log('\n\n' + num + ' is');
console.log(InputChecker(num));



console.log('\n\n' + text + ' is');
console.log(InputChecker(text));


console.log('\n\n' + bred + ' is');
console.log(InputChecker(bred));

