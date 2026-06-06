import Link from "next/link";

export default function PackageCard(pkg: any) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border shadow hover:shadow-lg transition">

      <div className="h-52 bg-gray-100" />

      <div className="p-5">

        <h3 className="text-xl font-bold">
          {pkg.title}
        </h3>

        <p className="text-gray-600">
          {pkg.departure_city}
        </p>

        <p className="text-gray-600">
          {pkg.duration}
        </p>

        <div className="flex justify-between items-center mt-4">

          <span className="text-[#0B6B3A] font-bold text-xl">
            ₹{pkg.price}
          </span>

          <Link
            href={`/package/${pkg.id}`}
            className="bg-[#0B6B3A] text-white px-4 py-2 rounded-lg"
          >
            View
          </Link>

        </div>

      </div>

    </div>
  );
}
