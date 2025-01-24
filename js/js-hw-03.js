// Напиши функцію, яка приймає два параметри (a і b) та повертає їхню суму.

function sum(a, b) {
    return a + b;
}
console.log(sum(2, 4));

// Напиши функцію, яка приймає три параметри (a, b, c) і повертає максимальне з них.
function finfMax(a,b,c) {
    return Math.max(a,b,c)
}
console.log(finfMax(2, 8, 4));

// Напиши функцію, яка приймає три параметри(число, мінімум і максимум) та повертає true,
//     якщо число знаходиться між мінімумом і максимумом(включно),
//     і false, якщо ні.

function isInRange(num, min,max) {
    return num >= min && num <= max;
}

console.log(isInRange(5, 1, 10));

// Напиши функцію, яка приймає рядок і повертає перший символ цього рядка.

function firstChar(str) {
  return str.charAt(0);
}

console.log(firstChar("Anulia"));

// Напиши функцію, яка приймає рядок і повертає останній символ цього рядка.

function lastChar(str) {
  return str.charAt(str.length - 1);
}

console.log(lastChar("Anulia"));

// Напиши функцію, яка приймає число і повертає true, якщо число парне, і false, якщо ні.

function isEven(num) {
    return num % 2 === 0; 
}
console.log(isEven(76));

// Напиши функцію яка приймає два числа.Якщо одне з чисел дорівнює нуль то повернути null,
//     в іншому випадку повернути добуток цих двох чисел.

function multiplyIfNonZero(num1, num2) {
    if (num1 === 0 || num2 === 0) {
        return null;
    } else {
      return num1 * num2  
    }
}
console.log(multiplyIfNonZero(3, 5));

// Напиши функцію яка приймає рядок і повертає цей самий рядок але огорнутий у тег div.
//     Приклад: на вході був рядок "Hello world" а на виході рядок "<div>Hello world<div>"

function wrapInDiv(str) {

   return `<div>${str}</div>`;
}

console.log(wrapInDiv("Hello world")); 

// Напиши функцію, яка приймає рядок і повертає кількість слів у ньому 
// (слова розділені пробілами).

function countWords(str) {

      // Розбиваємо рядок на масив слів за пробілами і фільтруємо порожні елементи
  const words = str.trim().split(' ').filter(word => word.length > 0);

    return words.length
}
console.log(countWords("   This is a test sentence   ")); 

// Напиши функцію, яка приймає рядок і повертає його довжину помножену на кількість слів
//  в цьому рядку.

function calculateLengthAndWordCount(str) {
      const words = str.trim().split(' ').filter(word => word.length > 0);
    
return str.length * words.length
}
console.log(calculateLengthAndWordCount("   This is a test sentence   ")); 

// Напиши функцію, яка приймає рядок і повертає кількість голосних літер у ньому(a, e, i, o, u). 
// Використовуйте метод includes та цикл.

function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u']; // Масив голосних літер
  let count = 0; // Лічильник голосних літер

  // Перебираємо кожен символ рядка
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) { // Перевіряємо, чи є символ голосною літерою
      count++;
    }
  }

  return count; // Повертаємо кількість голосних
}

console.log(countVowels("   This is a test sentence   ")); 

// Напиши функцію, яка приймає рядок і повертає новий рядок,
//     де слова розташовані у зворотному порядку.


function reverseWords(str) {
  // Розбиваємо рядок на масив слів, використовуючи пробіл як роздільник
  const words = str.split(' ');
  
  // Перевертаємо масив слів
  const reversedWords = words.reverse();
  
  // З'єднуємо масив слів назад в рядок через пробіл
  return reversedWords.join(' ');
}

console.log(reverseWords("keep going Anula"));

// Напиши функцію, яка приймає довільну кількість аргументів і повертає true,
//     якщо всі аргументи є числами, і false, якщо ні.

function areAllNumbers(...args) {
  
        return args.every(arg => typeof arg === 'number' && !isNaN(arg));
}

console.log(areAllNumbers(1, 2, 3, 4))

// Напиши функцію, яка приймає довільну кількість аргументів і повертає їх
//  об'єднаними в один рядок, розділений комами.

function joinArguments(...args) {

        return args.join(', ');
}

console.log(joinArguments(1, 'hello', true, null)); 


// Напиши функцію, яка приймає довільну кількість чисел і повертає їхній добуток.

function countNums(...args) {

   return args.reduce((product, num) => product * num, 1);
}
console.log(countNums(1, 2, 3, 4))

// ...args — збирає всі передані аргументи в масив.

// args.reduce() — метод масиву, який виконує операцію над кожним елементом масиву.
//  Тут ми використовуємо його для множення всіх елементів.

// product * num — множить поточний результат на кожне число.
// Початкове значення для множення вказано як 1(якщо немає аргументів, повернеться 1,
//     оскільки це нейтральне значення для множення).

// ------------------------------------------------


// Напиши функцію, яка приймає довільну кількість чисел і повертає кількість непарних чисел серед них.

function checkOddNumbers(...args) {
    return args.filter(num => num % 2 !== 0).length;
    
}

console.log(checkOddNumbers(1, 2, 3, 4))

    // .length — повертає кількість елементів у відфільтрованому масиві
//     (тобто, кількість непарних чисел).
    
// Напиши функцію яка приймає довільну кількість рядочків і повертає той рядок що є найдовшим

function findLongestString(...strings) {

      return strings.reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    }, '');
}

console.log(findLongestString('a', 'ab', 'abc'));  


// Пояснення:
// ...strings — збирає всі передані рядки в масив.
// strings.reduce() — метод масиву, який ітеративно порівнює довжину рядків і вибирає найдовший.
// current.length > longest.length ? current : longest — якщо довжина поточного рядка більша за 
// довжину поточного найдовшого рядка, то поточний рядок стає новим найдовшим.
// Початкове значення для порівняння — порожній рядок ''.


// Напиши функцію яка приймає довільну кількість рядочків і обєднує їх в один цілий рядок.

function combineStrings(...strings) {
    return strings.join('')
}

console.log(combineStrings('Hello', ' ', 'world', '!')); 


// Напиши функцію яка приймає два числа.Якщо одне з чисел дорівнює нуль то повернути null,
//     в іншому випадку повернути добуток цих двох чисел.

function multiplyIfNotZero(num1, num2) {
    if (num1 === 0 || num2 === 0)
        return null 
    else {
        return num1 * num2
    }
}
console.log(multiplyIfNotZero(0, 3));
console.log(multiplyIfNotZero(7, 8));  

// 1. Напиши функцію, яка приймає два числа і повертає їхню різницю.

function findNumersDifference(num1, num2) {
    return (num1 - num2)
}

console.log(findNumersDifference(2, 9))

// 2. Напиши функцію, яка приймає три числа і повертає мінімальне з них.

function findMin(num1, num2, num3) {
    return Math.min(num1, num2, num3)
}
console.log(findMin(5, 3, 6))

// 3. Напиши функцію, яка приймає число і повертає його квадрат.

function square(num) {
    return (num * num)
}

console.log(square(6))

// 4. Напиши функцію, яка приймає число і перевіряє, чи воно є додатнім.

function isPositive(num) {
    return num > 0;
}

console.log(isPositive(5));


// 5. Напиши функцію, яка приймає рядок і повертає його в верхньому регістрі.

function toUpperCase(str) {
   return str.toUpperCase()
}
console.log(toUpperCase('jbcjdbcjd'))

// 6. Напиши функцію, яка приймає рядок і перевіряє, чи є він паліндромом
//     (тобто однаковий зліва направо і справа наліво).

function checkIfPalindrome(str) {

    const cleanedStr = str.replace(/\+s/g, '').toLowerCase();
    
    
    return cleanedStr === cleanedStr.split('').reverse().join('')
    
}


console.log(checkIfPalindrome("You have to take a break to feel better"));  

// 7. Напиши функцію, яка приймає два рядки і перевіряє, чи вони є анаграмами 
// (мають однакові літери, але можуть бути в різному порядку).


    function areAnagrams(str1, str2) {
    // Якщо довжина рядків різна, вони не можуть бути анаграмами
    if (str1.length !== str2.length) {
        return false;
    }

    // Перетворюємо рядки в масиви символів, сортуємо їх, і знову перетворюємо в рядок
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    // Якщо відсортовані рядки однакові, то це анаграми
    return sortedStr1 === sortedStr2;
}

// Приклад використання:
console.log(areAnagrams('listen', 'silent'));  // true
console.log(areAnagrams('hello', 'world'));    // false
console.log(areAnagrams('evil', 'vile'));      // true

// 8. Напиши функцію, яка приймає два числа та повертає їхній залишок від ділення.

function getRemainder(num1,num2) {
   return num1 % num2
   
}
console.log(getRemainder(9, 3));


// 9. Напиши функцію, яка приймає два числа і повертає їх середнє арифметичне.

function average(num1, num2) {
    return (num1 + num2) % 2
}
console.log(average(10, 20));

// 10. Напиши функцію, яка приймає рядок і замінює всі пробіли на дефіси.

function replaceSpacesWithHyphens(str) {
  
        return str.replace(/ /g, '-');
}
console.log(replaceSpacesWithHyphens('hello world')); 