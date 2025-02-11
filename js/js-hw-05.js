// Сума чисел: Напишіть функцію sumArray(numbers, callback), яка приймає масив чисел numbers та колбек callback. 
// Функція повинна обчислити суму чисел у масиві 
// та передати результат у колбек.

function sumArray(numbers, callback) {

    const sum = numbers.reduce((acc, num) => acc + num, 0);
    callback(sum);
}
const numbers = [1, 2, 3, 4, 5];

sumArray(numbers, result => {
    console.log("Сума чисел:", result);
});

// Подвоєння чисел: Напишіть функцію doubleArray(numbers, callback), яка приймає масив чисел numbers та колбек callback.
//  Функція повинна подвоїти кожне число в масиві та передати новий масив у колбек.


function doubleArray(numbers, callback) {
    const doubledArr = numbers.map(num => num * 2);
     callback(doubledArr);

}
const numToUse = [1, 2, 3, 4, 5];

doubleArray(numbers, result => {
    console.log(result)
});

// Фільтр слів: Напишіть функцію filterWords(words, condition, callback), яка приймає масив рядків words,
//     функцію condition(перевірка рядка) та колбек callback.Функція повинна фільтрувати слова масиву за допомогою переданої умови
//      та передати відфільтрований масив у колбек.

function filterWords(words, condition, callback) {
    const filteredWords = words.filter(condition);
    callback(filteredWords);
}

const words = ["Anna", "work", "where","ananas"];

function startsWithA(word) {
    return word.startsWith("a");
}


filterWords(words, startsWithA, result => {
    console.log( result);
});

// Капіталізація рядків: Напишіть функцію capitalizeStrings(strings, callback), яка приймає масив рядків strings та колбек callback.
//  Функція повинна перетворити всі рядки в масиві, роблячи першу літеру кожного рядка великої, і передати перетворений масив в колбек.

function capitalizeStrings(strings, callback) {
    const convertedString = string.map(string => string.charAt(0).toUpperCase() + string.slice(1));
    // додає решту рядка без змін.


    callback(convertedString);
}

const string = ["lola", "ye", "pin"];

capitalizeStrings(string, result => {
    console.log(result)
});

// Сортування чисел: Напишіть функцію sortNumbers(numbers, callback), яка приймає масив чисел numbers та колбек callback.
//  Функція повинна відсортувати числа в масиві за зростанням та передати відсортований масив у колбек.

function sortNumbers(numbers, callback) {
    const sortedNum = numbers.sort((a, b) => a - b);

    callback(sortedNum);
}
const toSortNumbers = [2, 6, 5, 3, 7,];

sortNumbers(numbers, result => {
    console.log(result)
});

// Пошук максимуму: Напишіть функцію findMax(numbers, callback), яка приймає масив чисел numbers та колбек callback. 
// Функція повинна знайти максимальне число в масиві та передати його в колбек.

function findMax(numbers, callback) {
    const foundMax = Math.max(...numbers);
    callback(foundMax);
}

const toFinalize = [4, 6, 1, 5, 8,];

findMax(numbers, result => {
    console.log(result)
});

// Перевірка на парність: Напишіть функцію checkEven(numbers, callback), яка приймає масив чисел numbers та колбек callback.
//  Функція повинна перевірити, чи всі числа в масиві парні, і передати результат перевірки колбек.


function checkEven(numbers, callback) {
    const allEven = numbers.every(num => num % 2 === 0);
    callback(allEven);
};

const toBeDone = [2, 4, 6, 8, 10]; 


checkEven(numbers, result => {
    console.log(result)
});

// Об'єднання рядків: Напишіть функцію concatStrings(strings, separator, callback), яка приймає масив рядків strings,
//  рядок separator та колбек callback.
//  Функція повинна об'єднати рядки з масиву, розділяючи їх переданим роздільником, і передати рядок, що вийшов, в колбек.

function concatStrings(strings, separator, callback) {
    const editedString = strings.join(separator);
    callback(editedString);
}

const toBeEdite = ["lola", "lala", "lolo"];
const separator = " - ";


concatStrings(toBeEdite, separator, result => {
    console.log(result)
});

// Перетворення в числа: Напишіть функцію parseNumbers(strings, callback), яка приймає масив рядків strings та колбек callback. 
// Функція повинна перетворити кожен рядок з масиву на число і передати новий масив чисел в колбек.

function parseNumbers(strings, callback) {
   const numbers = strings.map(str => parseFloat(str));
    callback(numbers);
};
const toBeChenged = ["10", "20.5", "30", "40.75"];

parseNumbers(toBeChenged, result => {
    console.log(result)
});

// Підрахунок символів: Напишіть функцію countCharacters(strings, callback), яка приймає масив рядків strings та колбек callback. 
// Функція повинна підрахувати загальну кількість символів у всіх рядках масиву та передати результат у колбек.


function countCharacters(strings, callback) {
    const countedChars = strings.map(str => str.length);

    callback(countedChars);
}
const toBeCounted = ["I dont know how to managed everything in such short time"];

countCharacters(toBeCounted, total => {
    console.log(total)
});






const books = [
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    genre: 'Fiction',
    price: 10.99,
    rating: 4.9,
  },
  {
    title: '1984',
    author: 'George Orwell',
    year: 1949,
    genre: 'Dystopian',
    price: 8.99,
    rating: 4.8,
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
    genre: 'Classic',
    price: 7.99,
    rating: 4.7,
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    year: 1951,
    genre: 'Fiction',
    price: 6.99,
    rating: 4.6,
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    year: 1813,
    genre: 'Romance',
    price: 5.99,
    rating: 4.9,
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    year: 1937,
    genre: 'Fantasy',
    price: 12.99,
    rating: 4.8,
  },
  {
    title: 'Moby Dick',
    author: 'Herman Melville',
    year: 1851,
    genre: 'Adventure',
    price: 9.99,
    rating: 4.5,
  },
  {
    title: 'War and Peace',
    author: 'Leo Tolstoy',
    year: 1869,
    genre: 'Historical',
    price: 14.99,
    rating: 4.9,
  },
  {
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky',
    year: 1866,
    genre: 'Philosophical',
    price: 11.99,
    rating: 4.8,
  },
  {
    title: 'The Brothers Karamazov',
    author: 'Fyodor Dostoevsky',
    year: 1880,
    genre: 'Philosophical',
    price: 13.99,
    rating: 4.9,
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
    year: 1932,
    genre: 'Dystopian',
    price: 9.99,
    rating: 4.7,
  },
  {
    title: 'Jane Eyre',
    author: 'Charlotte Brontë',
    year: 1847,
    genre: 'Romance',
    price: 7.99,
    rating: 4.8,
  },
  {
    title: 'Wuthering Heights',
    author: 'Emily Brontë',
    year: 1847,
    genre: 'Romance',
    price: 8.99,
    rating: 4.7,
  },
  {
    title: 'The Picture of Dorian Gray',
    author: 'Oscar Wilde',
    year: 1890,
    genre: 'Gothic',
    price: 6.99,
    rating: 4.6,
  },
  {
    title: 'Frankenstein',
    author: 'Mary Shelley',
    year: 1818,
    genre: 'Science Fiction',
    price: 7.99,
    rating: 4.7,
  },
  {
    title: 'Dracula',
    author: 'Bram Stoker',
    year: 1897,
    genre: 'Horror',
    price: 6.99,
    rating: 4.5,
  },
  {
    title: 'The Odyssey',
    author: 'Homer',
    year: -800,
    genre: 'Epic',
    price: 10.99,
    rating: 4.9,
  },
  {
    title: 'The Iliad',
    author: 'Homer',
    year: -750,
    genre: 'Epic',
    price: 9.99,
    rating: 4.8,
  },
  {
    title: 'Les Misérables',
    author: 'Victor Hugo',
    year: 1862,
    genre: 'Historical',
    price: 11.99,
    rating: 4.9,
  },
  {
    title: 'The Count of Monte Cristo',
    author: 'Alexandre Dumas',
    year: 1844,
    genre: 'Adventure',
    price: 12.99,
    rating: 4.9,
  },
  {
    title: 'The Grapes of Wrath',
    author: 'John Steinbeck',
    year: 1939,
    genre: 'Fiction',
    price: 8.99,
    rating: 4.7,
  },
  {
    title: 'Of Mice and Men',
    author: 'John Steinbeck',
    year: 1937,
    genre: 'Fiction',
    price: 7.99,
    rating: 4.6,
  },
  {
    title: 'A Tale of Two Cities',
    author: 'Charles Dickens',
    year: 1859,
    genre: 'Historical',
    price: 9.99,
    rating: 4.8,
  },
  {
    title: 'Great Expectations',
    author: 'Charles Dickens',
    year: 1861,
    genre: 'Fiction',
    price: 8.99,
    rating: 4.7,
  },
  {
    title: 'The Secret Garden',
    author: 'Frances Hodgson Burnett',
    year: 1911,
    genre: 'Children',
    price: 6.99,
    rating: 4.7,
  },
  {
    title: 'Little Women',
    author: 'Louisa May Alcott',
    year: 1868,
    genre: 'Fiction',
    price: 7.99,
    rating: 4.8,
  },
  {
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    year: 1877,
    genre: 'Romance',
    price: 10.99,
    rating: 4.9,
  },
  {
    title: 'The Adventures of Sherlock Holmes',
    author: 'Arthur Conan Doyle',
    year: 1892,
    genre: 'Mystery',
    price: 9.99,
    rating: 4.8,
  },
  {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    year: 1954,
    genre: 'Fantasy',
    price: 20.99,
    rating: 4.9,
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: 'J.K. Rowling',
    year: 1997,
    genre: 'Fantasy',
    price: 10.99,
    rating: 4.8,
  },
];

// Знайти всі книги жанру 'Fantasy'.

// const fantasyBooks = books.filter(book => book.genre === 'Fantasy');

// console.log(fantasyBooks);


// Знайти всі книги, видані після 2000 року.

// const yearOfPuplishing = books.filter(book => book.year);

// console.log(yearOfPuplishing);


// Знайти всі книги, автором яких є 'Fyodor Dostoevsky'.

const findAuthor = books.filter(book => book.author === 'Fyodor Dostoevsky');

console.log(findAuthor);

// Знайти всі книги з ціною меншою ніж 10 доларів.

const findPrice = books.filter(book => book.price > 10);

console.log(findPrice);

// Знайти всі книги, видані до 1900 року.

const findPublishingYear = books.filter(book => book.year < 1900);

console.log(findPublishingYear);

// Чи всі книги в масиві мають автора з ім'ям, що починається на 'J'

const findSpecialChar = books.every(book => book.author.startsWith('J'))

console.log(findSpecialChar);

// Чи всі книги в масиві є жанру 'Romance' з ціною меншою ніж 15 доларів?

const lessThan15 = books.filter(book => book.genre === 'Romance' && book.price < 15);

console.log(lessThan15);

// Чи всі книги в масиві мають слово 'the' у назві?

const findThe = books.every(book => book.title.toLowerCase().includes('the'));

console.log(findThe);

// Отримати масив назв всіх книжок.

const allTitels = books.map(book => book.title);

console.log(allTitels);

// Створити масив об'єктів, які містять лише назву та автора кожної книжки.

const findTitleAndAuthor = books.map(book => ({
    title: book.title,
    author: book.author
}));

console.log(findTitleAndAuthor);

// Створити масив років видання всіх книжок з доданими 5 роками до кожного.

const updatedYears = books.map(book => book.year + 5);
console.log(updatedYears);

// Створити масив об'єктів, які містять назву книжки та її рейтинг у відсотках (помножений на 10).

const booksWithRatingPercentage = books.map(book => ({
    title: book.title,
    ratingPercentage: book.rating * 10
}));

console.log(booksWithRatingPercentage);

// Створити масив рядків, що містять інформацію про кожну книжку в форматі "назва - автор".

const booksInfo = books.map(book => `${book.title} - ${book.author}`);
console.log(booksInfo);

// Створити масив об'єктів, де кожна книжка буде мати нове поле discountPrice, що дорівнює ціні зі знижкою 10%.

const updatedPrice = books.map(book => ({
    ...books,
    discountPrice: book.price * 0.9
}));
console.log(updatedPrice);

// Створити масив об'єктів, що містять назву книжки та її ціну з доданим податком 15%.

const increasedPrice = books.map(book => ({
    ...books,
    increasedPrice: book.price + 1.15
}));
console.log(increasedPrice);

// Створити масив об'єктів, де кожна книжка буде мати нове поле isClassic,
//  що дорівнює true, якщо книжка видана до 1950 року.

const isTheBookClassic = books.map(book => ({
    ...book,
    isClassic: book < 1950
}));
console.log(isTheBookClassic);

// Створити масив назв книжок, де всі слова в назві починаються з великої літери.

const firstCharUpperCase = title =>
    title.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

const firstCharUpperCases = books.map(book => firstCharUpperCase(book.title));

console.log(firstCharUpperCases);

// Створити масив об'єктів, що містять лише автора та рік видання кожної книжки.

const twoParametrs = books.filter(book => ({
   author: book.author,
    year: book.year
}));
console.log(twoParametrs);

// Створити масив цін книжок, конвертованих з доларів у євро (курс 1 долар = 0.85 євро).

const convertion = books.map(book => ({
  
    price: book.price * 0.85
}));

console.log(convertion);

// or 

const pricesInEuro = books.map(book => book.price * 0.85);

console.log(pricesInEuro);

// Створити масив назв книжок з доданим в кінці рядком "(Special Edition)".


const specialEditionTitle = books.map(book => `${book.title} (Special Edition)`);

console.log(specialEditionTitle);

// Створити масив об'єктів, де кожна книжка буде мати нове поле shortTitle, що містить тільки перше слово з назви.

const shortCut = books.map(book => ({
    ...book,
    shortTitle: book.title.split('')[0]
}));

console.log(shortCut);

// Створити масив об'єктів, де кожна книжка буде мати нове поле description, що містить рядок
// "Ця книга від автора [author] була видана у [year] році".

const additionalStr = books.map(book => ({
    ...book,
    description: `Ця книга від автора ${book.author
        } була видана у ${book.year} році`
}));

console.log(additionalStr);

// Створити масив об'єктів, що містять лише назву та жанр кожної книжки, де жанр записаний у нижньому регістрі.

const convertToLowerCase = books.map(book => ({

    genre: book.genre.toLowerCase()
}));
console.log(convertToLowerCase);

// Відсортувати книги за ціною від найнижчої до найвищої.
const sortByPrice = books.sort((a, b) => a.price - b.price);

console.log(sortByPrice);

// Відсортувати книги за рейтингом від найнижчого до найвищого.

const sortBooks = books.sort((a, b) => a.rating - b.rating);
console.log(sortBooks);

// Відсортувати книги за жанром у алфавітному порядку, але книги одного жанру за назвою у зворотньому алфавітному порядку.

const sortByGenre = books.sort((a, b) => {
 if (a.genre !== b.genre) {
    return a.genre.localeCompare(b.genre); 
  }
  return b.title.localeCompare(a.title);

});
console.log(sortByGenre);

// Відсортувати книги за назвою у алфавітному порядку, але книги з однаковою назвою за автором у зворотньому алфавітному порядку.

const sortBooksByTypes = books.sort((a, b) => {
    if (a.name === b.name) {
        return b.name - a.name
    }
    return b.name - a.name
});

console.log(sortBooksByTypes);


const sortedBooks = books.sort((a, b) => {
  if (a.genre !== b.genre) {
    return a.genre.localeCompare(b.genre); // Сортуємо за жанром (за алфавітом)
  }
  return b.title.localeCompare(a.title); // Сортуємо за назвою у зворотному алфавітному порядку
});

console.log(sortedBooks);

// Відсортувати книги за ціною, але спочатку розташувати ті, які коштують менше 10 доларів, потім решту.

const sortedBooksBy10 = books.sort((a, b) => {
    if (a.price < 10 && b.price >= 10) {
        return -1;
    }
    if (a.price > 10 && b.price <= 10) {
        return 1;
    }
    return a.price - b.price;
   
});
console.log(sortedBooksBy10);

// Відсортувати книги за рейтингом, але спочатку розташувати ті, які мають рейтинг 4.8 і вище, потім решту.

const sortedBooksByRating = books.sort((a, b) => {
    if (a.rating >= 4.8 && b.rating < 4.8) {
        return -1;
    }
    if (a.rating < 4.8 && b.rating >= 4.8) {
        return 1;
    }
    return a.rating - b.rating;
});

console.log(sortedBooksByRating);

// Відсортувати книги спочатку за жанром, а потім за роком видання.

const doubleSorting = books.sort((a, b) => ({
    genre: books.genre,
    year: books.year
    
}));
console.log( doubleSorting)

// Отримати всі книги, видані після 2000 року та відсортувати їх за рейтингом від найвищого до найнижчого, 
// повернути лише назви.

const recentBooks = books
  .filter(book => book.year > 2000) // Фільтруємо книги після 2000 року
  .sort((a, b) => b.rating - a.rating) // Сортуємо за рейтингом від вищого до нижчого
  .map(book => book.title); // Повертаємо лише назви книг

console.log(recentBooks);

// Отримати всі книги, автором яких є 'Fyodor Dostoevsky', відсортувати їх за роком видання від найдавнішого до 
// найновішого та вивести перші 5 книг.

const sortByAuthor = books
    .filter(book => book.author === 'Fyodor Dostoevsky')
      .sort((a, b) => a.year - b.year)
 .slice(0, 5); // Беремо перші 5 книг

console.log(sortByAuthor);

// Отримати всі книги з ціною меншою ніж 10 доларів, відсортувати їх за ціною від найнижчої до найвищої та вивести назви книг.

const filter10Books = books
    .filter(book => book.price < 10)
    .sort((a,b) => a.price - b.price)
    .map(book => book.title)
    
console.log(filter10Books);

// Отримати всі книги з рейтингом 4.8 і вище, відсортувати їх за автором у зворотньому алфавітному порядку 
// та вивести авторів унікальних книг.

const ratingFrom5 = books

    .filter(book => book.rating  >= 4.8)
    .sort((a, b) => b.author - a.author)
    .map(book => book.author)
     .filter((author, index, array) => array.indexOf(author) === index); // Видаляємо повтори
console.log(ratingFrom5);

// Отримати всі книги жанру 'Romance' з ціною меншою ніж 8 доларів та відсортувати 
// їх за рейтингом від найвищого до найнижчого.

const byRomanceGenre = books
    .filter(book => book.genre === 'Romance' && book.price < 8)
    .sort((a, b) => a.rating - b.rating)
console.log(byRomanceGenre);

// Отримати всі книги, видані до 1900 року, відсортувати їх за рейтингом від найвищого до 
// найнижчого та вивести першу книгу.

const relisedBefore1900 = books
    .filter(book => book.year < 1900)
    .sort((a, b) => a.rating - b.rating)[0]

    console.log(relisedBefore1900)

// Отримати всі книги, що містять слово 'and' у назві, відсортувати їх за роком видання від найдавнішого до 
// найновішого та вивести останню книгу.

// const findAnd = books
// .filter(book => book.title.toLowerCase().includes('and'))
//     .sort((a, b) => a.year - b.year)

//     const lastBook = bookWithAnd[bookWithAnd.length - 1]; // Отримуємо останню книгу після сортування

// console.log(findAnd);

// Отримати всі книги, автором яких є 'J.R.R. Tolkien', відсортувати їх за рейтингом від найвищого до
//  найнижчого та вивести середній рейтинг.

const findTalkien = books
    .filter(book => book.author === 'J.R.R. Tolkien')
    .sort((a, b) => a.rating - b.rating)
    const everageRating = books.reduce((sum, book) => sum + book, 0) / books.length;

console.log(findTalkien);

// Отримати всі книги жанру 'Historical' з рейтингом вище 4.7, відсортувати їх за роком видання 
// від найдавнішого до найновішого та вивести останні 3 книги.

const multipleTasks = books
    .filter(book => book.genre === 'Historical' && book.rating > 4.7)
    .sort((a, b) => b.year - a.year)
    .slice(-3)
    console.log(multipleTasks)

