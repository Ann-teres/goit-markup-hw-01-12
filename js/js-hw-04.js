// Напиши функцію, яка створює об'єкт з ім'ям і віком.
// Функція повинна приймати два аргументи: ім'я (рядок) і вік (число).
// Поверни цей об'єкт.

function createPerson(name, age) {
    return {
        name:  name,
        age:  age
    };
    
}

const woman = createPerson('Anula', 33);
console.log(woman);

// Напиши функцію, яка приймає об'єкт і додає до нього нову властивість "address" (рядок).
// Поверни оновлений об'єкт.

function addAddressProperty(obj, address) {
   obj.address = address; // Додаємо нову властивість "address"
    return obj;
}
const person = { name: "John", age: 30 };
const updatedPerson = addAddressProperty(person, "123 Main Street");

console.log(updatedPerson);

// Напиши функцію, яка приймає два об'єкти і об'єднує їх в один.
// Якщо у об'єктів є однакові властивості, значення другого об'єкта мають замінити значення першого.
// Поверни результат.

function mergeObjects(obj1, obj2) {

    return { ...obj1, ...obj2 }; // Об'єднуємо об'єкти, другий об'єкт замінює властивості першого
    
}

console.log(mergeObjects(3, 5));

// Пояснення:
// Оператор розпакування (...):

// Створює новий об'єкт, копіюючи всі властивості з obj1 і obj2.
// Якщо в obj1 і obj2 є однакові властивості, значення з obj2 замінить значення з obj1.

// =============================================================


// Напиши функцію, яка створює об'єкт з трьома властивостями: ім'ям, віком і адресою.
// Якщо ім'я та вік не передані, встанови їх значення за замовчуванням ("Unknown", 0 відповідно).
// Поверни об'єкт.

function createPerson(name = "Unknown", age = 0, address = "") {
return {
        name: name,
        age: age,
        address: address
    };
}


const person1 = createPerson("Alice", 25, "123 Main Street");
console.log(person1);


const person2 = createPerson(); 
console.log(person2);


console.log(createPerson())

// Напиши функцію, яка приймає об'єкт та нові значення для імені та віку. 
// Функція повинна змінити обидві властивості в об'єкті. Поверни оновлений об'єкт.

function updateObject(obj, newName, newAge) {
  obj.name = newName; 
    obj.age = newAge;  
    return obj;
}
const animal = { name: "Tiger", age: 5 };
const updatedAnimal = updateObject(animal, "Lion", 8);

console.log(updatedAnimal);

// Напиши функцію, яка приймає об'єкт та нову властивість "email" (якщо її немає).
// Якщо в об'єкті вже є "email", нічого не роби.
// Поверни оновлений об'єкт.

function addEmail(obj, email) {
    if (!obj.hasOwnProperty("email")){ obj.email = email;}
        
    return obj
}

const user = { name: "Alice", age: 25 };
const updatedUser = addEmail(user, "alice@example.com");
console.log(updatedUser);

// Напиши функцію, яка приймає об'єкт і змінює тип значення властивості "age" 
// з числа на рядок. Поверни оновлений об'єкт.

function convertAgeToString(obj) {
   return {
        ...obj,                       // Копіюємо всі властивості об'єкта
        age: String(obj.age)          // Оновлюємо тільки властивість "age"
    };
}
const human = { name: "Alice", age: 25 };
const updatedHuman = convertAgeToString(person);

console.log(updatedPerson);
// Виведе: { name: 'Alice', age: '25' }
console.log(typeof updatedPerson.age);
    

// Як це працює:
// Оператор розпакування (...obj):
// Створює копію всіх властивостей з оригінального об'єкта.
// Оновлення властивості "age":
// Заміщає властивість "age", перетворюючи її на рядок за допомогою String(obj.age).

// ======================================================================

// Напиши функцію, яка приймає об'єкт і змінює значення властивості "address", 
// але тільки якщо ця властивість вже існує.
// Якщо її немає, поверни об'єкт без змін.

function updateAddressIfExists(obj, newAddress) {
    if (obj.hasOwnProperty("address")) {
        obj.address = newAddress;
    }
    return obj;
}

const persona = { name: "Alice", address: "123 Main St" };
const updatedPersona =  updateAddressIfExists(persona, "456 Elm St");

console.log(updatedPersona);

// Напиши функцію, яка приймає об'єкт користувача з властивостями name та сity. 
// Та повертає рядок "User {імя користувача} from {місто користувача}!"


function getUserInfo(userZ) {
    
    return  `User ${userZ.name}, from ${userZ.city}!`
}
const userZ = { name: "Lily", city: "Dubai" }
const result = getUserInfo(userZ);

console.log(result)

// Напиши функцію, яка приймає масив з ключами і значеннями(наприклад, [["name", "John"], ["age", 25],
// ["address", "123 Street"]]) і створює об'єкт з цих пар. Поверни об'єкт.

function createObjectFromArray(arr) {

      return Object.fromEntries(arr);
}

const arr = [["name", "John"], ["age", 25], ["address", "123 Street"]];
 const obj = createObjectFromArray(arr);

console.log(obj);

// Object.fromEntries(arr): Цей метод перетворює масив пар [ключ, значення] в об'єкт.
// Кожен елемент масиву має формат [ключ, значення].
// Метод створює об'єкт, де ключі та значення беруться з елементів масиву.

// ====================================================================

// Напиши функцію, яка приймає масив об'єктів і змінює в кожному з них властивість "age",
//  збільшуючи її на 1. Поверни оновлений масив об'єктів.

function incrementAge(arr) {

    return arr.map(obj => {
        if (obj.hasOwnProperty("age")) {
            obj.age += 1;
        }
        return obj;
    });  
}



// Як це працює:
// map(): Метод map() створює новий масив, в якому кожен об'єкт оновлений.
// Перевірка на властивість age: Ми перевіряємо, чи існує властивість "age" у кожному об'єкті за допомогою hasOwnProperty("age").
// Оновлення значення age: Якщо властивість "age" існує, ми збільшуємо її значення на 1.
// Повернення оновленого масиву: Функція повертає новий масив з оновленими об'єктами.

// ==========================================================================================

// Створіть об'єкт contactBook, який зберігатиме список контактів та
//  надаватиме методи для додавання, видалення та пошуку контактів.

const contactBook = {
    contacts: [],  // Список контактів
    
    // Метод для додавання нового контакту
    addContact(name, phone) {
        this.contacts.push({ name, phone });
    },
    
    // Метод для видалення контакту за ім'ям
    removeContact(name) {
        this.contacts = this.contacts.filter(contact => contact.name !== name);
    },
    
    // Метод для пошуку контакту за ім'ям
    findContact(name) {
        return this.contacts.find(contact => contact.name === name);
    },
    
    // Метод для виведення всіх контактів
    listContacts() {
        return this.contacts;
    }
};

// Приклад використання:
contactBook.addContact("Alice", "123-456-789");
contactBook.addContact("Bob", "987-654-321");

console.log(contactBook.listContacts());


const contact = contactBook.findContact("Alice");
console.log(contact);


contactBook.removeContact("Bob");
console.log(contactBook.listContacts());

// Напиши функцію, яка створює об'єкт з ім'ям і віком.
// Функція повинна приймати два аргументи: ім'я (рядок) і вік (число).
// Поверни цей об'єкт.

function taskOne(name, age) {
    return {
        name: name,
        age: age
    }
};
console.log(taskOne);

// Напиши функцію, яка приймає об'єкт і додає до нього нову властивість "address" (рядок).
// Поверни оновлений об'єкт.

function taskTwo(obj,arr) {
 
obj.address = address;
    return obj
};
console.log(taskTwo)

// Напиши функцію, яка приймає об'єкт і новий вік.
// Функція повинна змінити значення властивості "age" в об'єкті на нове значення.
// Поверни оновлений об'єкт.

function taskTrea(obj, age) {
    obj.age = NewAge
    return obj
}

// Напиши функцію, яка приймає об'єкт і видаляє з нього властивість "age".
// Поверни оновлений об'єкт.

function removeAge(obj) {
    delete obj.age;
   return obj
}
 const personsAge = { name: 'Anna', age: 25 };
const updatedIndividual= removeAge(personsAge);
console.log(updatedIndividual);

// Напиши функцію, яка приймає об'єкт і повертає значення властивості "name".

function taskFour(obj) {
    obj.name;
    return obj
};
const personA = { name: 'Anna', age: 25 };
console.log(taskFour(personA));

// Напиши функцію, яка приймає об'єкт і повертає true, якщо властивість "address"
//  існує в об'єкті, і false, якщо ні.

function hasAddress(obj) {
       return 'address' in obj;
}

const findAddress1 = { name: 'Alice', address: '123 Main St' };
const findAddress2 = { name: 'Bob' };


console.log(hasAddress(person1));

// Напиши функцію, яка приймає два об'єкти і об'єднує їх в один.
// Якщо у об'єктів є однакові властивості, значення другого об'єкта мають замінити значення першого.
// Поверни результат.

function margedObjects(obj1, obj2) {
    return {...obj1, ...obj2}
}
const obj1 = { name: 'Alice', age: 25, city: 'New York' }
const obj2 = { age: 30, country: 'USA' };

const marged = mergeObjects(obj1, obj2)
console.log(marged)

// Напиши функцію, яка створює об'єкт з трьома властивостями: ім'ям, віком і адресою.
// Якщо ім'я та вік не передані, встанови їх значення за замовчуванням ("Unknown", 0 відповідно).
// Поверни об'єкт.

function name(name = "Unknown", age = 0, address = "") {
    return {
        name: name,
        age: age,
        address: address
    }
};
// Напиши функцію, яка приймає об'єкт та нові значення для імені та віку. 
// Функція повинна змінити обидві властивості в об'єкті. Поверни оновлений об'єкт.

function updatePerson(person, newPerson, newAge) {
    person.age = newAge;
    person.name = newName;
        return person;
}
// Напиши функцію, яка приймає об'єкт і змінює тип значення властивості "age" з числа на рядок.
// Поверни оновлений об'єкт.

function changeTheString(perosn) {
    if ( typeof person.age === "number") {
        person.age === String(perosn.age);
    }
    return person;   
}
const perosn = {name: "Anna", age: 25, address: "Jarfalla"}

console.log(changeTheString(perosn));

// Напиши функцію, яка приймає об'єкт та нову властивість "email" (якщо її немає).
// Якщо в об'єкті вже є "email", нічого не роби.
// Поверни оновлений об'єкт.

function name(email) {
    if (!obj.hasOwnProperty(email) === email) {
        obj.email = email
    }
    return obj    
}

const personZ = { name: "Ace", age: 25 };
const personB = { name: "Bob", age: 30, email: "bob@example.com" };

console.log(addEmailIfMissing(personZ, "alice@example.com"))

// Напиши функцію, яка приймає об'єкт і змінює значення властивості "address",
//  але тільки якщо ця властивість вже існує.
// Якщо її немає, поверни об'єкт без змін.

function name(params) {
    if (obj.hasOwnProperty("address") ) {
        obj.address = newAddress
    }
    return obj
}

const person11 = { name: "Alice", age: 25, address: "123 Main St" };
const person12 = { name: "Bob", age: 30 };

console.log(updateAddress(person1, "456 Elm St"));

// Напиши функцію, яка приймає об'єкт користувача з властивостями name та сity.
//  Та повертає рядок "User {імя користувача} from {місто користувача}!"

function nameAndCity(user) {
    return `User ${name} from ${city}!`
}

const user = { name: "Alice", city: "New York" };
console.log(getUserInfo(user)); 

// Напиши функцію, яка приймає масив з ключами і значеннями(наприклад,
//     [["name", "John"], ["age", 25], ["address", "123 Street"]]) і створює об'єкт з цих пар. Поверни об'єкт.

function arrayToObject(entries) {
return Object.fromEntries(entries);

}

const data = [["name", "John"], ["age", 25], ["address", "123 Street"]];
console.log(arrayToObject(data)); 

// Можна використати Object.fromEntries(), щоб швидко створити об'єкт із масиву пар ключ-значення


// Напиши функцію, яка приймає масив об'єктів і змінює в кожному з них властивість "age", 
// збільшуючи її на 1. Поверни оновлений масив об'єктів.

function increaseAge(users)  {
  return users.map(user => ({...user,age: user.age +1}))
}