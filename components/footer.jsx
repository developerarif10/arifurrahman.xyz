import { Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="py-10 sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <hr className="mb-10 border-gray-800" />
        <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-12">
          <div>
            <p className="text-base text-gray-500">Company</p>

            <ul className="mt-8 space-y-4">
              <li>
                <a
                  href="#"
                  title=""
                  className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  {" "}
                  About{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  {" "}
                  Features{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  {" "}
                  Works{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  {" "}
                  Career{" "}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-base text-gray-500">Help</p>

            <ul className="mt-8 space-y-4">
              <li>
                <a
                  href="#"
                  title=""
                  className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  {" "}
                  Customer Support{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  {" "}
                  Delivery Details{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  {" "}
                  Terms & Conditions{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  {" "}
                  Privacy Policy{" "}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-base text-gray-500">Resources</p>

            <ul className="mt-8 space-y-4">
              <li>
                <a
                  href="#"
                  title=""
                  className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  {" "}
                  Free eBooks{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  {" "}
                  Development Tutorial{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  {" "}
                  How to - Blog{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  {" "}
                  YouTube Playlist{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-800" />

        <div className="flex flex-wrap items-center justify-between flex-row-reverse">
          <p className="w-full mt-8 text-sm text-center text-gray-100 md:mt-0 md:w-auto md:order-2">
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
