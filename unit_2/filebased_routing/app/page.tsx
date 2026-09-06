import Image from "next/image";
import About from "./about/about";
import Contact from "./contact/contact";
import "./globals.css";
import Loading from "./about/loading";

export default function Home() {
  return (
    <div>
      <h1>Hello Everyone</h1>
      <p>This is home page of file based routing app.</p>
      <About />
      <Contact />
      <Loading />
    </div>
  );
}