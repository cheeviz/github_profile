"use client";

import { ToastError } from "@/lib/Toast";
import { useState } from "react";

interface SearchProps {
  onSearch: (search: string) => void;
}

export function Search({ onSearch }: SearchProps) {
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (!search.trim()) {
        return ToastError("Digite o nome do usuário");
      }
      onSearch(search);
    }
  };

  return (
    <section className="container m-auto p-auto">
      <div className="flex items-center justify-center my-5">
        <input
          className="bg-gray-100 shadow-3xl py-1 w-[350px] h-11 rounded-2xl focus:outline-none px-2 placeholder:text-gray-200 placeholder:font-bold "
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
