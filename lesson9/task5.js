// Завдання 5
// Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
// Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
// Зробіть деструктуризацію в циклі

let users = [
  { name: "Oleksandr", email: "oleksandr@gmail.com", age: 25 },
  { name: "Kate", email: "kate@gmail.com", age: 20 },
  { name: "Kristina", email: "kristina@gmail.com", age: 35 },
];

for (const { name, email, age } of users) {
  console.log(`Ім'я: ${name}, Email: ${email}, Вік: ${age}`);
}
