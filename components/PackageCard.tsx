import Link from "next/link";

interface PackageCardProps {
  id: string;
  title: string;
  departure_city: string;
  duration: string;
  price: number;
}

export default function PackageCard({
  id,
  title,
  departure_city,
  duration,
  price,
}: PackageCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border shadow-sm hover:shadow-lg transition">

      <div className="h-56 bg-gray-100" />

      <div className="p-5">
        <h3 className="text-xl font-bold">
          {title}
        </h3>

        <p className="mt-2 text-gray-600">
          {departure_city}
        </p>

        <p className="text-gray-600">
          {duration}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-2xl font-bold text-[#0B6B3A]">
            ₹{price.toLocaleString()}
          </span>

          <Link
            href={`/package/${id}`}
            className="bg-[#0B6B3A] text-white px-4 py-2 rounded-lg"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
