import { login, signup } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <section className="mx-auto max-w-sm px-4 py-24">
      <h1 className="text-3xl font-bold">Login</h1>

      <form className="mt-8 flex flex-col gap-3">
        <Input name="email" type="email" placeholder="Email" required />
        <Input name="password" type="password" placeholder="Password" required />

        <Button formAction={login}>Login</Button>
        <Button formAction={signup} variant="outline">
          Daftar
        </Button>
      </form>
    </section>
  );
}
