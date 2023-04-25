//1

let Up = "JrKnnnGyyH";
let Upp = tur.toUpperCase();
console.log(Upp)

//2

const products = ['Кошка', 'Кит', 'Комар', 'Носорог'];
const search = 'ко';

products.forEach((product) => {
	if (product.toLowerCase().includes(search.toLowerCase())) {
		console.log([product, search]);
	}
});

//3 

let ver = 32.58884;
let veri = Math. floor(32.58884);
let veric = Math. ceil(32.58884);
let vericl = Math. round(32.58884);
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

    return Math.floor(Math.random().max(input));
  }
  console.log(getRandomInt());

//7 

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
console.log(getRandomInt())

//8

var date = new Date();
console.log(date)

//9

let currentDate = new Date();
currentDate = setDate(73);
console.log();

//10

var today = new Date();
var time = today.toLocaleTimeString('en-US');

var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
options.timeZone = 'UTC';
options.timeZoneName = 'short';
 
var now = today.toLocaleString('en-US', options);
console.log(time, now);