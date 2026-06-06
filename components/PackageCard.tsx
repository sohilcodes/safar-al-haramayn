interface PackageCardProps {
  title: string;
  city: string;
  duration: string;
  price: number;
}

export default function PackageCard({
  title,
  city,
  duration,
  price,
}: PackageCardProps) {
  return (
    <div className="rounded-2xl border p-5 shadow-sm hover:shadow-lg transition">
      <div className="h-48 bg-gray-100 rounded-xl mb-4" />

      <h3 className="font-bold text-xl">
        {title}
      </h3>

      <p className="text-gray-600">
        {city}
      </p>

      <p className="text-gray-600">
        {duration}
      </p>

      <div className="mt-4">
        <span className="text-2xl font-bold text-[#0B6B3A]">
          ₹{price.toLocaleString()}
        </span>
      </div>
    </div>
  );
}
