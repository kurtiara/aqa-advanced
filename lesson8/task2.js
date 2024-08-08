const initialArray = [1, 2, 3, 4, 5];
const newArray = initialArray.map((number, index) => {
  return number * index;
});
console.log(newArray);
