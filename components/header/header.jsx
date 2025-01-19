import Navbar from "./navbar";

export default function Header() {
  return (
    <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
      <Navbar />
    </header>
  );
}
