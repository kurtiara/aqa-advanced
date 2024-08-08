const car1 = {
  brand: "Mercedes",
  model: "Vito",
  year: 1999,
};

const car2 = {
  brand: "BMV",
  model: "Seven",
  owner: 2005,
};

const car3 = { ...car1, ...car2 };

console.log(car3);
