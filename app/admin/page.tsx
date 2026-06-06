"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminPage() {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("group");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");

  async function addPackage() {
    const { error } = await supabase.from("packages").insert([
      {
        title,
        type,
        departure_city: city,
        price: Number(price),
        duration: "15D / 14N",
        is_active: true,
      },
    ]);

    if (error) {
      alert(error.message);
    } else {
      alert("Package Added ✅");
      setTitle("");
      setCity("");
      setPrice("");
    }
  }

  return (
    <main className="max-w-xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">
        Admin Panel
      </h1>

      <div className="space-y-4">

        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-3 w-full"
        />

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border p-3 w-full"
        >
          <option value="group">Group</option>
          <option value="premium">Premium</option>
        </select>

        <input
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border p-3 w-full"
        />

        <input
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border p-3 w-full"
        />

        <button
          onClick={addPackage}
          className="bg-[#0B6B3A] text-white px-6 py-3 w-full"
        >
          Add Package
        </button>

      </div>

    </main>
  );
}
