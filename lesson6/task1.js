//function declaration

function calculateAreaDeclaration (width, height){
    return width * height;
}
const result1 = calculateAreaDeclaration (5, 10);
console.log (result1);


// function expression

const calculateAreaExpression = function (width, height){
    return (width * height);
}
const result2 = calculateAreaExpression (5, 10);
console.log (result2);

// arrow function

const calculateAreaArrow = (width, height) => {
    return width * height;
}
const result3 = calculateAreaArrow (5, 10);
console.log (result3);