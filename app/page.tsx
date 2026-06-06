import Link from "next/link";

export default function HomePage() {
  return (
    <main>

      <section className="bg-gradient-to-r from-[#081C15] via-[#0B6B3A] to-[#081C15] text-white">

        <div className="container mx-auto px-4 py-28">

          <div className="max-w-3xl">

            <span className="bg-[#C9A227] text-black px-4 py-2 rounded-full text-sm font-semibold">
              Trusted Umrah Travel Partner
            </span>

            <h1 className="text-5xl md:text-7xl font-bold mt-6 leading-tight">
              Safar Al-Haramayn
            </h1>

            <p className="text-xl mt-5 text-white/90">
              Book. Budget. Be Blessed.
            </p>

            <p className="mt-6 text-lg text-white/80">
              Premium and Group Umrah Packages
              designed for comfort, convenience
              and spiritual peace.
            </p>

            <div className="flex gap-4 mt-8">
              <Link
                href="/group-packages"
                className="bg-[#C9A227] text-black px-7 py-4 rounded-xl font-semibold"
              >
                Explore Packages
              </Link>

              <Link
                href="/contact"
                className="border border-white px-7 py-4 rounded-xl"
              >
                Contact Us
              </Link>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
