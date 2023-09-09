import Link from "next/link";
function Header() {
  return (
    <nav className="flex justify-start m-10 items-center max-w-full gap-10 text-xl ">
      <ul className="flex justify-center items-center gap-10">
        <li className=" cursor-pointer hover:font-medium">
          <Link href="/">Home</Link>
        </li>
        <li className=" cursor-pointer hover:font-medium">
          <Link href="/about">About Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
