# Домашнее задание №1

- Склонировать репозиторий
- Создать бранч <фамилия>_hw1
- В бранче в папке homeworks создать папку <Имя>.<Фамилия>
- В созданной папке создать папку hw1
- В нее положить скриншот о прохождении курса https://www.codeschool.com/courses/try-git
- Создать PR
- В случае одобрения пулл реквеста - смерджить его в master

# Домашнее задание №2

- Заготовки функций лежат в папке ./homeworks/nick.lototskiy/hw2 по номерам заданий
- Задание 1. Функция принимает число n(проверить что n является числом в противном случае завершить работу функции). Функция возвращает строку чисел от 1 до n через разделитель ','. Если число меньше 1 то выдается строка (например n = -2 строка должна быть '1,0,-1,-2').
- Задание 2. Функция принимает параметр min. Параметр должен являться числом. В нем лежит число от 0 до 59. Функция должна возвращать в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).
- Задание 3. Функция принимает количество часов (проверить что это число). Функция возвращает количество секунд в переданых часах.
- Задание 4. В функцию передаются переменные first и second. Проверьте, что first делится без остатка на second. Если это так - возвращаете  true, иначе возвращаете false.
- Задание 5. Функция принимает число n. Функция возвращает факториал данного числа.

# Домашнее задание №3
- Заготовки функций лежат в папке ./homeworks/nick.lototskiy/hw3 по номерам заданий
- В функцию передается массив с числами. Функция должна возвращать из него новый массив, где останутся  только положительные числа. Создайте для этого вспомогательную функцию isPositive(), которая параметром будет принимать число и возвращать true, если число положительное, и false если отрицательное.
- В функцию передается массив с числами. Функция должна возвращать массив который содержит только те числа, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange, которая проверяет, что число больше нуля и меньше 10. Если это так - функция возвращает true, если не так - false.
- В википедии прочитать что такое полиндромы. Функция должна принимать строку и выдавать true если строка является полндромом и false если она таковой не является. Игнорировать большие и малые буквы.
- Шифровка по методу Штирлица. Есть строка "Буря мглою недо кроет, вихри снежные крутя, то как зверь оа завоет то заплачет как дитя". Написать две функции - первая будет кодировать строку и возвращать массив номеров букв. Пробел тоже символ. Принимает функция первым параметром строку для кодирования, вторым фразу ключ. Сделать возмоность передачи фразы по умлчанию. фраза по умолчанию "абвгдеёжзийклмнопрстуфхцчшщъыьэюя ". Буква может иметь несколько значений - например буква у может быть представлена как 2 и 40. разделения на большие и малые буквы нет. Вторая функция принимает массив чисел и возвращает строку.


# Домашнее задание №4
- Функция принимает два числа. Возвращает наибольший общий делитель этих двух чисел.
- Функция принимает два числа. Возвращает наименьшее общее кратное этих двух чисел.
- Функция принимает массив чисел. Возвращает массив только с теми элементами первого массива которые делятся на 3, 5 или 7
- Функция принимает массив чисел и булево значение - вернуть наибольшее число если булево значение равно true и наименьшее если булевое значение равно false.
- Написать функцию принимающую массив и двигающую в конец все нули, функция должна сохранять порядок оставшихся элементов.

# Homewrk 5
- For building the encrypted string:
    - Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
    - Do this n times!

    - Examples:
        "This is a test!", 1 -> "hsi  etTi sats!"
        "This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"

    - Write two methods:
        encrypt(text, n)
        decrypt(encryptedText, n)

    - For both methods:
        If the input-string is null or empty return exactly this value!
        If n is <= 0 then return the input text.

- Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays have the          "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared,            regardless of the order.

    - Examples
        - Valid arrays
            a = [121, 144, 19, 161, 19, 144, 19, 11]  
            b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
            comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:
            
            a = [121, 144, 19, 161, 19, 144, 19, 11] 
            b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]

        - Invalid arrays If we change the first number to something else, comp may not return true anymore:
            a = [121, 144, 19, 161, 19, 144, 19, 11]  
            b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
            comp(a,b) returns false because in b 132 is not the square of any number of a.
        
            a = [121, 144, 19, 161, 19, 144, 19, 11]  
            b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
            comp(a,b) returns false because in b 36100 is not the square of any number of a.

        - Remarks:
            - a or b might be []. a or b might be null.
            - If a or b are null, the problem doesn't make sense so return false.
            - If a or b are empty the result is evident by itself.

- Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a      phone number.

    -   Example:
            createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
            The returned format must be correct in order to complete this challenge. 
            Don't forget the space after the closing parentheses!

# Homework #6
- Given text with tags create object structure where key - the tag name, value - tag value. Nested tags are allowed. Dublicated tag names on the same level are forbiden.(Use regexp)
- In object cretated in part 1 create function render() - that create from object fields html page.
- Create function that check and recognize(define the type) input text. Type can be - email, text, number, telephone
- Write a function toWeirdCase that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.

    The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

    Examples:
    toWeirdCase( "String" );//=> returns "StRiNg"
    toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

# Homework #7
- Create object tank(fuel, ammo, position-x,y, moveright()each move on one point lost 1 item of fuel, moveleft, movetop, move bottom )
- Battle field - height, width(in cells), Array of tanks, Array Obstacles(x,y) 
- Create on html batelfield view with takks on it

# Homework 8
- Create fake api(function) based on setTimeout or setInterval. It obtains data and after random time send promise response. If obtained string contains world error promise rejected. 
- Create 7 requests in parallel. Then aggregate them results and push them to another request.
- After last request obtain results and push them to 3 different request and get the fastest response.