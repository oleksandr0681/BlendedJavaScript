"use strict";

// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().

const number = Number(prompt("Введіть число"));
if (number === 10) {
  alert("Вірно");
} else {
  alert("Невірно");
}

// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

const min = Math.floor(Math.random() * 59);

if (min < 15) {
  alert(`${min} входить в першу чверть`);
} else if (min >= 15 && min < 30) {
  alert(`${min} входить в другу чверть`);
} else if (min >= 30 && min < 45) {
  alert(`${min} входить в третю чверть`);
} else if (min >= 45) {
  alert(`${min} входить в четверту чверть`);
}

// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

const totalMinutes = Number(prompt("Введіть кількість хвилин."));

function formatTime(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const modifiedHours = String(hours).padStart(2, "0");
  const minutes = totalMinutes % 60;
  const modifiedMinutes = String(minutes).padStart(2, "0");
  return `${modifiedHours}:${modifiedMinutes}`;
  console.log(modifiedHours);
}

console.log(formatTime(totalMinutes));

// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"

const login = prompt("Введіть логін.");
console.log(login);
if (login === "Адмін") {
  const password = prompt("Введіть пароль.");
  if (password === "Я головний") {
    alert("Добрий день!");
  } else {
    alert("Невірний пароль!");
  }
} else if (login === null || login === "") {
  alert("Скасовано");
}

// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

function getNumbers(min, max) {
  let sum = 0;
  for (let index = max; index >= min; index--) {
    console.log(index);
    if (index % 2 === 0) {
      sum += index;
    }
  }
  return sum;
}

const minNumber = Number(prompt("Введіть min."));
const maxNumber = Number(prompt("Введіть max."));
console.log(getNumbers(minNumber, maxNumber));

// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.

function fizzBuzz(num) {
  for (let index = 1; index <= num; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
      console.log("fizzbuzz");
    }
    if (index % 3 === 0) {
      console.log("fizz");
    }
    if (index % 5 === 0) {
      console.log("buzz");
    }
  }
}

fizzBuzz(15);
