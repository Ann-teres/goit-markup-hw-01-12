// Створи дві змінні firstName і lastName.
// Присвой їм своє ім'я та прізвище.
// Обєднай ці два рядки в один, з пробілом між ними. Запиши результат в змінну fullName.
// Виведи fullName в консоль.


const firstName = "Anna";
const lastName = "Ters";
const fullName = firstName + " " + lastName;
console.log(fullName);

// Створи дві змінні a і b, присвой їм якісь цілі числа.
// Виконай над ними додавання, віднімання, множення і ділення.
// Запиши результати в змінні sum, difference, product, quotient.
// Виведи всі ці результати в консоль.

let a = 5;
let b = 8;

let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;

console.log("Сума (a + b):", sum);
console.log("Різниця (a - b):", difference);
console.log("Добуток (a * b):", product);
console.log("Частка (a / b):", quotient);


// Створи змінну radius і присвой їй деяке значення (наприклад, 5).
// Використай формулу площі кола (π * r²) для обчислення площі кола з радіусом, який було встановлено.
// Використовуй значення π = 3.14. Запиши результат у змінну area.
// Виведи area в консоль.

let radius = 5;

let pi = 3.14;

let area = pi * radius * radius;

console.log("Площа кола:", area);

// Створи змінну someString і присвой їй будь-який рядок.
// Обчисли довжину цього рядка, використовуючи властивість .length.
// Виведи довжину рядка в консоль.

let someString = "Anna you can do it. Fight."

// Обчислення довжини рядка
let lengthOfString = someString.length;
console.log("Довжина рядка:", lengthOfString)

// Створи змінну someString і присвой їй будь-який рядок.
// Створи змінну firstLetter і присвой їй першу літеру рядка someString.
// Створи змінну lastLetter і присвой їй останню літеру рядка someString.

let someString = "Anna write javaScrip well"

// Створення змінної firstLetter та присвоєння їй першої літери рядка
let firstLetter = someString[0];

// Створення змінної lastLetter та присвоєння їй останньої літери рядка
let lastLetter = someString[someString.length - 1];


console.log("Перша літера:", firstLetter);
console.log("Остання літера:", lastLetter);


// Створи дві змінних str1 та str2.
// Отримай з кожної змінної останню літеру
// Створи третю змінну де обєднай попередні літери
// Приклад: для рядків "HELLO" та "WORLD" результатом буде рядок "OD"


let str1 = "A";
let str2 = "B";

// Отримання останніх літер з кожної змінної
let lastLetterStr1 = str1[str1.length - 1];
let lastLetterStr2 = str2[str2.length - 1];

// Об'єднання останніх літер у третю змінну
let result = lastLetterStr1 + lastLetterStr2;

console.log(result);


// Створи змінну userValue та запиши до неї будь-яке число.

// Створи нову змінну до якої потрібно записати результат математичної операції а саме:
// userValue помножити на число 5 у степені (кількість цифр у змінній userValue).

// Приклади:
// для числа 1 = 1 * 5^1 = 5;
// для числа 2 = 2 * 5^1 = 10;
// для числа 12 = 12 * 5^2 = 300;
// для числа 512 = 512 * 5^3 = 64000;

let userValue = 2;

// Обчислення кількості цифр у числі
let numberOfDigits = userValue.toString().length;

// Математична операція: userValue помножити на 5 у степені кількості цифр
let result = userValue * Math.pow(5, numberOfDigits);

console.log(result);


// Виведіть на екран загальну кількість яблок і винограду. 
// Різницю яблока і винограду теж виведіть у консоль.

const apples = 47;
const grapes = 135;
const total = apples + grapes;
console.log(total)
const diff = apples - grapes;
console.log(diff)


// Замінити вираз перевизначення комбінованим оператором `+=`.


let students = 100;
students += 50;
console.log(students);


// Склади фразу за допомогою шаблонних рядків `A has B bots in stock`, де A, B -
// змінні вставлені у рядок.


const companyName = "Cyberdyne Systems";
const repairBots = 150;
const defenceBots = 50;
const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
console.log(message); // "Cyberdyne Systems has 200 bots in stock"
