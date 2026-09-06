import Image from "next/image";

export default function Header() {
  return (
    <header className="header">
      <Image
        src="/psu-logo.png"
        alt="PSU Logo"
        width={1000}
        height={60}
        className="psu-logo"
      />
    </header>
  );
}