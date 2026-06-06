const packages = [
  {
    title: "Economy Umrah",
    price: "₹79,999",
  },
  {
    title: "Premium Umrah",
    price: "₹1,29,999",
  },
  {
    title: "VIP Umrah",
    price: "₹1,99,999",
  },
];

export default function Packages() {
  return (
    <section
      id="packages"
      className="py-24 px-6 bg-zinc-950"
    >
      <h2 className="text-center text-4xl font-bold text-yellow-500 mb-12">
        Our Packages
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {packages.map((pkg) => (
          <div
            key={pkg.title}
            className="border border-yellow-500 rounded-xl p-8 hover:scale-105 transition"
          >
            <h3 className="text-2xl font-bold">
              {pkg.title}
            </h3>

            <p className="text-4xl text-yellow-500 mt-4">
              {pkg.price}
            </p>

            <button className="w-full mt-6 py-3 bg-yellow-500 text-black rounded-lg font-bold">
              Book Now
            </button>
          </div>
        ))}

      </div>
    </section>
  );
}
