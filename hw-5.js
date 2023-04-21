
// function min(a, b) {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }

// 2 _________________________________________________________

// let num = prompt('Введите число');
// function ret() {
//     if (num % 2 == 0) {
//         return 'Число четное'
//     } else {
//         return 'Число нечетное'
//     }
// }

// 3_________________________________________________________-

// function ret() {
//     let num = prompt('Введите число');
// }
// console.log(ret * 2)

// function ret() {
//     let numb = prompt('Введите число');
// }
// return (ret * 2)

// //4____________________________________________________

// function many() {
//     let num = prompt('Сколько вам лет?');
//     let i = 0;
//     if (num <= 0) {
//         alert("Вы ввели неправильное значение");
//     } else if (num < 12) {
//         alert("Привет, друг!");
//     } else {
//         alert("Добро пожаловать!");
//     }
// }

// 5______________________________________________________

// function isItAnumber (a, b){
//     if (isNaN(a) || isNaN(b)) {
//         return 'Одно или оба значения не являются числом'
//     } else {
//         return a * b
//     }
//     // a && b !== isNaN ? return 'Одно или оба значения не являются числом' : return a * b
// }

// 6______________________________________________________

// function correct () {
//     var a = prompt ("введите число");
//     if (isNaN(a)) {
//         Math.pow(a, 2);
//         return 'n в кубе равняется ${a}'
//     } else {
//         return 'Переданный параметр не является числом'
//     }
// }

// 7__________________________________________________________

// function getRectangleArea() {
//     return this.p * this.radius;
//   }
//   function getRectanglePerimeter() {
//     return this.radius * this.p * 2;
//   }

//   const circle1 = {
//     radius: 43,
//     p: 3.14,
//     getArea: getRectangleArea,
//     getPerimeter: getRectanglePerimeter,
//   };

//   const circle2 = {
//     radius: 25,
//     p: 3.14,
//     getArea: getRectangleArea,
//     getPerimeter: getRectanglePerimeter,
//   };

//   console.log(circle1.getArea());
//   console.log(circle1.getPerimeter());
//   console.log(circle2.getArea());
//   console.log(circle2.getPerimeter());

function sesons() {
    let month = Number(prompt('Введите номер месяца'));

    if (month > 0 && month <= 3 || month === 11) {
        return "Зима"
    } else if (month > 3 && month <= 6) {
        return "Лето"
    } else if (month > 6 && month <= 9) {
        return "Весна"
    } else if (month > 9 && month <= 11) {
        return "Осень"
    } else {
        return "Вы ввели не число!"
    }
}
