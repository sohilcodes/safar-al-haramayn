"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [pkg, setPkg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!name || !phone) {
      alert("Please fill required fields");
      return;
    }

    setLoading(true);

    const { error } = await supabase
      .from("inquiries")
      .insert([
        {
          name,
          phone,
          city,
          package: pkg,
        },
      ]);

    setLoading(false);

    if (error) {
      alert("Something went wrong");
      console.log(error);
      return;
    }

    alert("Inquiry Submitted Successfully");

    setName("");
    setPhone("");
    setCity("");
    setPkg("");
  };

  return (
    <section
      id="contact"
      className="py-24 px-6"
    >
      <div className="max-w-xl mx-auto">

        <h2 className="text-center text-4xl font-bold text-yellow-500 mb-8">
          Contact Us
        </h2>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
          className="w-full p-4 mb-4 bg-zinc-900 rounded"
        />

        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone Number"
          className="w-full p-4 mb-4 bg-zinc-900 rounded"
        />

        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="City"
          className="w-full p-4 mb-4 bg-zinc-900 rounded"
        />

        <select
          value={pkg}
          onChange={(e) => setPkg(e.target.value)}
          className="w-full p-4 mb-4 bg-zinc-900 rounded"
        >
          <option value="">Select Package</option>
          <option value="Economy Umrah">
            Economy Umrah
          </option>
          <option value="Premium Umrah">
            Premium Umrah
          </option>
          <option value="VIP Umrah">
            VIP Umrah
          </option>
        </select>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full py-4 bg-yellow-500 text-black font-bold rounded"
        >
          {loading ? "Submitting..." : "Send Inquiry"}
        </button>

      </div>
    </section>
  );
}
