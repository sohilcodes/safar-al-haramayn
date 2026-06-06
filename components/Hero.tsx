export default function Hero() {
  return (
    <section
      className="h-screen flex items-center justify-center text-center px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=2070')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black/70 p-8 rounded-xl">

        <h1 className="text-5xl md:text-7xl font-bold text-yellow-500">
          SAFAR AL-HARAMAYN
        </h1>

        <p className="text-xl mt-4">
          Guide by Faith
        </p>

        <p className="mt-4 text-gray-300 max-w-xl">
          Your trusted partner for Umrah, Ziyarat,
          Visa Services and Sacred Journeys.
        </p>

        <button className="mt-8 px-8 py-4 bg-yellow-500 text-black font-bold rounded-lg">
          Explore Packages
        </button>

      </div>
    </section>
  );
}
