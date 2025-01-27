// Напиши функцію, яка створює об'єкт з ім'ям і віком.
// Функція повинна приймати два аргументи: ім'я (рядок) і вік (число).
// Поверни цей об'єкт.

function createPerson(name, age) {
    return {
        name:  name,
        age:  age
    };
    
}

const person = createPerson('Anula', 33);
console.log(person);

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

console.log(mergedObject(3, 5));

// Пояснення:
// Оператор розпакування (...):

// Створює новий об'єкт, копіюючи всі властивості з obj1 і obj2.
// Якщо в obj1 і obj2 є однакові властивості, значення з obj2 замінить значення з obj1.

