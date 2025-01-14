import Image from "next/image";
import Link from "next/link";
import Button from "../my-button";

export default function Header() {
  return (
    <header className="flex items-center bg-[rgba(0,0,0,.3)] drop-shadow-xl backdrop-blur-[5px] justify-between mb-10">
      <nav className="flex items-center gap-4">
        <div className="flex items-center gap-2  rounded-full px-4 py-2">
          <Image
            width={100}
            height={80}
            src="https://tools-api.webcrumbs.org/image-placeholder/40/40/avatars/1"
            alt="avatar"
            className="w-[40px] h-[40px] rounded-full object-cover"
          />
          <span className="font-medium">Dev Arifur</span>
        </div>
        <ul className="flex items-center gap-6">
          <li>
            <Link href="#" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline">
              Contributions
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline">
              Blogs
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline">
              Events
            </Link>
          </li>
        </ul>
      </nav>
      <Button className="bg-neutral-700 hover:bg-neutral-600 text-neutral-50 rounded-md px-5 py-2">
        Download CV
      </Button>
    </header>
  );
}
