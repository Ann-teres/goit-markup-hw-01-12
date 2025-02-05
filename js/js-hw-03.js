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

// Напиши функцію яка приймає два масиви(arr1, arr2), та повертає новий масив де будуть лише
//  ті елементи які зустрічаються і в arr1 і arr2.

function getIncomonElement(arr1, arr2) {
return arr1.filter(element => arr2.includes(element))
    
     
}
[1, 2, 3, 4], [3, 4, 5, 6]
console.log(getIncomonElement([1, 2, 3, 4], [3, 4, 5, 6]))
    
// Напиши функцію яка приймає два масиви(arr1, arr2), та повертає новий масив де будуть лише елементи масиву arr1 
// яких не має у масиві arr2.

function differentElem(arr1, arr2) {
    return arr1.filter(element => !arr2.includes(element))
} 
console.log(differentElem([1, 2, 3, 4], [3, 4, 5, 6]))

// Напиши функцію яка приймає масив та знаходить мінімальний елемент.

function findSmallestNumber(arr) {
    return Math.min(...arr)
}

console.log(findSmallestNumber([3, 7, 4, 2,]))

// Напиши функцію яка приймає масив та знаходить максимальний елемент.

function findBiggestNumber(arr) {
    return Math.max(...arr)
}

console.log(findBiggestNumber([3, 7, 4, 2,]))

// Напиши функцію яка приймає масив та повертає масив лише з тих елементів які більші за 
// середнє значення всіх елементів масиву.


function getElementsAboveAverage(arr) {

      let avg = arr.reduce((a, b) => a + b, 0) / arr.length;
    return arr.filter(num => num > avg);
}

console.log(getElementsAboveAverage([1, 4, 2]))

// Напиши функцію, яка приймає масив та виводить кожен елемент масиву у консоль.

function returnElements(arr) {
    arr.forEach(element => console.log(element))
}
returnElements([2, 5, 3])

// Напиши функцію, яка приймає масив та виводить кожен парний елемент масиву у консоль.

function printEvenElements(arr) {
    arr.forEach(element => {
        if (element % 2 === 0)
            console.log(element)
    })
}

printEvenElements([4, 2, 3, 4])

// Напиши функцію, яка приймає масив чисел та виводить лише парні числа у консоль.

function giveEvenNumbers(numbers) {
    numbers.forEach(num => {
        if (num % 2 === 0) {
            console.log(num);
        }
    });
}

giveEvenNumbers([10, 15, 22, 33, 40, 55, 60])

// Напиши функцію, яка приймає два параметри(arr, max).Де arr - це масив чисел.Потрібно вивести лише 
// ті елементи масиву які більші за max.


function biggerThanMax(arr, max) {
    arr.forEach(num => {
        if (num > max) {
            console.log(num);
      }
  })
}
biggerThanMax([4, 2, 6,], 10);

// Напиши функцію яка приймає масив та повертає суму всіх чисел у масиві.


// function sumArray(arr) {
//    return arr.reduce((sum, num) => sum, num, 0)
// }

// console.log(sumArray([1, 2, 3, 4, 5])); 

// Напиши функцію яка приймає масив та елемент для пошуку.Фукнція повинна порахувати скільки разів шуканий 
// елемент зустрічається у масиві.

function name(arr, element) {
    return arr.filter(item => item === element).length;
}

// Напиши функцію яка приймає масив чисел.Функція повинна видалити усі негативні(відємні числа) з масиву та 
// повернути новий масив.Напиши функцію яка приймає масив чисел.Функція повинна видалити усі негативні(відємні
//      числа) з масиву та повернути новий масив.


// function removeNegativeNumbers(num) {
//     return arr.filter(num => num >= 0)
// }
// console.log(removeNegativeNumbers([4, -2, 7, -5, 0, -9, 10])); 

// Напиши функцію яка приймає масив рядочків.Потрібно змінити кожен елемент масиву наступним чином -
//     якщо довжина рядочку менша за 6 до привести рядок до нижнього регістру, в іншому випадку привести 
//     до верхнього регістру.

// function modifyStrings(str) {
//   return arr.map(str => {
//         if (str.length < 6) {
//             str.toLowerCase
//         }
//         else {
//             str.toUpperCase
//           }  
//     })
// }

// console.log(modifyStrings(["Anna", "Anula", "Anulka", "Kukulka"]))

// Напиши функцію, яка приймає масив чисел і повертає новий масив,
//     що містить лише непарні числа.

function getOddNumbs(arr,num) {
    return arr.filter(num => num % 2 !== 0)
}

console.log(getOddNumbs([4, 8, 6, 9]))

// Напиши функцію, яка приймає масив чисел і повертає новий масив,
//     що містить лише числа, які діляться на 3.

function thirdNumbers(arr,num) {
     return arr.filter(num => num % 3 !== 0)
}

console.log(thirdNumbers([4, 12, 6, 9]))

// Напиши функцію яка приймає два масиви(arr1, arr2),
//     та повертає новий масив де будуть лише ті елементи які зустрічаються і в arr1 і arr2.

function incommonNumbs(arr1, arr2) {
    return arr1.filter(element => arr2.includes(element))
}



console.log(incommonNumbs( [2, 6, 3, 7], [3, 7, 9, 2]))

// Напиши функцію яка приймає два масиви(arr1, arr2), та повертає новий масив де будуть 
// лише елементи масиву arr1 яких не має у масиві arr2.

// function findNumersDifference(arr1, arr2) {
//     const set2 = new Set(arr2);
//      return arr1.filter(item => !arr2.has(item));
// }

// console.log(findNumersDifference([1, 6, 2, 8], [5, 2, 7, 0]))

// Напиши функцію яка приймає масив та знаходить мінімальний елемент.

function findMinNumb(arr) {
    Math.min(...arr)
}

console.log(findMinNumb([3, 7, 4, 8, 9]));

// Напиши функцію яка приймає масив та знаходить максимальний елемент.


function findBiggestNumb(arr) {
    Math.max(...arr)
}

console.log(findBiggestNumb([3, 6, 8, 3]));

// Напиши функцію яка приймає масив та повертає масив лише з 
// тих елементів які більші за середнє значення всіх елементів масиву.

// function getElementsAboveAverage(arr) {
//   if (arr.length === 0) return [];

//   let arg = arr.reduce((a, b) => a + b, 0) / arr.length
//     return arr.filter(numb => numb > total)
// }

// console.log(getElementsAboveAverage([1, 4, 2]))


// Напиши функцію яка приймає масив та повертає масив лише
//  з тих елементів які більші за власний індекс.

// function numbBiggerThenIndex(arr,index) {
//     return arr.filet((elem, index) => elem > index);
  
// }

// console.log(numbBiggerThenIndex([2, 5, 7, 3, 123]));


// Напишіть функці яка приймає масив чисел.Функція повинна занйти мінімальний елемент та
//  видалити його з масиву.



function removeMinElement(arr) {
    if (arr.length === 0) return arr; // Перевірка на порожній масив
    
    let minIndex = arr.indexOf(Math.min(...arr)); // Знаходимо індекс мінімального елемента
    return arr.slice(0, minIndex).concat(arr.slice(minIndex + 1)); // Видаляємо мінімальний елемент
}

// Приклад використання:
console.log(removeMinElement([5, 2, 8, 3, 10])); // [5, 8, 3, 10]
console.log(removeMinElement([1, 2, 3, 4, 5])); // [2, 3, 4, 5]
console.log(removeMinElement([-1, 0, 3, -6, 10])); // [-1, 0, 3, 10]
console.log(removeMinElement([7])); // []
console.log(removeMinElement([])); // []

// Напиши функцію, яка приймає масив чисел і значення min.Функція повинна повернути всі елементи, які менші за min.

function filterLessThan(arr, min) {
    return arr.filter(num => num < min)
}

console.log(filterLessThan([10, 5, 8, 2, 15, 3], 6)); // [5, 2, 3]

// Напиши функцію, яка приймає масив чисел і повертає їх середнє значення.


// function medumNumber(num) {
//     if (arr.length === 0) return 0;  // Перевірка, щоб уникнути ділення на нуль

//     let sum = arr.reduce((acc, num) => acc + number, 0)  
//     // Якщо масив порожній, повертається 0, щоб уникнути помилки.


//     return sum / arr.length
// }

// console.log(medumNumber([2,5,3,7,5]))
// Напиши функцію, яка приймає масив і певний елемент. Функція повинна повернути true, якщо елемент є в масиві, 
// і false, якщо його немає.



// Напиши функцію, яка приймає масив чисел і повертає новий масив, у якому відсутні нульові значення.

// function findZeroValue(num) {
//     const zeroValues = new Set([0, NaN, null, undefined]);
  
//        return arr.filter(num => !zeroValues.has(num) && num === num);
// }

// console.log(findZeroValue([3,0,null, 6,1]))


// Напиши функцію, яка приймає масив рядків і повертає новий масив,
//  у якому всі рядки з парною кількістю символів перетворені на верхній регістр, а з непарною – на нижній.



function sortByLength(arr) {
return arr.map(str => {
        if (str.length % 2 === 0) {
            return str.toUpperCase();
        } else {
            return str.toLowerCase();
        }
    });
}

// Напиши функцію, яка приймає масив чисел і повертає масив парних чисел.

// function findEven(num) {
//     return arr.filter(num => num % 2 === 0);
// }
// console.log(findEven([4,6,1,7]))

// Напиши функцію, яка приймає масив чисел і повертає новий масив, де кожен елемент додано до свого індексу.

function addIndex(arr) {
    return arr.map((num, index) => num + index);
    
}
console.log(addIndex(([10, 20, 30, 40])));

// Напиши функцію, яка приймає масив чисел і повертає новий масив, що містить лише числа, які діляться на 5.

function findDividableOnFive(arr) {
    return arr.filter(num => num % 5 === 0 )
}
console.log(findDividableOnFive([30, 70, 41, 95, 2]))


// Напишіть функцію, яка приймає два масиви(arr1, arr2) і повертає новий масив,
//     що містить елементи з arr2, які відсутні в arr1.

function getNewNum(arr1, arr2) {
    return arr2.filter(elem => !arr1.includes(elem));
    }


console.log(getNewNum([4, 8, 6], [7, 4, 8]));

// Напишіть функцію, яка приймає масив і повертає його середнє значення
//     (суму всіх елементів поділену на кількість елементів).


function findAvarage(arr) {
    if (arr.length === 0) return 0;
    let sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
}

console.log(calculateAverage([10, 20, 30, 40]));

// Напишіть функцію, яка приймає масив і повертає масив, що містить лише парні числа з цього масиву.


function getEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

// Тестові виклики
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]

//  Напишіть функцію, яка приймає масив чисел і повертає масив з усіма елементами, кратними числу 3.

function getMultiplesOfThree(arr) {
    return arr.filter(num => num % 3 === 0);
}

// Тестові виклики
console.log(getMultiplesOfThree([3, 6, 9, 12, 15])); // [3, 6, 9, 12, 15]


// Напишіть функцію, яка приймає масив і повертає масив,
//     що містить лише числа, менші за середнє значення всіх елементів масиву.

function lowerThenAvarage(arr) {

    let avarage = arr.reduce((acc, num) => acc + num, 0) /arr.length
    return arr.filter(num => num < avarage);
}

console.log(lowerThenAvarage([10, 20, 30, 40]));

// Напишіть функцію, яка приймає масив і повертає новий масив,
//     в якому кожен елемент буде помножений на його індекс.

function name(arr) {
    return arr.map((elem, index) => elem * index);
}

// Напишіть функцію, яка приймає два масиви(arr1, arr2) і повертає новий масив, в якому будуть елементи,
//     що зустрічаються у обох масивах більше одного разу.

function findCommonElementMoreThanOnce(arr1, arr2) {

    // Створюємо масив для зберігання спільних елементів, що зустрічаються більше одного разу
    let commotElement = [];

    // Проходимо через перший масив
    arr1.forEach(item => {
        // Перевіряємо, чи цей елемент є в обох масивах більше одного разу
        if (arr1.filter(x => x === item).length > 1 && arr2.filter(x => x === item).length > 1) {
            if (!commonElement.includes(item)) {
                commonElement.push(item);
            }
        }
    })
      return commonElements;
}
console.log(findCommonElementsMoreThanOnce([1, 2, 3, 4, 2, 5], [2, 2, 3, 3, 6])); // [2]

// Напишіть функцію, яка приймає масив чисел і повертає масив, в якому кожен елемент збільшений на 5.

function increaseByFive(arr) {
    return arr.map(item => item + 5)
}

console.log(increaseByFive([1, 2, 5, 10]));

// Напишіть функцію, яка приймає масив рядків і повертає масив,
//     в якому кожен елемент переведений до верхнього регістру.

function toUpperCaseArray(arr) {
    return arr.map(elem => elem.toUpperCase()) 
}
console.log(toUpperCaseArray(["hello", "world", "javascript"]));