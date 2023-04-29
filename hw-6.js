//1-------------------------------------------
const array = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < array.length; i++) {
    if (array[i] == 10) break;
    console.log(array[i]);

}


//2---------------------------------------------
const arr = [1, 5, 4, 10, 0, 3];
let ort = arr.indexOf(4);
console.log(ort);

//3--------------------------------------------
let arr = [1, 3, 5, 10, 20];
console.log(arr);
arr = arr.join([' ']);

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
delete arr[3];
arr.sort();
console.log(arr);

//7---------------------------------------
const arr = [9, 8, 7, 6, 5];
let fact = prompt("Ведите число от 1 до 10");
const element = array[arr.includes(fact)];
console.log(element);


//8---------------------------------------
let string = "abcdef";
const reverse = string.split('').reverse().join('');
console.log(reverse);

//9-------------------------------------
const arr = [[1, 2, 3,], [4, 5, 6]];
const result = arr.flat();
console.log(result);

//10------------------------------------
const arr = [9, 8, 7, 6, 5];
arr.reduce((a, b) => a + b);
console log(arr)

//11--------------------------------
let arr = [5, 5, 5].map(item => item ** 2);
console.log(arr);


//12-------------------------------
function multi(arr) {
    var newarr = ['слово', '', 'слог', 'длинное предложение', 'буква'];
    for (var i = 0; i < arr.length; i++) {
        return newarr = arr[i].length;
    }

}
console.log(multi)

//13-------------------------------------
var myArray = [4, -5, 0, 2, -67, 8, 10, -34];

function negative(array) {
    return array.filter(function (value) {
        return value < 0;
    });
}
console.log(negative(myArray));