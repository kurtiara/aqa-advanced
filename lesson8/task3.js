const newArray = [10, 20, 30, 40, 50];
const summArray = newArray.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(summArray);
