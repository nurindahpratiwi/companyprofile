import { favorites } from "@/lib/db";

export function addFavorite(data) {
  if (!data.id || !data.name) {
    return { success: false, status: 400, error: "id dan name wajib diisi" };
  }

  const alreadyExists = favorites.some((f) => f.id === data.id);
  if (alreadyExists) {
    return { success: false, status: 400, error: "User ini sudah difavoritkan" };
  }

  favorites.push(data);
  return { success: true, status: 201, data };
}

export function removeFavorite(id) {
  const index = favorites.findIndex((f) => String(f.id) === String(id));

  if (index === -1) {
    return { success: false, status: 404, error: "Data tidak ditemukan" };
  }

  favorites.splice(index, 1);
  return { success: true, status: 200, message: "Berhasil dihapus" };
}
