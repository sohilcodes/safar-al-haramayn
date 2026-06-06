"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminPage() {
  const [packages, setPackages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [editingId, setEditingId] = useState<string | null>(null);

  const [title, setTitle] = useState("");
  const [type, setType] = useState("group");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");

  // FETCH
  async function fetchPackages() {
    setLoading(true);

    const { data } = await supabase
      .from("packages")
      .select("*")
      .order("created_at", { ascending: false });

    setPackages(data || []);
    setLoading(false);
  }

  useEffect(() => {
    fetchPackages();
  }, []);

  // RESET FORM
  function resetForm() {
    setTitle("");
    setType("group");
    setCity("");
    setPrice("");
    setEditingId(null);
  }

  // ADD OR UPDATE
  async function savePackage() {
    if (!title || !city || !price) {
      alert("Fill all fields");
      return;
    }

    if (editingId) {
      await supabase
        .from("packages")
        .update({
          title,
          type,
          departure_city: city,
          price: Number(price),
        })
        .eq("id", editingId);
    } else {
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
    }

    resetForm();
    fetchPackages();
  }

  // DELETE
  async function deletePackage(id: string) {
    await supabase.from("packages").delete().eq("id", id);
    fetchPackages();
  }

  // EDIT
  function editPackage(pkg: any) {
    setEditingId(pkg.id);
    setTitle(pkg.title);
    setType(pkg.type);
    setCity(pkg.departure_city);
    setPrice(pkg.price);
  }

  return (
    <main className="max-w-5xl mx-auto p-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Admin Panel
        </h1>

        <button
          onClick={() => supabase.auth.signOut()}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      {/* FORM */}
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

        <div className="flex gap-3">
          <button
            onClick={savePackage}
            className="bg-green-700 text-white px-6 py-3 w-full rounded"
          >
            {editingId ? "Update Package" : "Add Package"}
          </button>

          {editingId && (
            <button
              onClick={resetForm}
              className="bg-gray-300 px-6 py-3 w-full rounded"
            >
              Cancel
            </button>
          )}
        </div>

      </div>

      {/* LIST */}
      <div className="space-y-4">

        {loading ? (
          <p>Loading packages...</p>
        ) : packages.length === 0 ? (
          <p>No packages found 😢</p>
        ) : (
          packages.map((pkg) => (
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

              <div className="flex gap-2">

                <button
                  onClick={() => editPackage(pkg)}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() => deletePackage(pkg.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>

              </div>

            </div>
          ))
        )}

      </div>

    </main>
  );
}
