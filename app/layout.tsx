import "./globals.css";

export const metadata = {
  title: "Safar Al-Haramayn",
  description: "Guide by Faith",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
