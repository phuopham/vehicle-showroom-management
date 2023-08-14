import { Navbar } from "@/components/layout/navbar";

export default function MainLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="mt-14">
      <Navbar />
      {children}
    </section>
  );
}
