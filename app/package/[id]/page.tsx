import { getPackageById } from "@/lib/packages";
import BookingForm from "@/components/BookingForm";
import { notFound } from "next/navigation";

export default async function PackageDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const pkg = await getPackageById(params.id);

  if (!pkg) return notFound();

  return (
    <main className="max-w-5xl mx-auto px-4 py-20">

      <h1 className="text-4xl font-bold">
        {pkg.title}
      </h1>

      <p className="text-gray-600 mt-2">
        {pkg.departure_city} • {pkg.duration}
      </p>

      <p className="text-3xl font-bold text-[#0B6B3A] mt-4">
        ₹{pkg.price.toLocaleString()}
      </p>

      <p className="mt-6 text-gray-700">
        {pkg.description}
      </p>

      {/* Booking Form */}
      <BookingForm packageId={pkg.id} />

    </main>
  );
}
