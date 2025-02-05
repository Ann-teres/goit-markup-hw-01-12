// Задача-1
// Напишіть функцію для охоронця нічного клубу яка приймає два параметри age та balance. 
// Функція повинна повернути рядок "Wellcome" якщо age більший за 18 та balance більший за 100.
//  В іншому випадку функцію повинна повернути рядок "Goodbye".

function checkEntry(age,balance) {
    if 
       (age >= 18 && balance >= 100)
         return "Wellcome" 
else {
    return "Goodbye"
}
};
console.log(checkEntry(16, 88))

// Задача-2
// Напишіть функцію яка для магазину яка приймає кількість товару(amount) та його вартість(price). 
// Функція повинна повернути рядок "Ми це купуємо" якщо загальна вартість не перевищує 1000,
//     в іншому випадку функція повинна повернути рядок "Це занадто дорого".

function checkPurchase(amount, price) {
        let totalCost = amount * price;
    if
        (totalCost <= 1000)
        return "Ми це купуємо"
else {
    return "Це занадто дорого"
    }
};
console.log(checkPurchase(88))


// Задача-3
// Напишіть функцію, яка приймає температуру(temp) в градусах Цельсія.Якщо температура нижче 0,
//     функція повинна повернути рядок "Замерзає", якщо більше 0 але менше 25 - "Нормальна температура",
//         якщо більше 25 - "Спекотно".

function checkTheTemperature(temp) {
      if (temp < 0) {
        return "Замерзає";
    } else if (temp > 0 && temp < 25) {
        return "Нормальна температура";
    } else {
        return "Спекотно";
    }
}
console.log(checkTheTemperature(34))

// Задача-4
// Напишіть функцію, яка приймає 2 числа: number та divisor.Якщо number ділиться на divisor без остатку,
//     поверніть рядок "Ділиться", в іншому випадку поверніть "Не ділиться".


function checkDivisor(number,divisor) {
    if (number % divisor === 0)
        return "Ділиться"
    else {
      "Не ділиться"  
    }
}

console.log(checkDivisor(55, 5))

// Задача-5
// Напишіть функцію, яка приймає 2 параметри: isRaining(булевий) і hasUmbrella(булевий).
// Якщо дощить і у вас є парасоля, поверніть "Не змокнеш", якщо дощить і немає парасолі,
//     поверніть "Змокнеш", в іншому випадку поверніть "Без дощу".

function checkTheWeather(isRaining, hasUmbrella) {
    if (isRaining && hasUmbrella) 
        return "Не змокнеш"
    else if 
         (isRaining && !hasUmbrella) 
      "Змокнеш"  
    
}
console.log(checkTheWeather(true, true))

// Задача-6
// Напишіть функцію, яка приймає оцінку студента(grade) за шкалою від 0 до 100. 
// Якщо оцінка 90 і більше, поверніть "Відмінно", від 75 до 89 - "Добре",
//     від 50 до 74 - "Задовільно", нижче 50 - "Незадовільно".

function evaluateGrade(grade) {
       if (grade >= 90) {
        return "Відмінно";
    } else if (grade >= 75) {
        return "Добре";
    } else if (grade >= 50) {
        return "Задовільно";
    } else {
        return "Незадовільно";
    }
}
console.log(evaluateGrade(35)); 

// Задача-7
// Напишіть функцію, яка приймає два параметри: dayOfWeek та isHoliday. 
// Якщо dayOfWeek це "Saturday" або "Sunday" або isHoliday є true, поверніть "Вихідний",
//     в іншому випадку поверніть "Робочий день".

function checkTheDay(dayOfWeek, isHoliday) {
   if (dayOfWeek === "Saturday" || dayOfWeek === "Sunday")
       return "Вихідний"
    else {
        return "Робочий день"
    }
}
console.log(checkTheDay("Monday"))

// Задача-8
// Напишіть функцію, яка приймає один параметр year. 
// Якщо рік ділиться на 4 і не ділиться на 100, або ділиться на 400,
//     поверніть "Високосний рік", в іншому випадку - "Звичайний рік".

function checkTheYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0)|| year % 400 === 0)  
   
    return "Високосний рік"
    else {
      return  "Звичайний рік" 
    }
}

console.log(checkTheYear(1991))

// Задача-9
// Напишіть функцію, яка приймає два параметри: hasInvitation(булевий) і isFriend(булевий). 
// Якщо у вас є запрошення або ви друг, поверніть "Ви запрошені", в іншому випадку поверніть
// "Вхід заборонено".

function checkTheAccess(hasInvitation, isFriend) {
    if (hasInvitation || isFriend)
        return "Ви запрошені"
    else{
       "Вхід заборонено" 
    }
}
console.log(checkTheAccess(true, false))

// Задача-10
// Напишіть функцію, яка приймає вік особи(age).Якщо вік менший за 12, поверніть "Дитина",
//     якщо від 12 до 18, поверніть "Підліток", якщо від 18 до 60, поверніть "Дорослий",
//         більше 60 - "Пенсіонер".

function checkTheAge(age) {
    if (age < 12)
        return "Дитина"
    else if (age >= 12 && age < 18)
        return "Підліток"
    else if (age  >= 18 && age < 60)
        return "Дорослий"
    else 
    return "Пенсіонер"
}

console.log(checkTheAge(14))

// Задача-11
// Напишіть функцію, яка приймає два параметри: isLoggedIn(булевий) та hasAdminRights(булевий). 
// Якщо ви увійшли в систему і маєте права адміністратора, поверніть "Адмін-сторінка", якщо увійшли,
//     але не є адміністратором, поверніть "Користувач", в іншому випадку - "Гість".

function checkUserRights(isLoggedIn, hasAdminRights) {
    if (isLoggedIn = hasAdminRights)
        return "Адмін-сторінка"
    else if 
        (isLoggedIn = !hasAdminRights)
        return "Користувач"
    else 
        return "Гість"
}
console.log(checkUserRights(true, true))

// Задача-12
// Напишіть функцію, яка приймає один параметр speed. 
// Якщо швидкість менша за 60 км / год, поверніть "Безпечно", якщо від 60 до 100 км / год,
//     поверніть "Увага", якщо більше 100 км / год, поверніть "Небезпечно".
function checkSpeed(speed) {
    if (speed < 60) {
        return "Безпечно";
    } else if (speed >= 60 && speed <= 100) {
        return "Увага";
    } else {
        return "Небезпечно";
    }
}
console.log(checkSpeed(78))

// Задача-13
// Напишіть функцію, яка приймає два параметри: time та isWeekend.Якщо time менше 12
//  і це не вихідний день, поверніть "Ранок буднього дня", якщо більше 12 і менше 18 і це вихідний,
//     поверніть "День вихідного дня", в іншому випадку поверніть "Вечір".

function checkTimeOfDay(time, isWeekend) {
    if (time < 12 && !isWeekend)
        return "Ранок буднього дня"
    if (time >= 12 && time > 18 && isWeekend)
        return "День вихідного дня"
    else {
        return "Вечір"
    }
}
console.log(checkTimeOfDay(10, false));


// Задача-15
// Напишіть функцію, яка приймає один параметр age. 
// Якщо вік менше 18, поверніть "Не можна купувати алкоголь",
//     якщо 18 або більше, поверніть "Можна купувати алкоголь".

function checkAge(age) {
    if (age < 18)
        return "Не можна купувати алкоголь"
    else if (age >= 18)
        return "Можна купувати алкоголь"
}
console.log(checkAge(10));


// Задача-22
// Напишіть функцію, яка приймає два параметри: 

isStudent(булевий) та hasID(булевий). 
// Якщо ви студент і маєте посвідчення, поверніть "Вхід дозволено",
//     якщо ні, поверніть "Вхід заборонено".

function checkAccess( isStudent, hasID) {
    if (isStudent && hasID) {
        return "Вхід дозволено"
    } else {
            return "Вхід заборонено"
        }
        
}
console.log(checkAccess(true, true)); 


// Задача-23
// Напишіть функцію, яка приймає два параметри: temperature та isRaining. 
// Якщо температура менша за 0 або йде дощ, поверніть "Потрібно носити теплий одяг",
//     в іншому випадку поверніть "Легка одяг".

function checkClothing(temperature, isRaining) {
    if (temperature < 0 || isRaining) {
      return  "Потрібно носити теплий одяг"
    } else {
       "Легка одяг" 
  }
}

console.log(checkClothing(-5, true));