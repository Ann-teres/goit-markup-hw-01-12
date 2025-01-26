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