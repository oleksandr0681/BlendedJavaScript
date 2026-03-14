"use strict";

// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код


const styles = ['jazz', 'blues'];
console.log(styles.push('rock-n-roll'));
const index = styles.indexOf('blues');
if (index !== -1) {
    // 1 варіант.
    styles[index] = 'classic';
    // 2 варіант.
    styles.splice(index, 1, 'classic');
} else {
    console.log("Елемент не знайдено.");
}

console.log(styles);


// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

function logItems(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`${1 + 1} - ${array[i]}`);
    }
}


// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(array) {
//     const userName = prompt("Введіть ім'я")
//     const names = [];
//     for (const element of array) {
//         names.push(element.toLowerCase());
//     }
//     const index = names.indexOf(userName.toLowerCase());
//     if (index !== -1) {
//         return `Welcome, ${array[index]}!`;
//     } else {
//         return "User not found";
//     }
// }

// console.log(checkLogin(logins));

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

function caclculateAverage(...args) {
    let sum = 0;
    let count = 0;

    for (const arg of args) {
        if (typeof(arg) === "number") {
            sum += arg;
            count++;
        }
    }
    return sum / count;
}

console.log(caclculateAverage(5, 10, 15, "Hello"));

// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

function sumNumbers(array) {
    const newArray = [];

    for (let i = 0; i < array.length - 1; i += 1) {
        const element = array[index];
        newArray.push(array[i] + array[i + 1]);
    }

    return newArray;
}

console.log(sumNumbers(someArr));

// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

function findSmallestNumber(numbers) {
    if (!Array.isArray(numbers)) {
        return 'Sory, it is not an array!'
    }
    return Math.min(...numbers);
}

console.log(findSmallestNumber(numbers));

// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

const user = {
    name: "John",
    age: 20,
    hobby: "tenis",
    premium: true,
  };

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;
const keys = Object.keys(user);
for (const key of keys) {
    console.log(`${key}:${user[key]}`);
}
