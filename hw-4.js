let i = 0;
while (i < 2) {
    console.log("Привет");
    i++;
}

let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

let i = 7;
while (i <= 23) {
    console.log(i);
    i++;
}

let obj = {
    Коля: "200",
    Вася: "300",
    Петя: "400"
};
console.log("Коля - зарплата " + obj.Коля + " долларов.");

let n = 1000;
let num = 0;

while (n >= 50) {
    n = n /= 2;
    num++;
}
console.log(num);

let frd = 5;
while (frd <= 31) {
    console.log("Сегодня пятница, " + frd + "- е число. Необходимо подготовить отчет.");
    frd += 7;
}

