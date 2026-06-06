interface Props {
  searchParams: Promise<{
    city?: string;
    month?: string;
  }>;
}

export default async function GetPackagesPage({
  searchParams,
}: Props) {
  const params = await searchParams;

  return (
    <main className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-6">
        Available Packages
      </h1>

      <p>
        City: {params.city || "All"}
      </p>

      <p>
        Month: {params.month || "All"}
      </p>
    </main>
  );
}
