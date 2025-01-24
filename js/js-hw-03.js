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

console.log(firstChar("Hello"));

// Напиши функцію, яка приймає рядок і повертає останній символ цього рядка.

function lastChar(str) {
  return str.charAt(str.length - 1);
}

console.log(lastChar("Hello"));