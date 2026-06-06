import { getPackages } from "@/lib/packages";
import PackageCard from "@/components/PackageCard";

export default async function GroupPackagesPage({
  searchParams,
}: {
  searchParams: {
    city?: string;
    type?: string;
    search?: string;
  };
}) {
  const packages = await getPackages(searchParams);

  return (
    <main className="max-w-7xl mx-auto px-4 py-20">

      <h1 className="text-4xl font-bold mb-10">
        Packages
      </h1>

      {packages.length === 0 ? (
        <p>No packages found 😢</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg: any) => (
            <PackageCard
              key={pkg.id}
              id={pkg.id}
              title={pkg.title}
              departure_city={pkg.departure_city}
              duration={pkg.duration}
              price={pkg.price}
            />
          ))}
        </div>
      )}
    </main>
  );
}
