// const modalElem = document.querySelector(".modal");
// modalElem.addEventListener("click", () => {
//     instance.close();
// });


// Що робить цей код:
// const modalElem = document.querySelector(".modal");:

// Знаходить HTML-елемент з класом "modal" на сторінці.
// document.querySelector() — метод, який повертає перший елемент у DOM, що відповідає CSS-селектору (у цьому випадку .modal).
// Цей елемент зберігається в змінній modalElem.
// modalElem.addEventListener("click", () => { instance.close(); });:

// Додає обробник події click до елемента modalElem.
// addEventListener — метод, який дозволяє виконати певну функцію при виникненні події (тут це подія кліку на модальному елементі).
// Стрілкова функція () => { instance.close(); }:

// Це функція, яка виконається, коли користувач клацне на елементі modalElem.
// Всередині цієї функції викликається метод instance.close().
// instance.close();:

// Закриває модальне вікно.
// Припускається, що instance — це об'єкт, який управляє модальним вікном (наприклад, екземпляр бібліотеки для роботи з модальними вікнами). Метод close() відповідає за закриття модального вікна.

// =============================================================

// 1. Деструктуризація об'єктів
// Напишіть функцію, яка приймає об'єкт користувача та повертає рядок у форматі:


// "User [name] is [age] years old and lives in [city]."


// const user = { name: "Anna", age: 25, city: "Kyiv" }
// console.log(formatUser(user));

// ==================================================================

// 2. Деструктуризація масивів
// Напишіть функцію, яка приймає масив координат [x, y, z] та повертає об'єкт із такими властивостями:

// function getCoordinates([x, y, z]) {
//     return {x, y, z}
// }
// const coordinates = [10, 20, 30];
// const result = getCoordinates(coordinates);

// console.log(result); 


// =======================================================================

//  3. Деструктуризація з параметрами за замовчуванням
// Напишіть функцію, яка приймає об'єкт налаштувань і повертає результат з об'єднанням значень за замовчуванням:

// const defaultConfig = { theme: "light", language: "en", layout: "grid" };

// function applyConfig({ theme = defaultConfig.theme, language = defaultConfig.language, layout = defaultConfig.layout }) {
//   return { theme, language, layout };
// }

// const userConfig = { theme: "dark", language: "fr" };
// console.log(applyConfig(userConfig)); 

// =======================================================================



// 4. Глибока деструктуризація
// Напишіть функцію, яка приймає об'єкт користувача із вкладеними об'єктами та повертає його контактні дані:

// const user = {
//   name: "Alice",
//   contacts: {
//     email: "alice@example.com",
//     phone: "123-456-7890",
//   },
// };
// console.log(getContacts(user)); 


// function getContacts({contacts: email,phone}) {
//     return { email, phone };
// }
// console.log(getContacts(user));


// ========================================================================

// Завдання:
// Напишіть функцію, яка приймає об'єкт налаштувань користувача для конфігурації профілю. 
// Об'єкт налаштувань може містити наступні властивості:

// name — ім'я користувача
// age — вік користувача
// city — місто користувача
// Якщо якихось значень немає у об'єкті налаштувань, 
// функція має використовувати значення за замовчуванням:

// name: "Unknown"
// age: 18
// city: "Unknown"
// Функція повинна повертати об'єкт з налаштуваннями користувача.




// function getUserDetails({ name = "Unknown", age = 25, city = "Unknown" }) {
//     return {  name, age, city }
// }


// const userSettings = { name: "John", age: 30 };
// console.log(getUserDetails(userSettings));


// ========================================================================

// 1. Делегування кліків по кнопках
// Напишіть код, який слухає кліки на контейнері div і виконує дію залежно від натиснутої кнопки.

// HTML:


{/* <div id="button-container">
  <button data-action="save">Save</button>
  <button data-action="edit">Edit</button>
  <button data-action="delete">Delete</button>
</div> */}




// const buttonContainer = document.getElementById('button-container');

// buttonContainer.addEventListener('click', function(event) {
//   const action = event.target.getAttribute('data-action');

//   if (action) {
//     switch (action) {
//       case 'save':
//         console.log('Save button clicked');
//         break;
//       case 'edit':
//         console.log('Edit button clicked');
//         break;
//       case 'delete':
//         console.log('Delete button clicked');
//         break;
//       default:
//         console.log('Unknown action');
//     }
//   }
// });




// <ul id="todo-list">
//   <li>Task 1 <button class="delete-btn">Delete</button></li>
//   <li>Task 2 <button class="delete-btn">Delete</button></li>
//   <li>Task 3 <button class="delete-btn">Delete</button></li>
// </ul>



// ========================================================================


// 4. Відстеження навігації по посиланнях
// Напишіть код, який відстежує кліки по посиланнях у контейнері і виводить URL натиснутого посилання.

// HTML:

// <div class="nav">
//   <a href="/home">Home</a>
//   <a href="/about">About</a>
//   <a href="/contact">Contact</a>
// </div>



// document.querySelector(".nav").addEventListener("click", (event) => {
//     event.preventDefault();

//     if (event.target.nodeName === "A") {
//         console.log("Натиснуто посилання:", event.target.href);
//     }
// })

// Як це працює?
// Додаємо обробник подій на <div class="nav">, а не на кожне посилання окремо (делегування подій).
// Перевіряємо, чи клік був саме по <a> (перевіряємо event.target.nodeName === "A").
// Виводимо URL посилання у консоль (event.target.href).
// event.preventDefault() блокує перехід за посиланням (можна прибрати, якщо перехід потрібен).


// ========================================================================

// 5. Форма з делегуванням
// Напишіть код, який слухає події на формі і виконує дію залежно від натиснутої
// кнопки.

// HTML:

// <form id="action-form">
//   <input type="text" name="username" placeholder="Enter your name">
//   <button type="submit" data-action="save">Save</button>
//   <button type="button" data-action="reset">Reset</button>
// </form>


{/* Використовуйте делегування для обробки кліків на кнопках форми.
Якщо натиснуто Save, виведіть значення поля в консоль.
Якщо натиснуто Reset, очистіть поле вводу. */}


// document.querySelector("#action-form").addEventListener("click", (event) => {
//     event.preventDefault();

//     const inputField = event.currentTarget.querySelector('input[name="username"]');
//     const action = event.target.dataset.action;

//     if (action === "save"){
//         console.log("Введене ім'я:", inputField.value);
//     } else if (action === "reset") {
//         inputField.value = ""; 
//     }
// })


// ========================================================================

// 1. Обмін значень через деструктуризацію
// У вас є дві змінні:

// let a = 10;
// let b = 20;
// Поміняйте їх значення місцями без використання третьої змінної.


let a = 10;
let b = 20;

[a, b] = [b, a]

console.log(a);
console.log(b);



// 2. Деструктуризація у функції
// Напишіть функцію getUserInfo, яка приймає об'єкт користувача:


// const user = { 
//   name: "Alice", 
//   age: 30, 
//   country: "USA" 
// };

// Функція повинна повернути рядок:

// "User Alice, 30 years old, from USA."



function getUserInfo({ name, age, country}) {
    return `User ${name}, ${age} years old, from ${country}`
}

const user = { 
  name: "Alice", 
  age: 30, 
  country: "USA" 
};

console.log(getUserInfo(user));

// 3. Деструктуризація вкладених об'єктів
// Напишіть функцію , яка отримує об'єкт:


// const user = { 
//   name: "John", 
//   address: { 
//     city: "New York", 
//     street: "Wall Street" 
//   } 
// };
// Функція повинна повернути назву вулиці.


// function getStreet({ address: { street } }) {
//   return street;
// }

// const user = { 
//   name: "John", 
//   address: { 
//     city: "New York", 
//     street: "Wall Street" 
//   } 
// };

// console.log(getStreet(user)); 


// 4. Деструктуризація масиву об'єктів
// Є масив:


const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];
// Витягніть перших двох користувачів у змінні firstUser та secondUser.

const [firstUser,secondUser] = users

console.log(firstUser)




// 5. Деструктуризація параметрів функції
// Напишіть функцію, яка приймає об'єкт товару:

// const product = { 
//   title: "Laptop", 
//   price: 1200, 
//   stock: 5 
// };
// Функція повинна повернути рядок:

// "Laptop costs $1200. Only 5 left in stock!"


// function getProductInfo({ title, price,stock}) {
//     return `Laptop costs ${price}. Only ${stock} left in stock!`
// }
// const product = { 
//   title: "Laptop", 
//   price: 1200, 
//   stock: 5 
// };

// console.log(getProductInfo(product)); 

// ===========================================================


// 6. Деструктуризація з параметрами за замовчуванням
// Є об'єкт користувача, у якому може не бути деяких полів:


// const user = { name: "Alice" };


// Створіть функцію, яка витягує name, age(за замовчуванням 18),
// city(за замовчуванням "Unknown").
    
// function getDefaultElements({name, age = 18, city = "Unknown" }) {
//     return `${name} is ${age} years old and lives in ${city}.`
// }

// console.log(getDefaultElements(user))


// 7. Перетворення масиву в об'єкт
// Є масив пар ключ-значення:


// const entries = [
//   ["name", "John"],
//   ["age", 25],
//   ["city", "New York"]
// ];

// Перетворіть його в об'єкт за допомогою деструктуризації.