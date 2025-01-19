function filterArray(numbers, value) {

  const result = [];
  
 
  for (let number of numbers) {
   
    if (number > value) {
      result.push(number);
    }
  }
  

  return result;
}


console.log(filterArray([1, 2, 3, 4, 5], 3)); 
console.log(filterArray([1, 2, 3, 4, 5], 4)); 
console.log(filterArray([1, 2, 3, 4, 5], 5)); 
console.log(filterArray([12, 24, 8, 41, 76], 38)); 
console.log(filterArray([12, 24, 8, 41, 76], 20)); 


// Напиши функцію яка приймає масив та елемент для пошуку.Фукнція повинна порахувати скільки разів шуканий елемент зустрічається у масиві.

function Arrays(element) {
    const key = Element.key(element);
    return key.length
}

function countOccurrences(arr, element) {
  let count = 0;  // Змінна для підрахунку кількості елементів

  // Перебираємо масив
  for (const item of arr) {
    if (item === element) {  // Якщо поточний елемент масиву дорівнює шуканому
      count++;  // Збільшуємо лічильник
    }
  }

  return count;  // Повертаємо кількість знайдених елементів
}

// Напиши функцію яка приймає масив чисел. 
// Функція повинна видалити усі негативні(відємні числа) з масиву та повернути новий масив.

// function name(arr, number) {
//     arr(number % 2 === 0)
// }
// return arr[];

function removeNegativeNumbers(arr) {
  // Використовуємо filter, щоб залишити лише числа, більші або рівні нулю
  
// Приклад використання:
const array = [1, -2, 3, -4, 5, -6];
console.log(removeNegativeNumbers(array));


// Напиши функцію яка приймає масив рядочків.Потрібно змінити кожен елемент масиву наступним чином -
//     якщо довжина рядочку менша за 6 до привести рядок до нижнього регістру, в іншому випадку привести до верхнього регістру.

function resizeArr(string) {
    if (String.length < 6) {
        return toLowerCase;
    }
    return toUpperCase;
}


function modifyStrings(arr) {
  return arr.map(str => {
    if (str.length < 6) {
      // Якщо довжина рядка менша за 6, приводимо до нижнього регістру
      return str.toLowerCase();
    } else {
      // Якщо довжина рядка більша або рівна 6, приводимо до верхнього регістру
      return str.toUpperCase();
    }
  });
}

// Напиши функцію, яка приймає масив чисел і повертає новий масив, що містить лише непарні числа.

function getOddNumbers(arr) {
  // Фільтруємо масив, залишаючи лише непарні числа
  return arr.filter(num => num % 2 !== 0);
}

// Напиши функцію, яка приймає масив чисел і повертає новий масив,
//     де кожне число помножене на індекс, за яким воно знаходиться в масиві.

function getIndex(arr, number) {

    return arr[number * index];
}

function multiplyByIndex(arr) {
  // Використовуємо map, щоб помножити кожне число на його індекс
  return arr.map((num, index) => num * index);
}
// Напиши функцію, яка приймає масив чисел і повертає новий масив, що містить лише числа, які діляться на 3.
function filterDivisibleByThree(array) {
    return arr.filter(num => num % 3 === 0);
    
}
// Напиши функцію яка приймає два масиви(arr1, arr2),
//     та повертає новий масив де будуть лише ті елементи які зустрічаються і в arr1 і arr2.

function intersection(arr1, arr2) {

    return arr1.filter(item => arr2.includes(item));
}

// Напиши функцію яка приймає два масиви(arr1, arr2),
//     та повертає новий масив де будуть лише елементи масиву arr1 яких не має у масиві arr2.

function difference(arr1, arr2) {
    return arr1.filter(item => !arr2.includes(item));
}

// Напиши функцію яка приймає масив та знаходить мінімальний елемент.
function finfMin(array) {
    return arr.filter(item = minElement);
}


function findMin(arr) {
  return Math.min(...arr);
}


// Напиши функцію яка приймає масив та знаходить максимальний елемент.

function findMax(arr) {
    return Math.max(...arr);
}

// Напиши функцію яка приймає масив та повертає масив лише з тих елементів які 
// більші за середнє значення всіх елементів масиву.

// function (array) {
//     return (i )
// }


// Напишіть функцію sumArray(numbers, callback), яка приймає масив чисел numbers та колбек callback.
//  Функція повинна обчислити суму чисел у масиві та передати результат у колбек.



 const sumArray = (numbers, callback) => {
  const sum = numbers.reduce((total, number) => total + number, 0); // Обчислюємо суму
  callback(sum); // Передаємо результат у колбек
};

// Подвоєння чисел: Напишіть функцію doubleArray(numbers, callback), яка приймає масив чисел numbers та колбек callback. 
// Функція повинна подвоїти кожне число в масиві та передати новий масив у колбек.

const doubleArray = (numbers, callback) => {
const doubleArray = (numbers) => numbers.map(number => number * 2);
  callback(doubledNumbers)
}

// Фільтр слів: Напишіть функцію filterWords(words, condition, callback), яка приймає масив рядків words, функцію condition(перевірка рядка) та колбек callback. 
// Функція повинна фільтрувати слова масиву за допомогою переданої умови та передати відфільтрований масив у колбек.

const filterWords = (words, condition, callback) => {
  const filetredWords = words.filter(words => condition(word));  // Фільтруємо слова за допомогою умови
  callback(filteredWords)
}

// Капіталізація рядків: Напишіть функцію capitalizeStrings(strings, callback), яка приймає масив рядків strings та колбек callback. 
// Функція повинна перетворити всі рядки в масиві, роблячи першу літеру кожного рядка великої, і передати перетворений масив в колбек.

const capitalizeStrings = (strings, callback) => {
  const capitalizeStrings = string.map(str => str.charAt(0).toUpperCase() + str.slice(1) // Перша літера велика, решта — як є
  );
  callback(capitalizedStrings)
}

// Сортування чисел: Напишіть функцію sortNumbers(numbers, callback), яка приймає масив чисел numbers та колбек callback. 
// Функція повинна відсортувати числа в масиві за зростанням та передати відсортований масив у колбек.

const sortNumbers = (numbers, callback) => {

  const sortNumbers = numbers.sort((a, b) => a - b);   
}
callback(sortedNumbers)

// Пошук максимуму: Напишіть функцію findMax(numbers, callback), яка приймає масив чисел numbers та колбек callback. 
// Функція повинна знайти максимальне число в масиві та передати його в колбек.

// const findMax = (numbers, callback) => {
//   const maxNumber = Math.max(...numbers);
// }
 
// callback(maxNumber)

// Перевірка на парність: Напишіть функцію checkEven(numbers, callback), яка приймає масив чисел numbers та колбек callback.
//  Функція повинна перевірити, чи всі числа в масиві парні, і передати результат перевірки колбек.

const checkEven = (numbers, callback) => {
  const allEven = numbers.every(num => num % 2 === 0);
}
callback(evenNumber)

// Об'єднання рядків: Напишіть функцію concatStrings(strings, separator, callback), яка приймає масив рядків strings, рядок separator та колбек callback. 
// Функція повинна об'єднати рядки з масиву, розділяючи їх переданим роздільником, і передати рядок, що вийшов, в колбек.

const concatStrings = (strings, separator, callback) => {
  const concatStrings = arr.strings(string.separator)
  const result = strings.join(separator); 
}
callback(result);


