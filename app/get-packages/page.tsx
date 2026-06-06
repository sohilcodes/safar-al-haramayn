interface Props {
  searchParams: {
    city?: string;
    month?: string;
  };
}

export default function GetPackagesPage({
  searchParams,
}: Props) {
  return (
    <main className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-6">
        Available Packages
      </h1>

      <p>
        City: {searchParams.city || "All"}
      </p>

      <p>
        Month: {searchParams.month || "All"}
      </p>
    </main>
  );
}
