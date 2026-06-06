"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchForm() {
  const router = useRouter();

  const [city, setCity] = useState("");
  const [type, setType] = useState("");
  const [search, setSearch] = useState("");

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();

    const params = new URLSearchParams();

    if (city) params.set("city", city);
    if (type) params.set("type", type);
    if (search) params.set("search", search);

    router.push(`/group-packages?${params.toString()}`);
  }

  return (
    <form
      onSubmit={handleSearch}
      className="bg-white p-6 rounded-2xl shadow-xl grid md:grid-cols-4 gap-4"
    >
      <input
        placeholder="Search package"
        className="border p-3 rounded"
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        className="border p-3 rounded"
        onChange={(e) => setCity(e.target.value)}
      >
        <option value="">All Cities</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Bengaluru">Bengaluru</option>
      </select>

      <select
        className="border p-3 rounded"
        onChange={(e) => setType(e.target.value)}
      >
        <option value="">All Types</option>
        <option value="group">Group</option>
        <option value="premium">Premium</option>
      </select>

      <button className="bg-[#0B6B3A] text-white rounded">
        Search
      </button>
    </form>
  );
}
