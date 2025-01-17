import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Button from "../my-button";
import NavButton from "./navbar-btn";
export default function Header() {
  return (
    <header className="lg:py-10 text-sm sm:py-5">
      <div className="flex justify-between">
        <div className="rounded-full px-2 py-1 border border-gray-700">
          <nav className="flex items-center gap-4">
            {/* <div className="flex items-center gap-2 rounded-full px-4 py-2">
              <Image
                width={100}
                height={80}
                src="https://tools-api.webcrumbs.org/image-placeholder/40/40/avatars/1"
                alt="avatar"
                className="w-[40px] h-[40px] rounded-full object-cover"
              />
              <span className="font-medium">Dev Arifur</span>
            </div> */}
            <ul className="flex items-center gap-2.5">
              <li>
                <Link href="/about" className="hover:underline">
                  <NavButton>About</NavButton>
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:underline">
                  <NavButton>Projects</NavButton>
                </Link>
              </li>
              <li>
                <Link href="/contributions" className="hover:underline">
                  <NavButton>Contributions</NavButton>
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:underline">
                  <NavButton>Blogs</NavButton>
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:underline">
                  <NavButton>Events</NavButton>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="lg:flex gap-2 justify-center items-center sm:hidden">
          <Link
            href="https://github.com/developerarif10/"
            target="_blank"
            className="underline cursor-pointer"
          >
            <span className="flex justify-center items-center gap-1">
              Github <ExternalLink size={16} />
            </span>
          </Link>
          <Button className="bg-neutral-700 hover:bg-neutral-600 text-neutral-50 rounded-md px-5 py-2">
            Download CV
          </Button>
        </div>
      </div>
    </header>
  );
}
