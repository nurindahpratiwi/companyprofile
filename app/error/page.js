import Link from "next/link";

export default function ErrorPage() {
  return (
    <section className="mx-auto max-w-sm px-4 py-24 text-center">
      <h1 className="text-2xl font-bold">Terjadi kesalahan</h1>
      <p className="mt-2 text-muted-foreground">Email atau password salah.</p>
      <Link href="/login" className="mt-6 inline-block text-primary hover:underline">
        Kembali ke Login
      </Link>
    </section>
  );
}
