import PackageCard from "./PackageCard";

export default function PackagesGrid() {
  const packages = [
    {
      title: "Muharram Group Umrah",
      city: "Mumbai",
      duration: "15D / 14N",
      price: 97000,
    },
    {
      title: "Premium Muharram Umrah",
      city: "Bengaluru",
      duration: "15D / 14N",
      price: 100000,
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {packages.map((pkg) => (
        <PackageCard
          key={pkg.title}
          {...pkg}
        />
      ))}
    </div>
  );
}
