"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Group Packages", href: "/group-packages" },
    { name: "Highlights", href: "/highlight" },
    { name: "Blogs", href: "/blogs" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="h-20 flex items-center justify-between">

          <Link href="/">
            <div>
              <h1 className="font-bold text-2xl text-[#0B6B3A]">
                Safar Al-Haramayn
              </h1>

              <p className="text-xs text-gray-500">
                Book. Budget. Be Blessed.
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-medium hover:text-[#0B6B3A]"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <Link
            href="/group-packages"
            className="hidden lg:block bg-[#0B6B3A] text-white px-5 py-2 rounded-full"
          >
            View Packages
          </Link>

          <button
            className="lg:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-5 space-y-4">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
