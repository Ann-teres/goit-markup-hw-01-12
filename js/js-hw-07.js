// Напиши скрипт для створення галереї зображень на основі масиву даних. HTML містить список <ul class="photo-gallery"></ul>.


// <ul class="photo-gallery"></ul>
// Використовуй масив об'єктів photos для створення елементів <img>, вкладених у <li>.

// Ти можеш створювати й додавати HTML-елементи, використовуючи document.createElement() і elem.append(), або шаблонні рядки та elem.insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами через CSS класи.


const photos = [
  {
    url: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?dpr=2&h=750&w=1260",
    alt: "Mountain Under Starry Sky",
  },
  {
    url: "https://images.pexels.com/photos/358574/pexels-photo-358574.jpeg?dpr=2&h=750&w=1260",
    alt: "Forest Pathway",
  },
  {
    url: "https://images.pexels.com/photos/130879/pexels-photo-130879.jpeg?dpr=2&h=750&w=1260",
    alt: "Snow Covered Mountains",
  },
  {
    url: "https://cdn.pixabay.com/photo/2020/06/12/18/54/sunset-5291837_1280.jpg",
    alt: "Sunset Over the Ocean",
  },
  {
    url: "https://cdn.pixabay.com/photo/2020/06/17/18/52/lake-5310126_1280.jpg",
    alt: "Mirror Lake Reflection",
  },
  {
    url: "https://cdn.pixabay.com/photo/2020/07/07/09/26/road-5382747_1280.jpg",
    alt: "Lonely Road in Mountains",
  },
];

const galleryArr = document.querySelector("#photo-gallery")
const images = photos

    .map(({ url, alt }) =>
        `<ul src = "${url}", url = "${url}", class="photo-gallery">
</ul>`
    )
    .join('');


galleryArr.insertAdjacentHTML('beforeend', images);
    

// ===============================================================================================

const menuWithProducts = document.querySelectorAll("#product-gallery")
const forSale = products
    .map((name, price, image) =>
        `<ul name ="${name}", price = "${price}", image = "${image}"class="product-gallery"></ul>
`
    )
    .join('');

menuWithProducts.insertAdjacentHTML('beforeend', forSale)

// ===============================================================================================


// Напиши скрипт, який під час введення тексту в поле input#email-input (подія input) підставляє його поточне значення в span#email-output, імітуючи введення email-адреси.

// Якщо інпут містить лише пробіли або порожній, то у span#email-output має відображатися текст "your@email.com".


// <input type="text" id="email-input" placeholder="Enter your email" />
// <p>Your email: <span id="email-output">your@email.com</span></p>


const inputWindow = document.querySelector('#email-input')
const outputWindow = document.querySelector('#email-output')

trimmedValue.addEventListener("input", () => {

    const trimmedValue = inputWindow.value.trim();
outputWindow.textContent = trimmedValue === "" ? "your@email.com" : trimmedValue;;
})

// ===============================================================================================


// Напиши скрипт, який під час введення тексту в поле input#username-input (подія input) підставляє його поточне значення в span#username-output як ім’я користувача для вітання.

// Якщо інпут порожній або містить лише пробіли, у span#username-output має відображатися "Guest".

// <input type="text" id="username-input" placeholder="Enter your username" />
// <p>Welcome, <span id="username-output">Guest</span>!</p>

// Вимоги:
// На input#username-input прослуховується подія input.
// Поточне значення інпуту підставляється у span#username-output.
// Значення очищене від пробілів по краях.
// Якщо інпут порожній або містить лише пробіли, у span#username-output відображається "Guest".


const inputTextArea = document.querySelector('#username-input');
const outputTextArea = document.querySelector('#username-output');

trimmedValue.addEventListener("input", (event) => {
  
    const trimmedValue = event.target.value.trim();
    outputTextArea.textContent = trimmedValue === "" ? "Guest" : trimmedValue
});

// ===============================================================================================

// Напиши скрипт управління формою реєстрації.


// <form class="registration-form">
//   <label>
//     First Name
//     <input type="text" name="firstName" />
//   </label>
//   <label>
//     Last Name
//     <input type="text" name="lastName" />
//   </label>
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Register</button>
// </form>



// При відправленні форми (submit подія) сторінка не повинна перезавантажуватися.
// Якщо хоча б одне поле незаповнене, вивести попередження в alert, що всі поля повинні бути заповнені.
// Якщо всі поля заповнені, збери значення полів у об'єкт, де ключ — це ім'я кожного інпуту, а значення — це введені дані без пробілів по краях.
// Виведи цей об'єкт у консоль.
// Очисти значення полів за допомогою методу reset().


const formToBeSubmited = document.querySelectorAll(".registration-form")


formToBeSubmited.addEventListener("submit", function (event) {
    event.preventDefault();

    if (login === "" || password === "") {
      alert ('All form fields must be filled in')
      return;
  }
    
    
  const formData = {
    email: email,
    password: password,
  };
    
    
    console.log(`Login: ${login}, Password: ${password}`);
    
  form.reset();

 })


// ===============================================================================================
 

// Напиши скрипт управління формою логіна.



// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Log in</button>
// </form>




// відправлення форми form.login-form повинна відбуватися за подією submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо при сабміті у формі є незаповнені поля, виводь alert з попередженням про те, що 'All form fields must be filled in'. Не додавай на інпути атрибут required, валідація має відбуватися саме через JS.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт з двома властивостями, де ключ — це ім'я інпутів, а значення — відповідні значення цих інпутів, очищені від пробілів по краях. Для доступу до елементів форми використовуй властивість elements.
// При сабміті форми виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.


const accumulatedData = {};

const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); 

  const email = loginForm.elements.email.value.trim();
  const password = loginForm.elements.password.value.trim();

  if (!email || !password) {
    alert("All form fields must be filled in");
    return;
  }

  accumulatedData[email] = password;

  console.log("Accumulated data:", accumulatedData);

  loginForm.reset(); 
});

// ===============================================================================================

// Напиши скрипт, який змінює колір фону елемента <body> через інлайн-стиль по кліку на button.change-color і задає це значення кольору текстовим вмістом для span.color.



// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>




// Для генерування випадкового кольору використовуй функцію getRandomHexColor().

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }



// Зверни увагу, що функція getRandomHexColor() повертає колір у hex-форматі, в той час, як колір фону на <body> буде у форматі rgb. Це нормально й не потребує якихось правок.



// На що буде звертати увагу ментор при перевірці:

// Фон на <body> задається тільки після кліку на button.change-color
// При кожному кліку на елемент button.change-color фон <body> зафарбовується новим рандомним кольором
// На <body> і span.color значення одного й того самого кольору

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const colorSpan = document.querySelector(".color");
const changeColorButton = document.querySelector(".change-color");

changeColorButton.addEventListener("click", () => {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  colorSpan.textContent = newColor;
});



// Напиши скрипт, який змінює колір фону елемента <body> через інлайн-стиль по кліку на button.change-color і задає це значення кольору текстовим вмістом для span.color.



// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>




// Для генерування випадкового кольору використовуй функцію getRandomHexColor().

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }



// Зверни увагу, що функція getRandomHexColor() повертає колір у hex-форматі, в той час, як колір фону на <body> буде у форматі rgb. Це нормально й не потребує якихось правок.



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
     .padStart(6, 0)}`;
}
const textElement = document.querySelector(".text");
const colorValueElement = document.querySelector(".color-value");
const buttonChangeTextColor = document.querySelector(".change-text-color");


changeColorButton.addEventListener("click", () => {
  const randomColor = getRandomHexColor();


  textElement.style.color = randomColor;
  colorValueElement.textContent = randomColor;

});

// Напиши скрипт, який змінює розмір шрифту тексту <p class="text"> при натисканні на кнопку .change-font-size. Новий розмір шрифту також повинен відображатися в текстовому вмісті span.font-size-value.


// <div class="widget">
//   <p>Font size: <span class="font-size-value">16px</span></p>
//   <p class="text">This text will change font size</p>
//   <button type="button" class="change-font-size">Change font size</button>
// </div>

// Деталі реалізації:
// Напиши функцію getRandomFontSize(), яка буде генерувати випадковий розмір шрифту від 12px до 40px.
// При натисканні на кнопку .change-font-size:
// Розмір шрифту в .text змінюється на випадковий.
// Новий розмір оновлюється у span.font-size-value.

function getRandomFontSize() {
  return `#${Math.floor(Math.random() * (40 - 12 + 1)) + 12}px`;

   }


const textTransformation = document.querySelector("#text");
const textSizeAction = document.querySelector(".change-font-size");
const textValueAction = document.querySelector(".font-size-value")


textSizeAction.addEventListener("click", () => {
  const randomFontSize = getRandomFontSize();


  textTransformation.style.fontSize = randomFontSize;
  textValueAction.textContent = randomFontSize;

});


// Напиши скрипт, який змінює стиль шрифту тексту <p class="text"> при натисканні на кнопку .change-font-style. Новий стиль шрифту також повинен відображатися в текстовому вмісті span.font-style-value.

// <div class="widget">
//   <p>Font style: <span class="font-style-value">normal</span></p>
//   <p class="text">This text will change font style</p>
//   <button type="button" class="change-font-style">Change font style</button>
// </div>


// Деталі реалізації:
// Напиши функцію getRandomFontStyle(), яка буде випадковим чином вибирати стиль шрифту (normal, italic, oblique, bold).
// При натисканні на кнопку .change-font-style:
// Стиль шрифту в .text змінюється на випадковий.
// Новий стиль оновлюється у span.font-style-value.

function getRandomFontStyle() {
  const fontStyles = ["normal", "italic", "oblique", "bold"];
  const randomIndex = Math.floor(Math.random() * fontStyles.length);
  return fontStyles[randomIndex];
}

const textElement = document.querySelector(".text");
const fontStyleValueElement = document.querySelector(".font-style-value");
const buttonChangeFontStyle = document.querySelector(".change-font-style");

buttonChangeFontStyle.addEventListener("click", () => {
  const randomFontStyle = getRandomFontStyle();

  textElement.style.fontStyle = randomFontStyle === "bold" ? "normal" : randomFontStyle;
  textElement.style.fontWeight = randomFontStyle === "bold" ? "bold" : "normal";
  
  fontStyleValueElement.textContent = randomFontStyle;
});

// Напиши скрипт, який змінює текстову тінь елемента <p class="text"> при натисканні на кнопку .change-text-shadow. Нове значення тіні також повинно відображатися в текстовому вмісті span.shadow-value.


// <div class="widget">
//   <p>Text shadow: <span class="shadow-value">none</span></p>
//   <p class="text">This text will change shadow</p>
//   <button type="button" class="change-text-shadow">Change text shadow</button>
// </div>
// Деталі реалізації:
// Напиши функцію getRandomTextShadow(), яка буде генерувати випадкову тінь для тексту (з випадковим кольором, зміщенням і розмиттям).
// При натисканні на кнопку .change-text-shadow:
// Тінь тексту в .text змінюється на випадкову.
// Нове значення тіні оновлюється у span.shadow-value.

function getRandomTextShadow() {
  const offsetX = Math.floor(Math.random() * 21) - 10; // Випадкове зміщення по X (-10 до 10px)
  const offsetY = Math.floor(Math.random() * 21) - 10; // Випадкове зміщення по Y (-10 до 10px)
  const blurRadius = Math.floor(Math.random() * 11); // Випадкове розмиття (0 до 10px)
  const shadowColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`; // Випадковий колір

  return `${offsetX}px ${offsetY}px ${blurRadius}px ${shadowColor}`;
}

const textItself = document.querySelector(".text");
const shadowValueElements = document.querySelector(".shadow-value");
const textShadowExchange = document.querySelector(".change-text-shadow");


textShadowExchange.addEventListener("click", () => { 
  const ransomTextShadow = getRandomTextShadow();

  textItself.style.fontShadow = randowFontShadow;
 shadowValueElements.textContent = randomShadow;

})





