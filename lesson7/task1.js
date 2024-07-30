function handleNum(number, handleEven, handleOdd) {
  if (number % 2 === 0) {
    handleEven();
  } else {
    handleOdd();
  }
}

function handleEven() {
  console.log("number is even");
}

function handleOdd() {
  console.log("number is odd");
}

handleNum(11, handleEven, handleOdd);
handleNum(2, handleEven, handleNum);
