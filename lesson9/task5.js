let users = [
  { name: "Oleksandr", email: "oleksandr@gmail.com", age: 25 },
  { name: "Kate", email: "kate@gmail.com", age: 20 },
  { name: "Kristina", email: "kristina@gmail.com", age: 35 },
];

for (const { name, email, age } of users) {
  console.log(`Ім'я: ${name}, Email: ${email}, Вік: ${age}`);
}
