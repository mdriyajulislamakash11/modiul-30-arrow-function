
let sum = 0; 
for(let i = 0; i < 10; i++){
    sum = sum + i;

}
// console.log(sum)

function add(num1 = 0, num2 = 0){
    const result = num1 + num2;
    console.log(num1, num2, result)
    
    return result;
}

const total = add( 10)
console.log(total)

const a = 12;
const b = 13;
const result = `the sum of number ${a} second number ${b} result ${a + b} `
console.log(result)

const number =  [12, 42, 45, 24, 23, 23]
const student = {name: "salman", age: 24, salery: 26000};

const totalSum = `the sum of ${number[0]} or ${student.age} or ${student.salery} total sum of ${number[0] + student.age + student.salery}`;

console.log(totalSum);