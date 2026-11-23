// const students = [
//     { name: "Ali", marks: 85 },
//     { name: "Ahmed", marks: 62 },
//     { name: "Sara", marks: 92 },
//     { name: "Usman", marks: 45 }
// ];


// let a = students.filter((student) => {
//     return student.marks > 70;
// })

// console.log(a)


// let a = students.map((student) =>{
//     return student.name;
// })

// console.log(a);


// let a = students.filter((student) => {
//     return student.marks > 80;
// }).map((student) => {
//     return student.name;
// })

// console.log(a);


// let products = [
//   { name: "Laptop", price: 80000 },
//   { name: "Mouse", price: 2000 },
//   { name: "Keyboard", price: 5000 },
//   { name: "Monitor", price: 25000 }
// ];

// let a = products.find((obj)=>{
//     return obj.name === 'Keyboard';
// })


// console.log(a);



// let nums = [45, 12, 90, 3, 27];

// let a = nums.sort((a, b)=>{
//     return a - b;
// })

// console.log(a)


// let prices = [200, 500, 300, 100];

// let a = prices.reduce((acc, curr)=>{
//     return acc + curr;
// },0)

// console.log(a);



// let arr = [10, 20, 30, 40, 50];
// console.log(arr.slice(1,3));

// let str = "JavaScript Developer";
// console.log(str.split(" "));



// let skills = ["HTML", "CSS", "JavaScript", "React"];
// let a = skills.includes(("JavaScript"))
// console.log(a)


// let fruits = ["Apple", "Mango", "Banana", "Orange"];
// console.log(fruits.indexOf('Banana'))


// let words = ["Hello", "World", "JavaScript"];
// console.log(words.join(" "));

// let word = "JavaScript";
// let a = word.split('');
// let b = a.reverse('');

// console.log(b.join(''));



// let nums = [10, 20, 30, 40];
// let a = nums.forEach((rep) => {
//     console.log(rep);
// })

// console.log(a);



// let marks = [45, 67, 82, 39, 55];

// marks.map((a)=>{
//     console.log(a > 80);
    
// })


// let ages = [19, 22, 18, 25, 17];
// ages.every((a)=>{
//     console.log(a > 18);
// })

// let data = [1, 2, 3];

// let result = data.filter(num => num > 5);

// console.log(result);


// let data = ["Karachi", "Lahore", "Islamabad"];

// let result = data.map(city => city.toUpperCase());

// console.log(result);



// let users = [
//     { name: "Ali", age: 17 },
//     { name: "Ahmed", age: 22 },
//     { name: "Sara", age: 19 }
// ];

// let result = users
//     .filter(user => user.age >= 18)
//     .map(user => user.name);

// console.log(result);




// let users = [
//     { name: "Ali", age: 20 },
//     { name: "Sara", age: 16 },
//     { name: "Ahmed", age: 22 }
// ];

// let result = users
//     .map(user => user.age)
//     .filter(age => age >= 18);

// console.log(result);



// let cities = ["Karachi", "Lahore", "Islamabad", "Quetta"];

// cities.splice(1, 2);

// console.log(cities);



// let numbers = [10, 20, 30];

// let result = numbers.forEach(num => num * 2);

// console.log(result);



// let numbers = [2, 4, 7, 8];

// let result = numbers.some(num => num > 5);

// console.log(result);


// let cities = ["Karachi", "Lahore", "Quetta"];

// console.log(cities.includes("Lahore"));


// localStorage.setItem("name", "Ali");
// localStorage.setItem("city", "Karachi");

// localStorage.clear();

// console.log(localStorage.getItem("city"));


// async function getData() {
//     let data = [10, 20, 30];
//     return data;
// }

// let result = await getData();

// console.log(result);


// let numbers = [10, 20, 30];

// numbers.forEach((num, index) => {
//     console.log(num, index);
// });



let result = await Promise.all([
    Promise.resolve(10),
    Promise.resolve(20),
    Promise.resolve(30)
]);

console.log(result);