"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

        <div>
          <h1 className="text-2xl font-bold text-yellow-500">
            Safar Al-Haramayn
          </h1>
          <p className="text-xs text-gray-400">
            Guide by Faith
          </p>
        </div>

        <div className="hidden md:flex gap-8">
          <Link href="#">Home</Link>
          <Link href="#packages">Packages</Link>
          <Link href="#about">About</Link>
          <Link href="#contact">Contact</Link>
        </div>

      </div>
    </nav>
  );
}
