// var let const
// var a = 12; 
// console.log(a);

const numbers = [1, 2, 3, 4];  

// Transform data (map) 
const squared = numbers.map(num => num * num); // [1, 4, 9, 16]  

console.log(squared);

// Filter data  
const evens = numbers.filter(num => num % 2 === 0); // [2, 4]  
console.log(evens);
// Sum values (reduce)  
const sum = numbers.reduce((total, num) => total + num, 0); // 10  
console.log(sum);