const number = 5;
console.log("Таблиця множення для числа", number, "за допомогою циклу for:");
for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}
console.log("Таблиця множення для числа", number, "за допомогою циклу while:");
let j = 1;
while (j <= 10) {
    console.log(number + " x " + j + " = " + (number * j));
    j++;
}
