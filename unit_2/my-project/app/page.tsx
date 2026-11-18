// // import Header from "./components/Header";
// // import Navbar from "./components/Navbar";
// // import Footer from "./components/Footer";

// // export default function Home() {
// //   return (
// //     <div className="page">

// //       <Header />

// //       <Navbar />

// //       <main className="main-content">
// //         <section className="hero">
// //           <h1>Welcome to PSU</h1>

// //           <p>
// //             Explore career opportunities, resources and
// //             useful information through our platform.
// //           </p>

// //           <button>
// //             Explore Now
// //           </button>
// //         </section>
// //       </main>

// //       <Footer />

// //     </div>
// //   );
// // }





// // import Counter from "./client-comp/page";
// // import UsersPage from "./server-comp/page";
// // export default function Home() {
// //   return (
// //     <div>
// //       <h1>Welcome to PSU</h1>
// //       <p>Explore career opportunities, resources and useful information through our platform.</p>
// //       <UsersPage />
// //       <button>Explore Now</button>
// //       <Counter/>
// //     </div>
// //   );
// // }



// interface Product {
//   id: number;
//   name: string;
//   price: number;
// }

// function ProductCard({ product }: { product: Product }) {
//   return (
//     <div
//       style={{
//         border: "1px solid black",
//         padding: "10px",
//         margin: "10px",
//         width: "200px",
//       }}
//     >
//       <h2>{product.name}</h2>
//       <p>ID: {product.id}</p>
//       <p>Price: ₹{product.price}</p>
//     </div>
//   );
// }

// export default function Home() {
//   const products: Product[] = [
//     { id: 1, name: "Laptop", price: 50000 },
//     { id: 2, name: "Mobile", price: 20000 },
//     { id: 3, name: "Headphones", price: 2000 },
//   ];

//   return (
//     <main>
//       <h1>Product List</h1>

//       {products.map((product) => (
//         <ProductCard
//           key={product.id}
//           product={product}
//         />
//       ))}
//     </main>
//   );
// }


interface Student {
  id: number;
  name: string;
  marks: number;
  result: string;
}

export default function Home() {
  const students: Student[] = [
    {
      id: 101,
      name: "Rahul",
      marks: 85,
      result: "Pass",
    },
    {
      id: 102,
      name: "Arun",
      marks: 67,
      result: "Pass",
    },
    {
      id: 103,
      name: "Kiran",
      marks: 30,
      result: "Fail",
    },
  ];

  return (
    <main>
      <h1>Student Management</h1>

      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Marks</th>
            <th>Result</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.marks}</td>
              <td>{student.result}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}