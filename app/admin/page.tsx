"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminPage() {
  const [packages, setPackages] = useState<any[]>([]);

  const [title, setTitle] = useState("");
  const [type, setType] = useState("group");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");

  async function fetchPackages() {
    const { data } = await supabase
      .from("packages")
      .select("*")
      .order("created_at", { ascending: false });

    setPackages(data || []);
  }

  useEffect(() => {
    fetchPackages();
  }, []);

  async function addPackage() {
    await supabase.from("packages").insert([
      {
        title,
        type,
        departure_city: city,
        price: Number(price),
        duration: "15D / 14N",
        is_active: true,
      },
    ]);

    setTitle("");
    setCity("");
    setPrice("");

    fetchPackages();
  }

  async function deletePackage(id: string) {
    await supabase.from("packages").delete().eq("id", id);
    fetchPackages();
  }

  return (
    <main className="max-w-5xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">
        Admin Panel
      </h1>

      {/* ADD FORM */}
      <div className="space-y-3 border p-4 rounded-xl mb-10">

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
          className="bg-green-700 text-white px-6 py-3 w-full rounded"
        >
          Add Package
        </button>

      </div>

      {/* LIST */}
      <div className="space-y-4">

        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="border p-4 rounded-xl flex justify-between items-center"
          >

            <div>
              <h2 className="font-bold">
                {pkg.title}
              </h2>

              <p className="text-sm text-gray-500">
                {pkg.departure_city} • ₹{pkg.price}
              </p>
            </div>

            <button
              onClick={() => deletePackage(pkg.id)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Delete
            </button>

          </div>
        ))}

      </div>

    </main>
  );
        }
