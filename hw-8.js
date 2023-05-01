// //1
// const people = [
//     { name: 'Глеб', age: 29 },
//     { name: 'Анна', age: 17 },
//     { name: 'Олег', age: 7 },
//     { name: 'Оксана', age: 47 }
// ];
// console.log(people.sort((a, b) => a.age - b.age));

//2

function isPositive(item) {
    return item >= 0;
}
function isMale() {
    return people.find(e => e.gender === 'male');
}

function filter(arr, ruleFunction) {
    return arr.filter(ruleFunction)
}

console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]

const people = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]


// //3
// let timerId = setInterval(() => alert('tick'), 2000);
// setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);


// //4
// function delayForSecond(callback) {
//     setTimeout(delayForSecond, 1000);
//     callback();
// }

// delayForSecond(function () {
//     console.log('Привет, Глеб!');
// })

// //5
// function delayForSecond(cb) {
//     setTimeout(() => {
//         console.log('Прошла одна секунда');
//         if (cb) { cb(); }
//     }, 1000)
// }

// function sayHi(name) {
//     console.log(`Привет, ${name}!`);
// }

// delayForSecond(() => sayHi('Глеб'))

