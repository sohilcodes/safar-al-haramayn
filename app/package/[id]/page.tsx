import { getPackageById } from "@/lib/packages";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

export default async function PackageDetailsPage({
  params,
}: Props) {
  const pkg = await getPackageById(params.id);

  if (!pkg) {
    notFound();
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-20">

      <h1 className="text-5xl font-bold">
        {pkg.title}
      </h1>

      <p className="mt-4 text-xl">
        {pkg.departure_city}
      </p>

      <p className="mt-2">
        {pkg.duration}
      </p>

      <div className="mt-8 text-4xl font-bold text-[#0B6B3A]">
        ₹{pkg.price.toLocaleString()}
      </div>

      <p className="mt-8 text-gray-700">
        {pkg.description}
      </p>

    </main>
  );
}
