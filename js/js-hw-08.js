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

const images = [
  {
    preview: 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg',
    description: 'Cute Cat',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2016/02/19/10/59/bird-1209975__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2016/02/19/10/59/bird-1209975_1280.jpg',
    description: 'Colorful Bird',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2017/07/25/17/36/rose-2533389__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2017/07/25/17/36/rose-2533389_1280.jpg',
    description: 'Red Rose',
  },
];

// const gallery = document.querySelector('.gallery');

// const markupLivePage = images
//   .map(({ preview, original, description }) => {
//     return `
//       <li class="gallery-item">
//         <a class="gallery-link" href="${original}">
//           <img class="gallery-image"
//             src="${preview}"
//             data-source="${original}"
//             alt="${description}" />
//         </a>
//       </li>`;
//   })
//   .join('');
   


// gallery.addEventListener("clisck", (e) => {
//   e.preventDefault();

//   const clickedImage = e.target;

//   if (clickedImage.nodeName !== "IMG") return;

//   const largeImageURL = clickedImage.dataset.sourse;

//   const instance = basicLightbox.create(`
//     <img src="${largeImageURL}" alt="${clickedImage.alt}" />
//   `);

// })

// 1 - отримай body елемент і виведи його в консоль;
const bodyEl = document.querySelector("body");
// console.log(bodyEl);

// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// const mainTitle = document.querySelector("h1");
// const sibling = mainTitle.nextElementSibling;
// console.log(sibling);

// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
const titles = document.querySelectorAll("h3");
// console.log(titles);
titles.forEach((title) => console.log(title));

// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// const newText = document.createElement("p");
// newText.textContent = "Об'єктна модель документа (Document Object Model)";
// mainTitle.after(newText);
// const markup = "<p>Об'єктна модель документа (Document Object Model)</p>";
// mainTitle.insertAdjacentHTML(
//   "afterend",
//   "<p>Об'єктна модель документа (Document Object Model)</p>"
// );



// 1 - отримай body елемент і виведи його в консоль;
// 2 - отримай елемент id="title" і виведи його в консоль;
const element = document.querySelector("title")
console.log(element);
// 3 - отримай елемент class="list" і виведи його в консоль;
const classList = document.querySelector("list")
console.log(classList)
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
const allElements = document.querySelectorAll("[data-topic]")
console.log(allElements)
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const findFirstElements = document.querySelectorAll('[data-topic]');
console.log(findFirstElements[0]);

// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const findLastElements = document.querySelectorAll('[data-topic]');

const lastElement = findLastElements[findLastElements.length - 1];

console.log(findLastElements);


// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// const newClass = document.createElement("h3");

// newClass.textContent = "active";

// mainTitle.after(newClass);


// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
const findElem = document.querySelector('li[data-topic="navigation"]')
console.log(findElem)
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// NavigationElement.style.backgroundColor = "yellow";
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// const foundElem = document.querySelector("p");
// foundElem.textContent = "Я змінив тут текст!"
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
const currentTopic = "manipulation"
const findZ = document.querySelector(`li[data-topic="${currentTopic}"]`)
console.log(findZ)
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;

element.style.backgroundColor = "lightblue";

// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
const taskY = document.querySelector('.completed') 
console.log(taskY)
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// const header = document.querySelector('.completed');
// const liElement = header.closest('li');
// liElement.remove();
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// const newText = document.createElement("p");
// newText.textContent = "Об'єктна модель документа (Document Object Model)";
// mainTitle.after(newText);
// const markup = "<p>Об'єктна модель документа (Document Object Model)</p>";
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і 
// помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 
// та P і готову LI закинути у кінець списку
// const taskE = document.querySelector("p")

// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// 20 - очисти список

// ===================================3-task

// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше 
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`
const inputAction = document.querySelector('.contact-form-input');

inputAction.addEventListener('input', function () {
  const value = inputField.value;


  if (value.length >= 6) {
    inputAction.classList.remove('error');
    inputAction.classList.add('success');
  } else {
    inputAction.classList.remove('success');
    inputAction.classList.add('error');
  }
});





// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// inputField.addEventListener('focus', function() {
  
//   if (inputField.value === '') {

//     inputField.style.outline = '3px solid red';
//   } else {

//     inputField.style.outline = '3px solid green';
//   }
// });


// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, 
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`


inputField.addEventListener('blur', function() {

  if (inputField.value === '') {
 
    inputField.style.outline = '3px solid red';
  } else {
   
    inputField.style.outline = '3px solid green';
  }
});
// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку, 
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також реалізуй додавання 
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видали, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення 
// false, верни дефолтне значення "Anonymous" у span.


