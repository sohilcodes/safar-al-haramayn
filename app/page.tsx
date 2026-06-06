import Hero from "@/components/Hero";
import SearchForm from "@/components/SearchForm";
import PackagesGrid from "@/components/PackagesGrid";

export default function HomePage() {
  return (
    <main>
      <Hero />

      <section className="-mt-10 relative z-10 max-w-6xl mx-auto px-4">
        <SearchForm />
      </section>

      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold mb-8">
          Group Umrah Packages
        </h2>

        <PackagesGrid />
      </section>

      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold mb-8">
          Premium Packages
        </h2>

        <PackagesGrid />
      </section>
    </main>
  );
}
