//1-------------------------------------------
const array = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < array.length; i++) {
    if (array[i] == 5) break;
    console.log(array[i]);
}

//2---------------------------------------------
const arr = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr.length; i++) {
    console.log(indexOf(4));
}

//3--------------------------------------------
let arr = [1, 3, 5, 10, 20];
console.log(arr);
arr = arr.join(' ');

//4-------------------------------------------------
let cubes = [[1, 1, 1], [1, 1, 1], [1, 1, 1]]

for (let arrIn of cubes) {
    for (let element of arrIn)
        console.log(element)
}

//5--------------------------------------
const arr = [1, 1, 1];
arr.push(2, 2, 2);

//6-----------------------------------------
const arr = [9, 8, 7, 'a', 6, 5];
arr.sort();
alert(arr);

//7---------------------------------------
const arr = [9, 8, 7, 6, 5];
let fact = prompt("Ведите число от 1 до 10");
for (let arr = 0; arr < array.length; arr++) {
    const element = array[arr.includes(fact)];
    console.log(element);
    break;
}

//8---------------------------------------
let string = "abcdef";
string.revers();
console.log(string)

//9-------------------------------------
const arr = [[1, 2, 3,], [4, 5, 6]];
console.log(arr.concat([1, 2, 3], [4, 5, 6]));

//10------------------------------------
const arr = [9, 8, 7, 6, 5];
massiv.reduce((a, b) => a + b);
console log(arr)

//11--------------------------------
let arr = [5, 5, 5].map(item => item ** 2);
console.log(arr);


//12-------------------------------
function multi(arr) {
    var newarr = ['слово', '', 'слог', 'длинное предложение', 'буква'];
    for (var i = 0; i < arr.length; i++) {
        newarr.push(arr[i].length);
    }
    return newarr;
}

//13-------------------------------------
var myArray = [4, -5, 0, 2, -67, 8, 10, -34];

function Negative(array) {
    return array.filter(function (value) {
        return value < 0;
    });
}
console.log(Negative(myArray));