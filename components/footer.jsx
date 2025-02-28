import { Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-4 sm:px-6 mb-5 lg:px-8 max-w-4xl mx-auto">
      <div className="flex flex-col">
        <hr className="my-10 border-gray-800" />

        <div className="flex flex-wrap items-center gap-5 pb-4 md:justify-between justify-center flex-row-reverse">
          <p className="w-full mt-8 text-sm text-center dark:text-gray-100 md:mt-0 md:w-auto md:order-2">
            © 2025{" "}
            <Link
              target="_blank"
              href="https://x.com/iamarifurrahman"
              className="hover:underline hover:text-blue-600"
            >
              @developerarif
            </Link>
            . All rights reserved.
          </p>
          <div>
            <ul className="flex gap-4">
              <li className="hover:text-blue-600">
                <Link target="_blank" href="https://x.com/iamarifurrahman">
                  <Twitter size={20} />
                </Link>
              </li>
              <li className="hover:text-blue-600">
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/arifurrahmanrafi"
                >
                  <Linkedin size={20} />
                </Link>
              </li>
              <li className="hover:text-blue-600">
                <Link
                  target="_blank"
                  href="https://instagram.com/arifurrahman_rafi/"
                >
                  <Instagram />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
