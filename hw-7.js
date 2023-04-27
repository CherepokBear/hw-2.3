//1

let up = "JrKnnnGyyH";
let upp = tur.toUpperCase();
console.log(upp)

//2
function book() {
    const products = ['Кошка', 'Кит', 'Комар', 'Носорог'];
    const search = 'ко';

    products.forEach((product) => {
        if (product.toLowerCase().includes(search.toLowerCase())) {
            console.log([product, search]);
        }
    });
}


//3 

let ver = 32.58884;
let veri = Math.floor(32.58884);
let veric = Math.ceil(32.58884);
let vericl = Math.round(32.58884);
console.log(veri, veric, vericl)

//4

let m = [52, 53, 49, 77, 21, 32]
console.log(Math.min(...m));
console.log(Math.max(...m));

//5

function rand() {
    console.log(Math.random() * 11)
}
rand()

//6

function getRandomInt() {
    let input = prompt("Введите целое число");
    let array = [];
    // array.length = input / 2;

    for (let i = 0; i < input; i++) {
        ar = Math.floor(Math.random() * input)
    }

    return array.concat(ar)
}
console.log(getRandomInt());

//7 

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(2, 8))

//8

var date = new Date();
console.log(date)

//9

let currentDate = new Date();
currentDate = setDate(73);
console.log();

// 10

var today = new Date();
var time = today.toLocaleTimeString('ru-RU');

var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
options.timeZone = 'UTC';
options.timeZoneName = 'short';

var now = today.toLocaleString('ru-RU', options);
console.log("Время:", " ", time);
console.log("Дата:", " ", now);

//11
function games() {
    let mas = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    mas = mas.sort(() => Math.random() - 0.5);
    alert(mas);

    let quest = prompt("Чему равнялся первый элемент массива?");
    let quests = prompt("Чему равнялся последний элемент массива?");

    if (quest == mas[0] && quests == mas[mas.length - 1]) {
        alert("Поздравляем!")
    } else if (quest == mas[0] && quests != mas[mas.length - 1] || quests == mas[mas.length - 1] && quest != mas[0]) {
        alert("Вы были близки к победе!Поздравляем!")
    } else {
        alert("Неверно!")
    }
}
