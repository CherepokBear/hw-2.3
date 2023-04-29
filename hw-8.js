// //1

// const people = [
//     { name: 'Глеб', age: 29 },
//     { name: 'Анна', age: 17 },
//     { name: 'Олег', age: 7 },
//     { name: 'Оксана', age: 47 }
// ];
// console.log(people.sort(function (a, b) {
//     if (a.age > b.age) {
//         return 1;
//     }
//     if (a.age < b.age) {
//         return -1;
//     }
//     return 0;
// }));

// //2

function isPositive() {
    // писать код тут
    for (var key in people) {
        // этот код будет вызван для каждого свойства объекта
        // ..и выведет имя свойства и его значение

        alert("Ключ: " + key + " значение: " + people[key]);
    }
}
function isMale() {
    // console.log('');
    return
}
function filter(arr) {
    const result = arr.filter(item => item > 0);   //.sort((a, b) => a - b);
    console.log(result);
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
// // повторить с интервалом 2 секунды
// let timerId = setInterval(() => alert('tick'), 2000);
// // остановить вывод через 5 секунд
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

