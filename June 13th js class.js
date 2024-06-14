//FUNTIONS THAT TAKES ARGUEMENT
let x = 5;
let y = 10 ;

let sum = x + y;
console.log(sum);

let a = 6; 
let b = 34;

let sum2 = a + b;
console.log(sum2);

function addTwoNumbers (x, y) {
   let result = x + y;
   console.log(`${x} + ${y} = ${result}`);
} 

addTwoNumbers (13, 40);
addTwoNumbers (4, 100);

function subtractTwoNumbers(x, y) {
   let result = x - y;
   console.log(`${x} - ${y} = ${result}`);
}

subtractTwoNumbers (45, 20);

function sqr(number) {
   let result = number * number;
   console.log(`$the square root of ${number} = ${result}`);
}
sqr (10);
sqr (3);

// ARROW FUNCTION 
const divideTwoNumbers = (x, y) => {
   let result = x / y ;
   console.log(`${x} / ${y} = ${result}`);
}

divideTwoNumbers(40, 5);
divideTwoNumbers(20, 2);

let value = math.sqrt(16);
console.log(value);

// FUNCTIONS THAT DOES NOT TAKE A VALUE
function greetUser() {
   console.log(`good afternoon, hope you are having a good day?`);
}

greetUser();

//FUNCTIONS THAT RETURN A VALUE
const sqareNumber = (number) => {
   let result = number * number;
   return result;
};

let solve = 30 + sqareNumber(5);
console.log(solve);