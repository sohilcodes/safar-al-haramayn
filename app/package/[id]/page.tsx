interface Props {
  params: {
    id: string;
  };
}

export default function PackageDetailsPage({
  params,
}: Props) {
  return (
    <main className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-6">
        Package Details
      </h1>

      <p>Package ID: {params.id}</p>
    </main>
  );
}
