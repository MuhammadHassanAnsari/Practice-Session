const students = [
    { name: "Ali", marks: 85 },
    { name: "Ahmed", marks: 62 },
    { name: "Sara", marks: 92 },
    { name: "Usman", marks: 45 }
];


// let a = students.filter((student) => {
//     return student.marks > 70;
// })

// console.log(a)


// let a = students.map((student) =>{
//     return student.name;
// })

// console.log(a);


let a = students.filter((student) => {
    return student.marks > 80;
}).map((student) => {
    return student.name;
})

console.log(a);