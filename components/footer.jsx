import { Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="py-10">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <hr className="mt-16 mb-10 border-gray-800" />

        <div className="flex flex-wrap items-center gap-1 md:justify-between justify-center flex-row-reverse">
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
    </section>
  );
}
