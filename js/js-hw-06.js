// Клас ContactBook: Створіть клас Contact для подання контакту з полями name, email та phone. 
// Потім реалізуйте клас ContactBook, який зберігатиме список контактів та надавати методи для додавання, видалення та пошуку контактів.

class Contact {
  constructor(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
}

class ContactBook {
  constructor() {
    this.contacts = [];
  }

  addContact(contact) {
    this.contacts.push(contact);
    console.log(`Контакт ${contact.name} додано.`);
  }

  removeContact(name) {
    const initialLength = this.contacts.length;
    this.contacts = this.contacts.filter(contact => contact.name !== name);

    if (this.contacts.length < initialLength) {
      console.log(`Контакт ${name} видалено.`);
    } else {
      console.log(`Контакт ${name} не знайдено.`);
    }
  }

  findContact(name) {
    const foundContact = this.contacts.find(contact => contact.name === name);
    return foundContact ? foundContact : `Контакт ${name} не знайдено.`;
  }

  listContacts() {
    if (this.contacts.length === 0) {
      console.log("Контактна книга порожня.");
    } else {
      console.log("Список контактів:");
      this.contacts.forEach(contact => 
        console.log(`Ім'я: ${contact.name}, Email: ${contact.email}, Телефон: ${contact.phone}`)
      );
    }
  }
}

// Клас Rectangle: Напишіть клас Rectangle, який представлятиме прямокутник з методами для обчислення його площі та периметра. 
// Конструктор клас повинен приймати довжини двох сторін.


class Rectangle{
    constructor(width,height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.weight * this.height;
    }
    getPerimeter() {
        return 2 *(this.width + this.height)
    }
}

const rect1 = new Rectangle(5, 10);
console.log(`Площа: ${rect1.getArea()}`)
console.log(`Периметр: ${rect1.getPerimeter()}`);

// Клас ToDoList: Створіть клас Task для представлення задач з полями title, description та completed. 
// Потім реалізуйте клас ToDoList, який зберігатиме список задач та методи для додавання нових завдань,
//     позначки задачі як виконаної та виведення списку завдань.

class Task {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.completed = false;
  }

  markCompleted() {
    this.completed = true;
  }
}

class ToDoList {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
    console.log(`Завдання "${task.title}" додано.`);
  }

  markTaskCompleted(title) {
    const task = this.tasks.find(task => task.title === title);
    if (task) {
      task.markCompleted();
      console.log(`Завдання "${title}" відзначено як виконане.`);
    } else {
      console.log(`Завдання "${title}" не знайдено.`);
    }
  }

  showTasks() {
    if (this.tasks.length === 0) {
      console.log("Список завдань порожній.");
      return;
    }

    console.log("Список завдань:");
    this.tasks.forEach(task => {
      console.log(
        `Назва: ${task.title}, Опис: ${task.description}, Статус: ${task.completed ? "✅ Виконано" : "⏳ В процесі"}`
      );
    });
  }
}

// Приклад використання:
const todoList = new ToDoList();

const task1 = new Task("Прибрати кімнату", "Пропилососити, витерти пил, помити підлогу");
const task2 = new Task("Купити продукти", "Хліб, молоко, яйця");

todoList.addTask(task1);
todoList.addTask(task2);

todoList.showTasks();

todoList.markTaskCompleted("Прибрати кімнату");

todoList.showTasks();

// Клас BankAccount: Реалізуйте клас BankAccount, який представлятиме банківський рахунок із методами для депозиту,
//     зняття коштів та перевірки балансу.Врахуйте обробку можливих помилок(наприклад, недостатньо коштів).


class BankAccount{
    constructor(owner, balance = 0) {
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
    if (amount <= 0) {
      console.log("Сума депозиту має бути більше 0.");
      return;
    }
    this.balance += amount;
    console.log(`Депозит у розмірі ${amount} грн виконано. Поточний баланс: ${this.balance} грн.`);
  }


  withdraw(amount) {
    if (amount <= 0) {
      console.log("Сума зняття має бути більше 0.");
      return;
    }
    if (amount > this.balance) {
      console.log("Недостатньо коштів на рахунку.");
      return;
    }
    this.balance -= amount;
    console.log(`Знято ${amount} грн. Поточний баланс: ${this.balance} грн.`);
  }

checkBalance() {
    console.log(`Баланс рахунку: ${this.balance} грн.`);
    return this.balance;
  }

}
const account = new BankAccount("Іван", 1000);

account.checkBalance(); // Баланс рахунку: 1000 грн.
account.deposit(500);   // Депозит у розмірі 500 грн виконано. Поточний баланс: 1500 грн.
account.withdraw(200);  // Знято 200 грн. Поточний баланс: 1300 грн.
account.withdraw(2000); // Недостатньо коштів на рахунку.
account.checkBalance(); // Баланс рахунку: 1300 грн.


// Клас TemperatureConverter: Напишіть клас TemperatureConverter,
//     який буде мати методи для конвертації температур між градусами Цельсія та Фаренгейта.

class TemperatureConverter{

  static celsiusToFahrenheitn(celsius){
      result  (celsius * 9 / 5) + 32;
  }
    static fahrenheitnToCelsius(fahrneheitn) {
        return (fahrneheitn - 32) * 5 / 9;
    }
}

// Клас ShoppingCart: Реалізуйте клас Product для представлення товару з полями name, price та quantity.
//  Потім створіть клас ShoppingCart, який зберігатиме список товарів та надавати методи для додавання товарів,
//     підрахунку загальної вартості та виведення списку товарів.


class Product{
constuctor (name, price, quantity = 1){
    this.name = name;
    this.price = price;
    this.quantity =  quantity;
}
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }
    
  // Додавання товару в кошик
  addProduct(product) {
    const existingProduct = this.products.find(p => p.name === product.name);
    
    if (existingProduct) {
      existingProduct.quantity += product.quantity;
    } else {
      this.products.push(product);
    }
    console.log(`Додано ${product.quantity} x ${product.name} до кошика.`);
  }
    

  // Обчислення загальної вартості кошика
  getTotalPrice() {
    return this.products.reduce((total, product) => total + product.price * product.quantity, 0);
  }
    
    // Виведення списку товарів
  showCart() {
    if (this.products.length === 0) {
      console.log("Кошик порожній.");
      return;
    }
       console.log("Список товарів у кошику:");
    this.products.forEach(product => {
      console.log(`${product.name} - ${product.quantity} x ${product.price} грн = ${product.price * product.quantity} грн`);
    });
    console.log(`Загальна вартість: ${this.getTotalPrice()} грн.`);
  }
}
// Приклад використання:
const cart = new ShoppingCart();

const product1 = new Product("Яблуко", 15, 2);
const product2 = new Product("Молоко", 30, 1);
const product3 = new Product("Хліб", 20, 1);
const product4 = new Product("Яблуко", 15, 3); // Додаємо ще яблук

cart.addProduct(product1);
cart.addProduct(product2);
cart.addProduct(product3);
cart.addProduct(product4); // Збільшує кількість яблук

cart.showCart();

// Клас SocialNetworkUser: Створіть клас SocialNetworkUser, який представляє користувача соціальної мережі
//  з полями username, friends(список друзів) та методами для додавання та видалення друзів, а також виведення списку друзів.


// class SocialNetworkUser{
//     constructor(username)
//    { this.username = username;
// this.friends = [];}
// }


// addUser(friend)
// if(!this.friends.includes(friend)) {
// this.friends.push(friend);
//    console.log(`${friend} added`);
// } else {
// console.log(`${friend} already in the followers list.`);
// }

// // Видалення друга
//   removeFriend(friend){
//     const index = this.friends.indexOf(friend);
//     if (index !== -1) {
//       this.friends.splice(index, 1);
//       console.log(`${friend} видалено зі списку друзів.`);
//     } else {
//       console.log(`${friend} не знайдено у списку друзів.`);
//     }
//   }

  // Виведення списку друзів
//   showFriends() 
//     if (this.friends.length === 0) {
//       console.log(`${this.username} поки що не має друзів.`);
//     } else {
//       console.log(`Список друзів ${this.username}: ${this.friends.join(", ")}`);
//     }
  

  // Приклад використання:
// const user1 = new SocialNetworkUser("Іван");
// user1.addFriend("Марія");
// user1.addFriend("Петро");
// user1.addFriend("Марія"); // Вже є у списку
// user1.showFriends();

// user1.removeFriend("Петро");
// user1.showFriends();

// user1.removeFriend("Олег"); // Не знайдено у списку друзів


// Клас MusicPlayer: Реалізуйте клас Song для представлення пісні з полями title, артист і тривалість. 
// Потім створіть клас MusicPlayer, який зберігатиме список пісень та надавати методи для додавання нових пісень,
//     відтворення, паузи та перемикання між піснями.

    

class Song {
  constructor(title, artist, duration) {
    this.title = title;
    this.artist = artist;
    this.duration = duration; // Тривалість у хвилинах
  }
}

class MusicPlayer {
  constructor() {
    this.songs = [];
    this.currentIndex = 0;
    this.isPlaying = false;
  }

  // Додавання пісні в список
  addSong(song) {
    this.songs.push(song);
    console.log(`Додано пісню: ${song.title} - ${song.artist}`);
  }

  // Відтворення пісні
  play() {
    if (this.songs.length === 0) {
      console.log("У плейлисті немає пісень.");
      return;
    }
    
    if (!this.isPlaying) {
      this.isPlaying = true;
      const song = this.songs[this.currentIndex];
      console.log(`🎵 Відтворюється: ${song.title} - ${song.artist} (${song.duration} хв)`);
    } else {
      console.log("Музика вже грає.");
    }
  }

  // Пауза
  pause() {
    if (this.isPlaying) {
      this.isPlaying = false;
      console.log("⏸️ Музика на паузі.");
    } else {
      console.log("Музика вже зупинена.");
    }
  }

  // Наступна пісня
  next() {
    if (this.songs.length === 0) {
      console.log("У плейлисті немає пісень.");
      return;
    }

    this.currentIndex = (this.currentIndex + 1) % this.songs.length;
    this.isPlaying = true;
    const song = this.songs[this.currentIndex];
    console.log(`⏭️ Наступна пісня: ${song.title} - ${song.artist} (${song.duration} хв)`);
  }

  // Попередня пісня
  previous() {
    if (this.songs.length === 0) {
      console.log("У плейлисті немає пісень.");
      return;
    }

    this.currentIndex = (this.currentIndex - 1 + this.songs.length) % this.songs.length;
    this.isPlaying = true;
    const song = this.songs[this.currentIndex];
    console.log(`⏮️ Попередня пісня: ${song.title} - ${song.artist} (${song.duration} хв)`);
  }

  // Показати список пісень
  showPlaylist() {
    if (this.songs.length === 0) {
      console.log("Плейлист порожній.");
      return;
    }

    console.log("🎶 Плейлист:");
    this.songs.forEach((song, index) => {
      console.log(`${index + 1}. ${song.title} - ${song.artist} (${song.duration} хв)`);
    });
  }
}

// Приклад використання:
const player = new MusicPlayer();

const song1 = new Song("Shape of You", "Ed Sheeran", 4.2);
const song2 = new Song("Blinding Lights", "The Weeknd", 3.5);
const song3 = new Song("Someone Like You", "Adele", 4.8);

player.addSong(song1);
player.addSong(song2);
player.addSong(song3);

player.showPlaylist();

player.play();
player.next();
player.pause();
player.previous();
player.play();


// Реалізуйте клас MyString, який буде мати наступні методи: метод reverse(), який параметром приймає рядок,
//     а повертає її в перевернутому вигляді, метод ucFirst(), який параметром приймає рядок, а повертає цей же рядок,
//     зробивши його першу літеру заголовком і метод ucWords, який приймає рядок і робить заголовною першу літеру кожного
//          слова цього рядка.

class MyString{
    reserve(string){
        return string.split('').reserve().join('')
    }
    ucFirst(){
        if (!str) return str;
                return str.charAt(0).toUpperCase() + str.slice(1);
    }
    ucWords() {
        if (!str) return str;
     return str.split(' ').map(word => this.ucFirst(word)).join(' ');
    }
    }


// Приклад використання
const myStr = new MyString();
console.log(myStr.reverse("hello")); // "olleh"
console.log(myStr.ucFirst("hello")); // "Hello"
console.log(myStr.ucWords("hello world")); // "Hello World"


// Реалізуйте клас Validator, який перевірятиме рядки.Наприклад, у нього буде метод isEmail параметром приймає рядок і
// перевіряє, чи є він коректним емейлом чи ні.Якщо є – повертає true, якщо не є – то false.Крім того, клас буде мати такі
// методи: метод isDomain для перевірки домену, метод isDate для перевірки дати і метод isPhone для перевірки телефону:

class Validator {
    isEmail() {
        return str.includes("@") && (".")
      
        }
        // Метод для перевірки домену
        isDomain(str) {
            return str.endsWith(".com") || str.endsWith(".net") || str.endsWith(".org");
        }
        isPhone(number) {
            return str.startsWith("+") && str.length > 9
        }
    }

    // Приклад використання
const validator = new Validator();
console.log(validator.isEmail("test@example.com")); // true
console.log(validator.isDomain("example.com")); // true
console.log(validator.isDate("2023-05-17")); // true
console.log(validator.isPhone("+1234567890")); // true


// Реалізуйте клас Student, який містить такі name, age, grades (список оцінок).
// Додайте методи для додавання оцінки, обчислення середнього балу та виведення інформації про студента.

class Student{
  // Константи
  static MIN_GRADE = 0;
  static MAX_GRADE = 100;

  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.grades = []; // список оцінок
  }
     addGrade(grade) {
    if (grade >= Student.MIN_GRADE && grade <= Student.MAX_GRADE) {
      this.grades.push(grade);
    } else {
      console.log("Оцінка повинна бути в діапазоні 0-100");
    }
  }
  getAverageGrade() {
    return this.grades.length ? this.grades.reduce((sum, grade) => sum + grade) / this.grades.length : 0;
  }

  getInfo() {
    return `${this.name}, ${this.age} років, Середній бал: ${this.getAverageGrade().toFixed(2)}`;
  }
}
    

// Реалізуйте клас Calculator з методами для базових операцій:
// Додавання, віднімання, множення, ділення.
// Додайте метод для скидання поточного результату.


class Calculator {
  constructor() {
    this.result = 0;  // Початкове значення результату
  }

  add(value) {
    this.result += value;  // Додавання числа до поточного результату
    return this.result;
  }

  subtract(value) {
    this.result -= value;  // Віднімання числа від поточного результату
    return this.result;
  }

  multiply(value) {
    this.result *= value;  // Множення поточного результату на число
    return this.result;
  }

  divide(value) {
    if (value === 0) {
      throw new Error("Ділення на нуль неможливе");  // Перевірка на ділення на нуль
    }
    this.result /= value;  // Ділення поточного результату на число
    return this.result;
  }

  reset() {
    this.result = 0;  // Скидання результату до нуля
    return this.result;
  }
}

// Приклад використання:
const calc = new Calculator();
console.log(calc.add(5));       // 5
console.log(calc.subtract(2));  // 3
console.log(calc.multiply(4));  // 12
console.log(calc.divide(3));    // 4
console.log(calc.reset());      // 0



// Створіть клас BankAccount, який містить атрибути owner (власник) та balance (баланс).
// Додайте методи для:
// Внесення депозиту.
// Зняття коштів.
// Перевірки балансу.


class BankAccount{
      constructor(owner, balance){
          this.owner = owner;
          this.balance = balance;
      }
    depositMonay(amount) {
        if (amount <= 0) {
      throw new Error("Сума депозиту повинна бути більшою за нуль");
        }
         this.balance += amount;  
    return this.balance;
  }
   withdraw(amount) {
    if (amount <= 0) {
      throw new Error("Сума зняття повинна бути більшою за нуль");
    }
    if (amount > this.balance) {
      throw new Error("Недостатньо коштів на рахунку");
    }
    this.balance -= amount; 
    console.log(`Зняття коштів на суму ${amount}. Поточний баланс: ${this.balance}`);
    return this.balance;
}
  
   getBalance() {
    return this.balance;
};
};
   

// Реалізуйте клас Task, який містить атрибути title, description, completed.
// Реалізуйте клас ToDoList, який містить список задач та має методи для:
// Додавання нової задачі.
// Позначення задачі як виконаної.
// Виведення списку всіх задач.

class Task{
    constructor(title, description, completed) {
        this.title = title;
        this.description = description;
        this.completed = false;
    };

    markCompleted() {
        this.completed = true;
    }; 
}
  ToDoList{
    addNewTask{
        this.tasks.push(task);
        console.log("task added ${this.task}")
    };
    markedCompleted{ };

    showAllTasks{ };
  }



    

