import { getPackageById } from "@/lib/packages";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function PackageDetailPage({
  params,
}: Props) {
  const { id } = await params;

  const pkg = await getPackageById(id);

  if (!pkg) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold">
          Package Not Found
        </h1>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-4">
        {pkg.title}
      </h1>

      <p className="text-lg text-gray-600 mb-4">
        {pkg.departure_city}
      </p>

      <p className="text-2xl font-bold text-green-700">
        ₹{pkg.price}
      </p>
    </main>
  );
}
