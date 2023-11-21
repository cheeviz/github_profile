"use client";

import { useState } from "react";

interface SearchProps {
  onSearch: (search: string) => void;
}

export function Search({ onSearch }: SearchProps) {
  const [search, setSearch] = useState("");

  const handleSearch = (e: any) => {
    if (e.key === "Enter") {
      onSearch(search);
    }
  };
  return (
    <section className="container m-auto p-auto">
      <div className="flex items-center justify-center my-5">
        <input
          className="bg-[#D8D8D8] shadow-3xl py-1 w-[350px] h-11 rounded-2xl focus:outline-none px-2 placeholder:text-[#4E4E4E] placeholder:font-bold"
          type="search"
          placeholder="Search"
          value={search}
          onKeyDown={handleSearch}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </section>
  );
}
