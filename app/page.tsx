import Hero from "@/components/Hero";
import SearchForm from "@/components/SearchForm";
import PackageCard from "@/components/PackageCard";
import { getLatestPackages, getPackagesByType } from "@/lib/packages";

export default async function HomePage() {
  const latest = await getLatestPackages(3);
  const group = await getPackagesByType("group", 3);
  const premium = await getPackagesByType("premium", 3);

  return (
    <main>

      {/* HERO */}
      <Hero />

      {/* SEARCH */}
      <section className="-mt-10 relative z-10 max-w-6xl mx-auto px-4">
        <SearchForm />
      </section>

      {/* LATEST */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold mb-8">
          Latest Packages
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {latest.map((pkg: any) => (
            <PackageCard key={pkg.id} {...pkg} />
          ))}
        </div>
      </section>

      {/* GROUP */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold mb-8">
          Group Packages
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {group.map((pkg: any) => (
            <PackageCard key={pkg.id} {...pkg} />
          ))}
        </div>
      </section>

      {/* PREMIUM */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold mb-8">
          Premium Packages
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {premium.map((pkg: any) => (
            <PackageCard key={pkg.id} {...pkg} />
          ))}
        </div>
      </section>

    </main>
  );
}
