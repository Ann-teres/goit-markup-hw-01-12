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

