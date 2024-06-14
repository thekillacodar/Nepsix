```javascript

// alert('Testing Javascript');
console.log('Testing Javascript 101');

//! DATATYPES
// 
// String datatype

let firstName = 'Joshua';
let surName = 'Philip';


//todo + sign is for concartenantion
console.log('Good Morning '+ firstName);
console.log( surName + ' says Good Morning ' + firstName);
console.log('Good Morning '+ firstName +' '+ surName +' how are you doing?');

//todo another method for concartenation is back ticks as form of template string

console.log(`Goodmorning ${firstName} ${surName} ,i just sent you some money`)

// ! Number datatype
// 

let num1=5;
let num2=7;
let sumOFNumbers=num1 + num2;

console.log(sumOFNumbers)
console.log('the sum of ' + num1 +' and ' + num2 + ' is = ' + sumOFNumbers)
console.log(`the sum of ${num1} and ${num2} equals ${sumOFNumbers}`)

console.log(`welcome to js`)

// ! array datatype
// 

let nameOfStudents = ['Joshua Slick', 'Philip Benjamin', 'Mwesigwa Kungwaso', 'David Ben'];

//todo to access the array elements we use the index number

console.log(nameOfStudents);

console.log(nameOfStudents[0]);
 console.log(nameOfStudents[1]);
 console.log(nameOfStudents[2])
 console.log(nameOfStudents[3])
//  console.table(nameOfStudents)

let studentScores=[20, 37, 63, 78]
console.log(studentScores)

// ! object datatype
// 

let studentProfile={
    name:'Joshua Slick',
    age: 23,
    gender:'Male',
    city:'Port Harcourt',
    department:'Full Stack Web Development',
    courses:['HTML', 'CSS', 'Bootstrap', 'Javascript','ReactJS'],
    institution: 'Nepsix Technology',
    duration:'3 Months'
}
console.log( studentProfile)
console.log( studentProfile.name)
console.log( studentProfile.age)
console.log( studentProfile.gender)
console.log( studentProfile.city)
console.log( studentProfile.department)
console.log( studentProfile.courses[3])
// console.table(studentProfile)
//! boolean datatype
let isHeFromRivers = true;

if (isHeFromRivers){
    console.log(`you are eligible for the scholarship`)
} else{
    console.log(`you are not eligible for the scholarship`)
}

//! date 
let myDate = new Date()
console.log(myDate)
console.log(myDate.getFullYear())




// ! Complex datatypes

const uniportLectures = [
    {
        name: 'prof. Baridan Oke',
        department:'linguistics & communication studies',
        courses: [ 'eng304','lin402' ],
        medicalReport: {
            bloodGroup:'o+',
            genotype:'as',
            illness:'none',
        },
        consultancy:'none',
    },
    {
        name: 'prof. Wike Adams',
        department:'Mechanical Engineering',
        courses: [ 'meg305','eng401' ],
        medicalReport: {
            bloodGroup:'a+',
            genotype:'aa',
            illness:{
                eyeProblem:'myopia',
            },
        },
        consultancy:['shell', 'nnpcl','total e&p'],
    }
]

console.log(uniportLectures)
// console.log(uniportLectures[0])
// console.log(uniportLectures[0].courses)
console.log(uniportLectures[0].courses[1])

// console.log(uniportLectures[1])
// console.log(uniportLectures[1].medicalReport)
// console.log(uniportLectures[1].medicalReport.illness)
console.log(uniportLectures[1].medicalReport.illness.eyeProblem)


// ! operators
// types of operators
// lexical operators (Or{II}, And {&&})
// arithemetic operators (- , + , * , / , %)
// comparison operators ( <, > , <= ,>= , ===, !==)

//? arithemetic operators (- , + , * , /)

let a=5
let b=3

let sum = a+b
let getModulus = a % b
console.log(`the sum of a and b = ${sum}`)
console.log(`the modulus of a and b = ${getModulus}`)

// ? comparison operators
let x = 5
let y = 6

if(x>y){
    console.log(`${x} is greater`)
}else if (x<y){
    console.log(`${y} is greater`)
}else if (x===y){
    console.log(`${x}is = ${y}`)
}else{
    console.log(`error`)
}


// 

let a = 1
let b = -5
let c = -14
let x = 'answer'

// formula = (-b +- sqrt b-4ac)/2a
// -b
// sqrt b-4ac = y
// 2a
let y = Math.sqrt(b*b - (4*a*c))

x1 = (-b + y) / (2*a)
x2 = (-b - y) / (2*a)
console.log(`the values for x is ${x1} or ${x2}`)


// logical operators
let jambScore = 208
let state = 'Bayelsa'

if  (jambScore >=300 || state==='rivers'){
    console.log(`you are eligible`)
} else{
    console.log(`we are sorry, you are not eligible`)
}

if  (jambScore >=300 && state==='rivers'){
    console.log(`you are eligible`)
} else{
    console.log(`we are sorry, you are not eligible`)
}

// ! conditional statements

// * if statement
let userRole = 'user'
if (userRole === 'admin' ){
    console.log(`welcome to admin page`)
}

// if-else statement
let staffRole = 'HOD'
if (staffRole === 'HOD'){
    console.log(`collect a full head of school`)
}else {
    console.log(`collect half the size`)
}

// if-else-if
let x = 8
let y = 11

if (x > y ){
    console.log(`${x} > ${y}`)
}else if ( x < y ){
    console.log(`${x} < ${y}`)
}else if (x === y ){
    console.log(`${x} = ${y}`)
}else {
    console.log(`comparison in range`)
}

// switch statement
let carsAvailable = 'ferrari'

switch (carsAvailable) {
    case 'lamborghini':
        console.log(`the car ${carsAvailable} is avialable, costs: $2.5million`)
        break

    case 'ferrari':
        console.log(`the car ${carsAvailable} is avialable, costs: $1.2million`)
        break

    case 'mercedes':
        console.log(`the car ${carsAvailable} is avialable, costs: $ 450k`)
        break

    default :
        console.log(`the car is not available in the collection`)
        break
}

// ?assignment 
//? turn the if else if statement to switch statement


//! Tenary operators as conditional Statement

let u = 12
let v = 30

u > v ? console.log(`${u} > ${v}`) 
: u < v ? console.log(`${u} < ${v}`)

// ? = if
// : = else

// ! loop structure

// while loop
let a = 1
while (a <=50){
    console.log(a)
    a=a+1
}

// display even numbers between 1 and 50
console.log(`even numbers between 1 and 50`)
let x = 2
while (x <= 50 ) {
    console.log(x)
    x=x+2
}

// for loop
// let x = 1
// for (; x<=10; x++) {
//     console.log(x)
// }

// classwork
console.log(`2 timestable`)
let num = 1
console.log(`the mltiplication table of 2x is`)
while(num <= 12){
   
    console.log(`2 * ${num} = ${2 * num}`)
    num++
}
    
```