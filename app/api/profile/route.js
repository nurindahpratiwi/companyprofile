const profile = {
  name: "Nur Indah Pratiwi",
  role: "peserta bootcamp",
  favoriteTech: ["Next.js", "React", "Tailwind CSS"],
};

export async function GET() {
  return Response.json(profile);
}
