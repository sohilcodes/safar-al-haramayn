import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#081C15] text-white mt-20">
      <div className="container mx-auto px-4 py-14">

        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h3 className="font-bold text-2xl">
              Safar Al-Haramayn
            </h3>

            <p className="mt-3 text-gray-300">
              Book. Budget. Be Blessed.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Quick Links
            </h4>

            <div className="space-y-2">
              <Link href="/">Home</Link>
              <br />
              <Link href="/about">About</Link>
              <br />
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Contact
            </h4>

            <p>Email: info@safaralharamayn.com</p>
            <p>Phone: +91 9987672403</p>
          </div>

        </div>

        <div className="border-t border-white/20 mt-10 pt-5 text-center text-sm">
          © 2026 Safar Al-Haramayn
        </div>

      </div>
    </footer>
  );
}
