// let numbers: number[] = [1, 2, 3, 4, 5];
// let total = 0;

// for (let num of numbers) {
//     total += num;}

// console.log(total);




function add(a: number, b: number): number {
    return a + b;
}
const result = add(5, 10);
console.log(result);


// arrow function
const multiply = (x: number, y: number): number => {
    return x * y;
};
console.log(multiply(5, 10));





//interface Person {
interface Student{
    name:string;
    age:number;
}

let student: Student={
    name:"Shashidhar",
    age:22
};

console.log(student.name);
console.log(student.age);   
console.log(student);