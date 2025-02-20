"use client";
import { useState } from "react";

export default function SearchInput({ blogs }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredArticles = blogs?.filter((blog) =>
    blog?.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // console.log(searchTerm);
  return (
    <input
      type="text"
      placeholder="Search articles"
      className="w-full p-3 border border-gray-300 rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}
