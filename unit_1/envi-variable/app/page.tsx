// export default function Home() {
//   const appName = process.env.APP_NAME;
//   const apiurl = process.env.API_URL;
  
//   return (
//     <div>
//       <h1>Welcome to {appName}</h1>
//       <p>API URL: {apiurl}</p>
//       <h1>{process.env.NEXT_PUBLIC_API_TITLE}</h1>
//       <p>College Name: {process.env.COLLEGE_NAME}</p>
//     </div>
//   );
// }



//1//
// export default function Assignment1() {
//   const students = [
//     { id: 101, name: "Ravi", marks: 85 },
//     { id: 102, name: "Priya", marks: 92 },
//     { id: 103, name: "Kumar", marks: 76 },
//     { id: 104, name: "Anitha", marks: 68 },
//     { id: 105, name: "Arun", marks: 55 }
//   ];

//   return (
//     <div>
//       <h1>Student Details</h1>

//       {students.map((student) => (
//         <div key={student.id}>
//           <p>Student ID: {student.id}</p>
//           <p>Student Name: {student.name}</p>
//           <p>Marks: {student.marks}</p>
//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// }




//2//
// import StudentList from "../components/StudentList";

// export default function Assignment2() {
//   const students = [
//     { id: 101, name: "Ravi", marks: 85 },
//     { id: 102, name: "Priya", marks: 92 },
//     { id: 103, name: "Kumar", marks: 76 }
//   ];

//   return (
//     <div>
//       <h1>Student List Using Props</h1>

//       <StudentList students={students} />
//     </div>
//   );
// }

//3//
// interface Student {
//   id: number;
//   name: string;
//   marks: number;
// }

// export default function Assignment3() {
//   const student: Student = {
//     id: 101,
//     name: "Ravi",
//     marks: 85
//   };

//   const result = student.marks >= 35 ? "Pass" : "Fail";

//   return (
//     <div>
//       <h1>Student Result</h1>

//       <p>Name: {student.name}</p>
//       <p>ID: {student.id}</p>
//       <p>Marks: {student.marks}</p>
//       <p>Result: {result}</p>
//     </div>
//   );
// }



//4//
// interface Student {
//   id: number;
//   name: string;
//   marks: number;
// }

// export default function Assignment4() {
//   const student: Student = {
//     id: 101,
//     name: "Ravi",
//     marks: 85
//   };

//   return (
//     <div>
//       <h1>Student Details</h1>

//       <p>Student ID: {student.id}</p>
//       <p>Student Name: {student.name}</p>
//       <p>Marks: {student.marks}</p>
//     </div>
//   );
// }

// //5//
// import StudentTable from "../components/StudentTable";

// export default function Assignment5() {
//   const students = [
//     { id: 101, name: "Ravi", marks: 85 },
//     { id: 102, name: "Priya", marks: 92 },
//     { id: 103, name: "Kumar", marks: 35 },
//     { id: 104, name: "Anitha", marks: 28 }
//   ];

//   return (
//     <div>
//       <StudentTable students={students} />
//     </div>
//   );
// }