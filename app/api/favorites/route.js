import { favorites } from "@/lib/db";
import { addFavorite } from "@/lib/services/favoriteService";

export async function GET() {
  return Response.json(favorites);
}

export async function POST(request) {
  const body = await request.json();
  const result = addFavorite(body);

  if (!result.success) {
    return Response.json({ error: result.error }, { status: result.status });
  }

  return Response.json(result.data, { status: result.status });
}
