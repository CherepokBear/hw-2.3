let password = 'пароль';
let pws = prompt("Введите пароль");
if (pws === pasword) {
    console.log("Пароль введен верно");
} else {
    console.log("Пароль введен неправильно");
}

let c = 35;
if (c > 0 && c < 10) {
    console.log("верно");
} else {
    console.log("неверно");
}

let d = 35;
let e = 25;
if (d || e > 100) {
    console.log("верно");
} else {
    console.log("неверно");
}

let a = "2";
let b = "3";
let num = Number(a + b);
alert(num);

let jan = 1;
let feb = 2;
let mar = 3;
let apr = 4;
let may = 5;
let jun = 6;
let jul = 7;
let aug = 8;
let sep = 9;
let oct = 10;
let nov = 11;
let dec = 12;

let month = prompt("Ведите номер месяца");

if (month === 1) {
    console.log("Январь")
} else if (month === 2) {
    console.log("Февраль")
} else if (month === 3) {
    console.log("Март")
} else if (month === 4) {
    console.log("Апрель")
} else if (month === 5) {
    console.log("Май")
} else if (month === 6) {
    console.log("Июнь")
} else if (month === 7) {
    console.log("Июль")
} else if (month === 8) {
    console.log("Август")
} else if (month === 9) {
    console.log("Сентябрь")
} else if (month === 10) {
    console.log("Октябрь")
} else if (month === 11) {
    console.log("Ноябрь")
} else if (month === 12) {
    console.log("Декабрь")
} else {
    console.log("No release")
}

let funtic = prompt("Пожалуйста, введите любое число");

if (isNaN(funtic)) {
    console.log('не число');
} else {
    console.log('число');
}

let clientOS = 0;
let clietAndroid = 1;
if (clientOS) {
    alert("Установите версию приложения для iOS по ссылке");
} else (clientAndroid){
    alert("Установите версию приложения для Android по ссылке");
}

