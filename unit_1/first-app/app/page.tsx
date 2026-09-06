// // export default function Home() {
// //   const students={
// //     name:"shashidhar",
// //     age:22,
// //     course:"MCA"
// //   };


// //   return (
// //     <div>
// //       <h1>Welcome to Next.js!</h1> 
// //       <p> name: ({students.name})</p>
// //       <p> age: ({students.age})</p>
// //       <p> course: ({students.course})</p>    
// //     </div>
// //   );
// // }

// // export default function Home() {
// //   const Number=5;
// //   return (
// //     <div>
// //       <h1>Even or odd</h1>

// //       {
// //         Number % 2 === 0 
// //         ? <p>{Number} is even</p>
// //         :<p>{Number} is odd</p>
        
// //       }
// //     </div>
// //   );
// // }


// // export default function Home() {
// //   const number = 5;
// //   let factorial = 1;

// //   for (let i = 1; i <= number; i++) {
// //     factorial = factorial * i;
// //   }

// //   return (
// //     <div>
// //       <h1>Factorial</h1>

// //       <p>Factorial of {number} is {factorial}</p>
// //     </div>
// //   );
// // }

// // export default function Home() {
// //   const numbers = [10, 20, 30, 40, 50];

// //   return (
// //     <div>
// //       <h1>Array</h1>

// //       <p>Array: {numbers.join(", ")}</p>
// //       <p>Array Length: {numbers.length}</p>
// //     </div>
// //   );
// // }


// // 1//
// // export default function Home() {
// //   let rectLength: number = 10;
// //   let rectWidth: number = 5;

// //   let area: number = rectLength * rectWidth;

// //   console.log("Area =", area);

// //   return (
// //     <div>
// //       <h1>Area of Rectangle</h1>
// //       <p>Length: {rectLength}</p>
// //       <p>Width: {rectWidth}</p>
// //       <p>Area: {area}</p>
// //     </div>
// //   );
// // }


// // // 2//
// // export default function Home()
// // {
// //   const beforeA =10;
// //   const beforeB= 20;

// //   let a=beforeA;
// //   let b=beforeB;

// //   let temp= a;
// //   a=b;
// //   b=temp;

// //     return(
// //     <center>
// //     <div >
// //       <h2>Before Swapping</h2>
// //       <p > a= {beforeA} </p>
// //       <p > b= {beforeB} </p>

// //       <h2>After Swapping</h2> 
// //       <p > a= {a} </p>
// //       <p > b= {b} </p>
// //     </div>
// //     </center>
// //   );
// // }

// // //3//
// // export default function Home() {
// //   const marks = 85;
// //   let grade = "";

// //   if (marks >= 90) {
// //     grade = "A+";
// //   } else if (marks >= 80) {
// //     grade = "A";
// //   } else if (marks >= 70) {
// //     grade = "B";
// //   } else if (marks >= 60) {
// //     grade = "C";
// //   } else if (marks >= 50) {
// //     grade = "D";
// //   } else {
// //     grade = "F";
// //   }

// //   return (
// //     <center>
// //       <div>
// //         <h2>Student Grade Calculator</h2>

// //         <p>Marks: {marks}</p>
// //         <p>Grade: {grade}</p>
// //       </div>
// //     </center>
// //   );
// // }


// //4//
// // export default function Home() {
// //   const num = -15;
// //   let result = "";

// //   if (num > 0) {
// //     result = "Positive Number";
// //   } else if (num < 0) {
// //     result = "Negative Number";
// //   } else {
// //     result = "Zero";
// //   }

// //   return (
// //     <center>
// //       <div>
// //         <h2>Positive, Negative or Zero</h2>

// //         <p>Number: {num}</p>
// //         <p>Result: {result}</p>
// //       </div>
// //     </center>
// //   );
// // }

// // //5//
// // export default function Home() {
// //   function square(num: number): number {
// //     return num * num;
// //   }

// //   const number = 8;
// //   const result = square(number);

// //   return (
// //     <center>
// //       <div>
// //         <h2>Square of a Number</h2>

// //         <p>Number: {number}</p>
// //         <p>Square: {result}</p>
// //       </div>
// //     </center>
// //   );
// // }

// //6//
// // export default function Home() {
// //   function isPrime(num: number): boolean {
// //     if (num <= 1) {
// //       return false;
// //     }

// //     for (let i = 2; i <= Math.sqrt(num); i++) {
// //       if (num % i === 0) {
// //         return false;
// //       }
// //     }

// //     return true;
// //   }

// //   const number = 17;

// //   return (
// //     <center>
// //       <div>
// //         <h2>Prime Number Checker</h2>

// //         <p>Number: {number}</p>
// //         <p>Result: {isPrime(number) ? "Prime Number" : "Not a Prime Number"}</p>
// //       </div>
// //     </center>
// //   );
// // }

// //7//
// // export default function Home() {
// //   function reverseString(str: string): string {
// //     return str.split("").reverse().join("");
// //   }

// //   const text = "JOHN ALEX";
// //   const reversed = reverseString(text);

// //   return (
// //     <center>
// //       <div>
// //         <h2>Reverse a String</h2>

// //         <p>Original String: {text}</p>
// //         <p>Reversed String: {reversed}</p>
// //       </div>
// //     </center>
// //   );
// // }

// //8//
// // export default function Home() {
// //   function findSmallest(arr: number[]): number {
// //     let smallest = arr[0];

// //     for (let i = 1; i < arr.length; i++) {
// //       if (arr[i] < smallest) {
// //         smallest = arr[i];
// //       }
// //     }

// //     return smallest;
// //   }

// //   const numbers = [12, 45, 3, 27, 8, 19];
// //   const smallest = findSmallest(numbers);

// //   return (
// //     <center>
// //       <div>
// //         <h2>Smallest Element in an Array</h2>

// //         <p>Array: {numbers.join(", ")}</p>
// //         <p>Smallest Element: {smallest}</p>
// //       </div>
// //     </center>
// //   );
// // }

// //9//
// // export default function Home() {
// //   function calculateSumAndAverage(arr: number[]) {
// //     let sum = 0;

// //     for (let i = 0; i < arr.length; i++) {
// //       sum += arr[i];
// //     }

// //     const average = sum / arr.length;

// //     return { sum, average };
// //   }

// //   const numbers = [10, 20, 30, 40, 50];
// //   const result = calculateSumAndAverage(numbers);

// //   return (
// //     <center>
// //       <div>
// //         <h2>Sum and Average of Array Elements</h2>

// //         <p>Array: {numbers.join(", ")}</p>
// //         <p>Sum: {result.sum}</p>
// //         <p>Average: {result.average}</p>
// //       </div>
// //     </center>
// //   );
// // }

// //10//
// // export default function Home() {
// //   function reverseArray(arr: number[]): number[] {
// //     let reversed: number[] = [];

// //     for (let i = arr.length - 1; i >= 0; i--) {
// //       reversed.push(arr[i]);
// //     }

// //     return reversed;
// //   }

// //   const numbers = [10, 20, 30, 40, 50];
// //   const reversedNumbers = reverseArray(numbers);

// //   return (
// //     <center>
// //       <div>
// //         <h2>Reverse an Array</h2>

// //         <p>Original Array: {numbers.join(", ")}</p>
// //         <p>Reversed Array: {reversedNumbers.join(", ")}</p>
// //       </div>
// //     </center>
// //   );
// // }








// interface Student {
//     name: string;
//     usn: string;
//     age: number;
//     course: string;
//     college: string;
// }

// const student: Student = {   //object follows the rules of the information defined in the interface Student//
//     name: "VIJAY",
//     usn: "PES123",
//     age: 22,
//     course: "MCA",
//     college: "PES University"
// };

// console.log("Student Details:");
// console.log("------------------");
// console.log(student.name);
// console.log(student.usn);
// console.log(student.age);
// console.log(student.course);
// console.log(student.college);

// export default function Home() {
//     return (
//         <div>
//             <h1>Student Details</h1>
//             <p>Name: {student.name}</p>
//             <p>USN: {student.usn}</p>
//             <p>Age: {student.age}</p>
//             <p>Course: {student.course}</p>
//             <p>College: {student.college}</p>
//         </div>
//     );
// }

import StudentPage from "./student/page";
import GlobalError from "./global-error";


export default function Home() {
  return (
    <div>
      <h1>Heloo world</h1>
      <p>Welcome to Next.js!</p>
    
      <StudentPage/>
     
    </div>
  );
}



