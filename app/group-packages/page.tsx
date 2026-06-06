import PackageCard from "@/components/PackageCard";
import { getPackages } from "@/lib/packages";

export default async function GroupPackagesPage() {
  const packages = await getPackages();

  return (
    <main className="max-w-7xl mx-auto px-4 py-20">

      <h1 className="text-4xl font-bold mb-10">
        Group Umrah Packages
      </h1>

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

    </main>
  );
}
